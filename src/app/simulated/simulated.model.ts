import { Alternative } from "../alternative/alternative.model";
import { Question } from "../question/question.model";

export class AnswerDTO {
    question : Question;
    alternativeSelected : Alternative;
}

export class SimulatedAnswersDTO{
    answers: AnswerDTO [];
    score: number;
}