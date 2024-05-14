import jwt from "jsonwebtoken"


export const generateToken = async  ( userId : string ) 
: Promise<string>  => {
  
    const token = await jwt.sign({ id :userId} , "SecretKey")
    return token
}



export const validateToken = async ( token : string ) => {
     
       const isValidToken = await jwt.verify(token , "SecretKey")
       return isValidToken

}