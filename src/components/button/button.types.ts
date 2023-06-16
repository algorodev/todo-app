import { MouseEvent } from 'react'

export type ButtonProps = {
  id: string
  label: string
  onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void
}
