export interface ITarea {
    id: string;
    titulo: string;
    descripcion: string;
    completada: boolean;
}

export class TareaModel implements ITarea {
    constructor(
        public id: string,
        public titulo: string,
        public descripcion: string,
        public completada: boolean = false
    ) {}
}