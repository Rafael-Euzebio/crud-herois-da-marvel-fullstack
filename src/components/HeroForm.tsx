import { ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'

import { addOne, updateOne } from '../features/heroes/heroesSlice'
import { cancelEdit } from '../features/form/formSlice'
import { RootState } from '../store'

import { abilities } from '../constants/marvelHeroes'
import apiFetcher from '../utils/apiFetcher'
import Button from './Button'
import { HeroDto } from '../dto/HeroDto'

const HeroForm = () => {
  const dispatch = useDispatch()
  const { editValues, editMode } = useSelector(( state: RootState ) => state.form)
  const defaultValues = { 
    id: '',
    name: '',
    abilities: [],
    origins: '', 
  }

  const resolver = classValidatorResolver(HeroDto)
  const {
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<HeroDto>({ resolver, defaultValues })

  const onSubmit = handleSubmit((formData) => {
    if (editMode) {
      apiFetcher.updateOne(formData).then((responseData) => {
        dispatch(updateOne(responseData))
        dispatch(cancelEdit())
        reset(defaultValues)
      }) 
    } else {
      apiFetcher.insertOne(formData)
        .then((responseData) => {
          dispatch(addOne(responseData))
          reset(defaultValues)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  )

  useEffect(() => {
    reset(editValues) 
  }, [editValues])

  return (
    <form onSubmit={onSubmit} className="lg:w-3/5 p-8 bg-marvel-widget-bg rounded-lg">
      <label className="font-bold text-marvel-base" htmlFor="name">
        Nome
      </label>
      <input 
        className="w-full bg-marvel-input placeholder-gray-300 text-marvel-base rounded appearance-none p-2 mb-1 leading-tight focus:outline-none focus:border-b-marvel-accent-red focus:border-b-2"
        id="name"
        type="text"
        {...register("name")}
        placeholder="Nome"
      />
      <span className="font-semibold pt-5 text-marvel-error">{errors.name?.message}</span>

      <fieldset className="flex flex-wrap border border-dashed border-gray-500 p-2 mb-10 mt-10">
        <legend className="font-bold text-marvel-base">Habilidades</legend>
        { abilities.map((ability): ReactNode => {
          return (
          <div className="w-full basis-full sm:basis-1/2 p-1">
            <input 
              type="checkbox"
              className="accent-marvel-accent-red mr-2"
              id={ability}
              value={ability}
              {...register("abilities")}
            />
            <label className="font-bold text-marvel-base" htmlFor={ability}>{ability}</label>
          </div>
          )
        } )}
          <span className="font-semibold pt-5 text-marvel-error">{errors.abilities?.message}</span>
      </fieldset>

      <label className="font-bold text-marvel-base">
        Origem
      </label>
      <textarea 
        className="w-full bg-marvel-input placeholder-gray-300 text-marvel-base rounded appearance-none p-2 mb-1 leading-tight focus:outline-none focus:border-b-marvel-accent-red focus:border-b-2"
        {...register("origins")} 
        placeholder="Origem"
      />
      <span className="font-semibold pt-5 text-marvel-error">{errors.origins?.message}</span>
      {
        editMode === true ? (
          <Button type="submit" text="Salvar" color="blue" />
        )
        : (
          <Button type="submit" text="Criar Herói" color="red" />
        )
      }
    </form>

  )
}

export default HeroForm
