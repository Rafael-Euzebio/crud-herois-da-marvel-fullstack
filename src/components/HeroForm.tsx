import { ReactNode } from 'react'
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

  const formClasses = 'lg:w-3/5 p-8 bg-marvel-widget-bg rounded-lg'
  const labelClasses = 'font-bold text-marvel-base'
  const inputClasses = 'w-full bg-marvel-input placeholder-gray-300 text-marvel-base rounded appearance-none p-2 mb-1 leading-tight focus:outline-none focus:border-b-marvel-accent-red focus:border-b-2'
  const fieldsetClasses = `flex flex-wrap border border-dashed border-gray-500 p-2 mb-10 mt-10`
  const abilityWrapperClasses = 'w-full basis-full sm:basis-1/2 p-1'
  const checkboxClasses = 'accent-marvel-accent-red mr-2'
  const buttonWrapperClasses = 'bg-marvel-accent-red w-40 m-auto mt-10 -slant-x-[20deg] transition-all duration-500 ease-in-out hover:bg-marvel-accent-red-hover hover:w-52 sm:hover:w-64'
  const buttonClasses = 'w-full p-3 text-marvel-base font-bold'
  const errorClasses = 'font-semibold pt-5 text-marvel-error'


  return (
    <form onSubmit={onSubmit} className={formClasses}>
      <label className={labelClasses} htmlFor="name">
        Nome
      </label>
      <input 
        className={inputClasses}
        id="name"
        type="text"
        {...register("name")}
        placeholder="Nome"
      />
      <span className={errorClasses}>{errors.name?.message}</span>

      <fieldset className={fieldsetClasses}>
        <legend className={labelClasses}>Habilidades</legend>
        { abilities.map((ability): ReactNode => {
          return (
          <div className={abilityWrapperClasses}>
            <input 
              type="checkbox"
              className={checkboxClasses}
              id={ability}
              value={ability}
              {...register("abilities")}
            />
            <label className={labelClasses} htmlFor={ability}>{ability}</label>
          </div>
          )
        } )}
          <span className={errorClasses}>{errors.abilities?.message}</span>
      </fieldset>

      <label className={labelClasses}>
        Origem
      </label>
      <textarea 
        className={inputClasses}
        {...register("origins")} 
        placeholder="Origem"
      />
      <span className={errorClasses}>{errors.origins?.message}</span>

      <div className={buttonWrapperClasses}>
        <button type="submit" className={buttonClasses}>Criar Herói</button>
      </div>
    </form>

  )
}

export default HeroForm
