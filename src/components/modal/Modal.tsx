import ReactDOM from 'react-dom'
import { ModalProps } from './modal.types'
import Backdrop from '../backdrop/Backdrop'
import ModalContainer from '../modalContainer/ModalContainer'

const Modal = ({ title, children, onClose }: ModalProps) => (
  <section>
    {ReactDOM.createPortal(
      <Backdrop onClose={onClose}/>,
      document.getElementById('modal') as HTMLElement
    )}
    {ReactDOM.createPortal(
      <ModalContainer title={title} onClose={onClose}>
        {children}
      </ModalContainer>,
      document.getElementById('modal') as HTMLElement
    )}
  </section>
)

export default Modal
