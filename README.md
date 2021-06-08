 webpack configuration and deploy vercel finished
 good practices with code splitting, webpack configuration and babel
 page favorites completed + custom hooks


## Dependencias del proyecto

```bash
# Axios
yarn add axios
# node-sass
yarn add node-sass@4.13.0
# prop-types
yarn add prop-types
# react-router-dom
yarn add react-router-dom
# redux
yarn add redux@4.0.4
# react-redux
yarn add react-redux
# redux-devtools-extension
yarn add redux-devtools-extension
# redux-logger
yarn add redux-logger
```

## Dependencias en producción del proyecto (Code Splitting)
```bash
yarn add @babel/core@7.12.17 -D
yarn add @babel/preset-env@7.12.17 -D
yarn add @babel/preset-react@7.12.13 -D
yarn add babel-loader@8.2.2 -D
yarn add @svgr/webpack@5.5.0 -D
yarn add copy-webpack-plugin@7.0.0 -D
yarn add core-js@3.9.0 -D
yarn add css-loader@5.0.2 -D
yarn add favicons-webpack-plugin@5.0.1 -D
yarn add file-loader@6.2.0 -D
yarn add html-webpack-plugin@5.2.0 -D
yarn add image-webpack-loader@7.0.1 -D
yarn add prettier@1.19.1 -D
yarn add regenerator-runtime@0.13.7 -D
yarn add sass-loader@11.0.1 -D
yarn add style-loader@2.0.0 -D
yarn add webpack@5.23.0 -D
yarn add webpack-cli@4.5.0 -D
yarn add webpack-dev-server@3.11.2 -D
```

## Proyecto en producción en Vercel

```bash
# Instalar CLI de vercel en forma Global (Una sola vez)
npm i -g vercel
# Configuraciones para el deploy
vercel
# Proyecto a Producción
vercel --prod
# Inspect
https://vercel.com/guillermoechague/redux-marzo-rick-and-morty/HtB6qnodf9VuLkGDCR49duXCu6SU
#Production: 
https://y-ten-delta.vercel.app
```

## Ejecución de proyecto
```bash
# Modo Development
yarn start
# Modo Production
yarn build
# Servidor de prueba webpack
yarn run dev-server
```


## Codigos GIT
```bash
# Revisar logs
git log --pretty=oneline
#Cargar cambios y versiones
git branch -M main
git push -u origin main
# Generar Tags
           (Version) 
git tag -a V1.0.0 -m "Mensaje"
git push --tags
#branches (Ramas)
git add .
git checkout -b room
git commit -m "Agregado de dependencias"
git push origin room
#Unir Ramas a main
git checkout main
git merge <Nombre Rama> -m "Mensaje rama"
```

## Demostración del proyecto

### Error
![](img/error.png)

### Character
![](img/character.png)

### Detail
![](img/detail1.png)
![](img/detail2.png)

### Favorites
![](img/favorites1.png)
![](img/favorites2.png)

### Vercel
![](img/vercel.png)