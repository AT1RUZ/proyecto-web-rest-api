import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Animal } from './entities/Animal.entity';
import { Repository } from 'typeorm';
import { CreateAnimal } from './dto/create_animal.dto';
import { UpdateAnimal } from './dto/update_animal.dto';
@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  create(createAnimal: CreateAnimal): Promise<Animal> {
    const animal: Animal = new Animal();
    animal.Nombre = createAnimal.Nombre;
    animal.Especie = createAnimal.Especie;
    animal.Raza = createAnimal.Raza;
    animal.Edad = createAnimal.Edad;
    animal.Peso = createAnimal.Peso;
    animal.Precio_Adopción = createAnimal.Precio_Adopción;
    animal.Precio_Mantenimiento = createAnimal.Precio_Mantenimiento;
    animal.Dias_Refugio = createAnimal.Dias_Refugio;
    return this.animalRepository.save(animal);
  }
  findOne(ID_Animal: String): Promise<Animal> {
    return this.animalRepository.findOneBy({ ID_Animal });
  }
    findAll(): Promise<Animal[]> {    
    return this.animalRepository.find();
  }

  async update(ID_Animal: string, updateAnimal: UpdateAnimal): Promise<Animal> {
    const animal: Animal = await this.animalRepository.findOneBy({ ID_Animal });
    animal.Nombre = updateAnimal.Nombre;
    animal.Especie = updateAnimal.Especie;
    animal.Raza = updateAnimal.Raza;
    animal.Edad = updateAnimal.Edad;
    animal.Peso = updateAnimal.Peso;
    animal.Precio_Adopción = updateAnimal.Precio_Adopción;
    animal.Precio_Mantenimiento = updateAnimal.Precio_Mantenimiento;
    animal.Dias_Refugio = updateAnimal.Dias_Refugio;
    return this.animalRepository.save(animal);
  }
  remove(ID_Animal:string){
    return this.animalRepository.delete(ID_Animal);
  }

}
