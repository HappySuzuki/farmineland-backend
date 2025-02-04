import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UploadModule } from '../upload/upload.module';
import { IsUnique } from 'src/validators/IsUnique.validator';
import { PrismaService } from 'src/database/prisma.service';
import { CharacterService } from '../character/character.service';

@Module({
  controllers: [UserController],
  imports: [UploadModule],
  providers: [
    UserService,
    IsUnique,
    PrismaService,
    CharacterService,
  ],
  exports: [UserService, IsUnique],
})
export class UserModule {}
