# ProductStore

This app was developed for 3Pillar Global as an evaluation of Angular Framework and Nx workspaces.

## Run
`nx serve product-store`

## Credentials
- Email: `cgalvezj@hotmail.com`
- Password: `123456`

## Frontend
The frontend is built using Angular Framework and uses the following features:
- Routing
- Lazy loading
- Environment files
- Services
- Components (mostly standalone ones)
- Pipes
- Control flow
- Forms
- Observables
- RxJS
- PrimeNg Components
- PrimeFlex
- NgXs
- NgXs plugins

### Folder structure
- `app` folder contains the main application components
- `theme` folder contains global styles and may be used for PrimeNg theming.
- `core` folder contains one-time-use components like header, singleton services, guards, among others.
- `login`, `products`, `users`, and `categories` folders contains feature-specific components and services.
- `shared` folder contains shared components and services.
- `environments` folder contains environment files for different environments.
- `store` folder contains the state management stuffs.
- `utils` folder contains utility functions.

### Lazy loading
The frontend uses lazy loading to load standalone components on demand. This is achieved by using the `loadComponent`

### NgXs
The state management is provided by NgXs. The following states are used:
- `CoreState`
- `ProductState`
- `CategoryState`
- `UserState`

#### Plugins
The following plugins are used:
- `@ngxs/storage-plugin`
- `@ngxs/devtools-plugin`

## Frontend persistence
All data in frontend is mocked. That means the app is using mocked services for simulating the calls to a server in development mode.
The app is ready to use real data coming from a server.

## Nx
The project uses Nx workspace to manage the monorepo. The following features are used:
- Workspace
- Schematics
- Projects
- Libraries
- Monorepo

### Projects
The project has the following projects:
- frontend (src/app)

### Libraries
The project uses libraries to share code between projects. The following libraries are used:
- Domain