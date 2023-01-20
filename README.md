# VUE 3 + PINIA + VueQuery Template

# Proyecto Hotels-Pinia-App

Proyecto de búsqueda de hoteles en una parte pública y reserva de hoteles una vez registrado y logado


##Primeros pasos

Instalaciones obligatorias:

* [NodeJS](https://nodejs.org/es/)
* [Vue-CLI](https://cli.vuejs.org/guide/installation.html)
* [Sass](https://sass-lang.com/install)
`yarn add -D sass`

Instalaciones recomendadas:

* [Postman](https://www.postman.com/downloads/)
* [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) 
* [Json Viewer](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) 
* [Normalize](https://necolas.github.io/normalize.css/)
`yarn add normalize.css`


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
   ├── assets/
   │    │
   │    ├── fonts/
   │    │
   │    ├── img/
   │    │
   │    └── i18n/
   │	   
   ├── environments/
   │	
   └── styles/
        │    
        ├── utilities/
        │
        ├── vendor/
        │
        ├── vendor-extensions/
        │
        ├── base/
        │
        ├── layout/
        │
        ├── components/
        │
        ├── pages/
        │
        └── themes/
```

Estructura generada en base a **Clean Architecture** y a recomendaciones de Seniors Dev para proyectos de medio-largo plazo, que puedan crecer en contenido

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
 $ git clone git@github.com:CarlosGonzalez1982/vue3-hotels-app.git
 $ cd vue3-hotels-app/
 ```

Inicialización del repositorio:

 ```bash
 $ git init
 $ git add .
 $ git commit -m "feat: first commit"
 $ git branch -M master
 $ git remote add origin git@github.com:CarlosGonzalez1982/vue3-hotels-app.git
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
