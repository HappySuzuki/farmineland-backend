import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login de usuario' })
  @HttpCode(HttpStatus.OK)
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
