import useCafeterias from './hooks/useCafeterias'
import {CafeteriaCard} from './components/CafeteriaCard'

export default function App() {
  const {cafeterias, loading, places} = useCafeterias()

  return (
    <div className='flex h-screen w-screen flex-col bg-slate-50'>
      <header className='p-5'>
        <h1 className='text-xl font-bold'>Savor the Journey</h1>
      </header>
      <main className='flex-1'>
        <section aria-labelledby='coffee-hopping'>
          <header className='flex justify-center px-5 pb-5 md:pb-7 xl:pb-14'>
            <h2 id='coffee-hopping'>2024, One Cafe at a Time</h2>
          </header>
          <div className='grid max-h-max w-full grid-cols-1 place-items-center gap-5 px-5 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3 lg:gap-y-14'>
            {loading ? (
              <p>Loading...</p>
            ) : places && cafeterias ? (
              places.map((place) => (
                <CafeteriaCard
                  key={cafeterias[place].id}
                  cafeterias={cafeterias}
                  place={place}
                />
              ))
            ) : (
              <p>Error fetching data.</p>
            )}
          </div>
        </section>
      </main>
      <footer className='flex flex-col place-items-center pt-5'>
        <hr className='w-full border-t-2' />
        <p className='py-5'>-- 2024 -- Guillermo Sanchez</p>
      </footer>
    </div>
  )
}
