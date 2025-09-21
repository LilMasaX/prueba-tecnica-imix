import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, IsObject, IsNumber } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty()
  @IsString()
  customerId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  processId?: string;

  @ApiProperty({ type: Object })
  @IsObject()
  taxonomy: {
    domain: string;
    category: string;
    docType: string;
  };

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  currentVersion?: number;

  @ApiProperty({ type: Object })
  @IsObject()
  acl: {
    owners: string[];
    readers: string[];
    updaters: string[];
    roles: string[];
  };

  @ApiProperty({ type: Object })
  @IsObject()
  retention: {
    policyId?: string;
    deleteAt?: Date;
    mode?: string;
  };
}

export class UpdateAclDto {
  @ApiProperty({ type: Object })
  @IsObject()
  acl: {
    owners?: string[];
    readers?: string[];
    updaters?: string[];
    roles?: string[];
  };
}

export class UpdateRetentionDto {
  @ApiProperty({ type: Object })
  @IsObject()
  retention: {
    policyId?: string;
    deleteAt?: Date;
    mode?: string;
  };
}
