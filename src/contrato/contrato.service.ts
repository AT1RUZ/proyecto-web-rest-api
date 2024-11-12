import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { Contrato } from './entities/contrato.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  create(createContratoDto: CreateContratoDto): Promise<Contrato> {
    const contrato: Contrato = new Contrato();
    contrato.Codigo_Contrato = createContratoDto.Codigo_Contrato; 
    contrato.Tipo_Contrato = createContratoDto.Tipo_Contrato;
    contrato.Tipo_Servicio = createContratoDto.Tipo_Servicio;
    contrato.Dirección = createContratoDto.Dirección;
    contrato.Teléfono = createContratoDto.Teléfono;
    contrato.Email = createContratoDto.Email;
    contrato.Nombre_Responsable = createContratoDto.Nombre_Responsable;
    contrato.Fecha_Inicio = createContratoDto.Fecha_Inicio;
    contrato.Fecha_Terminacion = createContratoDto.Fecha_Terminacion;
    contrato.Fecha_Consiliacion = createContratoDto.Fecha_Consiliacion;
    contrato.Descripcion = createContratoDto.Descripcion;

    return this.contratoRepository.save(contrato);
  }

  findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find();
  }

  findOne(Codigo_Contrato: string): Promise<Contrato> {
    return this.contratoRepository.findOneBy({ Codigo_Contrato });
  }

  update(Codigo_Contrato: string, updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    const contrato: Contrato = new Contrato();
    contrato.Codigo_Contrato = Codigo_Contrato;
    contrato.Tipo_Contrato = updateContratoDto.Tipo_Contrato;
    contrato.Tipo_Servicio = updateContratoDto.Tipo_Servicio;
    contrato.Dirección = updateContratoDto.Dirección;
    contrato.Teléfono = updateContratoDto.Teléfono;
    contrato.Email = updateContratoDto.Email;
    contrato.Nombre_Responsable = updateContratoDto.Nombre_Responsable;
    contrato.Fecha_Inicio = updateContratoDto.Fecha_Inicio;
    contrato.Fecha_Terminacion = updateContratoDto.Fecha_Terminacion;
    contrato.Fecha_Consiliacion = updateContratoDto.Fecha_Consiliacion;
    contrato.Descripcion = updateContratoDto.Descripcion;

    return this.contratoRepository.save(contrato);
  }

  remove(Codigo_Contrato: string) {
    return this.contratoRepository.delete(Codigo_Contrato);
  }
}


