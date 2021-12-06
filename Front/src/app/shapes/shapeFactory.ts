export class Shape{
    length: number;
    width: number;
    x: number; 
    y: number;
    color: string;
    id: number;
    draw(w: number, l: number){};
    setColor(color: string){};
    resize(w: number, l: number){};
    move(x: number, y: number){};
    clear(){};
}

