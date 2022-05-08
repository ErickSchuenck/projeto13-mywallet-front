import React from 'react'
import { useState } from 'react'

export default function SaidaScreen() {

  const [saida, setSaida] = useState({
    value: 0,
    type: 'saida',
    title: '',
  })

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
          <button onClick={() => console.log(saida)}>
            <p>Salvar Saida</p>
          </button>
        </div>
      </div>
    </>
  )
}
