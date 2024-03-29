import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService} from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService:JwtService){}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    console.log(req);

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi royhatdan otmagan1",
      });
    }
    const bearer = authHeader.split(' ')[0]
    const token = authHeader.split(' ')[1]

    if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "Foydalanuvchi royhatdan otmagan2",
        });
    }
    let user:any
    try {
        user = this.jwtService.verify(token)
        
    } catch (error) {
        throw new UnauthorizedException({
          message: "Foydalanuvchi Avtorizatsiyadan o'tmagan",
        });
    }
    
    req.user = user
    console.log(req);
    

    return true;
  }
}
