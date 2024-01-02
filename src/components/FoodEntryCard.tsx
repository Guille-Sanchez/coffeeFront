import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {FoodJournalEntry} from '../interfaces.mts'
import {Scrollbar, A11y} from 'swiper/modules'

import './MySwiperComponent.css'

const SwiperNavButtons = () => {
  const swiper = useSwiper()

  const goToNextSlide = () => {
    if (swiper) {
      console.log(swiper)
      swiper.slideNext()
    }
  }

  const goToPrevSlide = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  return (
    <div className='swipper-nav-btns'>
      <button onClick={goToPrevSlide} className='swiper-button-prev' />
      <button onClick={goToNextSlide} className='swiper-button-next' />
    </div>
  )
}

interface FoodEntryCardProps {
  entry: FoodJournalEntry
  place?: string
}

export const FoodEntryCard = ({entry, place}: FoodEntryCardProps) => {
  return (
    <article
      title={place}
      className='h-full w-72 overflow-clip rounded-lg bg-rose-100'
    >
      {entry.images?.length > 1 ? (
        <Swiper
          modules={[Pagination, Navigation, Autoplay, Scrollbar, A11y]}
          slidesPerView={1}
          loop={true}
          navigation={true}
        >
          {entry.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className='w-full bg-cover'
                src={image}
                alt={place || 'Food Image'}
              />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      ) : (
        <img
          className='w-full bg-cover'
          src={entry.images[0]}
          alt={place || 'Food Image'}
        />
      )}
      <div className='flex flex-col gap-3 p-5'>
        {' '}
        <p className='text-sm'>
          <span className='text-base font-semibold'>Date: </span>
          {entry.date}
        </p>
        <p className='text-sm'>
          <span className='font-semibold'>Desciption: </span>
          {entry.description ? entry.description : 'No description available.'}
        </p>
      </div>
    </article>
  )
}
