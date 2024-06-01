import { useEffect, useState } from 'react'
import Moon from '../assets/icons/Moon.jsx';
import Sun from '../assets/icons/Sun.jsx';

const ButtonColor = () => {
  const [darkMode, setDarkMode] = useState(false);

  function changeColor() {
    debugger
    setDarkMode(!darkMode)
    const html = document.querySelector('html');
    html.classList.toggle('dark');
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('dark');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
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