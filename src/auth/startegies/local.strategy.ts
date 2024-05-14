import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";



@Injectable()

export class  LocalStrategy  extends PassportStrategy(Strategy){


    constructor( private authService : AuthService) {
            super()
    }



    validateUser( username : string , password : string ) {
         const loginDto   = { username , password }
         const user = this.authService.loginAccount(loginDto)

         if(!user) throw new UnauthorizedException();

         return user 
    }
}