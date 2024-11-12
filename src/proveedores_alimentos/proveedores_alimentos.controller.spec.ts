import { Test, TestingModule } from '@nestjs/testing';
import { ProveedoresAlimentosController } from './proveedores_alimentos.controller';
import { ProveedoresAlimentosService } from './proveedores_alimentos.service';

describe('ProveedoresAlimentosController', () => {
  let controller: ProveedoresAlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedoresAlimentosController],
      providers: [ProveedoresAlimentosService],
    }).compile();

    controller = module.get<ProveedoresAlimentosController>(ProveedoresAlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
