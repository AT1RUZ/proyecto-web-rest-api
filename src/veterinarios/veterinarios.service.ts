import { Injectable } from '@nestjs/common';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';
import { Veterinario} from './entities/veterinario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VeterinariosService {

  constructor(
    @InjectRepository(Veterinario)
    private readonly VeterinarioRepository: Repository<Veterinario>,
  ) {}



  create(createVeterinarioDto: CreateVeterinarioDto)  : Promise<Veterinario>  {
    const Vet : Veterinario = new Veterinario();
    Vet.Clínica_Veterinario= createVeterinarioDto.Clínica_Veterinario;
    Vet.ID_Contratado = createVeterinarioDto.ID_Contratado;
    Vet.Dirección_Veterinario = createVeterinarioDto.Dirección_Veterinario;
    Vet.Email_Veterinario = createVeterinarioDto.Email_Veterinario;
    Vet.Distancia_Ciudad_Veterinario = createVeterinarioDto.Distancia_Ciudad_Veterinario;
    Vet.Nombre_Veterinario = createVeterinarioDto.Nombre_Veterinario;
    Vet.Fax_Veterinario = createVeterinarioDto.Fax_Veterinario;
    Vet.Modalidad_Servicio_Veterinario = createVeterinarioDto.Modalidad_Servicio_Veterinario;
    Vet.Teléfono_Veterinario = createVeterinarioDto.Teléfono_Veterinario;
   
    return this.VeterinarioRepository.save(Vet);


  }

  findAll() : Promise <Veterinario[]> {
    return this.VeterinarioRepository.find();
  }

  findOne(ID_Contratado: string): Promise<Veterinario>  {
    return this.VeterinarioRepository.findOneBy({ID_Contratado});
  }

  update(id: number, updateVeterinarioDto: UpdateVeterinarioDto) {
    const Vet : Veterinario = new Veterinario();
    Vet.Clínica_Veterinario= updateVeterinarioDto.Clínica_Veterinario;
    Vet.ID_Contratado = updateVeterinarioDto.ID_Contratado;
    Vet.Dirección_Veterinario = updateVeterinarioDto.Dirección_Veterinario;
    Vet.Email_Veterinario = updateVeterinarioDto.Email_Veterinario;
    Vet.Distancia_Ciudad_Veterinario = updateVeterinarioDto.Distancia_Ciudad_Veterinario;
    Vet.Nombre_Veterinario = updateVeterinarioDto.Nombre_Veterinario;
    Vet.Fax_Veterinario = updateVeterinarioDto.Fax_Veterinario;
    Vet.Modalidad_Servicio_Veterinario = updateVeterinarioDto.Modalidad_Servicio_Veterinario;
    Vet.Teléfono_Veterinario = updateVeterinarioDto.Teléfono_Veterinario;
   
    return this.VeterinarioRepository.save(Vet);
  }

  remove(id: string) {
    return this.VeterinarioRepository.delete(id);
  }
}
