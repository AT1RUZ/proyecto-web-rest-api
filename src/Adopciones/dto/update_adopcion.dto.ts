import { PartialType } from "@nestjs/mapped-types";
import { Adopcion } from "../entities/Adopcion.entity";


export class UpdateAdopcion extends PartialType(Adopcion){}