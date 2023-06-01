import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles_decorator';
import * as jwt from 'jsonwebtoken';

interface DecodedToken {
  role: string;
  // other properties from the decoded token
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
    if (!requiredRoles) {
      // No roles defined, allow access
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    const decoded: DecodedToken = jwt.verify(token, 'secret_key') as DecodedToken;
    const userRole = decoded.role;

    if (requiredRoles.includes(userRole)) {
      return true;
    }

    throw new ForbiddenException('Warning!!!Khusus Karyawan');
  }
}
