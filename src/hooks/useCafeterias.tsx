import {useEffect, useState} from 'react'
import {Cafeterias} from '../interfaces.mts'

interface CafeteriasHook {
  cafeterias?: Cafeterias
  loading: boolean
}

const useCafeterias = (): CafeteriasHook => {
  const [cafeterias, setCafeterias] = useState<Cafeterias>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCafeterias = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/cafeterias/')
        const data: Cafeterias = await response.json()
        setCafeterias(data)
      } catch (error) {
        console.error('Error fetching cafeterias:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCafeterias()
  }, [])

  return {cafeterias, loading}
}

export default useCafeterias
