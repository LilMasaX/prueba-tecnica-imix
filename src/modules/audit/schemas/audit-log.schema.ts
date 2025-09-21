import { Schema } from 'mongoose';

export const AuditLogSchema = new Schema({
  documentId: { type: String, required: true, index: true },
  version: { type: Number },
  action: { type: String, required: true },
  actorId: { type: String },
  roles: [String],
  ip: { type: String },
  userAgent: { type: String },
  timestamp: { type: Date, default: Date.now },
  result: { type: String },
  reason: { type: String },
}, { timestamps: true });

AuditLogSchema.index({ documentId: 1, version: 1 });
AuditLogSchema.index({ timestamp: 1 });
