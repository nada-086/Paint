export class Shape {
    width: number = 0;
    length: number = 0;
    x: number = 0; 
    y: number = 0;
    color: string = "";
    id: number = 0;
    startDraw(event: MouseEvent) {};
    draw(event: MouseEvent){};
    setColor(){};
    resize(event: MouseEvent) {};
    startMove(event: MouseEvent){};
    move(event: MouseEvent, id: number) {};
    remove(array: Shape[] = []) { };
    select(x: number, y: number): any{ };
}