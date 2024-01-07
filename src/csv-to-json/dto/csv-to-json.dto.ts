import { ApiProperty } from '@nestjs/swagger';
import { IsBooleanString, IsEnum, IsOptional } from 'class-validator';

export class CsvToJsonDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File;

  @ApiProperty({ type: 'boolean', default: true })
  @IsBooleanString()
  @IsOptional()
  headers: boolean;

  @IsOptional()
  @ApiProperty({ type: 'enum', enum: [';', ','], default: ';' })
  @IsEnum([',', ';'])
  delimiter: ',' | ';';
}
