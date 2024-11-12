import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles.decorators';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('Entrando en Roles Guard');

    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('Rol Requerido');
    console.log(requiredRoles);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log(user.role)
    if(requiredRoles===Role.ADMIN){
      if(user.role===Role.USER_ADMIN){
        return true
      }
    }else if (user.role === requiredRoles) return true
    

    return user.role === requiredRoles;
  }
}
