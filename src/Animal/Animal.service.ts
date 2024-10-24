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

  async create(createAnimal: CreateAnimal): Promise<Animal> {
    const anima: Animal = new Animal();
    anima.ID_Animal=createAnimal.ID_Animal
    anima.Nombre = createAnimal.Nombre;
    anima.Especie = createAnimal.Especie;
    anima.Raza = createAnimal.Raza;
    anima.Edad = Number(createAnimal.Edad);
    anima.Peso = Number(createAnimal.Peso);
    anima.Precio_Adopción = Number(createAnimal.Precio_Adopción);
    anima.Precio_Mantenimiento = Number(createAnimal.Precio_Mantenimiento);
    anima.Dias_Refugio = Number(createAnimal.Dias_Refugio);
    return this.animalRepository.save(anima);
  }
  findOne(ID_Animal: String): Promise<Animal> {
    return this.animalRepository.findOneBy({ ID_Animal });
  }
    findAll(): Promise<Animal[]> {    
    return this.animalRepository.find();
  }

  async update(ID_Animal: string, updateAnimal: UpdateAnimal): Promise<Animal> {
    //const animal: Animal = await this.animalRepository.findOneBy({ ID_Animal });
    const anima:Animal= new Animal();
    anima.ID_Animal=updateAnimal.ID_Animal;
    anima.Nombre = updateAnimal.Nombre;
    anima.Especie = updateAnimal.Especie;
    anima.Raza = updateAnimal.Raza;
    anima.Edad = updateAnimal.Edad;
    anima.Peso = updateAnimal.Peso;
    anima.Precio_Adopción = updateAnimal.Precio_Adopción;
    anima.Precio_Mantenimiento = updateAnimal.Precio_Mantenimiento;
    anima.Dias_Refugio = updateAnimal.Dias_Refugio;
    return this.animalRepository.save(anima);
  }
  remove(ID_Animal:string){
    return this.animalRepository.delete(ID_Animal);
  }

}
