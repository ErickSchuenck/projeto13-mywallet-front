import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function MainScreen() {
  console.log('TOKEN AQUI:::', localStorage)
  const navigate = useNavigate()


  const report = [
    {
      user: 'Erig',
      type: 'entrada',
      value: '200,00',
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: '220,00',
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    },
    {
      user: 'Erig',
      type: 'saida',
      value: '1000,00',
      title: 'Parcela do agiota',
      date: '02/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: '200,00',
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: '220,00',
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    },
    {
      user: 'Erig',
      type: 'saida',
      value: '1000,00',
      title: 'Parcela do agiota',
      date: '02/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: '200,00',
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: '220,00',
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    }
  ]

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Olá, Fulano</h1>
          <ion-icon
            name="exit-outline"
            onClick={() => navigate('/')}
          />
        </div>
        <div className='account-container'>
          {report.map((report, i) => {
            if (report.type !== 'entrada') {
              return (
                <div className='container-text' key={i}>
                  <div className='container-text-date' key={1}>
                    <p>
                      {report.date}
                    </p>
                  </div>
                  <div className='container-text-title' key={2}>
                    <p>
                      {report.title}
                    </p>
                  </div>
                  <div className='container-text-value red' key={3}>
                    <p>
                      {report.value}
                    </p>
                  </div>
                </div>)
            } else {
              return (
                <div className='container-text' key={i}>
                  <div className='container-text-date' key={1}>
                    <p>
                      {report.date}
                    </p>
                  </div>
                  <div className='container-text-title' key={2}>
                    <p>
                      {report.title}
                    </p>
                  </div>
                  <div className='container-text-value green' key={3}>
                    <p>
                      {report.value}
                    </p>
                  </div>
                </div>
              )
            }

          }
          )}
          <div className='total'>
            <p>Saldo</p>
            <p className='green'>2200</p>
          </div>
        </div>
        <Link to={'/entrada'}>
          <div className='report-transaction-button' id='entrada'>
            <ion-icon name="add-circle-outline" ></ion-icon>
            <p>Nova <br />entrada</p>
          </div>
        </Link>
        <Link to={'/saida'}>
          <div className='report-transaction-button' id='saida'>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova <br />saida</p>
          </div>
        </Link>
      </div>
    </>
  )
}
