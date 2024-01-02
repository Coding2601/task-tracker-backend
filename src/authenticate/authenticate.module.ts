import { Module } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateController } from './authenticate.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth } from './entities/authenticate.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forRoot(
      'mongodb://mongo:cCafbEH54Ed3G2D4ecBFb6h54F5cf4CG@roundhouse.proxy.rlwy.net:49991/test',
    ),
    MongooseModule.forFeature([{ name: 'auth', schema: Auth }]),
  ],
  controllers: [AuthenticateController],
  providers: [AuthenticateService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthenticateModule {}
