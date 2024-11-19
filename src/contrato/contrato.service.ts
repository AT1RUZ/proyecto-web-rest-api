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
    contrato.Código_Contrato = createContratoDto.Código_Contrato; 
    contrato.Tipo_Servicio = createContratoDto.Tipo_Servicio;
    contrato.Direccion = createContratoDto.Direccion;
    contrato.Telefono = createContratoDto.Telefono;
    contrato.Email = createContratoDto.Email;
    contrato.Nombre_Responsable = createContratoDto.Nombre_Responsable;
    contrato.Fecha_Inicio = createContratoDto.Fecha_Inicio;
    contrato.Fecha_Terminacion = createContratoDto.Fecha_Terminacion;
    contrato.Fecha_Conciliacion = createContratoDto.Fecha_Conciliacion;
    contrato.Descripción = createContratoDto.Descripción;

    return this.contratoRepository.save(contrato);
  }

  findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find();
  }

  findOne(Código_Contrato: string): Promise<Contrato> {
    return this.contratoRepository.findOneBy({ Código_Contrato });
  }

  update(Código_Contrato: string, updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    const contrato: Contrato = new Contrato();
    contrato.Código_Contrato = Código_Contrato;
    contrato.Tipo_Servicio = updateContratoDto.Tipo_Servicio;
    contrato.Direccion = updateContratoDto.Direccion;
    contrato.Telefono = updateContratoDto.Telefono;
    contrato.Email = updateContratoDto.Email;
    contrato.Nombre_Responsable = updateContratoDto.Nombre_Responsable;
    contrato.Fecha_Inicio = updateContratoDto.Fecha_Inicio;
    contrato.Fecha_Terminacion = updateContratoDto.Fecha_Terminacion;
    contrato.Fecha_Conciliacion = updateContratoDto.Fecha_Conciliacion;
    contrato.Descripción = updateContratoDto.Descripción;

    return this.contratoRepository.save(contrato);
  }

  remove(Código_Contrato: string) {
    return this.contratoRepository.delete(Código_Contrato);
  }
}


