import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, getMetadataStorage } from 'class-validator';

@Injectable()
export class TransformPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {

    if (typeof value !== 'object') return value;

    /* Ignore parameters w/o class validation decorators */
    const metadataStorage = getMetadataStorage();
    if (!metadataStorage.hasValidationMetaData) return value;
    const targetMeta = metadataStorage.getTargetValidationMetadatas(metadata.metatype, undefined, true, false);
    if (!targetMeta) return value;

    // first transform to the target class, then validate
    const transformed = plainToInstance(metadata.metatype, value);
    const errors = await validate(transformed);

    // re-shape error list to a simple object
    transformed.errors = errors?.reduce((acc, error) => {
      acc[error.property] = Object.values(error.constraints)[0];
      acc._found = 'true';
      return acc;
    }, {} as Record<string, string>);

    return transformed;
  }
}