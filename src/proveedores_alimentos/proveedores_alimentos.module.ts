import { Module } from '@nestjs/common';
import { ProveedoresAlimentoService } from './proveedores_alimentos.service';
import { ProveedoresAlimentosController } from './proveedores_alimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
 import { ProveedoresAlimento } from './entities/proveedores_alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProveedoresAlimento])],
  controllers: [ProveedoresAlimentosController],
  providers: [ProveedoresAlimentoService],
})
export class ProveedoresAlimentosModule {}
