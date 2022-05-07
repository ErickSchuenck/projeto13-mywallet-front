import React from 'react'
import { Link } from "react-router-dom";

export default function LoginScreen() {
  return (
    <>
      <div className='logo'>
        <p>My Wallet</p>
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'E-mail'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Senha'} />
      </div>
      <div className='confirm-button'>
        <button>
          <p>Entrar</p>
        </button>
      </div>
      <div className='footer-text'>
        <Link to={'/signUp'}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </div>
    </>
  )
}
