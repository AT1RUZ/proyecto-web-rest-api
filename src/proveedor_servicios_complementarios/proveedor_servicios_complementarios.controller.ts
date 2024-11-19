import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProveedorServiciosComplementarioService } from './proveedor_servicios_complementarios.service';
import { CreateProveedorServiciosComplementarioDto } from './dto/create-proveedor_servicios_complementario.dto';
import { UpdateProveedorServiciosComplementarioDto } from './dto/update-proveedor_servicios_complementario.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';

@Controller('proveedor-servicios-complementarios')
export class ProveedorServiciosComplementariosController {
  constructor(private readonly proveedorServiciosComplementariosService: ProveedorServiciosComplementarioService) {}

  
  @Post()
  create(@Body() createProveedorServiciosComplementarioDto: CreateProveedorServiciosComplementarioDto) {
    return this.proveedorServiciosComplementariosService.create(createProveedorServiciosComplementarioDto);
  }
  
  @Get()
  findAll() {
    return this.proveedorServiciosComplementariosService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedorServiciosComplementariosService.findOne(id);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProveedorServiciosComplementarioDto: UpdateProveedorServiciosComplementarioDto) {
    return this.proveedorServiciosComplementariosService.update(id, updateProveedorServiciosComplementarioDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedorServiciosComplementariosService.remove(id);
  }
}
