import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateAnimal } from "./dto/create_animal.dto";
import { AnimalService } from "./Animal.service";
import { UpdateAnimal } from "./dto/update_animal.dto";
import { Animal } from "./entities/Animal.entity";


@Controller('Animal')
export class AnimalController{
    constructor(private readonly animalService:AnimalService){}

    @Post()
    create(@Body() createAnimal:CreateAnimal){
        return this.animalService.create(createAnimal)
    }
    @Get(":id")
    findOne(@Param("id")id:String){
        return this.animalService.findOne(id)
    }
    @Get()
    findAll(){
        return this.animalService.findAll()
    }
    @Delete(":id")
    delete(@Param("id")id:string){
        return this.animalService.remove(id)
    }
    @Put(":id")
    update(@Param("id")id:string,updateAnimal:UpdateAnimal){
        return this.animalService.update(id,updateAnimal)
    }
}