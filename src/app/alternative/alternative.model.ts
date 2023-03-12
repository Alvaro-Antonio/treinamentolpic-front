import { Question } from "../question/question.model";

export class Alternative{
    id: string;
    title: string;
    correct: boolean;
    question: Question;
}

export class AlternativeCreateDTO{
    title: string;
    correct: boolean;
    question: Question;
}