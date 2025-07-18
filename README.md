# 📄 Contract Generator API

A simple and extensible RESTful API built with Node.js, Express, Sequelize, and TypeScript to generate **custom PDF contracts** and store their metadata in a **relational database**.

This project is ideal for businesses or platforms that require automated, dynamic contract generation and digital signing features.

---

## 🖼️ Example Output
<div  align="center">
<img width="578" height="816" alt="Image" src="https://github.com/user-attachments/assets/c49c0f9a-d329-48f0-bc2d-200f15b408a9" />
</div>

---

## 🚀 Features

- 📄 Generate PDF contracts from JSON input
- 🖋️ Support for multiple clauses, observations, and signatures
- 🗂️ Store contract metadata (title, client, value, date, etc.) in a database
- ⚙️ Swagger documentation available at `/api-docs`
- 🛠️ Structured and scalable codebase using TypeScript
- 🔌 Database integration with Sequelize

---

## 📦 Clone the Repository

```bash
git clone https://github.com/AlexandrinoVM/Proposo.git
cd Proposo
```

## ⚙️ Environment Configuration

Create a ```.env``` file at the project root with the following variables:
``` 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=contractdb
PORT=3333
```
---
## 📥 Install Dependencies

```bash
npm install
```
---
## ▶️ Start the Server Production Mode:
```bash
npm run build
npm start
```
## 📡 Available Routes
- POST	```/contracts```	Generate and store a new contract
- GET```/contracts/{id}/pdf```	Get a pdf from the database
- POST	```/contracts/{id}```	 Delete a pdf from the database
- GET	```/api-docs```	Swagger UI documentation
---
## 📂 Project Structure

```bash
src/
├── config/          # Database and Swagger configs
├── controllers/     # Route handlers
├── routes/          # Express route definitions
├── services/        # Contract generation logic
├── models/          # Sequelize models
├── main.ts          # Express app config
└── server.ts        # Entry point (database + server startup)
```
---
## JSON EXAMPLE

```bash
{
  "Header": {
    "contractor": "Tech Solutions S.A.",
    "cnpj": 98765432000188,
    "addres": "Av. das Inovações, 456 - Rio de Janeiro/RJ",
    "alignTitle": "center",
    "alignContent": "center"
  },
  "clientName": "João da Silva",
  "projectTitle": "Sistema de Gestão Empresarial",
  "date": "2025-07-17T14:30:00.000Z",
  "value": 25000,
  "sections": [
    {
      "title": "Escopo do Projeto",
      "content": "Desenvolvimento de um sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios customizados.",
      "alignTitle": "left",
      "alignContent": "justify",
      "TitleColor": "#0A0A0A",
      "ContentColor": "#333333"
    },
    {
      "title": "Tecnologias Utilizadas",
      "content": "O sistema será desenvolvido utilizando Node.js, PostgreSQL, React e Docker para garantir escalabilidade e performance.",
      "alignTitle": "left",
      "alignContent": "justify",
      "TitleColor": "#0A0A0A",
      "ContentColor": "#333333"
    },
    {
      "title": "Prazos de Entrega",
      "content": "O projeto será dividido em três fases, com entregas parciais a cada 30 dias, sendo a entrega final prevista para 90 dias após o início.",
      "alignTitle": "left",
      "alignContent": "justify",
      "TitleColor": "#0A0A0A",
      "ContentColor": "#333333"
    }
  ],
  "observations": {
    "observations": "Este contrato é válido por 12 meses após a data de assinatura. Qualquer alteração no escopo deverá ser acordada formalmente entre as partes.",
    "alignTitle": "left",
    "alignContent": "justify",
    "TitleColor": "#000000",
    "ContentColor": "#444444"
  },
  "customClauses": [
    {
      "title": "Confidencialidade",
      "content": "As partes se comprometem a manter em sigilo todas as informações técnicas, comerciais e estratégicas obtidas durante a execução deste contrato.",
      "alignTitle": "left",
      "alignContent": "justify"
    },
    {
      "title": "Propriedade Intelectual",
      "content": "Todos os direitos sobre o código-fonte e documentação produzidos serão de propriedade exclusiva da contratante.",
      "alignTitle": "left",
      "alignContent": "justify"
    },
    {
      "title": "Suporte Técnico",
      "content": "Após a entrega, será oferecido suporte técnico gratuito por um período de 60 dias corridos.",
      "alignTitle": "left",
      "alignContent": "justify"
    }
  ],
  "signatures": [
    {
      "role": "Contratante",
      "name": "Representante Legal - Tech Solutions S.A."
    },
    {
      "role": "Contratado",
      "name": "João da Silva - Desenvolvedor"
    }
  ]
}
```


