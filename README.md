# frontend-test-ml
Test ML

# PreInstall
Instalar node, npm y bower

# Install 
1.- Navegar hasta la carpeta de build 'cd repositorio/resources/build'
2.- Ejecutar 'npm install' para instalar las dependencias.
3.- Ejecutar 'bower install' para instalar los vendors externos.
4.- Navergar a la carpeta de chico ui 'cd repositorio/resources/build/bower_components/chico'
5.- Ejecutar 'npm install' para instalar las dependencias.
6.- Ejecutar 'bower install' para instalar los vendors externos.
7.- Ejcutar grunt dist para generar la version de chico ui
8.- Subir al directorio build 'cd ../../'
9.- Ejecutar 'gulp' para generar el ambiente de desarrollo o 'gulp --production' para producción.
10.- Enjoy!

# Observaciones
La compilación de los archivos sass, minificación de css y js, el Autoprefixer, todo se hace
a través de la libreria 'laravel-elixir'