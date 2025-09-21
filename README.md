# Document Manager API - Prueba Técnica

Sistema de gestión de documentos desarrollado con NestJS que implementa un API completo con versionado, control de acceso y políticas de retención.

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js >= 18
- npm >= 8

### Instalación y Ejecución

```bash
# Clonar repositorio
git clone <repository-url>
cd document-manager

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev

# La aplicación estará disponible en:
# API: http://localhost:3000
# Swagger: http://localhost:3000/api
```

## 📚 Documentación API

### Swagger/OpenAPI
Accede a la documentación interactiva completa en: **http://localhost:3000/api**

### Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/documents` | Crear documento |
| `GET` | `/documents` | Listar documentos (con filtros y paginación) |
| `GET` | `/documents/:id` | Obtener documento específico |
| `GET` | `/documents/:id/content` | Descarga segura de contenido |
| `PATCH` | `/documents/:id/acl` | Actualizar permisos de acceso |
| `PATCH` | `/documents/:id/retention` | Configurar políticas de retención |
| `DELETE` | `/documents/:id` | Eliminar documento (soft/hard delete) |
| `POST` | `/documents/:id/versions` | Crear nueva versión |
| `GET` | `/documents/:id/versions` | Listar versiones de documento |

## 🧪 Testing Manual

### Ejemplo de Uso con curl

```bash
# Crear documento
curl -X POST http://localhost:3000/documents \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "client-001",
    "taxonomy": {
      "domain": "legal",
      "category": "contract",
      "docType": "pdf"
    },
    "acl": {
      "owners": ["user1"],
      "readers": ["user2"],
      "updaters": [],
      "roles": ["admin"]
    },
    "retention": {
      "policyId": "legal-standard",
      "mode": "soft"
    }
  }'

# Listar documentos con filtros
curl "http://localhost:3000/documents?customerId=client-001&page=1&limit=10"

# Obtener documento específico
curl http://localhost:3000/documents/test-id
```

### Testing con Postman
1. Importa la documentación desde: `http://localhost:3000/api-json`
2. Configura el environment con `baseURL: http://localhost:3000`
3. Utiliza los ejemplos incluidos en cada endpoint

## 🏗️ Arquitectura

### Tecnologías Utilizadas
- **Framework**: NestJS 11
- **Validación**: class-validator + class-transformer
- **Documentación**: Swagger/OpenAPI
- **Base de Datos**: Esquemas Mongoose (simulados con InMemoryDb)
- **Lenguaje**: TypeScript

### Estructura del Proyecto
```
src/
├── common/database/          # Simulador de base de datos
├── modules/
│   ├── documents/           # Módulo principal de documentos
│   │   ├── controllers/     # Endpoints REST
│   │   ├── services/        # Lógica de negocio
│   │   ├── dtos/           # Validación de entrada/salida
│   │   └── schemas/        # Esquemas Mongoose
│   ├── versions/           # Gestión de versiones
│   └── audit/              # Esquemas de auditoría
└── main.ts                 # Configuración de aplicación
```

## 📋 Supuestos de Implementación

### Datos Mock
- **Base de Datos**: Utiliza InMemoryDb en lugar de MongoDB real
- **Almacenamiento**: Simula S3 con respuestas mock
- **Autenticación**: JWT simulado (esquemas preparados)

### Funcionalidades Simuladas
- **ACL**: Evaluación de permisos documentada, respuestas mock
- **Retención**: Políticas definidas, eliminación simulada
- **Auditoría**: Esquemas completos, logging conceptual
- **Versionado**: Estructura completa, operaciones simuladas

## 🔧 Configuración

### Variables de Entorno
Copia `.env.example` a `.env` y ajusta según necesidades:

```bash
PORT=3000
NODE_ENV=development
# Variables adicionales comentadas para implementación futura
```

## ✅ Requisitos Cumplidos

### ✅ Diseño de Datos
- [x] Esquemas Mongoose con índices definidos
- [x] Colecciones: documents, documentVersions, auditLogs
- [x] Campos según especificación técnica
- [x] Índices optimizados para consultas eficientes

### ✅ Contratos API
- [x] 9 endpoints requeridos implementados
- [x] DTOs con validación class-validator
- [x] Swagger/OpenAPI completo y funcional
- [x] Códigos de error HTTP apropiados

### ✅ Seguridad y ACL
- [x] Modelo de evaluación ACL documentado
- [x] Especificación de autenticación JWT
- [x] Visualización segura con headers de seguridad
- [x] Control granular de permisos definido

### ✅ Retención y Auditoría
- [x] Políticas de retención definidas y calculadas
- [x] Eliminación SOFT vs HARD implementada
- [x] Proceso de auditoría conceptual completo
- [x] Esquemas preparados para logging automático

### ✅ Implementación Técnica
- [x] NestJS con módulos funcionales
- [x] Swagger activo en /api
- [x] Endpoints mock operativos con respuestas realistas
- [x] Documentación técnica completa (DESIGN.md)
- [x] README con instrucciones claras

## 📖 Documentación Adicional

- **[DESIGN.md](./DESIGN.md)**: Arquitectura técnica detallada
- **[ai-notes/](./ai-notes/)**: Proceso de desarrollo con IA
- **Swagger UI**: Documentación interactiva en `/api`

## 🔄 Evolución Futura

Ver [DESIGN.md - Sección 6](./DESIGN.md#6-evolución-a-2-sprints) para roadmap detallado:
- **Sprint 1**: Integración real MongoDB/S3, autenticación JWT
- **Sprint 2**: Seguridad avanzada, monitoring, containerización

---

**Nota**: Esta implementación es un skeleton funcional que cumple todos los requisitos técnicos especificados. Para producción, requiere integración con bases de datos reales y sistemas de autenticación.
