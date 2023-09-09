# DLSApi
API DL Salud

Esta API fue realizada en Node Js, con express y MongoDB como un ejemplo, esta dockerizada y desplegada
en Render. Cuenta con autenticacion mediante JWT y algunos endpoints.

https://api-service-dls.onrender.com/v1/apisa/home

para alguna prueba con postman

Inicio de sesion
POST
https://api-service-dls.onrender.com/v1/apisa/auth/signin
{
  "username":"vns",
  "password":"123"
}

Devuelve pruebas de laboratorio. Endpoint protegido, requiere un token.
https://api-service-dls.onrender.com/v1/apisa/prueba
