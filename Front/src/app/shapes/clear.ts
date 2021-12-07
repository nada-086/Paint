export class clear{
    clear(array: shape[], id: number) {
        let index = array.findIndex(item => item.id === id);
        array.splice(index, 1);
    }
}

export interface shape{
    length: number;
    width: number;
    x: number; 
    y: number;
    color: string;
    id: number;
    draw(w: number, l: number);
    setColor(color: string);
    resize(w: number, l: number);
    move(x: number, y: number);
    clear();
}