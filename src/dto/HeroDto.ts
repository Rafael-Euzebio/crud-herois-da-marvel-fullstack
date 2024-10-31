import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

class HeroDto {
  @IsString()
  @IsOptional()
  id: string

  @MinLength(5, { message: 'Nome deve conter pelo menos 5 caracteres '})
  @IsNotEmpty({ message: 'Todo herói precisa de um nome!' })
  name: string

  @ArrayMinSize(3, { message: 'Escolha pelo menos 3 habilidades pro seu herói combater o mal!'})
  @ArrayMaxSize(5, { message: 'Seu herói é muito forte! Escolha no máximo 5 habilidades.'})
  @ArrayNotEmpty({ message: 'Escolha pelo menos 3 habilidades pro seu herói combater o mal!'})
  abilities: string[]

  @MinLength(20, { message: 'Seja criativo! A origem deve conter pelo menos 20 caracteres.' })
  @IsNotEmpty({ message: 'Todo herói precisa de uma origem!' })
  origins: string
}

export { HeroDto }
