import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateVersionDto } from './dtos/version.dto';

@ApiTags('versions')
@Controller('documents/:id/versions')
export class VersionsController {
  @Post()
  @ApiOperation({ summary: 'Crear versión de documento' })
  @ApiResponse({ status: 201, description: 'Versión creada (mock)' })
  create(@Param('id') id: string, @Body() dto: CreateVersionDto) {
    return { documentId: id, version: dto.version, status: 'mock-created' };
  }

  @Get()
  @ApiOperation({ summary: 'Listar versiones de documento' })
  @ApiResponse({ status: 200, description: 'Lista de versiones (mock)' })
  getVersions(@Param('id') id: string) {
    return [
      { documentId: id, version: 1, filename: 'file1.pdf', status: 'active' },
      { documentId: id, version: 2, filename: 'file2.pdf', status: 'active' },
    ];
  }
}
