import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContratadoDto } from './dto/create-contratado.dto';
import { UpdateContratadoDto } from './dto/update-contratado.dto';
import { Contratado } from './entities/contratado.entity';

@Injectable()
export class ContratadosService {
  constructor(
    @InjectRepository(Contratado)
    private readonly contratadoRepository: Repository<Contratado>,
  ) {}

  create(createContratadoDto: CreateContratadoDto): Promise<Contratado> {
    const contratado: Contratado = new Contratado();
    contratado.Código_Contrato = createContratadoDto.Código_Contrato;
    contratado.ID_Provincia = createContratadoDto.ID_Provincia;
    contratado.ID_Contratado = createContratadoDto.ID_Contratado;

    return this.contratadoRepository.save(contratado);
  }

  findAll(): Promise<Contratado[]> {
    return this.contratadoRepository.find();
  }

  findOne(ID_Contratado: string): Promise<Contratado> {
    return this.contratadoRepository.findOneBy({ ID_Contratado });
  }

  update(ID_Contratado: string, updateContratadoDto: UpdateContratadoDto): Promise<Contratado> {
    const contratado: Contratado = new Contratado();
    contratado.ID_Contratado = ID_Contratado;
    contratado.Código_Contrato = updateContratadoDto.Código_Contrato;
    contratado.ID_Provincia = updateContratadoDto.ID_Provincia;
    

    return this.contratadoRepository.save(contratado);
  }

  remove(ID_Contratado: string){
    return this.contratadoRepository.delete(ID_Contratado);
  }
}

