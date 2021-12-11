import { HttpClient } from '@angular/common/http';
import { Component, Renderer2, ViewChild, ElementRef, OnInit, Injectable } from '@angular/core';
import { shapeFactory } from './ShapeFactory';
import { Shape } from './Shapes/Shape';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent {
  [x: string]: any;
  title = "Paint";

  constructor(
    private renderer: Renderer2, private _httpClient: HttpClient) {
  }
  @ViewChild('svg', { static: true }) svg: ElementRef;
  //operations flags
  isDrawing: boolean = false;
  isDown: boolean = false;
  isMoving = false;
  isRemove = false;
  isResize = false;
  isCopy = false;
  id: number = 0;
  Shapes: Shape[] = [];
  Shape = new Shape();
  selectedShape = null;
  color : boolean = false;
  isClick = false;
  undo = [];
  redo = [];
  indx = -1;
  counter = 0;
  undoFlag = false;
  fill ="#000000";
  stroke = "#000000";
  expression = null;
  path: string = '';
  name: string = '';
  xml: string = '';
  json: string = '';
  
  
  colorButton(){
    this.selectStart();
    this.color = true;

  }
  onClickfill(){
    if(!this.color){
      this.selectStart();
      this.color = true;
    }
  }


  onChange(){
    var shape = document.getElementById(this.selectedShape.id);
    shape.setAttribute("fill",this.fill.toString());
  }


  drawButton(shape: string) {
    const factory = new shapeFactory(this.renderer, this.svg);
    this.Shape = factory.getShape(shape);
    this.isDrawing = true;
  }

  ngAfterViewInit() {
  }

  undo_send() {
    for (var i = this.undo.length - 2; i >= 0; i--){
      if (this.undo[i][0].id == this.undo[this.undo.length - 1][0].id) {
        this.sendData('undo', `${this.undo[this.undo.length - 1][1]},${this.undo[i][0].type},${this.undo[i][0].getAttributes()}`)
        break;
      }
    }
  }

  undoButton() {
    this.undo_send();
    if(this.undo.length === 0) return;
    this.undoFlag = true;
    var shape = this.undo.pop();
    console.log(this.undo, "jo")
    if(shape[1] === "draw" || shape[1] === "copy"){
      var remove = document.getElementById(shape[0].id.toString())

      this.renderer.removeChild(this.svg.nativeElement, remove);
    }
    else if(shape[1] === "move"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.redo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      return;
    }
    else if(shape[1] === "resize"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.redo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      return;
    }
    else if(shape[1] === "remove"){
      shape[0].copy("L");
    }
    const factory = new shapeFactory(this.renderer, this.svg);
    var undoShape = factory.getShape(shape[0].type);
    undoShape.setAttributes(shape[0].getAttributes())
    this.redo.push([undoShape, shape[1], shape[2]]);
  }

  selectStart(){
    for(let i = 0; i < this.Shapes.length; i++){
      if(this.Shapes[i].getType() === "line" || this.Shapes[i].getType() === "triangle"){
        this.Shapes[i].startSelect();
      }
    }
  }

  moveButton() {
    if(this.isMoving) return;
    this.isMoving = true;
    this.selectStart();
    console.log(this.isMoving);
    this.redo = [];
  }

  resizeButton() {
    this.isResize = true;
    this.selectStart();
    this.redo = [];
  }

  redoButton() {
    if(this.redo.length === 0) return;
    var shape = this.redo.pop();
    console.log(shape)
    if(shape[1] === "draw" || shape[1] === "copy"){
      shape[0].copy("L");
    }
    else if(shape[1] === "move"){
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.undo.push([undoShape, shape[1], shape[2]]);
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      return;
    }
    else if(shape[1] === "resize"){
      console.log(this.undo, "resize")
      const factory = new shapeFactory(this.renderer, this.svg);
      var undoShape = factory.getShape(shape[0].type);
      undoShape.setAttributes(this.Shapes[shape[2]].getAttributes())
      this.undo.push([undoShape, shape[1], shape[2]]);
      shape[0].setAttributes(shape[0].getAttributes());
      this.Shapes[shape[2]].setAttributes(shape[0].getAttributes());
      console.log(shape[0].getAttributes());
      this.Shapes[shape[2]].set();
      return
    }
    else if(shape[1] === "remove"){
      var remove = document.getElementById(shape[0].id.toString())
      this.renderer.removeChild(this.svg.nativeElement, remove);
    }
    this.undo.push(shape);
    console.log(this.undo, 'undo');
  }

  select(event: MouseEvent, operation : string) {
    var x = event.offsetX;
    var y = event.offsetY;
    for (var i = 0; i < this.Shapes.length; i++){
      if (this.Shapes[i].select(x, y) == true) {
        this.selectedShape = this.Shapes[i];
        this.indx = i;
      }
      if(this.selectedShape !== null && operation !== "copy"){
        if (!this.undoFlag) {
          const factory = new shapeFactory(this.renderer, this.svg);
          var shape = factory.getShape(this.selectedShape.type);
          shape.setAttributes(this.selectedShape.getAttributes());
          this.undo.push([shape, operation, this.indx]);
          console.log(this.undo, "select")
          this.undoFlag = true
        }
      }
    }
  }

  copyButton() {
    this.isCopy = true;
    this.selectStart();
    console.log("copy");
    this.redo = [];
  }

  removeButton() {
    this.isRemove = true;
    this.selectStart();
    this.redo = [];
  }

  onClick(event: MouseEvent){
    if(this.counter === 2) return;
    if(this.isDrawing && this.Shape.type == "triangle"){
      this.Shape.id = this.id;
        this.Shape.startDraw(event);
        this.counter++;
        this.isClick = true;
    }
    this.redo = [];
  }

  onMouseDown(event: MouseEvent) {
    if (this.isDrawing && this.Shape.type !== "triangle") {
      this.Shape.id = this.id;   
      this.id++;
      this.Shape.startDraw(event);
      this.counter++;
      this.sendData('shape', `${this.Shape.id},${this.Shape.type},${this.Shape.getAttributes()}`);
      this.redo = [];
    }
    else if (this.isMoving) {
      this.select(event, "move");
      this.sendData('move', `${this.selectedShape.id},${this.selectedShape.type},${this.Shape.getAttributes()}`);
    }
    else if (this.isRemove) {
      this.select(event , "remove");
      this.selectedShape.remove();
      this.sendData('remove', `${this.selectedShape.id}`);
    }
    else if (this.isCopy) {
      this.select(event, "copy");
      const factory = new shapeFactory(this.renderer, this.svg);
      var shape = factory.getShape(this.selectedShape.type);
      var shape2 = factory.getShape(this.selectedShape.type);
      shape.setAttributes(this.selectedShape.getAttributes());
      shape.id = this.id;
      this.id++;
      this.Shapes.push(shape);
      shape.copy("copy");
      shape2.setAttributes(shape.getAttributes());
      this.undo.push([shape2, "copy", this.indx]); 
      this.sendData('copy', `${this.selectedShape.id},${this.id}`);
    }
    else if (this.isResize) {
      this.select(event, "resize");
      this.sendData('resize', `${this.selectedShape.id},${this.selectedShape.type},${this.selectedShape.getAttributes()}`);
    }
    else if(this.isRemove){
      this.selectedShape.remove();
    }
    else if(this.color){
      this.select(event, "resize");
      var x = document.getElementById(this.selectedShape.id);
      x.setAttribute("fill", this.fill);
      this.sendData('color', `${this.selectedShape.id},${this.selectedShape.getAttributes()}`)
    }
    this.isDown = true;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDrawing && this.isDown) {
        if(this.Shape.type === "triangle" && !this.isClick) return;
        this.Shape.draw(event);
    }
    if (this.isMoving && this.isDown && this.selectedShape !== null) {
      if(this.selectedShape === null){
        this.isMoving = false;
        return;
      }
      this.selectedShape.move(event,this.selectedShape.id);
    }
    if (this.isResize && this.isDown && this.selectedShape !== null) {
      this.selectedShape.resize(event);
    }
  }

  onMouseUp(event: MouseEvent) {
    if (this.isDrawing) {
      if(this.Shape.type === "triangle"){
        if(this.counter < 2) return
        this.id++;
      }
      this.isDrawing = false;
      this.isDown = false;
      this.Shapes.push(this.Shape);
      this.undo.push([this.Shape, "draw", 1])
    }
    this.isMoving = false;
    this.isDown = false;
    this.isRemove = false;
    this.isResize = false;
    this.isCopy = false;
    this.selectedShape = null;
    this.counter = 0;
    this.undoFlag = false;
    this.isClick = false;
    for(let i = 0; i < this.Shapes.length ; i++){
        this.Shapes[i].endSelect();
    }  
  }
  

  open() {
    document.getElementById('form1').style.display = 'block';
  }

  save() {
    document.getElementById('form1').style.display = 'block';
  }

  submit() {
    if (this.name !== '' && this.path !== '' && (this.xml === 'true' || this.json === 'true')) {
      document.getElementById('form1').style.display = 'none';
    }
    console.log(this.name, this.path, this.json, this.xml)
  }

  cancel() {
    document.getElementById('form1').style.display = 'none';
  }

  clear() {
    for (let i = 0; i < this.Shapes.length; i++){
      this.Shapes[i].remove();
    }
    this.isDrawing = false;
    this.isDown = false;
    this.isMoving = false;
    this.isRemove = false;
    this.isResize = false;
    this.isCopy = false;
    this.id = 0;
    this.Shapes = [];
    this.Shape = new Shape();
    this.selectedShape = null;
    this.color = false;
    this.isClick = false;
    this.undo = [];
    this.redo = [];
    this.indx = -1;
    this.counter = 0;
    this.undoFlag = false;
    this.fill ="#000000";
    this.stroke = "#000000";
  }

  new() {
    this.clear();
    this.sendData('new', ``);
  }

  sendData(operation: string = '', param) {
    if (operation !== 'load') {
      this._httpClient.get(`http://localhost:8080/paintapp/${operation}`, {
        responseType: 'text',
        params: {
          shape: param
        },
      });
    }
    else {
      this._httpClient.get(`http://localhost:8080/paintapp/${operation}`, {
        responseType: 'text',
        params: {
          shape: param
        },
        observe: 'response'
      }).subscribe(response => {
        this.expression = response.body
      });
      var array = this.expression.split(", ");
      var attr = [];
      const factory = new shapeFactory(this.renderer, this.svg);
      for (var i = 0; i < array.length; i++){
        if (array[i] == 'rectangle') {
          this.Shape = factory.getShape('rectangle');
          attr = array.splice(i + 1, 6);
          this.Shape.setAttributes(attr.join(", "));
        }
        else if (this.expression[i] == 'triangle') {
          this.Shape = factory.getShape('triangle');
          attr = array.splice(i + 1, 8);
          this.Shape.setAttributes(attr.join(", "));
        }
        else if (this.expression[i] == 'circle') {
          this.Shape = factory.getShape('circle');
          attr = array.splice(i + 1, 5);
          this.Shape.setAttributes(attr.join(", "));
        }
        else if (this.expression[i] == 'ellipse') {
          this.Shape = factory.getShape('ellipse');
          attr = array.splice(i + 1, 6);
          this.Shape.setAttributes(attr.join(", "));
        }
        else if (this.expression[i] == 'line') {
          this.Shape = factory.getShape('line');
          attr = array.splice(i + 1, 6);
          this.Shape.setAttributes(attr.join(", "));
        }
      }
    }
  }
}

