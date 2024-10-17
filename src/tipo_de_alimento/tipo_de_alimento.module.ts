import { Module } from '@nestjs/common';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';
import { TipoDeAlimentoController } from './tipo_de_alimento.controller';

@Module({
  controllers: [TipoDeAlimentoController],
  providers: [TipoDeAlimentoService],
})
export class TipoDeAlimentoModule {}
