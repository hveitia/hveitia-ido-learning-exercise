# iDO Learning Héctor Veitía Vila


#### Pasos para ejecutar el siguiente ejercicio:

 - Clonar este repositorio  
 ```git clone https://github.com/hveitia/hveitia-ido-learning-exercise.git```
 
 - Moverte hasta la carpeta del proyecto
  ```cd hveitia-ido-learning-exercise```

 - Instalar las dependencias  
```npm install```

 - Iniciar el server  
```npm run start-dev```

##### Si todo va bien se debe estar ejecutando el API en: http://localhost:3000 

### API REST

#### Obtener JWT firmado

##### Request
```POST  /login```

```
{ 
    "username": "Juan" 
}
```

##### Response
```
{
    "status": "SUCCESS",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuIiwiaWF0IjoxNTg1NDI1OTU0LCJleHAiOjE1ODU0MjYwMTR9.SJg192wSgUtIy1gmLtdiVi5BQayV1dkNu7ksp48eu24"
    }
}
```


#### Verificar JWT firmado
##### Request
```GET  /verify```
###### Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuIiwiaWF0IjoxNTg1NDI1OTU0LCJleHAiOjE1ODU0MjYwMTR9.SJg192wSgUtIy1gmLtdiVi5BQayV1dkNu7ksp48eu24
```


##### Response
```
{
    "message": "Token expired."
}
```

