import { useEffect } from "react"
import apiFetcher from "../utils/apiFetcher"
import { useSelector } from "react-redux"
import { RootState } from '../store'
import { useDispatch } from "react-redux"
import { add } from "../features/heroes/heroesSlice"

const HeroList = () => {
  const heroes = useSelector(( state: RootState) => state.heroes.list)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const heroesResponse = await apiFetcher.getAll()
      dispatch(add(heroesResponse))
    })()
  }, [])

  return (
  )
}

export default HeroList
