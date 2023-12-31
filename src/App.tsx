import useCafeterias from './hooks/useCafeterias'

export default function App() {
  const {cafeterias, loading} = useCafeterias()

  return (
    <div className='h-screen w-screen bg-amber-700'>
      <p>Cafeterias I visited in 2024 so far</p>
      {loading ? (
        <p>Loading...</p>
      ) : cafeterias ? (
        cafeterias.map((cafeteria) => (
          <div key={cafeteria.id}>
            <p>{cafeteria.name}</p>
          </div>
        ))
      ) : (
        <p>Error fetching data.</p>
      )}
    </div>
  )
}
