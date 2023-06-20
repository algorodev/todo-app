import { ControllerRenderProps } from 'react-hook-form'

export type InputProps = {
  id: string
  type: string
  required: boolean
  field: ControllerRenderProps
  label: string
  error?: string
}
