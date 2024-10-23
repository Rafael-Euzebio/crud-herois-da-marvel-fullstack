import { ArrayMinSize, IsArray, IsNotEmpty, IsNotEmptyObject, IsString, MinLength, ValidateNested } from "class-validator";

export class HeroDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ArrayMinSize(3)
  @IsString({ each: true})
  @IsNotEmpty({ each: true })
  @MinLength(3, { each: true })
  abilities: string[];

  @IsString()
  @IsNotEmpty()
  @MinLength(20, { each: true })
  origins: string;
}
