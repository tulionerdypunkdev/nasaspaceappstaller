# nasaspaceappstaller

## TIERRA · Archivo del tiempo

Una experiencia visual en español para explorar la historia del planeta: del primer fuego a Homo sapiens.

## Qué incluye

- Un globo terrestre 3D que se puede girar arrastrando horizontalmente.
- Ocho hitos históricos, con planetas procedurales, explicaciones y fuentes.
- Un reloj interactivo que comprime 4.540 millones de años en 24 horas.
- Diseño adaptable a escritorio, tablet y móvil.
- Navegación por teclado, opción para pausar el movimiento y respeto por `prefers-reduced-motion`.
- Imagen alternativa si WebGL no está disponible.
- Texturas y tipografía locales: no requiere CDN, cuentas, analítica ni cookies.

## Abrir en tu computadora

Puedes abrir `index.html` con doble clic. Para ver el globo 3D con todas las funciones, es preferible servir la carpeta por HTTP: algunos navegadores bloquean texturas WebGL en direcciones `file://`.

Abre una terminal en esta carpeta y ejecuta:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Después abre `http://127.0.0.1:8000`. Para cerrar el servidor, pulsa Ctrl+C.

## Publicar en GitHub Pages

No hay que compilar nada ni instalar Node.js.

1. Crea un repositorio público en tu cuenta de GitHub, con el nombre que prefieras.
2. Sube **el contenido** de esta carpeta a la raíz del repositorio. `index.html` debe quedar en la raíz, no dentro de otra carpeta. Incluye `assets/`, `styles.css`, `app.js` y `.nojekyll`.
3. En el repositorio entra en **Settings → Pages**.
4. En **Build and deployment → Source**, elige **Deploy from a branch**.
5. Selecciona la rama que contiene los archivos (habitualmente `main`) y la carpeta **/(root)**. Pulsa **Save**.
6. GitHub mostrará la dirección de tu sitio en esa misma sección cuando termine el despliegue.

Las rutas de la web son relativas; también funciona en una dirección de proyecto como `usuario.github.io/nombre-del-repositorio/`.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Repositorio de este proyecto: https://github.com/tulionerdypunkdev/nasaspaceappstaller

Subir el código al repositorio no activa GitHub Pages automáticamente. La publicación del sitio se configura por separado siguiendo los pasos anteriores.

## Editar la web

| Archivo | Qué cambiar |
| --- | --- |
| `index.html` | Portada, secciones y enlaces de fuentes |
| `styles.css` | Colores, tipografía y diseño adaptable |
| `app.js` | Los ocho hitos (`epochs`), reloj y globo WebGL |
| `assets/` | Textura NASA, imagen alternativa y fuentes locales |
| `CREDITOS.md` | Procedencia y condiciones de los recursos |

El reloj se calcula a partir de las edades en años de `app.js`, usando una edad terrestre aproximada de 4.540 millones de años. El control selecciona hitos, no intervalos uniformes de tiempo. La aguja sí representa el tiempo proporcional real.

## Alcance científico

Es una introducción divulgativa, no una cronología geológica exhaustiva. Las fechas están redondeadas. La datación del origen de la vida, de la Luna y de otros acontecimientos conserva incertidumbres.

Los planetas antiguos son **ilustraciones procedurales artísticas**: no reconstrucciones de continentes, mapas paleogeográficos ni simulaciones científicas. Solo la Tierra actual usa una textura de observación NASA. Las fuentes consultables están en la propia web y en `CREDITOS.md`.

## Tecnología y privacidad

HTML, CSS y JavaScript puro, con un pequeño renderizador WebGL propio. Sin frameworks, compilación ni servicios de terceros en tiempo de ejecución. Solo se guarda en `localStorage` la preferencia de movimiento. Abrir una fuente externa sí navega al sitio correspondiente.
