export interface Line {
    no: number;
    code: string;
}

export interface Snippet {
    name: string;
    description: string;
    lines: Line[]
}