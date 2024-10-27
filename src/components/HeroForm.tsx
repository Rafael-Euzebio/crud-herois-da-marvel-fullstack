import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import HeroInterface from '../interfaces/hero.interface'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import HeroSchema from '../schemas/hero.schema'
import { abilities } from '../constants/marvelHeroes'
import axios from 'axios'



const HeroForm = () => {
  const resolver = classValidatorResolver(HeroSchema)
  const {
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<HeroInterface>({ resolver })

  const onSubmit = handleSubmit((data) => {
    axios.post('/api/heroes', data)
  })

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label>
          Nome: 
          <input 
            {...register("name")}
            placeholder="Name"
          />
        </label>
        <p>{errors.name?.message}</p>

        <fieldset>
          <legend>Habilidades: </legend>
          { abilities.map((ability): ReactNode => {
            return (
            <>
              <label>
                <input 
                  type="checkbox"
                  value={ability}
                  {...register("abilities")}
                  placeholder="Abilities"
                />
                {ability}
              </label>
            </>
            )
          } )}
          <p>{errors.abilities?.message}</p>
        </fieldset>

        <label>
          Origem: <br/>
          <textarea 
            {...register("origins")} 
            placeholder="Origem"
          />
        </label>
        <p>{errors.origins?.message}</p>
        <button type="submit">Criar Herói</button>
      
      </fieldset>
    </form>
  )
}

export default HeroForm
