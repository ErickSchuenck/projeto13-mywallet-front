import React from 'react'

export default function EntradaScreen() {
  return (
    <>
      <div className='header'>
        <h1>Nova Entrada</h1>
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Valor'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Descrição'} />
      </div>
      <div className='confirm-button'>
        <button>
          <p>Salvar Entrada</p>
        </button>
      </div>
    </>
  )
}
