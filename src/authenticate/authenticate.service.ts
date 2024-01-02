/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAuthenticateDto } from './dto/create-authenticate.dto';
//import { UpdateAuthenticateDto } from './dto/update-authenticate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Authenticate } from './entities/authenticate.entity';
import { Model } from 'mongoose';
import * as argon from 'argon2';

@Injectable()
export class AuthenticateService {
  constructor(
    @InjectModel('auth') private authModel: Model<Authenticate>,
    private jwtService: JwtService,
  ) {}
  async signUp(createAuthenticateDto: CreateAuthenticateDto) {
    const hashPass = await argon.hash(createAuthenticateDto.password);
    createAuthenticateDto.password = hashPass;
    const newUser = new this.authModel(createAuthenticateDto);
    const user = await newUser.save();
    const token = this.jwtService.sign({ id: user._id });
    return { token: token, status: 'ok' };
  }

  async signIn(dto: CreateAuthenticateDto, email: string) {
    const x = await this.authModel.findOne({ email });
    if (!x) {
      return { msg: 'Incorrect Credential' };
    }
    const match = await argon.verify(x.password, dto.password);
    if (!match) {
      return { msg: 'Failed' };
    }
    const token = this.jwtService.sign({ id: x._id });
    return { token: token, status: 'ok' };
  }

  async findAll(email: string) {
    console.log(email);
    const user = await this.authModel.findOne({ email });
    if (user === null) {
      return { status: 'failed' };
    }
    return user.tasks;
  }

  async update(task: JSON, email: string) {
    const user = await this.authModel.updateOne(
      { email },
      { $push: { tasks: task } },
    );
    if (user === null) {
      //console.log(user.tasks);
      return { status: 'failed' };
    }
    //console.log(user.tasks);
    //user.tasks.push(task);
    return { status: 'ok' };
  }

  /*findOne(id: number) {
    return `This action returns a #${id} authenticate`;
  }

  update(id: number, updateAuthenticateDto: UpdateAuthenticateDto) {
    return `This action updates a #${id} authenticate`;
  }

  remove(id: number) {
    return `This action removes a #${id} authenticate`;
  }*/
}
