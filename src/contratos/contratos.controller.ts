import { Controller, Get } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { ContratosService } from './contratos.service';

@Controller('listado/contratos')
@Auth(Role.ADMIN)
export class ContratosController {
  constructor(private readonly contratoService: ContratosService) {}

  @Get('/proveedores-alimentos')
  findAllPA() {
    return this.contratoService.getListadoContratosProveedoresAlimentos();
  }

  @Get('/proveedores-servicios-complementarios')
  findAllPSC() {
    return this.contratoService.getListadoContratosServiciosComplementarios();
  }
}
