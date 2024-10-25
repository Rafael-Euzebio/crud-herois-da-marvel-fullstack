import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { isValidObjectId } from "mongoose";

@Injectable()
export class ParseObjectId implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): string {
    const valid: boolean = isValidObjectId(value)

    if (valid) {
      return value
    } else {
      throw new BadRequestException('Invalid id')
    }
  }
}
