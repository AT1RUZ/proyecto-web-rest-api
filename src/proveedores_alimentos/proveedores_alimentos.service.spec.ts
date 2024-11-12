import { Test, TestingModule } from '@nestjs/testing';
import { ProveedoresAlimentoService } from './proveedores_alimentos.service';

describe('ProveedoresAlimentosService', () => {
  let service: ProveedoresAlimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProveedoresAlimentoService],
    }).compile();

    service = module.get<ProveedoresAlimentoService>(ProveedoresAlimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
