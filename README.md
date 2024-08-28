# SART

Este proyecto es un sistema que se puede levantar en modo de desarrollo para pruebas y desarrollo continuo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- [Git](https://git-scm.com/)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias del proyecto:

   ```bash
   pnpm install
   ```

## Configuración

1. Crea un archivo .env.local en la raíz del proyecto.

2. Dentro del archivo .env.local, agrega la dirección a la API:

   ```bash
   NEXT_PUBLIC_API_ENDPOINT="http://localhost:4000/api"
   ```

## Levantar el Sistema en Modo de Desarrollo

Para levantar el sistema en modo de desarrollo, ejecuta el siguiente comando:

```bash
   pnpm run dev
```
