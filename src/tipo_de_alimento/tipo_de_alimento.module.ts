import { Module } from '@nestjs/common';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';
import { TipoDeAlimentoController } from './tipo_de_alimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDeAlimento } from './entities/tipo_de_alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDeAlimento])],
  controllers: [TipoDeAlimentoController],
  providers: [TipoDeAlimentoService],
})
export class TipoDeAlimentoModule {}
