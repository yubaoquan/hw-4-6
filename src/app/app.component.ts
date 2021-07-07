import { Component } from '@angular/core';

interface TodoItem {
  title: string,
  id: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'a-todo';

  todoTitle = ''

  todos: TodoItem[] = [
    { title: '张三', id: 1},
    { title: '李四', id: 2 },
  ]

  handleAddClick() {
    console.info(`add item`, this.todoTitle)
    const title = this.todoTitle.trim()
    if (!title || this.todos.find(item => item.title === title)) return
    this.todos.push({ title, id: Date.now() })
    this.todoTitle = ''
  }

  handleRemoveClick(index: number) {
    this.todos.splice(index, 1)
  }
}
