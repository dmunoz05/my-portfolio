import { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [empyes, setEmpyes] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    if (firstName == '' || secondName == '' || email == '' || message == '') {
      setEmpyes(true)
      setTimeout(() => {
        setEmpyes(false)
      }, [5000])
      return
    }
    setLoading(true)
    sendEmail()
  }

  function clearFields() {
    setEmpyes(false)
    setFirstName('')
    setSecondName('')
    setEmail('')
    setMessage('')
    setShowMessage(true)
    setLoading(false)
    setTimeout(() => {
      setShowMessage(false)
    }, [15000])
  }

  const sendEmail = async () => {
    axios.post('https://send-email-porfolio.vercel.app/send/mail',
      {
        'firstname': firstName,
        'secondname': secondName,
        'email': email,
        'message': message
      })
      .then(function (response) {
        clearFields()
      })
      .catch(function (error) {
        setLoading(false)
        setEmpyes(false)
      });
  }

  return (
    <div className='w-full'>
      {loading ? (
        <div className='relative py-16'>
          <div className='banter-loader'>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
            <div className='banter-loader__box'></div>
          </div>
        </div>
      ) : !showMessage ? (
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='grow'>
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value.trim())}
                placeholder='First name'
                className='border border-zinc-200 rounded-full py-2 px-4 w-full'
              />
              {
                !empyes ? (
                  null
                ) : (
                  <span className='block py-1 h-6 text-xs text-red-500'>{firstName == '' ? 'Este campo es obligatorio' : null}</span>
                )
              }
            </div>

            <div className='grow'>
              <input
                value={secondName}
                onChange={(event) => setSecondName(event.target.value.trim())}
                autoComplete='off'
                placeholder='Last name'
                className='border border-zinc-200 rounded-full py-2 px-4 w-full'
              />
              {
                !empyes ? (
                  null
                ) : (
                  <span className='block py-1 h-6 text-xs text-red-500'>{secondName == '' ? 'Este campo es obligatorio' : null}</span>
                )
              }
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='grow'>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value.trim())}
                placeholder='you@email.com'
                className='border border-zinc-200 rounded-full py-2 px-4 w-full'
              />
              {
                !empyes ? (
                  null
                ) : (
                  <span className='block py-1 h-6 text-xs text-red-500'>{email == '' ? 'Este campo es obligatorio' : null}</span>
                )
              }
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='grow'>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder='Message'
                className='border border-zinc-200 rounded-xl py-4 px-4 w-full'
              >
              </textarea>
              {
                !empyes ? (
                  null
                ) : (
                  <span className='block py-1 h-6 text-xs text-red-500'>{message == '' ? 'Este campo es obligatorio' : null}</span>
                )
              }
            </div>
          </div>
          <div className='flex justify-end'>
            <button onClick={() => onSubmit()} className='px-4 py-2 text-white font-medium rounded-full bg-gray-500'>
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-4'>
          <div className='text-center w-full'>
            <p className='text-2xl text-sky-300'>
              Tu mensaje ha sido enviado, gracias por contactarme.
            </p>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default ContactForm