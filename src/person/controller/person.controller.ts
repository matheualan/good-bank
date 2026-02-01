import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PersonService } from "../service/person.service";
import { Person } from "../model/person.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller('/persons')
// @ApiTags('Person')
export class PersonController {

    constructor(private readonly personService: PersonService) { }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Person | null> {
        return this.personService.findById(id);
    }

    @Get('/findByName/:name')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('name') name: string): Promise<Person[]> {
        return this.personService.findByName(name);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Person[]> {
        return this.personService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() person: Person): Promise<Person> {
        return this.personService.create(person);
    }

    @Put('/updateById/:id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: number, @Body() person: Person): Promise<Person> {
        return this.personService.update(id, person);
    }
 
}