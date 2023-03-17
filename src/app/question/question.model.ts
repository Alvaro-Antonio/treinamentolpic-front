import { Feedback } from "../feedback/feedback.model";
import { User } from "../user/user.model";

export interface Question{
    id: string;
    title: string;
    feedback: Feedback;
    userCreate: User;
    
}