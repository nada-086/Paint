import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) {}
  title:string = 'Document Name';

  onClick(operation: string = "", parameter: string = "") {
    
  }

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
    // the object and the new dimensions
    // the resize operation will be done using drag and drop or using a box and the user enter the new dimensions
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

  remove() {
    // the object needed to sent to the database to remove the corresponding object
  }

  createShape(shape: string = "") {
    // send the object name
    // ask the user to enter the dimensions of the new shape or make drag and drop
    // ask the user to enter the position of the object on the screen
  }

  selectColor(color: string = "") {
    // the rgb code will be sent
    // if the object has no color, so it will be considered as setting operation
    // else if the object is already has a color, then it will be considered as resetting operation
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
