import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function RegisterScreen() {

  const URL = 'http://localhost:5000/messages';
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState(
    {
      password: ''
    }
  );

  const [userData, setUserData] = useState(
    {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    }
  );

  function registerUserData() {
    console.log(userData) // LEMBRE DE APAGAR ISSO
    if (userData.password !== userData.confirmPassword) {
      alert('Ops! Acho que ocorreu um erro na confirmação, por favor confira se as senhas estão iguais')
      return
    }
  }


  return (
    <>
      <div className='logo'>
        <p>My Wallet</p>
      </div>
      <div className='user-input'>
        <input
          type={'text'}
          placeholder={'Nome'}
          onChange={(event) => setUserData({ ...userData, name: event.target.value })}
          value={userData.name}
        />
      </div>

      <div className='user-input'>
        <input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          value={userData.email}
        />
      </div>

      <div className='user-input'>
        <input
          type={'password'}
          placeholder={'Senha'}
          onChange={(event) => setUserData({ ...userData, password: event.target.value })}
          value={userData.password}
        />
      </div>

      <div className='user-input'>
        <input
          type={'password'}
          placeholder={'Confirme a senha'}
          onChange={(event) => setUserData({ ...userData, confirmPassword: event.target.value })}
          value={userData.confirmPassword}
        />
      </div>

      <div className='confirm-button'>
        <button onClick={() => registerUserData()}>
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
