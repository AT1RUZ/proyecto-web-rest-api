import { Test, TestingModule } from '@nestjs/testing';
import { ContratadosService } from './contratado.service';

describe('ContratadoService', () => {
  let service: ContratadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContratadosService],
    }).compile();

    service = module.get<ContratadosService>(ContratadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
