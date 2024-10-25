import { Module } from "@nestjs/common";
import { AdopcionService } from "./Adopcion.service";
import { AdopcionController } from "./Adopcion.controller";
import { Adopcion } from "./entities/Adopcion.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    providers:[AdopcionService],
    controllers:[AdopcionController],
    imports: [TypeOrmModule.forFeature([Adopcion])],
})
export class AdopcionModule{}