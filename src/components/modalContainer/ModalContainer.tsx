import { ModalProps } from '../modal/modal.types'
import './ModalContainer.scss'
import close from '../../assets/icons/close.svg'

const ModalContainer = ({ title, children, onClose }: ModalProps) => (
  <section className='modal'>
    <div className='modal__header'>
      <p className='modal__title'>{title}</p>
      <img className='modal__action' src={close} alt='close-icon' onClick={onClose} />
    </div>
    <div className='modal__body'>
      {children}
    </div>
  </section>
)

export default ModalContainer
