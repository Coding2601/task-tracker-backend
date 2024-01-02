import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { ConfigModule } from '@nestjs/config';
//import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    /*JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '2 days',
      },
    }),*/
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb://mongo:cCafbEH54Ed3G2D4ecBFb6h54F5cf4CG@roundhouse.proxy.rlwy.net:49991',
      {
        dbName: 'test',
      },
    ),
    AuthenticateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
