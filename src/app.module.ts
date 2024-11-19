import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TransporteModule } from './transporte/transporte.module';
import { TipoDeServicioModule } from './tipo_de_servicio/tipo_de_servicio.module';
import { TipoDeAlimentoModule } from './tipo_de_alimento/tipo_de_alimento.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { AuthModule } from './auth/auth.module';
import { AnimalModule } from './Animal/Animal.module';
import { DonacionModule } from './Donaciones/Donaciones.module';
import { AdopcionModule } from './Adopciones/Adopcion.module';
import { ActividadModule } from './Actividades/Actividades.module';
import { VeterinariosModule } from './veterinarios/veterinarios.module';
import { ProveedorServiciosComplementariosModule } from './proveedor_servicios_complementarios/proveedor_servicios_complementarios.module';
import { ProveedoresAlimentosModule } from './proveedores_alimentos/proveedores_alimentos.module';
import { ContratadoModule } from './contratado/contratado.module';
import { ContratosModule } from './contrato/contrato.module';
import { ListadosModule } from './contratos/contratos.module';
import { SendEmail } from './send/send.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        //synchronize: true //[para sincronizar con la base de datos , es decir la actualiza deacuerdo a las entidades que estan en el proyecto]
      }),
    }),
    TransporteModule,
    TipoDeServicioModule,
    TipoDeAlimentoModule,
    UserModule,
    ProvinciaModule,
    AuthModule,
    AnimalModule,
    UserModule, 
    DonacionModule,
    AdopcionModule,
    ActividadModule,
    VeterinariosModule,
    ContratosModule,
    ListadosModule,
    SendEmail,
    ContratadoModule,
    ProveedorServiciosComplementariosModule,
    ProveedoresAlimentosModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
