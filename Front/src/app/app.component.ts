import { clear } from './shapes/clear';
import { shapeFactory } from './shapes/shapeFactory';
import { ShapesComponent } from './shapes/shapes.component';
import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shape } from './shapes/Shape';
import { operations } from './shapes/operations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) {}
  title: string = "Document Name";
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  
  private ctx: CanvasRenderingContext2D;


  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  shape = new Shape();
  idCounter: number = 0;
  shapes: Shape[] = [];
  factory = null;
  operation = null;

  newFile(name: string = "") {
    // creating a new file and opening an existing file
    // can be done using a single operation or must be separated???
  }

  save(name: string = "") {
    
  }

  Delete(name: string = "") {
    // delete the file in the back
    // make the user confirm the deletion

  }

  undo() {
    
  }

  redo() {
    
  }
  // how will be the object distinguished for the next 3 operations
  copy() {
    // the object needed to be sent
  }

  cut() {
    // the object needed to be sent
  }

  resize() {
    this.operation.resize()
  }

  drop() {
    // the object needed to be sent and the new color
  }

  cursor() {
    // to select nothing on the screen

  }

  freehand() {
    // what will be sent
  }

  move() {
    // this.operation.move(id, x, y);
  }

  remove() {
    this.operation.clear(1);
  }

  selectColor(color: string = "") {
    this.operation.selectColor(1, color);
  }

  draw(shape: string = "") {
    this.factory = new shapeFactory(this.ctx);
    this.operation = new operations(this.ctx);
    this.shape = this.factory.getShape(shape);
    this.shape.id = this.idCounter;
    this.idCounter += 1;
    this.shape.x = 100;
    this.shape.y = 100;
    this.shape.draw(100, 100);
    this.shapes.push(this.shape);
    this.operation.array = this.shapes;
    console.log(this.shapes);
  }

  sendRequest(operation: string = "", parameter: string = "") {
    this.http.get('http://localhost:8090/', { // The request never completed
      responseType: 'text', // Needed to be edited
      params: {
        operation: operation,
        parameter: parameter
      },
      observe:'response'
    }).subscribe(response => {
      
    }) 
  }
}
