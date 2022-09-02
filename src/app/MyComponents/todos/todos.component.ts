import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos') || '{}');
    // Trying to do same thing in understable manner but doesn't work :\
    // if(localStorage.getItem('todos') == null){
    //   this.todos = [];
    // }else{
    //   this.todos = JSON.parse(localStorage.getItem('todos'));
    // }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log('Todo deleted!');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log('Todo added');
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
