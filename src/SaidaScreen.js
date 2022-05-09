import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SaidaScreen() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}`;
  const URL = 'http://localhost:5000/withdraw'
  const navigate = useNavigate()
  const userInfos = JSON.parse(localStorage.getItem('data'))

  const [saida, setSaida] = useState({
    value: 0,
    type: 'saida',
    title: '',
    date: date,
  })

  function send() {
    if (typeof parseInt(saida.value) === 'number') {
      const payload = { ...saida, value: parseFloat(saida.value), token: userInfos.token }
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
      console.log(typeof (saida.value))
    }
  }

  return (
    <>
      <div className='header'>
        <h1>Nova Saida</h1>
      </div>
      <div className='value-container'>
        <div className='value-input'>
          <input
            type={'number'}
            placeholder={'Valor'}
            onChange={(event) => {
              setSaida({ ...saida, value: event.target.value })
            }}
          />
        </div>
        <div className='value-input'>
          <input
            type={'text'}
            placeholder={'Descrição'}
            onChange={(event) => {
              setSaida({ ...saida, title: event.target.value })
            }}
          />
        </div>
        <div className='value-confirm-button'>
          <button onClick={() => send()}>
            <p>Salvar Saida</p>
          </button>
        </div>
      </div>
    </>
  )
}
