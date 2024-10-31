import { ReactNode, useState } from 'react'
import { abilities, marvelHeroes } from '../constants/marvelHeroes'
import { useFormContext } from 'react-hook-form'

const AbilitiesFilter = () => {
  const [ heroFilter, setHeroFilter ] = useState("")
  const { register, formState: { errors } } = useFormContext()

  return (
      <fieldset className="border border-dashed border-gray-500 p-2 mb-10 mt-10">
        <legend className="font-bold text-marvel-base">Habilidades</legend>

        <select className="block"onChange={((e) => setHeroFilter(e.target.value) )}>
          <option selected value="" >Filtrar Habilidades</option>
          { Object.keys(marvelHeroes).map((item) => {
            return <option value={item}>{marvelHeroes[item].name}</option>
          })}
        </select>

        <div className="flex flex-wrap">
          { abilities.map((ability): ReactNode => {
            return (
            <div className={`w-full basis-full sm:basis-1/2 p-1 ${heroFilter ? marvelHeroes[heroFilter].abilities.includes(ability) ? "" : "hidden" : ""}`}>
              <input 
                type="checkbox"
                className={`accent-marvel-accent-red mr-2`}
                id={ability}
                value={ability}
                {...register("abilities")}
              />
              <label className="font-bold text-marvel-base" htmlFor={ability}>{ability}</label>
            </div>
            )
          } )}
        </div>
        <span className="font-semibold pt-5 text-marvel-error">{errors?.abilities?.message?.toString()}</span>
      </fieldset>
  )
}

export default AbilitiesFilter
