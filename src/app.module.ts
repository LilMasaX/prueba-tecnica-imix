import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsModule } from './modules/documents/documents.module';
import { VersionsModule } from './modules/versions/versions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Esquemas Mongoose definidos en módulos pero sin conexión real
    DocumentsModule,
    VersionsModule,
  ],
})
export class AppModule {}
