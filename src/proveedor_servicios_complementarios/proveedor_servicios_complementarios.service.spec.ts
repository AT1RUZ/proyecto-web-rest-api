import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorServiciosComplementarioService } from './proveedor_servicios_complementarios.service';

describe('TransporteService', () => {
  let service: ProveedorServiciosComplementarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProveedorServiciosComplementarioService],
    }).compile();

    service = module.get<ProveedorServiciosComplementarioService>(ProveedorServiciosComplementarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});