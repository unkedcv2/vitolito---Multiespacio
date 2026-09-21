# PROMPT MAESTRO — REGLAS GENERALES DE DESARROLLO

## 1. CONFIGURACIÓN Y ALCANCE
Trabajá sobre el proyecto existente utilizando:
- React
- TypeScript
- Vite
- CSS / sistema de estilos existente
- Firebase, si ya está integrado
- Routing existente
- Configuración de build y deployment existente

### Regla principal
NO modificar, eliminar, reemplazar ni reinterpretar funcionalidades existentes que no hayan sido solicitadas expresamente.
Esto incluye, entre otras cosas:
- Firebase
- autenticación
- usuarios
- contraseñas
- bases de datos
- reglas de seguridad
- APIs
- formularios
- lógica de negocio
- rutas
- componentes
- configuraciones de Vite
- configuración de deployment
- dominios
- integraciones existentes
Si algo ya funciona, conservarlo.

## 2. REGLA FUNDAMENTAL: NO HACER CAMBIOS NO SOLICITADOS
Cada modificación debe responder directamente a una necesidad indicada en el pedido.
No:
- agregar funcionalidades por iniciativa propia
- cambiar estructuras porque "podrían estar mejor"
- reemplazar tecnologías
- migrar Firebase
- cambiar autenticación
- modificar usuarios existentes
- cambiar contraseñas
- eliminar configuraciones
- reorganizar componentes sin necesidad
- modificar diseño por criterio propio
Si una mejora técnica no es necesaria para resolver el pedido, no realizarla.

## 3. NO TOMAR DECISIONES CREATIVAS
El sistema no debe inventar decisiones de diseño.
No modificar por iniciativa propia:
- colores
- tipografías
- tamaños
- estilos
- composición
- espaciados
- imágenes
- videos
- iconografía
- logos
- estructura visual
- contenido
- textos
- tono de comunicación
Si el usuario no lo solicita, conservar lo existente.

## 4. IMÁGENES, VIDEOS Y RECURSOS VISUALES
No inventar imágenes, videos, logos, fotografías ni recursos visuales.
No utilizar:
- imágenes placeholder
- imágenes genéricas
- fotografías inventadas
- logos inventados
- recursos de otras empresas
- assets de proyectos anteriores
- imágenes externas no solicitadas
Utilizar únicamente:
- recursos entregados por el usuario
- recursos existentes dentro del proyecto
- recursos específicamente indicados en el pedido
Si un recurso necesario no existe, no reemplazarlo automáticamente por otro.

## 5. ESTRUCTURA DE ASSETS
Todos los recursos de interfaz deben estar organizados dentro de `src/assets/`.
Utilizar esta estructura:
```
src/
└── assets/
    ├── images/
    │   ├── general/
    │   ├── backgrounds/
    │   └── og/
    ├── logos/
    ├── icons/
    ├── videos/
    ├── fonts/
    └── documents/
```

### Uso de cada carpeta
- `images/general/`: fotografías, imágenes de contenido, imágenes de secciones, galerías.
- `images/backgrounds/`: fondos, imágenes utilizadas específicamente como background.
- `images/og/`: imágenes destinadas a Open Graph, imágenes para compartir el sitio en redes sociales.
- `logos/`: logotipos, isotipos, variantes de marca.
- `icons/`: íconos propios, SVG de interfaz, recursos gráficos pequeños.
- `videos/`: videos, videos hero, videos de fondo.
- `fonts/`: fuentes locales del proyecto.
- `documents/`: PDFs u otros documentos que formen parte de la interfaz.

## 6. IMPORTACIÓN DE ASSETS
Los assets de `src/assets/` deben ser importados desde React/Vite.
Ejemplo:
```typescript
import logo from '@/assets/logos/logo.svg';
import heroImage from '@/assets/images/general/hero.jpg';
```
Utilizar las rutas generadas por Vite.
No construir manualmente rutas absolutas del tipo `/assets/imagen.jpg` para recursos que pertenecen a `src/assets`.

## 7. ARCHIVOS TÉCNICOS EN PUBLIC/
La carpeta `public/` no debe utilizarse para almacenar recursos normales de la interfaz.
Los recursos visuales de la interfaz deben permanecer en `src/assets/`.
Sin embargo, `public/` puede utilizarse para archivos técnicos que necesitan una URL pública estable y directa:
```
public/
├── favicon.png
├── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
└── manifest.webmanifest
```
No mover imágenes de la interfaz a `public/` sin una razón técnica concreta.

## 8. FAVICON — REGLAS PERMANENTES
El favicon debe tratarse como un recurso técnico independiente del logo principal del sitio.
Si el proyecto ya posee un favicon funcional, no reemplazarlo ni generar otro sin que sea solicitado.
Preferentemente utilizar `public/favicon.png` como favicon estable.
El HTML debe utilizar una referencia clara y estable, por ejemplo:
`<link rel="icon" type="image/png" href="/favicon.png" />`
Si existe `apple-touch-icon.png`, puede utilizarse:
`<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`
No agregar referencias a archivos que no existen.
No inventar `/favicon.ico` o `/favicon.svg` si esos archivos no están realmente presentes.

