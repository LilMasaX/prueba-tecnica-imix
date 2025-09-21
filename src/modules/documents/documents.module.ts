import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
// Schema Mongoose definido para cumplir requisitos (sin conexión)
// import { DocumentSchema } from './schemas/document.schema';

@Module({
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
