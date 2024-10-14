-- Creación de Base de Datos
CREATE DATABASE likeme;

-- Entrar a la Base de Datos
\c likeme;

-- Crear Tabla
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);