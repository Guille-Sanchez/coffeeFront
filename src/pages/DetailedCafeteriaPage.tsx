import {FoodEntryCard} from '../components/FoodEntryCard'
import {useJourneyEntry} from '../hooks/useJourneyEntry'

export const DetailedCafeteriaPage = () => {
  let place = window.location.href.split('/').at(-1)
  if (place) {
    place = place = decodeURIComponent(place)
  }
  const {foodJournalEntry, loading} = useJourneyEntry({place})

  return (
    <section className='grid w-full grid-cols-1 place-items-center gap-5 md:grid-cols-2 xl:grid-cols-3'>
      <header>
        <h2>{place}</h2>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : foodJournalEntry ? (
        foodJournalEntry.map((entry) => {
          return <FoodEntryCard key={entry.id} entry={entry} place={place} />
        })
      ) : (
        <p>Error fetching data.</p>
      )}
    </section>
  )
}
