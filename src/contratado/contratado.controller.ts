import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContratadosService } from './contratado.service';
import { CreateContratadoDto } from './dto/create-contratado.dto';
import { UpdateContratadoDto } from './dto/update-contratado.dto';

@Controller('contratado')
export class ContratadoController {
  constructor(private readonly contratadoService: ContratadosService) {}

  @Post()
  create(@Body() createContratadoDto: CreateContratadoDto) {
    return this.contratadoService.create(createContratadoDto);
  }

  @Get()
  findAll() {
    return this.contratadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratadoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContratadoDto: UpdateContratadoDto) {
    return this.contratadoService.update(id, updateContratadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratadoService.remove(id);
  }
}
