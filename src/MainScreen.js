import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function MainScreen() {

  const navigate = useNavigate()
  const URL = 'http://localhost:5000/getFinances';
  const userInfos = JSON.parse(localStorage.getItem('data'))
  const [username, setUsername] = useState('')
  // const [report, setReport] = useState([]);
  useEffect(() => { displayFinances() })

  function displayFinances() {
    console.log(userInfos)
    const promise = axios.get(URL, userInfos.token)
    promise.then((response) => {
      const { data } = response;
      setUsername('pegar da api');
      // setReport(data.userRegisters);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }

  const report = [
    {
      user: 'Erig',
      type: 'entrada',
      value: 200.00,
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: 220.00,
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    },
    {
      user: 'Erig',
      type: 'saida',
      value: 1000.00,
      title: 'Parcela do agiota',
      date: '02/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: 200.00,
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: 220.00,
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    },
    {
      user: 'Erig',
      type: 'saida',
      value: 1000.00,
      title: 'Parcela do agiota',
      date: '02/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: 200.00,
      title: 'Jogo do bicho',
      date: '06/05'
    },
    {
      user: 'Erig',
      type: 'entrada',
      value: 220.00,
      title: 'Roubei o dinheiro do kaique',
      date: '04/05'
    }
  ]

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Olá, {username}</h1>
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
            <p className='green'>{
              report.map((report) => {
                let total = 0;
                if (typeof report.value == 'number') {
                  total = total + parseFloat(report.value);
                }
                return total
              })
            }</p>
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
