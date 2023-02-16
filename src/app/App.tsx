import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRouter } from './providers/router'



const App = () => {
  const {theme, switchTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => switchTheme()}>Switch theme</button>
      <Link to={'/'}>
        Главня
      </Link>
      <Link to={'/about'}>
        О сайте
      </Link>
      <AppRouter/>
    </div>
  )
}

export default App