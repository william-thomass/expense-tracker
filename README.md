💰 Expense Tracker CLI
Uma ferramenta de linha de comando (CLI) robusta para gerenciamento de despesas financeiras, desenvolvida com foco em Clean Architecture e princípios SOLID.

🚀 Sobre o Projeto
O Expense Tracker permite que usuários registrem, listem, atualizem e excluam despesas, além de fornecer um resumo financeiro (total ou mensal). Este projeto foi construído para consolidar conhecimentos em tipagem estrita com TypeScript e manipulação de sistemas de arquivos.

🛠️ Tecnologias e Conceitos
Runtime: Node.js

Linguagem: TypeScript

Persistência: File System (JSON)

Arquitetura: Clean Architecture (Use Cases & Repositories)

Padrões: SOLID (DIP, SRP) e Factory Pattern

🏗️ Arquitetura
O projeto segue uma estrutura desacoplada para garantir testabilidade e fácil manutenção:

Repositories: Camada responsável pela persistência de dados (Interface e Implementação FS).

Use Cases: Contém a lógica de negócio isolada (ex: SummaryAllExpenseUseCase).

Factories: Centraliza a criação de instâncias para injeção de dependência.

💻Comandos:
npx tsx src/cli.ts add --description Cinema --amount 30
npx tsx src/cli.ts list
npx tsx src/cli.ts delete < id >
npx tsx src/cli.ts summary
npx tsx src/cli.ts summary --month 1 
npx tsx src/cli.ts update < id > --description New description --value 10

