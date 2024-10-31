import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'

import { addOne, updateOne } from '../features/heroes/heroesSlice'
import { cancelEdit } from '../features/form/formSlice'
import { RootState } from '../store'

import apiFetcher from '../utils/apiFetcher'
import { HeroDto } from '../dto/HeroDto'
import AbilitiesFilter from './AbilitiesFilter'
import FormButtons from './FormButtons'

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
  const methods = useForm<HeroDto>({ resolver, defaultValues })
  const onSubmit = (formData: HeroDto) => {
    if (editMode) {
      apiFetcher.updateOne(formData).then((responseData) => {
        dispatch(updateOne(responseData))
        dispatch(cancelEdit())
        methods.reset(defaultValues)
      }) 
    } else {
      apiFetcher.insertOne(formData)
        .then((responseData) => {
          dispatch(addOne(responseData))
          methods.reset(defaultValues)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  

  useEffect(() => {
    methods.reset(editValues) 
  }, [editValues])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="lg:w-3/5 p-8 bg-marvel-widget-bg rounded-lg">
        <label className="font-bold text-marvel-base" htmlFor="name">
          Nome
        </label>
        <input 
          className="w-full bg-marvel-input placeholder-gray-300 text-marvel-base rounded appearance-none p-2 mb-1 leading-tight focus:outline-none focus:border-b-marvel-accent-red focus:border-b-2"
          id="name"
          type="text"
          {...methods.register("name")}
          placeholder="Nome"
        />
        <span className="font-semibold pt-5 text-marvel-error">{methods.formState.errors.name?.message}</span>

        <AbilitiesFilter />

        <label className="font-bold text-marvel-base">
          Origem
        </label>
        <textarea 
          className="w-full bg-marvel-input placeholder-gray-300 text-marvel-base rounded appearance-none p-2 mb-1 leading-tight focus:outline-none focus:border-b-marvel-accent-red focus:border-b-2"
          {...methods.register("origins")} 
          placeholder="Origem"
        />
        <span className="font-semibold pt-5 text-marvel-error">{methods.formState.errors.origins?.message}</span>

        <FormButtons editMode={editMode} />
      </form>
    </FormProvider>

  )
}

export default HeroForm
