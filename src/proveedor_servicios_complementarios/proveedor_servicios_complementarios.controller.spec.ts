import { Test, TestingModule } from '@nestjs/testing';
import { ProveedorServiciosComplementariosController } from './proveedor_servicios_complementarios.controller';
import { ProveedorServiciosComplementarioService } from './proveedor_servicios_complementarios.service';

describe('TransporteController', () => {
  let controller: ProveedorServiciosComplementariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedorServiciosComplementariosController],
      providers: [ProveedorServiciosComplementarioService],
    }).compile();

    controller = module.get<ProveedorServiciosComplementariosController>(ProveedorServiciosComplementariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
}); 