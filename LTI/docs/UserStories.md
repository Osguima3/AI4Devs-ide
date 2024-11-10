## Índice del documento

- [User Stories](#user-stories)
- [Product Backlog](#product-backlog)
  - [Método RICE](#método-rice)
  - [Método MoSCoW](#método-moscow)
  - [Método Value vs Effort](#método-value-vs-effort)
- [Tickets de Trabajo](#tickets-de-trabajo)
  - [Orden Recomendado de Implementación](#orden-recomendado-de-implementación)

## User Stories

### Registro de candidato
Como candidato, quiero poder registrarme en el sistema para postularme a una vacante y seguir mi progreso en el proceso de selección.

**Descripción**  
El candidato necesita una forma sencilla y clara para registrarse con sus datos personales y subir su CV o perfil.

**Criterios de Aceptación**
- **Dado que** el candidato accede a la plataforma por primera vez, **cuando** ingresa su información y carga su CV, **entonces** el sistema debe guardar los datos y enviar un correo de confirmación de registro.
- **Dado que** el candidato ya está registrado, **cuando** intenta registrarse nuevamente con el mismo correo, **entonces** el sistema debe indicarle que el correo ya está en uso.

**Notas adicionales**  
Considerar validaciones básicas para el correo electrónico y formato del CV.

**Tareas**
- Crear formulario de registro.
- Añadir validación de correo.
- Configurar almacenamiento para el CV.
- Configurar envío de correo de confirmación.

---

### Filtrado automático de candidatos
Como reclutador, quiero que el sistema filtre automáticamente a los candidatos para agilizar el proceso de preselección.

**Descripción**  
La IA debe analizar los perfiles y CV de los candidatos para preseleccionar aquellos que cumplen los requisitos mínimos.

**Criterios de Aceptación**
- **Dado que** un candidato cumple con los requisitos mínimos, **cuando** el sistema evalúa su perfil, **entonces** debe marcarlo como "Recomendado."
- **Dado que** un candidato no cumple con los requisitos mínimos, **cuando** el sistema evalúa su perfil, **entonces** debe descartarlo o clasificarlo como "No recomendado."

**Notas adicionales**  
Utilizar un modelo de IA que permita ajustes para criterios específicos del reclutador.

**Tareas**
- Implementar modelo de IA de filtrado.
- Integrar modelo con la base de datos de candidatos.
- Crear clasificación de candidatos sobre la base de criterios.

---

### Evaluación colaborativa de candidatos
Como manager de contratación, quiero colaborar en tiempo real con los reclutadores para evaluar los candidatos juntos.

**Descripción**  
Se necesita una función de chat en tiempo real y acceso compartido a las evaluaciones para la colaboración entre reclutadores y managers.

**Criterios de Aceptación**
- **Dado que** el reclutador y el manager están revisando un perfil, **cuando** cualquiera de ellos realiza comentarios, **entonces** estos deben ser visibles para ambos en tiempo real.
- **Dado que** el manager tiene acceso al perfil de un candidato, **cuando** quiere compartir observaciones, **entonces** debe poder hacerlo mediante el chat colaborativo.

**Notas adicionales**  
Sincronizar comentarios en tiempo real y considerar una interfaz intuitiva.

**Tareas**
- Implementar sistema de chat en tiempo real.
- Sincronizar comentarios en el perfil del candidato.
- Crear permisos de acceso entre reclutador y manager.

---

### Notificaciones de cambio de estado para candidatos
Como candidato, quiero recibir notificaciones cuando mi estado en el proceso de selección cambie para estar al tanto de mi progreso.

**Descripción**  
Los candidatos deben recibir notificaciones en cada cambio de estado (ej., recomendado, en entrevista, rechazado).

**Criterios de Aceptación**
- **Dado que** el estado del candidato cambia, **cuando** el reclutador actualiza el perfil, **entonces** el candidato debe recibir una notificación vía email.
- **Dado que** el candidato es rechazado, **cuando** se hace este cambio de estado, **entonces** el sistema debe enviar una notificación personalizada.

**Notas adicionales**  
Configurar notificaciones para distintos estados.

**Tareas**
- Implementar servicio de notificaciones.
- Configurar reglas de activación de notificaciones.
- Personalizar mensajes de acuerdo al estado del candidato.

---

### Panel de métricas de rendimiento para reclutadores y managers
Como reclutador o manager, quiero ver un panel de métricas y rendimiento por canal de reclutamiento para evaluar y optimizar el proceso de selección.

**Descripción**  
El sistema debe permitir a los reclutadores y managers acceder a métricas clave del proceso de selección (tiempo promedio de contratación, tasa de aceptación) y ver la efectividad de los canales de reclutamiento (LinkedIn, web, etc.).

**Criterios de Aceptación**
- **Dado que** el usuario accede al panel de métricas, **cuando** el sistema carga los datos, **entonces** debe incluir tiempo de contratación y tasa de aceptación.
- **Dado que** el usuario selecciona un canal específico, **cuando** ve las métricas, **entonces** el sistema debe mostrar la tasa de éxito y destacar el canal más efectivo.

**Notas adicionales**  
Incluir gráficos y actualización en tiempo real de los datos.

**Tareas**
- Diseñar panel de métricas con gráficos.
- Configurar actualización de datos en tiempo real.
- Implementar filtros por canal en el panel.

---

### Agenda de entrevistas
Como reclutador, quiero poder programar entrevistas con los candidatos para organizar mejor el proceso de selección.

**Descripción**  
El reclutador debe poder programar entrevistas y notificar al candidato automáticamente.

**Criterios de Aceptación**
- **Dado que** el reclutador agenda una entrevista, **cuando** confirma la fecha, **entonces** el candidato recibe una notificación de la entrevista programada.
- **Dado que** el candidato ha confirmado su asistencia, **cuando** la fecha se acerca, **entonces** el sistema envía un recordatorio.

**Notas adicionales**  
Agregar posibilidad de confirmar o cancelar asistencia por parte del candidato.

**Tareas**
- Crear sistema de calendario de entrevistas.
- Configurar notificación de confirmación y recordatorio.
- Integrar función de confirmación de asistencia.

---

### Generación automática de transcripciones
Como reclutador, quiero acceder a la transcripción de la entrevista para revisar fácilmente las respuestas de los candidatos.

**Descripción**  
El sistema debe transcribir automáticamente las entrevistas grabadas y presentar un resumen de puntos clave.

**Criterios de Aceptación**
- **Dado que** una entrevista es grabada, **cuando** termina la sesión, **entonces** el sistema genera automáticamente una transcripción.
- **Dado que** el reclutador revisa la transcripción, **cuando** abre la sesión, **entonces** debe ver los puntos clave destacados.

**Notas adicionales**  
Integrar con AWS Transcribe u otro servicio de transcripción automática.

**Tareas**
- Configurar grabación y almacenamiento de entrevistas.
- Implementar generación de transcripción automática.
- Presentar transcripciones con puntos clave resaltados.

---

### Confirmación y seguimiento de oferta
Como candidato, quiero confirmar o rechazar una oferta de empleo para completar el proceso de selección.

**Descripción**  
El sistema debe notificar al candidato sobre una oferta y permitirle confirmarla o rechazarla, actualizando su estado en el sistema.

**Criterios de Aceptación**
- **Dado que** el candidato recibe una oferta, **cuando** accede a su perfil, **entonces** debe poder aceptarla o rechazarla.
- **Dado que** el candidato toma una decisión, **cuando** selecciona aceptar o rechazar, **entonces** el sistema actualiza su estado y notifica al reclutador.

**Notas adicionales**  
Añadir confirmación y posibilidad de reenvío de notificación.

**Tareas**
- Configurar notificación de oferta.
- Implementar confirmación de aceptación o rechazo.
- Actualizar estado del candidato y notificar reclutador.

---

### Integración con LinkedIn para datos de candidatos
Como reclutador, quiero extraer datos de LinkedIn de los candidatos para optimizar el proceso de creación de perfiles.

**Descripción**  
La plataforma debe permitir al reclutador extraer datos de LinkedIn de los candidatos y enriquecer su perfil en el sistema.

**Criterios de Aceptación**
- **Dado que** el reclutador tiene acceso al perfil de un candidato, **cuando** el sistema conecta con LinkedIn, **entonces** debe importar los datos profesionales del candidato.
- **Dado que** el candidato no ha autorizado la importación, **cuando** el reclutador intenta conectar con LinkedIn, **entonces** debe notificarse que se necesita permiso.

**Notas adicionales**  
Establecer permisos y privacidad para la extracción de datos.

**Tareas**
- Configurar integración con LinkedIn API.
- Diseñar autorización de importación de datos.
- Implementar extracción y almacenamiento de datos.

---

### Integración con Odoo ERP para gestión de contratación
Como manager, quiero integrar el ATS con el ERP para gestionar el proceso de contratación sin duplicar datos.

**Descripción**  
El sistema debe permitir sincronizar los datos de los candidatos contratados con el ERP Odoo para agilizar la administración y formalización.

**Criterios de Aceptación**
- **Dado que** el candidato es contratado, **cuando** el manager confirma el cambio de estado, **entonces** los datos deben sincronizarse automáticamente con el ERP Odoo.
- **Dado que** los datos están sincronizados, **cuando** el usuario accede al ERP, **entonces** debe ver reflejado el estado actualizado.

**Notas adicionales**  
Definir campos y reglas para la sincronización de datos.

**Tareas**
- Configurar API de integración con Odoo.
- Definir campos de sincronización y mapeo de datos.
- Implementar sincronización y verificación de datos.

## Product Backlog

### Método RICE

### 1. **Registro de candidato**
- **Reach**: 5 (todos los candidatos necesitan registrarse)
- **Impact**: 5 (es un paso esencial para cualquier acción)
- **Confidence**: 90%
- **Effort**: 3

**RICE** = (5 * 5 * 0.9) / 3 = 7.5

---

### 2. **Filtrado automático de candidatos**
- **Reach**: 4 (afecta a los reclutadores en el proceso de preselección)
- **Impact**: 5 (facilita y acelera el filtrado de candidatos)
- **Confidence**: 80%
- **Effort**: 4

**RICE** = (4 * 5 * 0.8) / 4 = 4

---

### 3. **Evaluación colaborativa de candidatos**
- **Reach**: 3 (usado por reclutadores y managers)
- **Impact**: 4 (mejora la colaboración en la toma de decisiones)
- **Confidence**: 80%
- **Effort**: 3

**RICE** = (3 * 4 * 0.8) / 3 = 3.2

---

### 4. **Notificaciones de cambio de estado para candidatos**
- **Reach**: 5 (impacta a todos los candidatos en el proceso)
- **Impact**: 4 (mejora la transparencia del proceso)
- **Confidence**: 90%
- **Effort**: 2

**RICE** = (5 * 4 * 0.9) / 2 = 9

---

### 5. **Panel de métricas de rendimiento para reclutadores y managers**
- **Reach**: 3 (afecta principalmente a los reclutadores y managers)
- **Impact**: 4 (mejora la capacidad de análisis y toma de decisiones)
- **Confidence**: 80%
- **Effort**: 4

**RICE** = (3 * 4 * 0.8) / 4 = 2.4

---

### 6. **Agenda de entrevistas**
- **Reach**: 4 (impacta a reclutadores y candidatos)
- **Impact**: 3 (facilita la organización del proceso de entrevistas)
- **Confidence**: 90%
- **Effort**: 3

**RICE** = (4 * 3 * 0.9) / 3 = 3.6

---

### 7. **Generación automática de transcripciones**
- **Reach**: 3 (principalmente usado por reclutadores)
- **Impact**: 3 (mejora el acceso a información de entrevistas)
- **Confidence**: 70%
- **Effort**: 5

**RICE** = (3 * 3 * 0.7) / 5 = 1.26

---

### 8. **Confirmación y seguimiento de oferta**
- **Reach**: 3 (impacta a candidatos y reclutadores)
- **Impact**: 4 (mejora el cierre del proceso de selección)
- **Confidence**: 85%
- **Effort**: 3

**RICE** = (3 * 4 * 0.85) / 3 = 3.4

---

### 9. **Integración con LinkedIn para datos de candidatos**
- **Reach**: 3 (usado por reclutadores)
- **Impact**: 3 (facilita la creación de perfiles)
- **Confidence**: 80%
- **Effort**: 4

**RICE** = (3 * 3 * 0.8) / 4 = 1.8

---

### 10. **Integración con Odoo ERP para gestión de contratación**
- **Reach**: 2 (afecta principalmente a managers en la fase final)
- **Impact**: 5 (mejora la administración del proceso de contratación)
- **Confidence**: 70%
- **Effort**: 5

**RICE** = (2 * 5 * 0.7) / 5 = 1.4

---

### Backlog Priorizado con RICE

| Prioridad | User Story                                         | Reach | Impact | Confidence | Effort | RICE Score |
|-----------|----------------------------------------------------|-------|--------|------------|--------|------------|
| 1         | Notificaciones de cambio de estado para candidatos | 5     | 4      | 90%        | 2      | 9          |
| 2         | Registro de candidato                              | 5     | 5      | 90%        | 3      | 7.5        |
| 3         | Filtrado automático de candidatos                  | 4     | 5      | 80%        | 4      | 4          |
| 4         | Agenda de entrevistas                              | 4     | 3      | 90%        | 3      | 3.6        |
| 5         | Confirmación y seguimiento de oferta               | 3     | 4      | 85%        | 3      | 3.4        |
| 6         | Evaluación colaborativa de candidatos              | 3     | 4      | 80%        | 3      | 3.2        |
| 7         | Panel de métricas de rendimiento                   | 3     | 4      | 80%        | 4      | 2.4        |
| 8         | Integración con LinkedIn para datos de candidatos  | 3     | 3      | 80%        | 4      | 1.8        |
| 9         | Integración con Odoo ERP                           | 2     | 5      | 70%        | 5      | 1.4        |
| 10        | Generación automática de transcripciones           | 3     | 3      | 70%        | 5      | 1.26       |

### Método MoSCoW

#### Must Have

Estas historias representan las funcionalidades mínimas viables necesarias para el sistema. Son fundamentales para que el ATS funcione y cumpla con las expectativas básicas del usuario.

1. **Registro de candidato**  
   Es necesario para que los candidatos se registren y puedan interactuar con el sistema desde el inicio.

2. **Filtrado automático de candidatos**  
   Ahorra tiempo y esfuerzo a los reclutadores, permitiéndoles concentrarse en candidatos que cumplen los requisitos mínimos.

3. **Notificaciones de cambio de estado para candidatos**  
   Mejora la experiencia del usuario al mantener a los candidatos informados de su progreso en el proceso de selección.

---

#### Should Have

Estas historias son importantes para mejorar el sistema, pero no son absolutamente críticas para el MVP. Se implementarán si los recursos y el tiempo lo permiten.

1. **Agenda de entrevistas**  
   Facilita la organización del proceso de entrevistas, pero si es necesario, podría gestionarse manualmente en la primera versión del producto.

2. **Confirmación y seguimiento de oferta**  
   Es útil para que los candidatos puedan aceptar o rechazar la oferta dentro del sistema, mejorando el cierre del proceso.

---

#### Could Have

Estas historias son deseables, pero pueden posponerse para futuras iteraciones. Agregan valor adicional sin ser esenciales para el flujo básico.

1. **Evaluación colaborativa de candidatos**  
   Aporta valor en términos de colaboración, pero los reclutadores y managers podrían compartir evaluaciones de otra forma en una primera fase.

2. **Panel de métricas de rendimiento**  
   Proporciona información de análisis, pero puede posponerse, ya que el equipo podría recopilar métricas manualmente al principio.

---

#### Won’t Have

Estas historias no se incluirán en esta fase debido a la limitación de recursos. Podrían considerarse para una versión futura del sistema.

1. **Integración con LinkedIn para datos de candidatos**  
   Aunque útil para facilitar la creación de perfiles, no es esencial para la funcionalidad básica del ATS en la fase inicial.

2. **Integración con Odoo ERP para gestión de contratación**  
   Mejora la administración al sincronizar datos con el ERP, pero es un paso posterior una vez que el flujo básico esté en marcha.

3. **Generación automática de transcripciones**  
   Es una comodidad que facilita el acceso a información de entrevistas, pero no es esencial para el lanzamiento inicial.

### Prioridad del Backlog según MoSCoW

| Prioridad   | User Story                                            |
|-------------|-------------------------------------------------------|
| Must-Have   | Registro de candidato                                 |
| Must-Have   | Filtrado automático de candidatos                     |
| Must-Have   | Notificaciones de cambio de estado para candidatos    |
| Should-Have | Agenda de entrevistas                                 |
| Should-Have | Confirmación y seguimiento de oferta                  |
| Could-Have  | Evaluación colaborativa de candidatos                 |
| Could-Have  | Panel de métricas de rendimiento                      |
| Won't-Have  | Integración con LinkedIn para datos de candidatos     |
| Won't-Have  | Integración con Odoo ERP para gestión de contratación |
| Won't-Have  | Generación automática de transcripciones              | 

### Método Value vs Effort

#### Alto Valor / Bajo Esfuerzo (Quick Wins)
Estas historias son prioritarias, ya que aportan un alto valor al sistema y requieren un esfuerzo relativamente bajo. Deben ser implementadas primero.

1. **Registro de candidato**  
   Valor alto, esfuerzo bajo. Es fundamental para la funcionalidad básica y es relativamente sencillo de implementar.

2. **Notificaciones de cambio de estado para candidatos**  
   Valor alto, esfuerzo bajo. Mejora la experiencia del usuario manteniéndolo informado del progreso.

---

#### Alto Valor / Alto Esfuerzo (Proyectos Estratégicos)
Estas historias aportan gran valor, pero requieren un esfuerzo significativo. Son una prioridad media-alta y deben programarse después de los Quick Wins.

1. **Filtrado automático de candidatos**  
   Valor alto, esfuerzo alto. Es fundamental para la eficiencia de los reclutadores, aunque requiere recursos para la implementación del sistema de IA.

2. **Agenda de entrevistas**  
   Valor alto, esfuerzo medio-alto. Facilita la organización del proceso de entrevistas y mantiene la comunicación entre candidatos y reclutadores.

3. **Confirmación y seguimiento de oferta**  
   Valor medio-alto, esfuerzo medio-alto. Facilita la finalización del proceso de selección y mejora la experiencia del candidato y el reclutador.

---

#### Bajo Valor / Bajo Esfuerzo (Low-Hanging Fruits)
Estas historias aportan valor moderado y requieren poco esfuerzo. No son críticas, pero pueden agregarse si el tiempo y los recursos lo permiten.

1. **Panel de métricas de rendimiento**  
   Valor medio, esfuerzo bajo. Permite un análisis útil para los reclutadores, aunque no es fundamental en la primera fase.

---

#### Bajo Valor / Alto Esfuerzo
Estas historias son de bajo valor en el contexto inicial del sistema y requieren un esfuerzo considerable, por lo que son las de menor prioridad.

1. **Evaluación colaborativa de candidatos**  
   Valor medio, esfuerzo alto. Aporta beneficios colaborativos, pero podría realizarse de otra forma en la fase inicial.

2. **Integración con LinkedIn para datos de candidatos**  
   Valor bajo, esfuerzo alto. Facilita la creación de perfiles, pero es opcional para el flujo básico.

3. **Integración con Odoo ERP para gestión de contratación**  
   Valor bajo, esfuerzo alto. Mejora la administración de la contratación, pero es más relevante en etapas posteriores.

4. **Generación automática de transcripciones**  
   Valor bajo, esfuerzo alto. Facilita el acceso a información de entrevistas, pero no es esencial en la primera fase.

### Prioridad del Backlog según Value vs. Effort

| Prioridad              | User Story                                            | Valor      | Esfuerzo   |
|------------------------|-------------------------------------------------------|------------|------------|
| Quick Win              | Registro de candidato                                 | Alto       | Bajo       |
| Quick Win              | Notificaciones de cambio de estado para candidatos    | Alto       | Bajo       |
| Proyectos Estratégicos | Filtrado automático de candidatos                     | Alto       | Alto       |
| Proyectos Estratégicos | Agenda de entrevistas                                 | Alto       | Medio-Alto |
| Proyectos Estratégicos | Confirmación y seguimiento de oferta                  | Medio-Alto | Medio-Alto |
| Low-Hanging Fruit      | Panel de métricas de rendimiento                      | Medio      | Bajo       |
| Baja Prioridad         | Evaluación colaborativa de candidatos                 | Medio      | Alto       |
| Baja Prioridad         | Integración con LinkedIn para datos de candidatos     | Bajo       | Alto       |
| Baja Prioridad         | Integración con Odoo ERP para gestión de contratación | Bajo       | Alto       |
| Baja Prioridad         | Generación automática de transcripciones              | Bajo       | Alto       |

### Conclusiones

Las tres metodologías han sacado resultados muy similares en cuanto a las tareas más importantes del proyecto, y por lo general han
hecho una priorización correcta.

Como detalle interesante, aunque MoSCoW y Value vs. Effort han priorizado el registro de candidatos como primera tarea, RICE lo ha 
colocado en segundo lugar, por debajo de las notificaciones de cambio de estado, lo cual no tendría demasiado sentido puesto que tiene una 
fuerte dependencia con la primera tarea, así que las puntuaciones de RICE deberían tomarse como una simple guía y no como un orden absoluto.

Sin embargo, me ha parecido interesante ver la evaluación de RICE en comparación a los otros dos métodos, puesto que mi entorno de 
trabajo usa RICE.

## Tickets de Trabajo

### [ATS-01] [Spike] Selección y preparación de herramientas para el modelo de IA en AWS

**Descripción**  
Investigar y seleccionar las herramientas y bibliotecas en AWS necesarias para implementar el modelo de IA de filtrado automático, enfocándose en las opciones integradas en AWS, como Amazon SageMaker.

**Detalles**
- Explorar Amazon SageMaker como la herramienta principal para el entrenamiento, despliegue y monitoreo del modelo de IA.
- Revisar opciones de almacenamiento en Amazon S3 para alojar los datos de entrenamiento y evaluaciones.
- Evaluar la integración de AWS Lambda para el procesamiento de eventos y activación del modelo.
- Documentar la configuración recomendada y los flujos de datos entre los servicios de AWS identificados (SageMaker, S3, Lambda).

**Criterios de aceptación**
- Amazon SageMaker, S3 y Lambda evaluados y seleccionados como herramientas principales para el pipeline de IA.
- Documentación con la arquitectura preliminar de AWS y flujos de integración entre servicios completada.

**Esfuerzo**: S  
**Prioridad**: Alta  
**Dependencias**: Ninguna

---

### [ATS-02] [Feature] Entrenamiento inicial del modelo en Amazon SageMaker con datos simulados

**Descripción**  
Entrenar una versión inicial del modelo de IA utilizando Amazon SageMaker y un conjunto de datos de prueba o datos simulados, almacenados en Amazon S3.

**Detalles**
- Crear un bucket en Amazon S3 con el nombre `ats-candidate-data` para almacenar el conjunto de datos de CVs simulados y perfiles de candidatos.
- Configurar un notebook en SageMaker para entrenar un modelo de clasificación inicial, utilizando un modelo de clasificación de texto basado en un algoritmo de regresión logística.
- Ajustar los hiperparámetros del modelo, como el tamaño del batch, la tasa de aprendizaje, y el número de iteraciones para optimizar la precisión.

**Criterios de aceptación**
- Bucket en S3 (`ats-candidate-data`) configurado con datos simulados para el entrenamiento del modelo.
- Notebook de SageMaker configurado y documentado, con el modelo inicial entrenado en datos simulados.
- Modelo inicial que alcanza una precisión básica para continuar con la iteración de desarrollo.

**Esfuerzo**: M  
**Prioridad**: Alta  
**Dependencias**: ATS-01

---

### [ATS-03] [Feature] Implementación de procesamiento de lenguaje natural para extracción de habilidades

**Descripción**  
Implementar una función de procesamiento de lenguaje natural (NLP) en SageMaker para extraer habilidades clave de los CVs, usando un pipeline de procesamiento de datos.

**Detalles**
- Configurar un pipeline en SageMaker para el preprocesamiento de datos, incluyendo la tokenización y extracción de habilidades de los CVs.
- Definir y almacenar una lista de habilidades clave en un archivo JSON en S3. Las habilidades a extraer incluyen:
   - Programación (Python, Java, SQL, etc.)
   - Herramientas de análisis (Excel, Tableau, Power BI)
   - Gestión de proyectos (Scrum, Kanban, PMP)
   - Idiomas (Inglés, Español, Francés)
   - Habilidades interpersonales (Comunicación, Trabajo en equipo)
- Probar el pipeline de NLP en un conjunto de datos de prueba y ajustar para mejorar la precisión de la extracción.

**Criterios de aceptación**
- Pipeline en SageMaker configurado para tokenizar y extraer habilidades de los CVs.
- JSON de habilidades clave almacenado en S3 y referenciado correctamente en el pipeline.
- El pipeline de NLP extrae habilidades clave con al menos un 80% de precisión en pruebas internas.

**Esfuerzo**: M  
**Prioridad**: Media  
**Dependencias**: ATS-02

---

### [ATS-04] [Feature] Clasificación de candidatos en base a criterios definidos

**Descripción**  
Implementar la lógica de clasificación en el modelo para categorizar candidatos como "Recomendado" o "No recomendado", basada en criterios de evaluación.

**Detalles**
- Configurar el modelo en SageMaker para clasificar candidatos de acuerdo al modelo de datos en el documento inicial.
- Definir los criterios de clasificación en base a años de experiencia, habilidades específicas y otras variables importantes, utilizando la lista de habilidades definida en ATS-05.
- Asegurar que los candidatos que cumplen los criterios mínimos se clasifiquen como "Recomendado" y el resto como "No recomendado".

**Criterios de aceptación**
- Modelo clasifica candidatos en "Recomendado" o "No recomendado" con una precisión mínima del 85%.
- Clasificación de candidatos documentada y verificable en el entorno de pruebas de SageMaker.

**Esfuerzo**: M  
**Prioridad**: Alta  
**Dependencias**: ATS-05

---

### [ATS-05] [Spike] Definición de criterios de evaluación de candidatos

**Descripción**  
Definir los criterios específicos que el sistema de IA usará para filtrar a los candidatos, colaborando con el equipo de reclutamiento para documentar criterios relevantes.

**Detalles**
- Reunir los criterios esenciales de evaluación, como años de experiencia, habilidades clave y nivel de educación.
- Configurar estos criterios en el sistema mediante un archivo JSON almacenado en el bucket S3 (`ats-candidate-data`) para su uso por el modelo en SageMaker.

**Criterios de aceptación**
- Criterios de evaluación definidos y documentados.
- JSON de criterios configurado en S3 y listo para usarse en el modelo de clasificación.

**Esfuerzo**: S  
**Prioridad**: Alta  
**Dependencias**: Ninguna

---

### [ATS-06] [Feature] Integración del modelo de IA con la base de datos de candidatos

**Descripción**  
Integrar el modelo de IA con la base de datos de candidatos para que el modelo pueda analizar y clasificar candidatos en tiempo real.

**Detalles**
- Crear un endpoint REST en API Gateway con el método `POST` en el path `/filter/candidates` que reciba los parámetros necesarios para la clasificación: `candidate_id` y `cv_text`.
- Configurar una función en AWS Lambda que se active al recibir solicitudes en el endpoint y procese los datos de los candidatos, enviando los datos a SageMaker para la clasificación.
- Guardar los resultados de clasificación en la base de datos de candidatos, según el modelo de datos definido en el documento inicial.

**Criterios de aceptación**
- Endpoint REST `/filter/candidates` en API Gateway configurado y funcional.
- Lambda se conecta correctamente al modelo de SageMaker y procesa los datos de candidatos.
- Resultados de clasificación almacenados en la base de datos y accesibles en tiempo real.

**Esfuerzo**: L  
**Prioridad**: Alta  
**Dependencias**: ATS-04

---

### [ATS-07] [Testing] Pruebas y optimización del modelo de filtrado automático

**Descripción**  
Realizar pruebas exhaustivas de precisión y rendimiento en el modelo de IA para mejorar su efectividad en la clasificación de candidatos.

**Detalles**
- Ejecutar pruebas de precisión y recall en el modelo usando un conjunto de datos de validación en SageMaker.
- Ajustar hiperparámetros y criterios de clasificación con base en los resultados.
- Evaluar el tiempo de respuesta del modelo y optimizar si es necesario.

**Criterios de aceptación**
- El modelo alcanza una precisión mínima del 85% en recall y precisión.
- Pruebas completadas para tiempos de respuesta dentro de los límites establecidos.
- Documentación detallada de los resultados de las pruebas y ajustes.

**Esfuerzo**: L  
**Prioridad**: Alta  
**Dependencias**: ATS-02, ATS-06

---

### [ATS-08] [Feature] Desarrollo de la interfaz para configuración de criterios de filtrado

**Descripción**  
Desarrollar una interfaz en el portal de reclutadores para configurar criterios de filtrado, conectando con el bucket `ats-candidate-data` en S3 para actualizar el archivo JSON de criterios.

**Detalles**
- Crear una interfaz en el frontend del portal en el path `/config/filter-criteria` que permita seleccionar y modificar los criterios de evaluación, integrando con el bucket S3 `ats-candidate-data` para guardar el archivo JSON.
- Añadir opciones para que los reclutadores ajusten habilidades específicas, años de experiencia y otros parámetros definidos en ATS-05.
- La interfaz debe ser intuitiva y accesible para los reclutadores.

**Criterios de aceptación**
- Interfaz permite modificar y guardar criterios de filtrado en el archivo JSON en el bucket S3 `ats-candidate-data`.
- Cambios en los criterios de evaluación reflejados y aplicables en el modelo de SageMaker.
- Interfaz cumple con estándares de usabilidad y accesibilidad.

**Esfuerzo**: M  
**Prioridad**: Media  
**Dependencias**: ATS-05

---

### [ATS-09] [Feature] Monitoreo y registro de resultados del filtrado

**Descripción**  
Implementar un sistema de monitoreo y registro que permita rastrear el rendimiento del modelo y almacenar métricas clave.

**Detalles**
- Configurar un sistema de logging en CloudWatch para registrar los resultados de cada sesión de filtrado y almacenar las métricas de rendimiento (precisión, recall).
- Implementar un dashboard en CloudWatch que muestre métricas en tiempo real.
- Configurar alarmas en CloudWatch para alertas automáticas si la precisión cae bajo un umbral definido.

**Criterios de aceptación**
- Logs de CloudWatch contienen métricas de precisión y recall del modelo.
- Dashboard en CloudWatch muestra las métricas en tiempo real.
- Alerta se activa automáticamente si el rendimiento del modelo cae bajo los niveles establecidos.

**Esfuerzo**: M  
**Prioridad**: Media  
**Dependencias**: ATS-07

---

### [ATS-10] [Testing] Pruebas de la interfaz de configuración de criterios de filtrado

**Descripción**  
Realizar pruebas funcionales y de usabilidad en la interfaz de configuración de criterios de filtrado para asegurar su correcta integración y funcionamiento.

**Detalles**
- Probar que la interfaz se comunica correctamente con el archivo JSON en el bucket S3 `ats-candidate-data` y guarda los cambios realizados por el usuario.
- Evaluar la usabilidad de la interfaz, asegurando que los reclutadores puedan navegar y modificar criterios de forma intuitiva.
- Validar que los cambios en los criterios se reflejan en el modelo de SageMaker sin errores.

**Criterios de aceptación**
- **Pruebas de funcionalidad**: Los cambios en la interfaz actualizan el archivo JSON en S3 y se reflejan en el modelo de IA.
- **Pruebas de usabilidad**: Reclutadores pueden modificar criterios de manera intuitiva.
- **Pruebas de integración**: Verificar que los cambios de criterios impactan correctamente al modelo de IA en SageMaker.
- **Pruebas de accesibilidad**: Interfaz cumple con los estándares de accesibilidad definidos.

**Esfuerzo**: S  
**Prioridad**: Media  
**Dependencias**: ATS-08

---

### Orden Recomendado de Implementación

| Orden | Número de Ticket | Tipo de Ticket | Título                                                                             | Prioridad |
|-------|------------------|----------------|------------------------------------------------------------------------------------|-----------|
| 1     | ATS-01           | Spike          | Selección y preparación de herramientas para el modelo de IA                       | Alta      |
| 2     | ATS-05           | Spike          | Definición de criterios de evaluación de candidatos                                | Alta      |
| 3     | ATS-02           | Feature        | Entrenamiento inicial del modelo con datos simulados                               | Alta      |
| 4     | ATS-03           | Feature        | Implementación de procesamiento de lenguaje natural para extracción de habilidades | Media     |
| 5     | ATS-04           | Feature        | Clasificación de candidatos en base a criterios definidos                          | Alta      |
| 6     | ATS-06           | Feature        | Integración del modelo de IA con la base de datos de candidatos                    | Alta      |
| 7     | ATS-07           | Testing        | Pruebas y optimización del modelo de filtrado automático                           | Alta      |
| 8     | ATS-08           | Feature        | Desarrollo de la interfaz para configuración de criterios de filtrado              | Media     |
| 9     | ATS-10           | Testing        | Pruebas de la interfaz de configuración de criterios de filtrado                   | Media     |
| 10    | ATS-09           | Feature        | Monitoreo y registro de resultados del filtrado                                    | Media     |
