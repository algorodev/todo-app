import { useForm } from 'react-hook-form'
import { CreateTodo } from '../types/todo.types'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateTodoSchema } from '../utils/schemas/todo.schemas'

const useTodoForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<CreateTodo>({
    resolver: yupResolver(CreateTodoSchema),
    reValidateMode: 'onChange'
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    console.log(data.time.getUTCHours())
    console.log(data.time.toLocaleTimeString())
  })

  return {
    control,
    errors,
    onSubmit
  }
}

export default useTodoForm
