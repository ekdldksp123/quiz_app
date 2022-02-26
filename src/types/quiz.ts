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

