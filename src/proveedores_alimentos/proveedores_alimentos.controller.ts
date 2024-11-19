import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { ProveedoresAlimentoService } from './proveedores_alimentos.service';
import { CreateProveedoresAlimentoDto } from './dto/create-proveedores_alimento.dto';
import { UpdateProveedoresAlimentoDto } from './dto/update-proveedores_alimento.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';

@Controller('proveedores-alimentos')
export class ProveedoresAlimentosController {
  constructor(private readonly proveedoresAlimentosService: ProveedoresAlimentoService) {}

  //@Auth(Role.ADMIN)
  @Post()
  create(@Body() createProveedoresAlimentoDto: CreateProveedoresAlimentoDto) {
    return this.proveedoresAlimentosService.create(createProveedoresAlimentoDto);
  }

  //@Auth(Role.ADMIN)
  @Get()
  findAll() {
    return this.proveedoresAlimentosService.findAll();
  }

  //@Auth(Role.ADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedoresAlimentosService.findOne(id);
  }

  //@Auth(Role.ADMIN)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProveedoresAlimentoDto: UpdateProveedoresAlimentoDto) {
    return this.proveedoresAlimentosService.update(id, updateProveedoresAlimentoDto);
  }

  //@Auth(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedoresAlimentosService.remove(id);
  }
}
