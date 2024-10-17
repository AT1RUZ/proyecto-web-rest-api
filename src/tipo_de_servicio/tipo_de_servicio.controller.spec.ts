import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeServicioController } from './tipo_de_servicio.controller';
import { TipoDeServicioService } from './tipo_de_servicio.service';

describe('TipoDeServicioController', () => {
  let controller: TipoDeServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDeServicioController],
      providers: [TipoDeServicioService],
    }).compile();

    controller = module.get<TipoDeServicioController>(TipoDeServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
