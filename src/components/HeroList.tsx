import { useEffect } from "react"
import apiFetcher from "../utils/apiFetcher"
import { useSelector } from "react-redux"
import { RootState } from '../store'
import { useDispatch } from "react-redux"
import { addMany } from "../features/heroes/heroesSlice"
import HeroItem from "./HeroItem"

const HeroList = () => {
  const heroes = useSelector(( state: RootState) => state.heroes.list)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const heroesResponse = await apiFetcher.getAll()
      dispatch(addMany(heroesResponse))
    })()
  }, [])

  return (
    <ul className="flex-1 flex-column mt-3 lg:mx-2 lg:mt-0 h-full lg:overflow-y-scroll">
      {heroes.map((hero) => {
        return(
          <HeroItem hero={hero}/>
        )
      })}
    </ul>
  )
}

export default HeroList
