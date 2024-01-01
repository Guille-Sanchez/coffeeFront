import {Cafeterias} from '../interfaces.mts'

interface CafeteriaCardProps {
  cafeterias: Cafeterias
  place: string
}

export const CafeteriaCard = ({cafeterias, place}: CafeteriaCardProps) => {
  return (
    <article
      title={place}
      className='h-full w-72 overflow-clip rounded-lg bg-rose-100'
    >
      <img
        className='h-60 w-full cursor-pointer transition duration-500 hover:scale-125'
        src={cafeterias[place].cafeteria_image}
        alt={place}
      />
      <div className='flex flex-col gap-3 p-5'>
        <header className='pb-2'>
          <h3 className='text-xl font-semibold '>{place}</h3>
        </header>
        <p>{cafeterias[place]?.description}</p>
        <p className='text-sm'>
          <span className='font-semibold'>Address: </span>
          {cafeterias[place].address}
        </p>
      </div>
    </article>
  )
}
