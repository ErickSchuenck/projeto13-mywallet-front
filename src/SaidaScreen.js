import React from 'react'

export default function SaidaScreen() {
  return (
    <>
      <div className='header'>
        <h1>Nova Saida</h1>
      </div>
      <div className='value-container'>
        <div className='value-input'>
          <input type={'text'} placeholder={'Valor'} />
        </div>
        <div className='value-input'>
          <input type={'text'} placeholder={'Descrição'} />
        </div>
        <div className='value-confirm-button'>
          <button>
            <p>Salvar Saida</p>
          </button>
        </div>
      </div>
    </>
  )
}