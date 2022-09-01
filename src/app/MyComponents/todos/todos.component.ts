import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() { 
    this.todos=[
      {
        sno: 1,
        title: "This is title",
        desc: "This is description",
        active: true
      }, 
      {
        sno: 2,
        title: "This is title",
        desc: "This is description",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo : Todo){
    const index = this.todos.indexOf(todo);    
    this.todos.splice(index, 1);
    console.log("Todo deleted!");
    
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }
}
