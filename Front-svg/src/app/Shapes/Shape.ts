export class Shape {
    type : string =""; 
    color: string = "#000000";
    id: number = 0;
    startDraw(event: MouseEvent) {};
    draw(event: MouseEvent){};
    resize(event: MouseEvent) {};
    startSelect(){};
    endSelect(){};
    move(event: MouseEvent, id: number) {};
    remove(array: Shape[] = []) { };
    select(x: number, y: number): any{ };
    getAttributes():string{
        return null;
    }
    copy(operation : string){};
    setAttributes(attributes: string){};
    getType():string{
        return this.type;
    }
    set(){}
}