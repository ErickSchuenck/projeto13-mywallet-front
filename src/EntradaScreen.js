import React, { useState } from 'react'

export default function EntradaScreen() {



  return (
    <>
      <div className='header'>
        <h1>Nova Entrada</h1>
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
            <p>Salvar Entrada</p>
          </button>
        </div>
      </div>
    </>
  )
}
