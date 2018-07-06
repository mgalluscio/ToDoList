import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  private nextID: number;

  constructor() { 
    this.todos = [
      new Todo(0,"Make Dinner tonight!"),
      new Todo(1,"Fold the laudry."),
      new Todo(2,"Something else")
    ];
    this.nextID = 3;
  }
  public addTodo(text:string): void {
    console.log(this.todos);
    let todo = new Todo(this.nextID, text);
    this.todos.push(todo);
    this.nextID++;
  }
  public getTodos(): Todo[] {
    return this.todos;
  }
  public removeTodo(id:number): void{
    this.todos = this.todos.filter((todo)=> todo.id !== id);
  }
}
