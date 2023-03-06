import { v4 as uuid } from 'uuid'

export default class Todo {
  id: string
  title: string
  completed = false

  constructor(params: { title: string }) {
    this.id = uuid()
    this.title = params.title
  }

  toggleCompleted() {
    this.completed = !this.completed
  }
}
