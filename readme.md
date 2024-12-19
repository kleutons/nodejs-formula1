# 🏎️ APP FORMULA 1 <br> Aplicação Minimal com Node.js e Fastify

Esta é uma aplicação minimalista de API REST construída com Node.js e Fastify. Ela fornece informações sobre equipes e pilotos de Fórmula 1 por meio de alguns endpoints simples.

## Funcionalidades

- **CORS**: Configurado para permitir qualquer origem com o método GET.
- **Endpoints**:
  - `/teams`: Retorna uma lista de equipes de Fórmula 1.
  - `/drivers`: Retorna uma lista de pilotos de Fórmula 1.
  - `/drivers/:id`: Retorna informações detalhadas de um piloto específico pelo ID.

## Requisitos

- [Node.js](https://nodejs.org/) (v16+ recommended)

## Installation

1. Clone the repository:
   ```bash
    git clone <url-do-repositorio>
    cd <pasta-do-repositorio>
   ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie o servidor:
   - Para desenvolvimento: 
    ```bash
    npm run start:dev
    ```
   - Para assistir alterações no código: 
    ```bash
    npm run start:watch
    ```
   - Para produção:
    ```bash
    npm run start:dist
    ```
**- O servidor será iniciado em http://localhost:3333.**

## Endpoints
> GET /teams

Retorna uma lista de equipes de Fórmula 1, Resposta Exemplo:
```json
{
    "teams": [
        {
        "id": "redbull",
        "name": "Red Bull Racing",
        "base_city": "Milton Keynes",
        "base_country": "United Kingdom"
        },
        ...
    ]
}
```

> GET /drivers

Retorna uma lista de pilotos de Fórmula 1, Resposta Exemplo:
```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Max Verstappen",
      "team_id": "redbull",
      "team_name": "Red Bull Racing",
      "country": "Netherlands"
    },
    ...
  ]
}
```

> GET /drivers/:id

Retorna informações detalhadas de um piloto específico pelo ID, Resposta Exemplo:
```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team_id": "redbull",
    "team_name": "Red Bull Racing",
    "country": "Netherlands"
  }
}
```
## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Autor

Criado como um exemplo minimalista de API com Node.js e Fastify. 🚀

### Created by 💙 [@kleutons](https://github.com/kleutons)

### Contato
[![PORTFOLIO](https://img.shields.io/badge/PORTFOLIO-F7DF1E?style=for-the-badge&logo=dev.to&logoColor=black)](https://kleuton.dev) 

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=fff)](https://www.linkedin.com/in/kleuton-novais/)

[![Perfil DIO](https://img.shields.io/badge/-Meu%20Perfil%20na%20DIO-A435F0?style=for-the-badge&logo=dtube&logoColor=fff)](https://www.dio.me/users/cleutoon)
