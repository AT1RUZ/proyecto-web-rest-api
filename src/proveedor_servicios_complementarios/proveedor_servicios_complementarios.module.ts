import { Module } from '@nestjs/common';
import { ProveedorServiciosComplementarioService } from './proveedor_servicios_complementarios.service';
import { ProveedorServiciosComplementariosController } from './proveedor_servicios_complementarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
 import { ProveedorServiciosComplementario } from './entities/proveedor_servicios_complementario.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProveedorServiciosComplementario])],
  controllers: [ProveedorServiciosComplementariosController],
  providers: [ProveedorServiciosComplementarioService],
})
export class ProveedorServiciosComplementariosModule {}
