


import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
// export class AuthGuard{}
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector :Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization;

      if (!token) {
        throw new UnauthorizedException('Tidak ada token');
      }

      try {
        const decoded = this.jwtService.verify(token.replace('Bearer ', ''));
        if (roles.includes(decoded.role)) {
          return true;
        } else {
          throw new UnauthorizedException('Akses ditolak');
        }
      } catch (err) {
        throw new UnauthorizedException('Token tidak valid');
      }
    } else {
      return true;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}





  



