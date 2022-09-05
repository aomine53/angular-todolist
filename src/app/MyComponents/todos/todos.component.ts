import { JsonPipe } from '@angular/common';
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
  
  addTodo(todo: Todo) {
    this.todos.push(todo);
    console.log('Todo added');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log('Todo deleted!');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
