import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './startegies/local.strategy';
import { JwtStrategy } from './startegies/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';



@Module({
  imports : [
    PassportModule,
    PrismaModule,
    JwtModule.register({
      secret : "abc123",
      signOptions : { expiresIn : "1h"}
    })
  ],

  controllers: [AuthController],
  providers: [AuthService , LocalStrategy , JwtStrategy],
})


export class AuthModule {}
