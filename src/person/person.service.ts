import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

    getPerson(): any {
        return {"name": "rommel", "lastName": "loayza"}
    }

}