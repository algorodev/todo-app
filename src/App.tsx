import Home from './pages/home/Home'
import { Fragment, useState } from 'react'
import Modal from './components/modal/Modal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Fragment>
      {isModalOpen && (
        <Modal title='New Todo' onClose={() => setIsModalOpen(false)}>
          <p>Modal works!</p>
        </Modal>
      )}
      <Home onButtonClick={() => setIsModalOpen(true)} />
    </Fragment>
  )
}

export default App
