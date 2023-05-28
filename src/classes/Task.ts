export default class Task {
  id: number
  text: string
  completed: boolean

  constructor(id: number, text: string, completed = false) {
    this.id = id
    this.text = text
    this.completed = completed
  }
}
