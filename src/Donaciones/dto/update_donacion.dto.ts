import { PartialType } from "@nestjs/mapped-types";
import { CreateDonacion } from "./create_donacion.dto";


export class UpdateDonacion extends PartialType(CreateDonacion){}