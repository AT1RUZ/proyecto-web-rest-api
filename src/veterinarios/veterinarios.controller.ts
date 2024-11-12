import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VeterinariosService } from './veterinarios.service';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';

@Controller('Veterinarios')
export class VeterinariosController {
  constructor(private readonly veterinariosService: VeterinariosService) {}

  @Post()
  @Auth(Role.ADMIN)
  
  create(@Body() createVeterinarioDto: CreateVeterinarioDto) {
    return this.veterinariosService.create(createVeterinarioDto);
  }

  @Get()
  @Auth(Role.ADMIN)

  findAll() {
    return this.veterinariosService.findAll();
  }

  @Get(':id')
  @Auth(Role.ADMIN)

  findOne(@Param('id') id: string) {
    return this.veterinariosService.findOne(id);
  }

  @Patch(':id')
  @Auth(Role.ADMIN)
 
  update(@Param('id') id: string, @Body() updateVeterinarioDto: UpdateVeterinarioDto) {
    return this.veterinariosService.update(+id, updateVeterinarioDto);
  }

  @Delete(':id')
  @Auth(Role.ADMIN)
 
  remove(@Param('id') id: string) {
    return this.veterinariosService.remove(id);
  }
}
