import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import useSWR from "swr"
import apiFetcher from "../utils/apiFetcher"
import { RootState } from '../store'
import { addMany } from "../features/heroes/heroesSlice"
import HeroItem from "./HeroItem"
import API_URL from "../constants/api"

const fetcher = async (url: string) => {
  return await apiFetcher.getAll(url)
}

const HeroList = () => {
  const heroes = useSelector((state: RootState) => state.heroes.list)
  const dispatch = useDispatch()
  const { data, error } = useSWR(API_URL, fetcher)

  useEffect(() => {
    if (data) {
      dispatch(addMany(data))
    }
  }, [data, dispatch])

  if (!data) {
    return <div className="text-marvel-base font-semibold mx-auto">Carregando...</div>
  }

  if (error) {
    return <div className="text-marvel-base font-semibold mx-auto">Erro ao carregar</div>
  }

  if (heroes.length > 0) {
    return (
      <ul className="flex-1 flex-column mt-3 lg:mx-2 lg:mt-0 lg:h-full lg:overflow-y-scroll">
          {heroes.map((hero) => (
            <HeroItem key={hero.id} hero={hero} />
          ))
          }
      </ul>
    )
  } else {
    return <div className="text-marvel-base font-semibold mx-auto">Nenhum herói encontrado</div>
  }
}

export default HeroList

