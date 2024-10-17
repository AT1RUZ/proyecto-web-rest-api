import { Injectable } from '@nestjs/common';
import { CreateTipoDeAlimentoDto } from './dto/create-tipo_de_alimento.dto';
import { UpdateTipoDeAlimentoDto } from './dto/update-tipo_de_alimento.dto';

@Injectable()
export class TipoDeAlimentoService {
  create(createTipoDeAlimentoDto: CreateTipoDeAlimentoDto) {
    return 'This action adds a new tipoDeAlimento';
  }

  findAll() {
    return `This action returns all tipoDeAlimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDeAlimento`;
  }

  update(id: number, updateTipoDeAlimentoDto: UpdateTipoDeAlimentoDto) {
    return `This action updates a #${id} tipoDeAlimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDeAlimento`;
  }
}
