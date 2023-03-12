//import { UserType } from "src/app/user/usertype.enum";

export interface LoggedUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  //type: UserType;
  token: string;
}
