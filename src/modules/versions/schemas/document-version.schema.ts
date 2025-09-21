import { Schema } from 'mongoose';

export const DocumentVersionSchema = new Schema({
  documentId: { type: String, required: true, index: true },
  version: { type: Number, required: true },
  filename: { type: String },
  mimeType: { type: String },
  size: { type: Number },
  hash: { type: String },
  storageKey: { type: String },
  status: { type: String },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

DocumentVersionSchema.index({ documentId: 1, version: 1 }, { unique: true });
