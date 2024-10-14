import { Body, Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Render as RenderJsx } from 'nest-jsx-template-engine';
import { Login, LoginProps } from './components/login';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  errors?: Record<string, string>;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello/:name')
  getHello(@Param('name') name: string) {
    return ({ message: this.appService.getHello() + ' ' + name });
  }

  @Get('content')
  getContent() {
    return 'here goes the content';
  }

  @Get()
  @Render('index')
  root() {
    return this.getHello('test');
  }

  @Get('search')
  @Render('search')
  search(@Query('q') q: string) {
    return { results: this.appService.getRows(q) };
  }

  @Get('login')
  @RenderJsx<LoginProps>(Login)
  login(): LoginProps {
    return { title: 'Please login' };
  }


  @Post('login')
  @RenderJsx<LoginProps>(Login)
  async handleLogin(@Body() body: LoginDTO): Promise<LoginProps> {
    const { errors } = body;
    // console.log('errors', errors);

    if (errors._found) {
      return { title: 'Please login', errors, ...body };
    }
    if (body.email === 'test@test.com' && body.password === 'test') {
      return { title: 'Login successful', ...body };
    }
    return { title: 'Please login', ...body, errors: { common: 'Invalid email or password' } };
  }
}

