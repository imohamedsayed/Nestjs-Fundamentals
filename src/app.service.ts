import { Injectable } from "@nestjs/common";

@Injectable()

export class AppService{
    greeting():string{
        return 'Hello Nest from app service!'
    }
}
