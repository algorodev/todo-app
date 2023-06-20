import { string, date, object } from 'yup'

export const CreateTodoSchema = object({
  title: string().required('"title" is a required field'),
  time: date().required('"time" is a required field'),
  tag: string().required('"tag" is a required field')
})
