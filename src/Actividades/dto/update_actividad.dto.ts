import { PartialType } from "@nestjs/mapped-types";
import {CreateActividad} from "./create_actividad.dto"


export class UpdateActividad extends PartialType(CreateActividad){}