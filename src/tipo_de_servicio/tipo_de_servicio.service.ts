import { Injectable } from '@nestjs/common';
import { CreateTipoDeServicioDto } from './dto/create-tipo_de_servicio.dto';
import { UpdateTipoDeServicioDto } from './dto/update-tipo_de_servicio.dto';
import { TipoDeServicio } from './entities/tipo_de_servicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDeServicioService {
  constructor(
    @InjectRepository(TipoDeServicio)
    private readonly tipoDeServicioRepository: Repository<TipoDeServicio>,
  ) {}

  create(
    createTipoDeServicioDto: CreateTipoDeServicioDto,
  ): Promise<TipoDeServicio> {
    const servicio = new TipoDeServicio();
    servicio.ID_Servicio = createTipoDeServicioDto.ID_Servicio;
    servicio.Nombre_Servicio = createTipoDeServicioDto.Nombre_Servicio;

    return this.tipoDeServicioRepository.save(servicio);
  }

  findAll(): Promise<TipoDeServicio[]> {
    return this.tipoDeServicioRepository.find();
  }

  findOne(ID_Servicio: string): Promise<TipoDeServicio> {
    return this.tipoDeServicioRepository.findOneBy({ ID_Servicio });
  }

  update(id: string, updateTipoDeServicioDto: UpdateTipoDeServicioDto) {
    const servicio = new TipoDeServicio();
    servicio.ID_Servicio = id;
    servicio.Nombre_Servicio = updateTipoDeServicioDto.Nombre_Servicio;

    return this.tipoDeServicioRepository.save(servicio);
  }

  remove(ID_Servicio: string) {
    return this.tipoDeServicioRepository.delete({ ID_Servicio });
  }
}
