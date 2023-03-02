import { Alternative } from "../alternative/alternative.model";
import { Question } from "../question/question.model";

export class QuestionWithAlternatives{
    question: Question;
    alternativas : Alternative[];
}