import { Alternative } from "../alternative/alternative.model";
import { Question } from "../question/question.model";

export interface AnswerDTO {
    question : Question;
    alternativeSelected : Alternative;
}

export interface SimulatedAnswersDTO{
    answers: AnswerDTO [];
    score: number;
}