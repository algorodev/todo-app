import useTodoForm from '../../hooks/useTodoForm'
import { Controller, Form } from 'react-hook-form'
import Button from '../button/Button'
import InputControl from '../inputControl/InputControl'
import './TodoForm.scss'

const TodoForm = () => {
  const { control, errors, onSubmit } = useTodoForm()

  return (
    <Form className='todo-form' control={control}>
      <Controller name='title'
                  control={control}
                  render={({field}) =>
                    <InputControl id='todo-title-input'
                                  field={field}
                                  type='text'
                                  label='Title'
                                  error={errors.title?.message}
                                  required />
      } />
      <Controller name='time'
                  control={control}
                  render={({field}) =>
                    <InputControl id='todo-time-input'
                                  field={field}
                                  type='datetime-local'
                                  label='Time'
                                  error={errors.time?.message}
                                  required />
      } />
      <Controller name='tag'
                  control={control}
                  render={({field}) =>
                    <InputControl id='todo-tag-input'
                                  field={field}
                                  type='text'
                                  label='Tag'
                                  error={errors.tag?.message}
                                  required />
      } />
      <Button id='todo-form-submit'
              label='Submit'
              onButtonClick={onSubmit}
              disabled={false}/>
    </Form>
  )
}

export default TodoForm
