import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTransporteDto } from './dto/update-transporte.dto';
import { Transporte } from './entities/transporte.entity';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(Transporte)
    private readonly transporteRepository: Repository<Transporte>,
  ) {}

  create(createTransporteDto: CreateTransporteDto): Promise<Transporte> {
    const transporte: Transporte = new Transporte();
    transporte.ID_Transporte = createTransporteDto.ID_Transporte;
    transporte.Modalidad = createTransporteDto.Modalidad;
    transporte.Precio = Number(createTransporteDto.Precio);
    transporte.Vehículo = createTransporteDto.Vehículo;

    console.log(createTransporteDto)
    console.log(transporte)

    return this.transporteRepository.save(transporte);
  }

  findAll(): Promise<Transporte[]> {
    return this.transporteRepository.find();
  }

  findOne(ID_Transporte: string): Promise<Transporte> {
    return this.transporteRepository.findOneBy({ ID_Transporte });
  }

  update(id: string, updateTransporteDto: UpdateTransporteDto) {
    const transporte: Transporte = new Transporte();
    transporte.ID_Transporte = id;
    transporte.Modalidad = updateTransporteDto.Modalidad;
    transporte.Precio = Number(updateTransporteDto.Precio);
    transporte.Vehículo = updateTransporteDto.Vehículo;
    return this.transporteRepository.save(transporte);
  }

  remove(id: string) {
    return this.transporteRepository.delete(id)
  }
}
