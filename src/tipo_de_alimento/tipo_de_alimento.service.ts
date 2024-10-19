import { Injectable } from '@nestjs/common';
import { CreateTipoDeAlimentoDto } from './dto/create-tipo_de_alimento.dto';
import { UpdateTipoDeAlimentoDto } from './dto/update-tipo_de_alimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDeAlimento } from './entities/tipo_de_alimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDeAlimentoService {

  constructor(
    @InjectRepository(TipoDeAlimento)
    private readonly tipoDeAlimentoRepository: Repository<TipoDeAlimento>
  ){}
  
  create(createTipoDeAlimentoDto: CreateTipoDeAlimentoDto): Promise<TipoDeAlimento> {
    const alimento = new TipoDeAlimento();
    alimento.ID_Alimento = createTipoDeAlimentoDto.ID_Alimento
    alimento.Nombre_Alimento = createTipoDeAlimentoDto.Nombre_Alimento

    return this.tipoDeAlimentoRepository.save(alimento)
  }

  findAll(): Promise<TipoDeAlimento[]> {
    return this.tipoDeAlimentoRepository.find();
  }

  findOne(ID_Alimento: string): Promise<TipoDeAlimento> {
    return this.tipoDeAlimentoRepository.findOneBy({ID_Alimento})
  }

  update(id: string, updateTipoDeAlimentoDto: UpdateTipoDeAlimentoDto): Promise<TipoDeAlimento> {
    const alimento = new TipoDeAlimento()
    alimento.Nombre_Alimento = updateTipoDeAlimentoDto.Nombre_Alimento
    alimento.ID_Alimento = id
    return this.tipoDeAlimentoRepository.save(alimento)
  }

  remove(ID_Alimento: string) {
    return this.tipoDeAlimentoRepository.delete({ID_Alimento})
  }
}
