# VUE 3 + PINIA + TanStack Template

# Proyecto Hotels-Pinia-App

Este proyecto es de búsqueda de hoteles en una parte pública y reserva de hoteles una vez registrado y logado

##Primeros pasos

Instalaciones obligatorias:

```sh
Node JS --> https://nodejs.org/es/
Vue-CLI --> https://cli.vuejs.org/guide/installation.html
```

Instalaciones recomendadas:

```sh
Postman --> https://www.postman.com/downloads/
Vue DevTools --> https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en
Json Viewer --> https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc
```

## Skeleton Theme Template

```text
  src/
   │
   ├── app/
   │	│
   │	├── common/
   │	│    │   
   │	│    ├── helpers
   │	│    │
   │	│    ├── filters
   │	│    │
   │	│    └── mixins …
   │	│	
   │	├── services/
   │	│	
   │	├── store/
   │	│
   │	├── components/
   │	│    │
   │	│    ├── dashboard/
   │	│    │
   │	│    ├── home/
   │	│    │
   │    │    ├── about/ …
   │    │    │
   │	│    └── shared-components/
   │	│         │
   │	│         ├── modal-slot/
   │	│         │
   │	│         ├── spinner/
   │	│         │
   │	│         └── pager-table/ …
   │	│
   │	├── composables/
   │	│
   │	└── router/
   │
   ├── assets
   │    │
   │    ├── fonts
   │    │
   │    ├── img
   │    │
   │    └── i18n
   │	   
   ├── environments
   │	
   └── styles
```

**dashboard** _siempre_ es el componente principal del que descienden el resto de componentes

**shared-components** contiene los componentes reutilizables en la aplicación

Los hijos de los componentes irán dentro de los mismos así como las redirecciones a las rutas hijas


## Git-Hub

Establecer tu identidad:

```bash
 $ git config --global user.name "Carlos Gonzalez"
 $ git config --global user.email "carlosgreyes82@gmail.com"
 ```

Clonar proyecto:

 ```bash
 $ git clone git@github.com:the-cocktail/cepsa-comercial-front.git
 $ cd cepsa-comercial-front/
 ```

Inicialización del repositorio:

 ```bash
 $ git init
 $ git add .
 $ git commit -m "feat: first commit"
 $ git push -u origin master
 ```

## Project Setup

_Recomendable trabajar con **yarn** de forma estandar_

```sh
npm install
yarn install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
yarn lint
```
