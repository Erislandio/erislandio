# Portfólio Premium — Erislandio Soares

Site de portfólio moderno, sofisticado e responsivo para Engenheiro Full-Stack Sênior / Tech Lead.

## 🚀 Tecnologias Utilizadas
- **React** + **Vite**
- **TypeScript**
- **Framer Motion** (animações suaves)
- **Lucide React** (ícones)
- **CSS3 Moderno** (Variáveis, Flexbox, Grid)
- **GitHub Actions** (CI/CD)

## 🛠️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/erislandio/portifolio.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse: `http://localhost:5173/portifolio/`

## 📦 Como Publicar (GitHub Pages)

Este projeto está configurado para deploy automático via **GitHub Actions**.

1. Crie um repositório no GitHub chamado `portifolio`.
2. Push seu código para a branch `main`:
   ```bash
   git remote add origin https://github.com/erislandio/portifolio.git
   git add .
   git commit -m "feat: initial portfolio"
   git push -u origin main
   ```
3. No GitHub, vá em **Settings > Pages**.
4. Em **Build and deployment > Source**, selecione **GitHub Actions**.
5. O workflow em `.github/workflows/deploy.yml` fará o resto automaticamente.

## 📝 Personalização
Toda a informação do site está centralizada no arquivo:
`src/data/portfolio.ts`

Basta alterar os textos e dados nesse arquivo para atualizar o conteúdo do site.

---
Desenvolvido por Erislandio Soares.
