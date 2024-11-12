import { Test, TestingModule } from '@nestjs/testing';
import { ContratadoController } from './contratado.controller';
import { ContratadosService } from './contratado.service';

describe('ContratadoController', () => {
  let controller: ContratadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratadoController],
      providers: [ContratadosService],
    }).compile();

    controller = module.get<ContratadoController>(ContratadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
