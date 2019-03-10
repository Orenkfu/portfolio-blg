import { Answer } from './answer';
export interface Question {
    body: string;
    answers: Answer[];
}