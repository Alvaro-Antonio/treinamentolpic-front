import { Question } from "../question/question.model";

export interface Alternative{
    id: string;
    title: string;
    correct: boolean;
    question: Question;
}

export interface AlternativeCreateDTO{
    title: string;
    correct: boolean;
    question: Question;
}