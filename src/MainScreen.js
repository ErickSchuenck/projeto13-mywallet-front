import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function MainScreen() {

  const navigate = useNavigate()
  const URL = 'http://localhost:5000/getFinances';
  const userInfos = JSON.parse(localStorage.getItem('data'))
  const [username, setUsername] = useState('')
  const [total, setTotal] = useState(0)
  const [report, setReport] = useState([]);
  useEffect(() => { displayFinances() }, [])

  function displayFinances() {
    console.log(userInfos)
    const { token } = userInfos
    const promise = axios.get(URL, { headers: { token } })
    promise.then((response) => {
      const { data } = response;
      setUsername(data.userFinances.name);
      setReport(data.userFinances.finances);
      setTotal(data.userFinances.finances.reduce((total, item) => {
        let finalNumber;
        if (item.type === 'entrada') { finalNumber = total + item.value }
        if (item.type === 'saida') { finalNumber = total - item.value }
        return finalNumber
      }, 0))
    });
    promise.catch((err) => {
      alert(err);
    });
  }


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
            <p className={`${total >= 0 ? 'green' : 'red'}`}>{total}</p>
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
