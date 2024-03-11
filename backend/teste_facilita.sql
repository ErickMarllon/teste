CREATE TABLE "admin" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "nome" varchar(100) NOT NULL,
  "email" varchar(100) UNIQUE NOT NULL,
  "telefone" varchar(11),
  "senha" varchar(100)
);

CREATE TABLE "clientes" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "nome" varchar(100) NOT NULL,
  "email" varchar(100) UNIQUE NOT NULL,
  "telefone" varchar(11) NOT NULL
);

CREATE TABLE "coordenadas" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "cliente_id" int UNIQUE NOT NULL,
  "coordenada_x" double NOT NULL,
  "coordenada_y" double NOT NULL
);

ALTER TABLE "clientes" ADD FOREIGN KEY ("id") REFERENCES "coordenadas" ("cliente_id");
