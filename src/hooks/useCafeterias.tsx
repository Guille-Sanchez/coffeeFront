import {useEffect, useState} from 'react'
import {Cafeterias} from '../interfaces.mts'

interface CafeteriasHook {
  cafeterias?: Cafeterias
  loading: boolean
  places?: string[]
}

const useCafeterias = (): CafeteriasHook => {
  const [cafeterias, setCafeterias] = useState<Cafeterias>()
  const [loading, setLoading] = useState(true)
  const [places, setPlaces] = useState<string[]>([])

  useEffect(() => {
    const fetchCafeterias = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BE_URL}cafeterias/`
        )
        const data: Cafeterias = await response.json()
        setCafeterias(data)
        setPlaces(() => Object.keys(data))
      } catch (error) {
        console.error('Error fetching cafeterias:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCafeterias()
  }, [])

  return {cafeterias, loading, places}
}

export default useCafeterias
