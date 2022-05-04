import React from 'react'

export default function LoginScreen() {
  return (
    <>
      <div className='logo'>
        <p>My Wallet</p>
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'E-mail'} />
      </div>
      <div className='user-input'>
        <input type={'text'} placeholder={'Senha'} />
      </div>
      <div className='confirm-button'>
        <button>
          <p>Entrar</p>
        </button>
      </div>
      <div className='footer-text'>
        <p>Primeira vez? Cadastre-se!</p>
      </div>
    </>
  )
}
