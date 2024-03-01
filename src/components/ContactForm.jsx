import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    debugger
    sendEmail(data);
  };

  const apiGmail = 'https://send-email-porfolio.vercel.app/send/mail';

  const sendEmail = async () => {
    alert('')
    const result = await fetch(apiGmail, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    axios.post('https://send-email-porfolio.vercel.app/send/mail')
      .then(res => {
        setPosts(res.data);
      });
  }


  return (
    <div className='w-full'>
      <form onSubmit={onSubmit} className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              placeholder='First name'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>This field is required</span>
          </div>

          <div className='grow'>
            <input
              placeholder='Last name'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>This field is required</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              placeholder='you@email.com'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>This field is required</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='grow'>
            <textarea
              placeholder='Message'
              className='border border-zinc-200 rounded-full py-2 px-4 w-full'
            >
            </textarea>
            <span className='block py-1 h-6 text-xs text-red-500'>This field is required</span>
          </div>
        </div>
        <div className='flex justify-end'>
          <button type='submit' className='px-4 py-2 text-white font-medium rounded-full bg-gray-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;