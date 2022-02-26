import { Difficulty, Type } from "../types/quiz"

export const Levels:Difficulty[] = [
    { id:'0', name: 'Any' },
    { id:'easy', name: 'Easy' },
    { id:'medium', name: 'Medium' },
    { id:'hard', name: 'Hard' },
];

export const Types:Type[] = [
    { id:'0', name: 'Any' },
    { id:'multiple', name: 'Multiple Choice' },
    { id:'boolean', name: 'True / False' },
];

