import { useEffect } from "react"
import apiFetcher from "../utils/apiFetcher"
import { useSelector } from "react-redux"
import { RootState } from '../store'
import { useDispatch } from "react-redux"
import { add } from "../features/heroes/heroesSlice"
import HeroItem from "./HeroItem"

const HeroList = () => {
  const heroes = useSelector(( state: RootState) => state.heroes.list)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const heroesResponse = await apiFetcher.getAll()
      dispatch(add(heroesResponse))
    })()
  }, [])

  const listClasses = 'flex-1 flex-column m-2 mt-0'
  return (
    <ul className={listClasses}>
      {heroes.map((hero) => {
        return(
          <HeroItem hero={hero}/>
        )
      })}
    </ul>
  )
}

export default HeroList
