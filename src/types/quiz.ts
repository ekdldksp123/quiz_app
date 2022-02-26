export interface Questions {
    count: number,
    // plus: () => void,
    // minus: () => void,
    // set: (value:string) => void 
} 

export interface Category {
    id: number,
    name: string,
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
    // confirm?: (amount: string, category: string, level: string, type: string) => void
}

