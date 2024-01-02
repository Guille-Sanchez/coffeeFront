import useCafeterias from '../hooks/useCafeterias'
import {CafeteriaCard} from '../components/CafeteriaCard'

export const LandingPage = () => {
  const {cafeterias, loading, places} = useCafeterias()

  return (
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
  )
}
