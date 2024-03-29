import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/model/admin.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async singUp(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.getAdminByLogin(
      createAdminDto.login
    );
    if (condidate) {
      throw new HttpException(
        "This user already exist",
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    createAdminDto.hashed_password = hashedPassword;

    const newUser = await this.adminService.create(createAdminDto);
    return this.genarateToken(newUser);
  }

  private async genarateToken(user: Admin) {
    const payload = { sub: user.id, name: user.name, login: user.login, creator: user.isCreator };

    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const user = await this.adminService.getAdminByLogin(loginDto.login);
    if (!user) {
      throw new UnauthorizedException("wrong login or passowrd");
    }

    const validPassword = await bcrypt.compare(
      loginDto.password,
      user.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("wrong login or password");
    }
    return this.genarateToken(user);
  }
}
