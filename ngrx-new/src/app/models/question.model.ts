export interface Question {
    readonly caption: string;
    readonly answers: string[];
    readonly correctIndex: number;
}