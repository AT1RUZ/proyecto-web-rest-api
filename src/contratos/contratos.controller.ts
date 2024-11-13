import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { ContratosService } from './contratos.service';

@Controller('/rep')
//@Auth(Role.ADMIN)
export class ContratosController {
  constructor(private readonly contratoService: ContratosService) {}

  @Get('/proveedores-alimentos')
  findAllPA() {
    console.log("Candela")
    return this.contratoService.getListadoContratosProveedoresAlimentos();
  }

  @Get('/proveedores-servicios-complementarios')
  findAllPSC() {
    return this.contratoService.getListadoContratosServiciosComplementarios();
  }
  @Get('/programa-actividades-animal/:id')
  findAllPAA(@Param('id')id:string) {
    return this.contratoService.getListadoProgramaActividadesAnimal(id);
  }
  @Get('/plan-ingreso-adopciones-donaciones')
  findAllPIAD() {
    return this.contratoService.getListadoPlanIngresoAdopcionesDonaciones();
  }
}
