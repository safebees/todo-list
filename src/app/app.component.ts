import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  todoInput: string = '';

  myTodos = ['Fiire nach dere langwiilige Lektion'];

  addTodoItem() {
    this.myTodos.push(this.todoInput);
    this.myTodos.sort((a, b) => a.localeCompare(b));
  }

  removeTodo(todoToRemove: string) {
    this.myTodos = this.myTodos.filter((todo) => todo !== todoToRemove);
  }
}
