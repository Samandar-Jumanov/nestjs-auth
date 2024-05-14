import bcrypt from "bcrypt"


export const hashPassword = async ( password : string ) 
 : Promise<string>=> {

       const hashedPassword = await bcrypt.hash(password , 10);
       return hashedPassword

}


export const comparePassword = 
async ( plainText : string , userPassword : string ) 
: Promise<boolean> =>{

    const isMatch = await bcrypt.compare(plainText , userPassword)
    return isMatch

}

