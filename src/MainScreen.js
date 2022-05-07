import React from 'react'

export default function MainScreen() {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Olá, Fulano</h1>
          <ion-icon name="exit-outline"></ion-icon>
        </div>
        <div className='account-container'>
        </div>
        <div className='report-transaction-button'>
          <p>Nova <br />entrada</p>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div className='report-transaction-button'>
          <p>Nova <br />saida</p>
          <ion-icon name="remove-circle-outline"></ion-icon>
        </div>
      </div>
    </>
  )
}
