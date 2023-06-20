export interface TodoI {
  id: number
  title: string
  time: string,
  tag: string
  finished: boolean
  createdAt: Date
}

type OmitCreateTodo = 'id' | 'finished' | 'time' | 'createdAt'
export type CreateTodo = Omit<TodoI, OmitCreateTodo> & { time: Date }
