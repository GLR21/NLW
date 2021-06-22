import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest
{
    name  : string;
    email : string;
    admin ?: boolean
}

class CreateUserService
{
    async execute( { name , email  , admin  } : IUserRequest )
    {
        const userRepositories = getCustomRepository( UserRepositories );

        if( !email )
        {
            throw new Error( "E-mail incorrect" );
        }

        const userExists = await userRepositories.findOne({ email });

        if( userExists )
        {
            throw new Error( "This e-mail is already been used" );
        }

        const user = userRepositories.create
        (
            {
                name,
                email,
                admin
            }
        );
        
        await userRepositories.save( user );

        return user;
    }
}

export { CreateUserService }