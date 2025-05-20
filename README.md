# 🛒 ReactShop

Projeto frontend em React + TypeScript utilizando autenticação com JWT, integração com a Fake Store API e interface moderna com Material UI.

---

## ✅ Funcionalidades

- Login com JWT (Fake Store API)
- Rotas protegidas
- Lista de produtos com imagem, nome, preço, status e data
- Página de detalhes do produto
- Botão de logout funcional
- Estilo moderno com fundo azul claro e botões azul escuro
- Paginação com 10 produtos por página
- Persistência de autenticação (mesmo após recarregar)

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

---

## 🧪 Como executar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/larytaetae/fake-store-app

# 2. Acesse a pasta do projeto
cd reactshop

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Login de teste

Você pode utilizar as seguintes credenciais de teste:

```bash
Usuário: mor_2314
Senha: 83r5^_
```

---

## 📡 Endpoints usados (Fake Store API)

- `POST https://fakestoreapi.com/auth/login` → login com JWT
- `GET https://fakestoreapi.com/products` → lista de produtos
- `GET https://fakestoreapi.com/products/:id` → detalhes do produto