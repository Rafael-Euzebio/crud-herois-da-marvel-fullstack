import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

type HeroDocument = HydratedDocument<Hero>

@Schema()
class Hero {
  @Prop()
  name: string

  @Prop()
  abilities: [string]

  @Prop()
  origins: string
}

const HeroSchema = SchemaFactory.createForClass(Hero)

export { HeroDocument, HeroSchema, Hero}
