import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeAlimentoController } from './tipo_de_alimento.controller';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';

describe('TipoDeAlimentoController', () => {
  let controller: TipoDeAlimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDeAlimentoController],
      providers: [TipoDeAlimentoService],
    }).compile();

    controller = module.get<TipoDeAlimentoController>(TipoDeAlimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
