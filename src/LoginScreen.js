import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function LoginScreen() {

  const URL = 'http://localhost:5000/login'
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    }
  )

  function enterApp() {
    setLoading(true)
    axios.post(URL, login)
      .then(response => {
        if (response === 'Incorrect password') {
          alert('incorrect password!')
        } else {
          localStorage.setItem('data', JSON.stringify(response.data))
          console.log(response.data)
          navigate('/main')
        }
      })

      .catch(error => {
        setLoading(false)
        console.log(error);
        alert("Erro de login, favor checar novamente os dados. Se não possui uma conta, experimente se cadastrar antes!");
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
          placeholder={'E-mail'}
          value={login.email}
          onChange={(event) => {
            setLogin({ ...login, email: event.target.value })
          }}
        />
      </div>
      <div className='user-input'>
        <input
          type={'password'}
          placeholder={'Senha'}
          value={login.password}
          onChange={(event) => {
            setLogin({ ...login, password: event.target.value })
          }}
        />
      </div>
      <ConfirmButton enterApp={enterApp} loading={loading} />

      <div className='footer-text'>
        <Link to={'/signUp'}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </div>
    </>
  )
}

function ConfirmButton(props) {
  if (props.loading === true) {
    return (
      <div className='loading' />
    )
  } else {
    return (
      <div className='confirm-button'>
        <button onClick={props.enterApp}>
          <p>Entrar</p>
        </button>
      </div>
    )
  }
}
