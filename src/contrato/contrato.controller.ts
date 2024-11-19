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

  @Get(':Código_Contrato')
  findOne(@Param('Código_Contrato') Código_Contrato: string) {
    return this.contratosService.findOne(Código_Contrato);
  }

  @Put(':Código_Contrato')
  update(@Param('Código_Contrato') Código_Contrato: string, @Body() updateContratoDto: UpdateContratoDto) {
    return this.contratosService.update(Código_Contrato, updateContratoDto);
  }

  @Delete(':Código_Contrato')
  remove(@Param('Código_Contrato') Código_Contrato: string) {
    return this.contratosService.remove(Código_Contrato);
  }
}


