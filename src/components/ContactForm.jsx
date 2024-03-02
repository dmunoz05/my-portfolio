import { useState } from "react"
import axios from "axios"

const ContactForm = () => {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [empyes, setEmpyes] = useState(false)

  const onSubmit = () => {
    if (firstName == '' || secondName == '' || email == '' || message == '') {
      setEmpyes(true)
      setTimeout(() => {
        setEmpyes(false)
      }, [5000])
      return
    }
    sendEmail()
  }

  const sendEmail = async () => {
    axios.post('https://send-email-porfolio.vercel.app/send/mail',
      {
        "firstname": firstName,
        "secondname": secondName,
        "email": email,
        "message": message
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmpyes(false)
  }


  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder='First name'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            {
              !empyes ? (
                null
              ) : (
                <span className='block py-1 h-6 text-xs text-red-500'>{firstName == '' ? 'This field is required' : null}</span>
              )
            }
          </div>

          <div className='grow'>
            <input
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
              autoComplete='off'
              placeholder='Last name'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            {
              !empyes ? (
                null
              ) : (
                <span className='block py-1 h-6 text-xs text-red-500'>{secondName == '' ? 'This field is required' : null}</span>
              )
            }
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='you@email.com'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            {
              !empyes ? (
                null
              ) : (
                <span className='block py-1 h-6 text-xs text-red-500'>{email == '' ? 'This field is required' : null}</span>
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
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            >
            </textarea>
            {
              !empyes ? (
                null
              ) : (
                <span className='block py-1 h-6 text-xs text-red-500'>{message == '' ? 'This field is required' : null}</span>
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
    </div>
  )
}

export default ContactForm