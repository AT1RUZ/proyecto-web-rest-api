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
    private readonly  contratosSCRepository: Repository<ListadoContratosServiciosComplementarios>,
    @InjectRepository(PlanIngresoAdopcionesDonaciones)
    private readonly planADRepository: Repository<PlanIngresoAdopcionesDonaciones>,
    @InjectRepository(ProgramaActividadesAnimal)
    private readonly programaAARepository: Repository<ProgramaActividadesAnimal>

  ) {}

  async getListadoContratosProveedoresAlimentos(): Promise<ListadoContratosProveedoresAlimentos[]> {
    const results = await this.contratosPARepository.query(
      'SELECT * FROM listado_contratos_proveedores_alimentos()',
    );
    return results.map(result => this.contratosPARepository.create(result));
  }

  async  getListadoContratosServiciosComplementarios(): Promise<ListadoContratosServiciosComplementarios[]>{
    const results = await this.contratosSCRepository.query(
        'SELECT * FROM listado_contratos_servicios_complementarios()',
    );
    return results.map(result => this.contratosSCRepository.create(result));
  }
  async getListadoPlanIngresoAdopcionesDonaciones():Promise<PlanIngresoAdopcionesDonaciones[]>{
    const results =await this.contratosPARepository.query(
      'SELECT * FROM plan_ingresos_adopciones_donaciones()',
    )
    return results.map(result=>this.planADRepository.create(result));
  }
  async getListadoProgramaActividadesAnimal(ID_Animal:String):Promise<ProgramaActividadesAnimal[]>{
    const results =await this.contratosPARepository.query(
      'SELECT * FROM programa_actividades_animal($1)',
      [ID_Animal]
    )
    return results.map(result=>this.programaAARepository.create(result));
  }
}
