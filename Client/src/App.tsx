
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AccountRouter from './pages/account/AccountRouter'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='account/*' element={<AccountRouter/>} />
        <Route path='error/*' element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App
