import { Test, TestingModule } from '@nestjs/testing';
import { TipoDeAlimentoService } from './tipo_de_alimento.service';

describe('TipoDeAlimentoService', () => {
  let service: TipoDeAlimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDeAlimentoService],
    }).compile();

    service = module.get<TipoDeAlimentoService>(TipoDeAlimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
