import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
//import { CreateAuthenticateDto } from './dto/create-authenticate.dto';
//import { UpdateAuthenticateDto } from './dto/update-authenticate.dto';

@Controller('authenticate')
export class AuthenticateController {
  constructor(private readonly authenticateService: AuthenticateService) {}

  @Post('register')
  create(@Body() createAuthenticateDto: any) {
    return this.authenticateService.signUp(createAuthenticateDto);
  }

  @Post('login')
  async findAll(@Body() dto: any) {
    const email = dto.email;
    return this.authenticateService.signIn(dto, email);
  }

  @Post('addTask')
  async addTask(@Body() content: any) {
    const email = content.email;
    delete content.email;
    return await this.authenticateService.update(content, email);
  }

  @Post('getAllTasks')
  async getAllTasks(@Body() content: any) {
    return await this.authenticateService.findAll(content.email);
  }

  @Get()
  helloWorld() {
    return 'Hello World';
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthenticateDto: UpdateAuthenticateDto) {
    return this.authenticateService.update(+id, updateAuthenticateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authenticateService.remove(+id);
  }*/
}
