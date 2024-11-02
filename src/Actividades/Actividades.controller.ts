import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ActividadService } from "./Actividades.service";
import { UpdateActividad } from "./dto/update_actividad.dto";
import { CreateActividad } from "./dto/create_actividad.dto";


@Controller()
export class ActividadController{
    constructor(private readonly actividadService: ActividadService) {}

    @Get()
    async getAll() {
        return this.actividadService.findAll
    }
    @Get(":id")
    finOne(@Param("id")id:string){
        return this.actividadService.findOne(id)
    }
    @Put()
    async update(@Param("id") id: string, @Body() actividad:UpdateActividad) {
        return this.actividadService.update(actividad)
    }
    @Post()
    async create(@Body() actividad: CreateActividad) {
        return  this.actividadService.create(actividad)

    }
    @Delete(":id")
    async delete(@Param("id") id: string) {
        return this.actividadService.delete(id)
    }

}