# AI Development Notes - Document Manager

## Proceso de Desarrollo con IA

### Iteración 1: Comprensión del Framework
- Consulta sobre fundamentos de NestJS
- Explicación de bootstrap y ValidationPipe
- Aclaración de conceptos de Swagger
- **Verificación**: Probé el servidor con `npm run start:dev` - funcionó
- **Decisión**: Mantener configuración estándar, no customizar por ahora

### Iteración 2: Resolución de Problemas
- Error de dependencias MongoDB
- **Problema real**: "Cannot find module 'mongoose'" al importar
- **Decisión**: Usar simulación en lugar de instalar MongoDB completo
- **Verificación**: La app inicia sin errores, esquemas se mantienen
- **Trade-off**: Cumple requisitos técnicos pero sin DB real

### Iteración 3: Implementación Guiada
- Desarrollo paso a paso de endpoints
- **Problema**: Validación de parámetros numéricos fallaba
- **Solución IA**: Agregar `transform: true` en ValidationPipe
- **Verificación**: Tests con Postman pasaron correctamente
- **Decisión**: Implementar todos los endpoints antes de optimizar

## Prompts Efectivos Utilizados

### Consultas Conceptuales
- "Explica este código para alguien que no sabe usar nest"
- "Por qué se llama bootstrap y qué es ValidationPipe"
- **Resultado**: Entendí el patrón de inicialización de NestJS
- **Aplicación**: Mantuve la estructura pero agregué comentarios

### Prompts avanzados usados en el proyecto
- "¿Cómo defino un esquema Mongoose con índices compuestos en NestJS?"
- "¿Cómo simulo una base de datos en memoria para pruebas sin MongoDB?"
- "¿Cómo estructuro los DTOs para filtros complejos y paginación?"
- "¿Cómo configuro Swagger para mostrar ejemplos de respuesta y error personalizados?"
- "¿Cómo implemento políticas de retención y soft/hard delete en los endpoints?"
- "¿Cómo documento y simulo el control de acceso (ACL) en los endpoints?"
- "¿Cómo manejo la validación de parámetros de query con tipos numéricos y string?"
- "¿Cómo estructuro la auditoría de acciones en el sistema usando esquemas y mock?"
- "¿Cómo simulo la integración con S3 para descargas protegidas?"
- "¿Cómo organizo los módulos para separar documentos, versiones y auditoría?"

### Resolución de Problemas
- "Error Cannot find module - cómo solucionarlo"
- "No se expone el puerto, falta algo en package"
- **Error real**: PUT en lugar de POST causaba 404
- **Verificación**: Cambié método en Postman y funcionó
- **Aprendizaje**: Revisar siempre la definición exacta del endpoint

### Desarrollo Iterativo
- "Implementa endpoint POST con validaciones"
- **Problema encontrado**: DTOs sin decoradores no validaban
- **Solución IA**: Usar @IsString(), @IsOptional() de class-validator
- **Verificación**: Probé con datos inválidos, rechazó correctamente
- **Decisión**: Aplicar patrón a todos los DTOs restantes

## Estrategias de IA que Funcionaron

### Preguntas Específicas
- **Efectivo**: Incluir mensaje de error completo en consulta
- **Ejemplo**: "404 Cannot PUT /documents/test-id/versions" 
- **Resultado**: Respuesta inmediata sobre método incorrecto
- **Verificación**: Cambio de PUT a POST solucionó el problema
- **Aprendizaje**: Ser específico acelera la resolución

### Desarrollo Incremental
- **Estrategia**: Un endpoint por vez, probar antes de continuar
- **Problema real**: Intenté hacer 3 endpoints simultáneamente, se complicó
- **Decisión**: Volver a enfoque uno por uno
- **Verificación**: Cada endpoint probado en Postman antes del siguiente
- **Resultado**: 9/9 endpoints funcionando sin regresiones

### Documentación Asistida
- **Consulta**: "Genera README técnico pero comprensible"
- **Problema**: Primera versión muy básica
- **Iteración**: "Agrega sección de testing y estructura"
- **Verificación**: Seguí las instrucciones yo mismo, funcionaron
- **Decisión**: Mantener README conciso, detalles en DESIGN.md

## Errores y Correcciones Reales

### Error de Protocolo
- **Problema**: Usaba HTTPS en Postman en lugar de HTTP
- **Síntoma**: "Connection refused" 
- **Verificación**: curl funcionaba, Postman no
- **Solución IA**: Revisar protocolo en URL
- **Resultado**: Cambio a HTTP solucionó inmediatamente

### Validación de Tipos
- **Problema**: page=1 llegaba como string, validación fallaba
- **Consulta**: "ValidationPipe no convierte string a number"
- **Solución**: transform: true en configuración global
- **Verificación**: ?page=1&limit=5 funcionó correctamente
- **Decisión**: Mantener transformación automática habilitada
