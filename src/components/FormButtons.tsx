import { ReactNode } from "react"
import Button from "./Button"

const FormButtons = ({ editMode }: { editMode: boolean }): ReactNode => {
  if (editMode) {
    return <Button type="submit" text="Salvar" color="blue" />
      
  } else {
    return <Button type="submit" text="Criar Herói" color="red" />
  }
}

export default FormButtons
