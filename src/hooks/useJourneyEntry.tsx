import {useEffect, useState} from 'react'
import {FoodJournalEntries} from '../interfaces.mts'

interface JournalEntryHook {
  foodJournalEntry?: FoodJournalEntries
  loading: boolean
}

export const useJourneyEntry = ({
  place,
}: {
  place: string | undefined
}): JournalEntryHook => {
  const [foodJournalEntry, setFoodJournalEntry] = useState<FoodJournalEntries>(
    []
  )
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let subscribed = true
    setLoading(true)

    const fetchFoodEntry = async () => {
      setLoading(false)
      try {
        if (place !== undefined) {
          const response = await fetch(
            `${import.meta.env.VITE_BE_URL}cafeterias/?name=${place}`
          )
          if (response.ok) {
            const data: FoodJournalEntries = await response.json()
            setFoodJournalEntry(data)
          }
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    if (subscribed) {
      fetchFoodEntry()
    }

    return () => {
      subscribed = false
    }
  }, [place])

  return {foodJournalEntry, loading}
}
