import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString, isString, Max, Min } from "class-validator";
import { CreateAnimal } from "./create_animal.dto";

export class UpdateAnimal extends PartialType(CreateAnimal){}
