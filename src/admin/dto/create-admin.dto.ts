import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateAdminDto {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsString()
  login: string;

  @ApiProperty()
  @IsString()
  hashed_password: string;

  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsBoolean()
  isCreator: boolean;
}
