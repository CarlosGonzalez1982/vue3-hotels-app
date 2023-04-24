# VUE 3 + PINIA + VueQuery Template

# Proyecto Hotels-Pinia-App

Proyecto de búsqueda de hoteles en una parte pública y reserva de hoteles una vez registrado y logado


##Primeros pasos

Instalaciones obligatorias:

* [NodeJS](https://nodejs.org/es/)
* [Vue-CLI](https://cli.vuejs.org/guide/installation.html)
* [Sass](https://sass-lang.com/install)
`yarn add -D sass`
* [i18n](https://vue-i18n.intlify.dev/)
`yarn add vue-i18n@9`
* [Axios](https://axios-http.com/es/docs/intro)
`yarn add axios`

Instalaciones recomendadas:

* [Postman](https://www.postman.com/downloads/)
* [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) 
* [Json Viewer](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) 
* [Normalize](https://necolas.github.io/normalize.css/)
`yarn add normalize.css`
* [TanStack - VueQuery](https://tanstack.com/query/v4/docs/vue/installation)
`yarn add @tanstack/vue-query`
* [Json-Server](https://www.npmjs.com/package/json-server)
`yarn add json-server`


* Incluye esta línea en el **tsconfig.jason** dentro del **"compilerOptions"** si trabajas con _Typescript_ -->
`"resolveJsonModule": true,` 
* Incluye estas líneas el el **vite.config.ts** dentro del **defineConfig**:
```
define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
},
```
* Después sólo tienes que hacer las importaciones del LanguageSelector donde corresponda

* Incluye estas líneas el el **package.json** dentro de **"scripts"**:
`"backend-server": "json-server --watch ./mock-db/db.json --port 3001",`
* Después ejecuta `yarn backend-server` y disfruta de la base de datos mockeada

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
   │	│    ├── home-page/
   │    │    │    │
   │    │    │    ├── composables/
   │    │    │    │
   │    │    │    ├── children-page/
   │    │    │    │
   │    │    │    ├── layout.vue
   │    │    │    │
   │	│    │    └── index.router.ts
   │	│    │
   │    │    ├── about-page/ …
   │    │    │
   │	│    └── shared-components/
   │	│         │
   │	│         ├── modal-slot/
   │	│         │
   │	│         ├── spinner/
   │	│         │
   │	│         └── pager-table/ …
   │	│
   │	└── router/
   │
   ├── assets/
   │    │
   │    ├── fonts/
   │    │
   │    ├── img/
   │    │
   │    └── locales/
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

Estructura generada en base a **Clean Architecture** y a recomendaciones de estándares actuales para proyectos de medio-largo plazo, que puedan crecer en contenido

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
 $ git remote add origin git@github.com:CarlosGonzalez1982/vue3-skeleton.git
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

### Mock Data Base

```sh
npm run backend-server
yarn backend-server
```
