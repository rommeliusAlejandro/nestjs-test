import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller()
export class PersonController {

    constructor(private readonly personService: PersonService) {}

    @Get("/person")
    getPerson(): any {
        return this.personService.getPerson();
    }

}