import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ContratosService } from './contrato.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

@Controller('contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Post()
  create(@Body() createContratoDto: CreateContratoDto) {
    return this.contratosService.create(createContratoDto);
  }

  @Get()
  findAll() {
    return this.contratosService.findAll();
  }

  @Get(':Codigo_Contrato')
  findOne(@Param('Codigo_Contrato') Codigo_Contrato: string) {
    return this.contratosService.findOne(Codigo_Contrato);
  }

  @Put(':Codigo_Contrato')
  update(@Param('Codigo_Contrato') Codigo_Contrato: string, @Body() updateContratoDto: UpdateContratoDto) {
    return this.contratosService.update(Codigo_Contrato, updateContratoDto);
  }

  @Delete(':Codigo_Contrato')
  remove(@Param('Codigo_Contrato') Codigo_Contrato: string) {
    return this.contratosService.remove(Codigo_Contrato);
  }
}


