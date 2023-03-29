import { User } from "../user/user.model";
import { Achievement } from "./achievement.model";

export interface Indicators{
    score : number;
    achievements : Achievement[];
    user : User;
}