import { Module } from "@nestjs/common";
import { DonacionController } from "./Donaciones.controller";
import { DonacionService } from "./Donaciones.service";
import { Donacion } from "./entities/Donaciones.entity";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
    controllers:[DonacionController],
    providers:[DonacionService],
    imports:[TypeOrmModule.forFeature([Donacion])]
})
export class DonacionModule{}