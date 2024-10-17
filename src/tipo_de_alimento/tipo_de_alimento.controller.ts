import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';
import { CreateTipoDeAlimentoDto } from './dto/create-tipo_de_alimento.dto';
import { UpdateTipoDeAlimentoDto } from './dto/update-tipo_de_alimento.dto';

@Controller('tipo-de-alimento')
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
    return this.tipoDeAlimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDeAlimentoDto: UpdateTipoDeAlimentoDto) {
    return this.tipoDeAlimentoService.update(+id, updateTipoDeAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDeAlimentoService.remove(+id);
  }
}
