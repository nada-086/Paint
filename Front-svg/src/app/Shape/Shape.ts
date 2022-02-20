export class Shape {
    type : string =""; 
    color: string = "";
    id: number = 0;
    status = "";
    startDraw(event: MouseEvent) {};
    draw(event: MouseEvent){};
    setColor(fill : string, stroke: string){};
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