export class Shape {
    color: string = "";
    type: string = "";
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