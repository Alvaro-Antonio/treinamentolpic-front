import { Injectable } from "@angular/core";
import { Service } from "../shared/interface/service";
import { QuestionWithAlternatives } from "./questionWithAlternatives.model";

@Injectable({
    providedIn : 'root'
})
export class SimulatedService implements Service<QuestionWithAlternatives>{
    
}