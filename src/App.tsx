import {Routes, Route} from 'react-router-dom'
import {LandingPage} from './pages/LandingPage'
import {DetailedCafeteriaPage} from './pages/DetailedCafeteriaPage'

export default function App() {
  return (
    <div className='flex h-screen w-screen flex-col bg-slate-50'>
      <header className='p-5'>
        <h1 className='text-xl font-bold'>Savor the Journey</h1>
      </header>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/:place' element={<DetailedCafeteriaPage />} />
        </Routes>
      </main>
      <footer className='flex flex-col place-items-center pt-5'>
        <hr className='w-full border-t-2' />
        <div></div>
        <p className='py-5'>-- 2024 -- Guillermo Sanchez</p>
        <p>Photographer: Rocio Colman</p>
      </footer>
    </div>
  )
}
