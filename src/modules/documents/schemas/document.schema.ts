import { Schema } from 'mongoose';

export const DocumentSchema = new Schema({
  customerId: { type: String, required: true, index: true },
  processId: { type: String },
  taxonomy: {
    domain: String,
    category: String,
    docType: String,
  },
  currentVersion: { type: Number },
  acl: {
    owners: [String],
    readers: [String],
    updaters: [String],
    roles: [String],
  },
  retention: {
    policyId: String,
    deleteAt: Date,
    mode: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
}, { timestamps: true });

// Índices sugeridos
DocumentSchema.index({ customerId: 1 });
DocumentSchema.index({ 'taxonomy.domain': 1, 'taxonomy.category': 1, 'taxonomy.docType': 1 });
DocumentSchema.index({ deletedAt: 1 });
