import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListadoContratosProveedoresAlimentos } from './entities/contratos-proveedores-alimentos.entity';
import { ListadoContratosServiciosComplementarios } from './entities/contratos-proveedores-servicios-complementarios.entity';
import { PlanIngresoAdopcionesDonaciones } from './entities/plan_ingresos_adopciones_donaciones.entity';
import { ProgramaActividadesAnimal } from './entities/programa_actividades_animal.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(ListadoContratosProveedoresAlimentos)
    private readonly contratosPARepository: Repository<ListadoContratosProveedoresAlimentos>,
    @InjectRepository(ListadoContratosServiciosComplementarios)
    private readonly contratosSCRepository: Repository<ListadoContratosServiciosComplementarios>,
    @InjectRepository(PlanIngresoAdopcionesDonaciones)
    private readonly planADRepository: Repository<PlanIngresoAdopcionesDonaciones>,
    @InjectRepository(ProgramaActividadesAnimal)
    private readonly programaAARepository: Repository<ProgramaActividadesAnimal>,
  ) {}

  async getListadoContratosProveedoresAlimentos(): Promise<
    ListadoContratosProveedoresAlimentos[]
  > {
    const results = await this.contratosPARepository.query(
      'SELECT * FROM listado_contratos_proveedores_alimentos()',
    );
    return results.map((result) => {
      return this.contratosPARepository.create({
        ...result,
        fecha_inicio: result.fecha_inicio
          ? new Date(result.fecha_inicio).toISOString().split('T')[0]
          : null,
        fecha_terminacion: result.fecha_terminacion
          ? new Date(result.fecha_terminacion).toISOString().split('T')[0]
          : null,
        fecha_conciliacion: result.fecha_conciliacion
          ? new Date(result.fecha_conciliacion).toISOString().split('T')[0]
          : null,
      });
    });
  }

  async getListadoContratosServiciosComplementarios(): Promise<
    ListadoContratosServiciosComplementarios[]
  > {
    const results = await this.contratosSCRepository.query(
      'SELECT * FROM listado_contratos_servicios_complementarios()',
    );
    return results.map((result) => {
      return this.contratosSCRepository.create({
        ...result,
        fecha_inicio_contrato: result.fecha_inicio_contrato
          ? new Date(result.fecha_inicio_contrato).toISOString().split('T')[0]
          : null,
        fecha_terminacion_contrato: result.fecha_terminacion_contrato
          ? new Date(result.fecha_terminacion_contrato).toISOString().split('T')[0]
          : null,
        fecha_conciliacion: result.fecha_conciliacion
          ? new Date(result.fecha_conciliacion).toISOString().split('T')[0]
          : null,
      });
    });
  }
  async getListadoPlanIngresoAdopcionesDonaciones(): Promise<
    PlanIngresoAdopcionesDonaciones[]
  > {
    const results = await this.contratosPARepository.query(
      'SELECT * FROM plan_ingresos_adopciones_donaciones()',
    );
    return results.map((result) => this.planADRepository.create(result));
  }
  async getListadoProgramaActividadesAnimal(
    ID_Animal: String,
  ): Promise<ProgramaActividadesAnimal[]> {
    const results = await this.contratosPARepository.query(
      'SELECT * FROM programa_actividades_animal($1)',
      [ID_Animal],
    );
    return results.map((result) => this.programaAARepository.create(result));
  }
}
