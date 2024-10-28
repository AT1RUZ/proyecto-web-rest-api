import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DonacionService } from "./Donaciones.service";
import { UpdateDonacion } from "./dto/update_donacion.dto";
import { CreateDonacion } from "./dto/create_donacion.dto";

@Controller("Donacion")
export class DonacionController{
    constructor(private readonly donacionService: DonacionService) {}


    @Get()
    findAll(){
        return this.donacionService.findAll()
    }
    @Get(":id")
    finOne(@Param("id")id:string){
        return this.donacionService.findOne(id)
    }
    @Put(":id")
    update(@Param("id")id:String, @Body()donacion:UpdateDonacion){
        return this.donacionService.update(id,donacion)
    }
    @Post()
    create(@Body()donacion:CreateDonacion){
        return this.donacionService.create(donacion)
    }
    @Delete(":id")
    dele(@Param("id")id:string){
        return this.donacionService.remove(id)
    }
}