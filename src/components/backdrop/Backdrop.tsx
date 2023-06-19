import { BackdropProps } from './backdrop.types'
import './Backdrop.scss'

const Backdrop = ({onClose}: BackdropProps) =>
  <section className='backdrop' onClick={onClose} />

export default Backdrop
