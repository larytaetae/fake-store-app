# 📂 ClickCart – Fake Store PWA

ClickCart é uma aplicação web responsiva (PWA - Progressive Web App) construída em **React + TypeScript + Vite**, que simula uma loja virtual integrada à [Fake Store API](https://fakestoreapi.com/). O projeto possui autenticação com JWT, layout mobile-first, navegação SPA com React Router, modo offline e integração com Material UI.

## 🚀 Funcionalidades

- ✅ Login com autenticação JWT
- 📦 Listagem de produtos com paginação
- 🔍 Detalhamento individual do produto
- 📱 Layout mobile-first com suporte PWA (modo offline parcial)
- 🔐 Rotas protegidas
- 🧾 Tabela com status e datas fictícias
- 🎨 Interface estilizada com Material UI

## 📲 Acesso no celular

Para acessar a aplicação no celular via rede local (durante preview):

1. Descubra seu IP local:
   ```bash
   ipconfig # copie o IPv4 (ex: 192.168.0.105)
   ```
2. Rode o projeto com:
   ```bash
   npm run build
   npx vite preview --host
   ```
3. No celular, acesse:
   ```
   http://SEU_IP_LOCAL:4173
   ```

---

## 🦚 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/larytaetae/fake-store-app.git
cd fake-store-app

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

---

## 🔐 Credenciais de Teste

Você pode usar as seguintes credenciais da Fake Store API para login:

- **Usuário:** `mor_2314`
- **Senha:** `83r5^_`

---

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Fake Store API](https://fakestoreapi.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [PWA com Vite](https://vite-plugin-pwa.netlify.app/)

---

## ✍️ Autor

Feito por [Larissa Rodrigues Cano](https://github.com/larytaetae) 👩‍💻  
          [Diego Batista Dos Santos]
Centro Universitário do Norte de São Paulo – ADS 🎓

---

## 📄 Licença

Este projeto é open-source e está licenciado sob a [MIT License](LICENSE).
