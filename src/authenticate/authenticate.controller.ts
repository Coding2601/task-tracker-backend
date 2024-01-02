import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
//import { CreateAuthenticateDto } from './dto/create-authenticate.dto';
//import { UpdateAuthenticateDto } from './dto/update-authenticate.dto';

@Controller('authenticate')
export class AuthenticateController {
  constructor(private readonly authenticateService: AuthenticateService) {}

  //Middleware to handle sign up
  @Post('register')
  create(@Body() createAuthenticateDto: any) {
    return this.authenticateService.signUp(createAuthenticateDto);
  }

  //Midleware to hanle sign n
  @Post('login')
  async findAll(@Body() dto: any) {
    const email = dto.email;
    return this.authenticateService.signIn(dto, email);
  }

  //Middleware to add new task to list of existing tasks
  @Post('addTask')
  async addTask(@Body() content: any) {
    const email = content.email;
    delete content.email;
    return await this.authenticateService.update(content, email);
  }

  //Middleware to retreive tasks from MongoDB collection
  @Post('getAllTasks')
  async getAllTasks(@Body() content: any) {
    return await this.authenticateService.findAll(content.email);
  }

  //By default, 'GET' middleware made
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
