import React, {useState} from 'react'
import BTC from '../assets/bitcoin.png'
import X from '../assets/x.png'

function Modal({name, major, interest}) {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal);
    }

  return (
    <div>
        <button onClick={toggleModal} className='opacity-5 hover:opacity-100 bg-gray-400 p-2 rounded hover:bg-gray-800'>Click Me</button>
        

       {
        modal && (
            <div className='modal'>
            <div className='overlay' onClick={toggleModal}>
                <div className='modal-content'>
                    <h2 className='text-4xl'>Hello, I'm {name}.</h2>
                    <p>This is meant to be a small easter egg lol. You have a good eye. Just a little about me, buy crypto! My major is {major} and I really like {interest}.</p>

                    <div className='flex align-self-center justify-center'>
                    <img  src={BTC} /><img  src={BTC} /><img  src={BTC} /><img  src={BTC} />
                        </div>
                </div>

            <button className='close-modal bg-gray-400 rounded-full' onClick={toggleModal}>
                <img src={X} />
            </button>
            </div>

        </div>
        )
       }

    </div>
  )
}

export default Modal