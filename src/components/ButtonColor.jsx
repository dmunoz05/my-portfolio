import { useEffect, useState } from 'react'
import Moon from '../assets/icons/Moon.jsx';
import Sun from '../assets/icons/Sun.jsx';

const ButtonColor = () => {
  const [darkMode, setDarkMode] = useState(false);

  function changeColor() {
    setDarkMode(!darkMode)
    const html = document.querySelector('html');
    html.classList.toggle('dark');
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('dark');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center bg-black p-2 rounded-full'>
      {darkMode ? (
        <button
          className='flex flex-col items-center justify-center'
          onClick={() => changeColor()}>
          <Moon />
        </button>
      ) : (
        <button
          className='flex flex-col items-center justify-center'
          onClick={() => changeColor()}>
          <Sun />
        </button>
      )}
    </div>
  )
}

export default ButtonColor