import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 py-4 text-center w-full flex flex-col items-center border-t'>
        <ul className='flex gap-5 text-white text-sm'>
            <li>© 2024 Dario Colaciuri</li>
            <li><a href=""><i className="bi bi-instagram"></i></a></li>
            <li><a href=""><i className="bi bi-twitter-x"></i></a></li>
            <li><a href=""><i className="bi bi-facebook"></i></a></li>
            <li><a href=""><i class="bi bi-whatsapp"></i></a></li>
        </ul>
    </div>
  )
}

export default Footer