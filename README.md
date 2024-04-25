API de filmes e séries

Deve ser possível cadastrar, atualizar, excluir, ler de forma múltipla e individual

Deverão existir filtros por gênero e busca por título

Entidade
id - númerico
title - texto
description - text
genre - text
video - text
createdAt - data
updatedAt - data

Rotas 
/movies
POST /
PATCH /:id
DELETE /:id
GET / (queryParams: search e genre)
GET /:id

Express / Typescript