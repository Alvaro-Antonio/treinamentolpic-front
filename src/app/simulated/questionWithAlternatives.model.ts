import { Alternative } from "../alternative/alternative.model";
import { Question } from "../question/question.model";

export interface QuestionWithAlternatives{
    question: Question ;
    alternatives: Alternative[];
}