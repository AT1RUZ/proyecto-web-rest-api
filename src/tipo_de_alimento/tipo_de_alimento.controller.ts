import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';
import { CreateTipoDeAlimentoDto } from './dto/create-tipo_de_alimento.dto';
import { UpdateTipoDeAlimentoDto } from './dto/update-tipo_de_alimento.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';

@Controller('tipo-de-alimento')
@Auth(Role.ADMIN)
export class TipoDeAlimentoController {
  constructor(private readonly tipoDeAlimentoService: TipoDeAlimentoService) {}

  @Post()
  create(@Body() createTipoDeAlimentoDto: CreateTipoDeAlimentoDto) {
    return this.tipoDeAlimentoService.create(createTipoDeAlimentoDto);
  }

  @Get()
  findAll() {
    return this.tipoDeAlimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDeAlimentoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTipoDeAlimentoDto: UpdateTipoDeAlimentoDto) {
    return this.tipoDeAlimentoService.update(id, updateTipoDeAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDeAlimentoService.remove(id);
  }
}
