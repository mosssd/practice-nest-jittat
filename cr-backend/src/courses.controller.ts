import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): any{
    return [
      { id: '100',
        number:'01204111',
        title:'computer programming'
      },
      { id: 'sdbb',
        number:'01204111',
        title:'network and data'
      },
      { id: 'dzfbfhb',
        number:'01204111',
        title:'hello ar'
      }
    ]
  }
}