## 9. FAVICON Y GOOGLE SEARCH
El favicon debe:
- ser cuadrado
- tener relación 1:1
- tener suficiente resolución
- ser accesible públicamente
- responder correctamente
- no estar bloqueado por robots.txt
- mantener una URL estable
- representar claramente la identidad del sitio
No cambiar constantemente el favicon ni su URL con parámetros de versión (evitar `/favicon.png?v=2`).

## 10. VERIFICACIÓN TÉCNICA DEL FAVICON
Antes de finalizar un proyecto verificar que `favicon.png` exista, responda correctamente y el HTML tenga la referencia adecuada. No confundir favicon, logo de marca, Open Graph image, imagen de redes sociales o logo de datos estructurados.

## 11. FAVICON, LOGO Y METADATOS
No utilizar automáticamente el favicon como `og:image` ni como `logo` del JSON-LD.
Cuando exista un logo real del proyecto, utilizar el logo correspondiente (ejemplo: `src/assets/logos/logo.svg`).

## 12. SEO TÉCNICO GENERAL
Cada página debe tener, cuando corresponda:
`<title>`, `meta description`, `canonical`, `Open Graph`, `Twitter Card`, idioma correcto, viewport, y estructura semántica adecuada.
No duplicar títulos o descriptions innecesariamente. Títulos específicos por página.

## 13. SEO SIN INVENTAR INFORMACIÓN
No inventar información para mejorar SEO (servicios, ubicaciones, testimonios, etc.). Utilizar únicamente información proporcionada o existente en el proyecto.

## 14. DATOS ESTRUCTURADOS / JSON-LD
Utilizar JSON-LD únicamente cuando exista información suficiente y real. El tipo de Schema debe corresponder al negocio o contenido real. Sin propiedades ni datos ficticios.

## 15. IMÁGENES Y SEO
Cuando corresponda, alt descriptivo real (sin relleno de keywords), nombres de archivo razonables, dimensiones apropiadas, formato adecuado y carga optimizada.

## 16. ROUTING
Mantener el sistema de routing existente. No crear rutas manuales innecesarias. Verificar navegación interna, acceso directo, URL copiada y refresh.

## 17. DEPLOYMENT
No modificar innecesariamente la configuración de deployment (Vercel, Hostinger, GitHub, Firebase, variables de entorno, build). No cambiar proveedor ni dominio.

## 18. RUTAS Y DEPLOYMENT
Después de cualquier modificación verificar que el build continúe funcionando, comprobando rutas, assets, favicon y archivos técnicos.

## 19. RESPONSIVE
Mantener comportamiento responsive (desktop, tablet, mobile). Integrar nuevas secciones sin romper el comportamiento existente.

## 20. PERFORMANCE
Evitar recursos innecesariamente pesados, librerías innecesarias, scripts externos o dependencias superfluas. Mantener el proyecto liviano.

## 21. ACCESIBILIDAD
Mantener buenas prácticas básicas: textos alternativos, HTML semántico, botones definidos, labels en formularios, contraste razonable y navegación por teclado.

## 22. CÓDIGO LIMPIO Y MANTENIBLE
Componentes reutilizables, nombres claros, estructura ordenada, imports correctos, sin duplicación de lógica ni eliminación de código útil existente.

## 23. RESPETAR EL CONTEXTO EXISTENTE
Analizar cómo está construido antes de modificar. Si ya existe una solución funcional, conservarla.

## 24. CAMBIOS INCREMENTALES
Realizar cambios de manera localizada sin rehacer áreas ajenas al requerimiento.

## 25. SEGURIDAD Y ESTABILIDAD
No modificar reglas de Firebase, autenticación, permisos, usuarios, contraseñas, tokens, variables privadas ni bases de datos sin solicitud expresa.

## 26. INFORMACIÓN FALTANTE
Si falta información crítica, no inventarla. Utilizar lo disponible y consultar si es bloqueante.

## 27. ESTABILIDAD DEL PROYECTO
Mantener siempre build, rutas, assets, backend, formularios y responsive funcionales.

## 28. VERIFICACIÓN FINAL DE ASSETS
Verificar la estructura de carpetas en `src/assets/` y archivos técnicos en `public/` asegurando que no haya enlaces rotos, placeholders ni referencias a proyectos anteriores.

## 29. NO ASUMIR
No asumir nombres, marcas, logos, colores, servicios, URLs ni credenciales. Todo debe surgir del proyecto o instrucciones.

## 30. REGLA ESPECIAL PARA REMIX / REUTILIZACIÓN
Eliminar referencias residuales de marcas o plantillas previas al adaptar proyectos, conservando la base técnica requerida.

## 31. CAMBIOS FUTUROS
Cada pedido es un cambio independiente; evaluar el impacto antes de realizar modificaciones.

## 32. PRINCIPIO FINAL
La prioridad es:
ESTABILIDAD → EXACTITUD → CONSISTENCIA → PERFORMANCE → SEO TÉCNICO → ACCESIBILIDAD
No agregar complejidad innecesaria. No improvisar. No inventar. No modificar lo que funciona.
Modificar únicamente lo solicitado y mantener todo lo demás estable.
