import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'



const App = () => {
  const {theme, switchTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button onClick={() => switchTheme()}>Switch theme</button>
      <AppRouter/>
    </div>
  )
}

export default App