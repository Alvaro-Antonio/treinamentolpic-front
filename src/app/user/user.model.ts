export class User{
    id!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
    lastLoginDate!: string;
    profilePicture!: string;
    creationDate!: string;
    
}

export interface PasswordDTO{
    password: string;
    newpassword:string;
}