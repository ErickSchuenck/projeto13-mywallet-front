import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EntradaScreen() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}`;
  const URL = 'http://localhost:5000/deposit'
  const navigate = useNavigate()
  const userInfos = JSON.parse(localStorage.getItem('data'))

  const [entrada, setEntrada] = useState({
    value: 0,
    type: 'entrada',
    title: '',
    date: date,
  })

  function send() {
    if (typeof parseInt(entrada.value) === 'number') {
      const payload = { ...entrada, value: parseFloat(entrada.value), token: userInfos.token }
      console.log(payload)
      axios.post(URL, payload)
        .then(response => {
          console.log('response', response)
          navigate('/main')
        })
        .catch(error => {
          console.log(error)
          alert(error)
        })
    } else {
      alert('Tenha certeza que o valor digitado é um numero que separa os reais dos centavos por .')
      console.log(typeof (entrada.value))
    }
  }

  return (
    <>
      <div className='header'>
        <h1>Nova Entrada</h1>
      </div>
      <div className='value-container'>
        <div className='value-input'>
          <input
            type={'number'}
            placeholder={'Valor'}
            onChange={(event) => {
              setEntrada({ ...entrada, value: event.target.value })
            }}
          />
        </div>
        <div className='value-input'>
          <input
            type={'text'}
            placeholder={'Descrição'}
            onChange={(event) => {
              setEntrada({ ...entrada, title: event.target.value })
            }}
          />
        </div>
        <div className='value-confirm-button'>
          <button onClick={() => send()}>
            <p>Salvar Entrada</p>
          </button>
        </div>
      </div>
    </>
  )
}
