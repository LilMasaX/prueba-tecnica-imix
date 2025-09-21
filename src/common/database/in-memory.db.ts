// Simulación de base de datos en memoria
export class InMemoryDb {
  private static documents: any[] = [];
  private static versions: any[] = [];
  private static auditLogs: any[] = [];
  private static idCounter = 1;

  static findDocuments(query: any = {}) {
    return this.documents.filter(doc => {
      // Simula filtros de MongoDB
      return (!query.customerId || doc.customerId === query.customerId) &&
             (!query.taxonomy?.domain || doc.taxonomy.domain === query.taxonomy.domain);
    });
  }

  static findDocumentById(id: string) {
    return this.documents.find(doc => doc.id === id);
  }

  static createDocument(data: any) {
    const doc = {
      id: `doc_${this.idCounter++}`,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.documents.push(doc);
    return doc;
  }

  static updateDocument(id: string, data: any) {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index === -1) return null;
    
    this.documents[index] = {
      ...this.documents[index],
      ...data,
      updatedAt: new Date()
    };
    return this.documents[index];
  }

  static deleteDocument(id: string) {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index === -1) return false;
    
    // Simula SOFT delete
    this.documents[index].deletedAt = new Date();
    return true;
  }
}