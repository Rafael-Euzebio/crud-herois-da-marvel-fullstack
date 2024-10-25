import { Exclude, Expose } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNotEmptyObject, IsString, MinLength, ValidateNested } from "class-validator";
import { ObjectId } from "mongoose";

class HeroRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @ArrayMinSize(3)
  @IsString({ each: true})
  @IsNotEmpty({ each: true })
  @MinLength(3, { each: true })
  abilities: string[]

  @IsString()
  @IsNotEmpty()
  @MinLength(20, { each: true })
  origins: string
}

@Exclude()
class HeroResponseDto {
  @Expose() 
  id: ObjectId

  @Expose()
  name: string

  @Expose()
  abilities: string[]

  @Expose()
  origins: string
}

export { HeroRequestDto, HeroResponseDto }
