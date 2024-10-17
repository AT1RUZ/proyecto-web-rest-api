import { Injectable } from '@nestjs/common';
import { CreateTipoDeServicioDto } from './dto/create-tipo_de_servicio.dto';
import { UpdateTipoDeServicioDto } from './dto/update-tipo_de_servicio.dto';

@Injectable()
export class TipoDeServicioService {
  create(createTipoDeServicioDto: CreateTipoDeServicioDto) {
    return 'This action adds a new tipoDeServicio';
  }

  findAll() {
    return `This action returns all tipoDeServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDeServicio`;
  }

  update(id: number, updateTipoDeServicioDto: UpdateTipoDeServicioDto) {
    return `This action updates a #${id} tipoDeServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDeServicio`;
  }
}
