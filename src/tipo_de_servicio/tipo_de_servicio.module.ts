import { Module } from '@nestjs/common';
import { TipoDeServicioService } from './tipo_de_servicio.service';
import { TipoDeServicioController } from './tipo_de_servicio.controller';

@Module({
  controllers: [TipoDeServicioController],
  providers: [TipoDeServicioService],
})
export class TipoDeServicioModule {}
