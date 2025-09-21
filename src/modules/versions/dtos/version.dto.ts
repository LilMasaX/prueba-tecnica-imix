import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateVersionDto {
  @ApiProperty()
  @IsString()
  documentId: string;

  @ApiProperty()
  @IsNumber()
  version: number;

  @ApiProperty()
  @IsString()
  filename: string;

  @ApiProperty()
  @IsString()
  mimeType: string;

  @ApiProperty()
  @IsNumber()
  size: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  hash?: string;

  @ApiProperty()
  @IsString()
  storageKey: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsString()
  createdBy: string;
}
