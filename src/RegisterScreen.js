import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function RegisterScreen() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState(
    {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    }
  )

  return (
    <>
      <div className='logo'>
        <p>My Wallet</p>
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Nome'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'E-mail'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Senha'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Confirme a senha'} />
      </div>
      <div className='confirm-button'>
        <button>
          <p>Cadastrar</p>
        </button>
      </div>
      <div className='footer-text'>
        <Link to={'/'}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </div>
    </>
  )
}
