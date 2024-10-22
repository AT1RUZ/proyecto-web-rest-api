import { Controller } from "@nestjs/common";
import { Module } from '@nestjs/common';
import { AnimalController } from "./Animal.controller";
import { AnimalService } from "./Animal.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Animal } from "./entities/Animal.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Animal])],
    controllers:[AnimalController],
    providers:[AnimalService],
})
export class AnimalModule{}