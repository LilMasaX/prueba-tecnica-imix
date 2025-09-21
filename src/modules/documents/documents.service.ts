import { Injectable } from '@nestjs/common';
import { InMemoryDb } from '../../common/database/in-memory.db';

@Injectable()
export class DocumentsService {
  findAll(query: any = {}) {
    return InMemoryDb.findDocuments(query);
  }

  findById(id: string) {
    const doc = InMemoryDb.findDocumentById(id);
    if (!doc || doc.deletedAt) {
      return null;
    }
    return doc;
  }

  create(data: any) {
    return InMemoryDb.createDocument(data);
  }

  update(id: string, data: any) {
    return InMemoryDb.updateDocument(id, data);
  }

  delete(id: string) {
    return InMemoryDb.deleteDocument(id);
  }
}