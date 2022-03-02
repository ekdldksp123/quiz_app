export interface Questions {
    count: number,
} 

export interface Category {
    id: number,
    name: string,
    total?: number,
    easy?: number,
    medium?: number,
    hard?: number
}

export interface Difficulty {
    id: string,
    name: string,
}

export interface Type {
    id: string,
    name: string,
}

export interface QuizProps {
    amount: Questions,
    categories: Category[],
    levels: Difficulty[],
    types: Type[],
}

export interface Quiz {
    quiz: QuizContent,
}

export class NoteProps implements Quiz {
    quiz: QuizContent;
    index: number;
    amount: number;
}

export class QuizResult implements Quiz {
    quiz: QuizContent;
    right: number;
    setRight: (v:number) => void;
    wrong: number;
    setWrong: (v:number) => void;
}

export interface QuizContent {
    index?: number,
    amount: number,
    category: string,
    correct?: string,
    incorrect?: string[],
    options: string[],
    difficulty: string,
    question: string,
    type: string,
    selected?: string,
}

export interface NextBtnProps {
    id: string,
}

export interface ChartProps {
    time:string,
    category:string,
    level:string,
    right:number,
    wrong:number,
}
