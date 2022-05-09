import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';


export default function RegisterScreen() {

  const URL = 'http://localhost:5000/users';
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    if (userData.password !== userData.confirmPassword) {
      alert('Ops! Acho que ocorreu um erro na confirmação, por favor confira se as senhas estão iguais')
      setLoading(false)
      return
    }
    axios.post(URL, userData)
      .then(
        response => {
          console.log('sucesso');
          console.log(response);
          navigate('/')
        }
      )
      .catch(

        error => {
          console.log(error);
          console.log('erro');
          alert('Ops! algo deu errado, por favor revise as informações, se estiver tudo certo provavelmente é um erro do nosso servidor');
          setLoading(false)
        }
      )
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
          value={userData.name}
          onChange={(event) => setUserData({ ...userData, name: event.target.value })}

        />
      </div>

      <div className='user-input'>
        <input
          type={'text'}
          placeholder={'E-mail'}
          value={userData.email}
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}

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
