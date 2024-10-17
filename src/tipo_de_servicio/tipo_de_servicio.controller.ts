import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TipoDeServicioService } from './tipo_de_servicio.service';
import { CreateTipoDeServicioDto } from './dto/create-tipo_de_servicio.dto';
import { UpdateTipoDeServicioDto } from './dto/update-tipo_de_servicio.dto';

@Controller('tipo-de-servicio')
export class TipoDeServicioController {
  constructor(private readonly tipoDeServicioService: TipoDeServicioService) {}

  @Post()
  create(@Body() createTipoDeServicioDto: CreateTipoDeServicioDto) {
    return this.tipoDeServicioService.create(createTipoDeServicioDto);
  }

  @Get()
  findAll() {
    return this.tipoDeServicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDeServicioService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoDeServicioDto: UpdateTipoDeServicioDto,
  ) {
    return this.tipoDeServicioService.update(id, updateTipoDeServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDeServicioService.remove(id);
  }
}
