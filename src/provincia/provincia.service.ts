import { Injectable } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Provincia } from './entities/provincia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciRepository: Repository<Provincia>,
  ) {}

  create(createProvinciaDto: CreateProvinciaDto) {
    return 'This action adds a new provincia';
  }

  findAll(): Promise<Provincia[]> {
    return this.provinciRepository.find();
  }

  findOne(ID_Provincia: string): Promise<Provincia>{
    return this.provinciRepository.findOneBy({ID_Provincia});
  }

  update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    return `This action updates a #${id} provincia`;
  }

  remove(id: number) {
    return `This action removes a #${id} provincia`;
  }
}
