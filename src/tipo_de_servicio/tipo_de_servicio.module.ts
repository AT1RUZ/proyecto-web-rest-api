import { Module } from '@nestjs/common';
import { TipoDeServicioService } from './tipo_de_servicio.service';
import { TipoDeServicioController } from './tipo_de_servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDeServicio } from './entities/tipo_de_servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDeServicio])],
  controllers: [TipoDeServicioController],
  providers: [TipoDeServicioService],
})
export class TipoDeServicioModule {}
