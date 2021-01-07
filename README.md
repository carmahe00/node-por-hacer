## Aplicación de comandos

Recuerde instalar

```
npm install
``` 

Iniciar el proyecto

```
npm init
```

instala yargs y colors y lo registra en el package.json

```
npm install --save yargs colors
```

## comados creado por nosotros

lita los archivos del json

```
node app listar
```

filtra el array y elimina actualizando el json

```
node app borrar -d "Salir de la Casa"
```

actulizar es opcional -c por defecto es true

```
node app actualizar -d Comer -c false
```

crea en el archivo json

```
node app crear -d "Salir de la Casa"
```
