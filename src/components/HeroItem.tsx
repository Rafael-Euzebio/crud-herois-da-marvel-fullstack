import { useDispatch, useSelector } from "react-redux"
import { cancelEdit, edit } from "../features/form/formSlice"
import { deleteOne } from "../features/heroes/heroesSlice"
import { RootState } from "../store"

import apiFetcher from "../utils/apiFetcher"
import { HeroDto } from "../dto/HeroDto"
import Button from "./Button"

interface PropTypes {
  hero: HeroDto
}
const HeroItem = ({ hero }: PropTypes) => {
  const dispatch = useDispatch()
  const { editValues, editMode } = useSelector(( state: RootState) => state.form)

  const onDeleteClick = () => {
    apiFetcher.deleteOne(hero.id)
      .then((data) => {
        dispatch(deleteOne(data))
      }).catch((error) => {
        console.log(error)
      }
    )
  }

  const onEditClick = () => {
    dispatch(edit(hero))
  }

  const onCancelEdit = () => {
    dispatch(cancelEdit())
  }


  const listItemClasses = 'bg-marvel-widget-bg mb-2 rounded-lg p-2'
  const fieldClasses = 'text-marvel-base font-semibold m-1 p-1'
  const abilitiesWrapperClasses = `flex flex-wrap justify-evenly border border-dashed border-gray-500  p-1`
  const headerTextClasses = 'text-2xl text-center text-marvel-base font-semibold'
  const buttonsWrapperClasses = 'flex flex-wrap'

  return (
    <li className={listItemClasses} 
      key={hero.id}>
        <h3 className={headerTextClasses}>{ hero.name }</h3>
        <fieldset className={abilitiesWrapperClasses}>
          <legend className={fieldClasses}>Habilidades</legend>
          { hero.abilities.map((ability) => {
            return <span className={fieldClasses}>{ `${ability} `  }</span> 
          })}
        </fieldset>
        <p className={fieldClasses}>{ hero.origins}</p>

        <div className={buttonsWrapperClasses}>
          <Button 
            type="button" color="blue" 
            text="Editar" onClick={onEditClick}
          />
          { editMode && editValues.id === hero.id ? (
            <Button 
              type="button" color="red" 
              text="Cancelar" onClick={onCancelEdit} 
            />
          ) : (
            <Button 
              type="button" color="red" 
              text="Excluir" onClick={onDeleteClick} 
            />
          )
          }
        </div>
    </li>
  )
}

export default HeroItem
