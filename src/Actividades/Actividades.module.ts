import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { ActividadService } from "./Actividades.service";
import { ActividadController } from "./Actividades.controller";
import { Actividad } from "./entities/Actividad.entity";

@Module({
    providers:[ActividadService],
    controllers:[ActividadController],
    imports: [TypeOrmModule.forFeature([Actividad])],
})
export class ActividadModule{}