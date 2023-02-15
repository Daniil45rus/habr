import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'


const App = () => {
  const {theme, switchTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={() => switchTheme()}>Switch theme</button>
      <Link to={'/'}>
        Главня
      </Link>
      <Link to={'/about'}>
        О сайте
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy/>}/>
          <Route path={'/about'} element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App