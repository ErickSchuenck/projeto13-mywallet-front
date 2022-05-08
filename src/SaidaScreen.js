import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SaidaScreen() {

  const URL = 'http://localhost:5000/withdraw'
  const navigate = useNavigate()

  const [saida, setSaida] = useState({
    value: 0,
    type: 'saida',
    title: '',
  })

  function send() {
    axios.post(URL, saida)
      .then(response => {
        console.log('response', response)
        navigate('/main')
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  return (
    <>
      <div className='header'>
        <h1>Nova Saida</h1>
      </div>
      <div className='value-container'>
        <div className='value-input'>
          <input
            type={'text'}
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
