import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProveedoresAlimentoDto } from './dto/create-proveedores_alimento.dto';
import { UpdateProveedoresAlimentoDto } from './dto/update-proveedores_alimento.dto';
import { ProveedoresAlimento } from './entities/proveedores_alimento.entity';

@Injectable()
export class ProveedoresAlimentoService {
  constructor(
    @InjectRepository(ProveedoresAlimento)
    private readonly proveedoresAlimentoRepository: Repository<ProveedoresAlimento>,
  ) {}

  create(createProveedoresAlimentoDto: CreateProveedoresAlimentoDto): Promise<ProveedoresAlimento> {
    const proveedoresAlimento: ProveedoresAlimento = new ProveedoresAlimento();
    proveedoresAlimento.ID_Contratado = createProveedoresAlimentoDto.ID_Contratado;
    proveedoresAlimento.Nombre_Proveedor = createProveedoresAlimentoDto.Nombre_Proveedor;
    proveedoresAlimento.Dirección = createProveedoresAlimentoDto.Dirección;
    proveedoresAlimento.Email = createProveedoresAlimentoDto.Email;
    proveedoresAlimento.ID_Alimento = createProveedoresAlimentoDto.ID_Alimento;

    return this.proveedoresAlimentoRepository.save(proveedoresAlimento);
  }

  findAll(): Promise<ProveedoresAlimento[]> {
    return this.proveedoresAlimentoRepository.find();
  }

  findOne(ID_Contratado: string): Promise<ProveedoresAlimento> {
    return this.proveedoresAlimentoRepository.findOneBy({ ID_Contratado });
  }

  update(ID_Contratado: string, updateProveedoresAlimentoDto: UpdateProveedoresAlimentoDto): Promise<ProveedoresAlimento> {
    const proveedoresAlimento: ProveedoresAlimento = new ProveedoresAlimento();
    proveedoresAlimento.ID_Contratado = ID_Contratado;
    proveedoresAlimento.Nombre_Proveedor = updateProveedoresAlimentoDto.Nombre_Proveedor;
    proveedoresAlimento.Dirección = updateProveedoresAlimentoDto.Dirección;
    proveedoresAlimento.Email = updateProveedoresAlimentoDto.Email;
    proveedoresAlimento.ID_Alimento = updateProveedoresAlimentoDto.ID_Alimento;

    return this.proveedoresAlimentoRepository.save(proveedoresAlimento);
  }

  remove(ID_Contratado: string) {
    return this.proveedoresAlimentoRepository.delete(ID_Contratado);
  }
}

