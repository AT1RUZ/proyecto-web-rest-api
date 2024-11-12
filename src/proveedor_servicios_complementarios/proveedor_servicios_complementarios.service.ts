import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProveedorServiciosComplementarioDto } from './dto/create-proveedor_servicios_complementario.dto';
import { UpdateProveedorServiciosComplementarioDto } from './dto/update-proveedor_servicios_complementario.dto';
import { ProveedorServiciosComplementario } from './entities/proveedor_servicios_complementario.entity';

@Injectable()
export class ProveedorServiciosComplementarioService {
  constructor(
    @InjectRepository(ProveedorServiciosComplementario)
    private readonly proveedorServiciosComplementarioRepository: Repository<ProveedorServiciosComplementario>,
  ) {}

  create(createProveedorServiciosComplementarioDto: CreateProveedorServiciosComplementarioDto): Promise<ProveedorServiciosComplementario> {
    const proveedorServiciosComplementario: ProveedorServiciosComplementario = new ProveedorServiciosComplementario();
    proveedorServiciosComplementario.ID_Contratado = createProveedorServiciosComplementarioDto.ID_Contratado;
    proveedorServiciosComplementario.Nombre_Proveedor = createProveedorServiciosComplementarioDto.Nombre_Proveedor;
    proveedorServiciosComplementario.Dirección = createProveedorServiciosComplementarioDto.Dirección;
    proveedorServiciosComplementario.Teléfono = createProveedorServiciosComplementarioDto.Teléfono;
    proveedorServiciosComplementario.Email = createProveedorServiciosComplementarioDto.Email;
    proveedorServiciosComplementario.ID_Servicio = createProveedorServiciosComplementarioDto.ID_Servicio;

    return this.proveedorServiciosComplementarioRepository.save(proveedorServiciosComplementario);
  }

  findAll(): Promise<ProveedorServiciosComplementario[]> {
    return this.proveedorServiciosComplementarioRepository.find();
  }

  findOne(ID_Contratado: string): Promise<ProveedorServiciosComplementario> {
    return this.proveedorServiciosComplementarioRepository.findOneBy({ ID_Contratado });
  }

  update(ID_Contratado: string, updateProveedorServiciosComplementarioDto: UpdateProveedorServiciosComplementarioDto) {
    const proveedorServiciosComplementario: ProveedorServiciosComplementario = new ProveedorServiciosComplementario();
    proveedorServiciosComplementario.ID_Contratado = ID_Contratado;
    proveedorServiciosComplementario.Nombre_Proveedor = updateProveedorServiciosComplementarioDto.Nombre_Proveedor;
    proveedorServiciosComplementario.Dirección = updateProveedorServiciosComplementarioDto.Dirección;
    proveedorServiciosComplementario.Teléfono = updateProveedorServiciosComplementarioDto.Teléfono;
    proveedorServiciosComplementario.Email = updateProveedorServiciosComplementarioDto.Email;
    proveedorServiciosComplementario.ID_Servicio = updateProveedorServiciosComplementarioDto.ID_Servicio;
    return this.proveedorServiciosComplementarioRepository.save(proveedorServiciosComplementario);
  }

  remove(ID_Contratado: string) {
    return this.proveedorServiciosComplementarioRepository.delete(ID_Contratado);
  }
}

