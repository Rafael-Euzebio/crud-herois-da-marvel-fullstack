# Desafio: Criação de um CRUD de Novos Heróis da Marvel

Este desafio faz parte do processo seletivo do projeto Frontend Fusion para a vaga de Desenvolvedor React Júnior.

## TODO

### Frontend (React + TypeScript)

#### Página Principal:
- [ ] Exibe a lista de heróis.
    - `HeroList`: Componente que exibe a lista de heróis.
- [x] Permite a criação de um novo herói.
    - `HeroForm`: Componente para criar e editar heróis.
- [ ] Permite a atualização de heróis existentes.
- [ ] Permite a exclusão de heróis.
    - `HeroItem`: Componente que representa um herói individual com opções de editar e excluir.

### Backend (Node + NestJS + TypeScript + Banco de Dados Relacional ou Não Relacional)

#### Rotas para CRUD de Heróis:

- [x] **Criar Herói**
  - **Endpoint:** `/heroes`
  - **Método:** POST
  - **Descrição:** Cria um novo herói. Os dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição. O cadastro deve ser predefinido a heróis que já existem no universo Marvel.

- [x] **Listar Heróis**
  - **Endpoint:** `/heroes`
  - **Método:** GET
  - **Descrição:** Retorna a lista de todos os heróis.

- [x] **Atualizar Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** PUT
  - **Descrição:** Atualiza um herói existente com base no ID. Os novos dados do herói (nome, habilidades, e origem) devem ser enviados no corpo da requisição.

- [x] **Excluir Herói**
  - **Endpoint:** `/heroes/:id`
  - **Método:** DELETE
  - **Descrição:** Exclui um herói existente com base no ID.

## TechStack

**Frontend:**
- React
- TypeScript.
- Axios
- Redux
- SWR
- Tailwind

**Backend:**
- NestJS
- TypeScript.
- MongoDB

