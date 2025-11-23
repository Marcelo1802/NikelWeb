# 💰 Nikel - Sistema de Controle Financeiro Pessoal

Sistema web para gerenciar suas finanças pessoais. Controle receitas e despesas de forma simples.

![Nikel](assets/images/nikel-logo.png)

## 📋 Sobre o Projeto

Desenvolvi o Nikel como um projeto para aprender desenvolvimento web.

A aplicação permite cadastrar transações (entradas e saídas), ver o saldo total e ter uma visão geral do que entra e sai do bolso. Tudo salvo localmente no navegador, então não precisa de banco de dados.

## ✨ Funcionalidades

- 🔐 **Sistema de autenticação**: Login e cadastro de usuários
- 💵 **Gestão de transações**: Cadastro de entradas e saídas
- 📊 **Dashboard**: Visualização do saldo total e últimas transações
- 📝 **Lista completa**: Visualização de todas as transações em uma tabela
- 🗑️ **Exclusão**: Remoção de transações cadastradas
- 💾 **Persistência local**: Dados salvos no navegador (localStorage)
- 🎨 **Interface responsiva**: Funciona bem em desktop e mobile
- 🔔 **Notificações**: Sistema de toast para feedback ao usuário

## 🚀 Como Rodar

### Resumo Rápido

1. Abre o terminal na pasta do projeto
2. Escolhe uma das opções abaixo pra rodar um servidor local
3. Abre no navegador: `http://localhost:8000/html/index.html`

Pronto! O projeto está rodando.

### Por que precisa de um servidor?

O projeto é só HTML/CSS/JS, mas precisa rodar em um servidor HTTP (mesmo que local) porque:
- O navegador bloqueia algumas funcionalidades quando abre arquivo direto (file://)
- O localStorage funciona melhor com servidor
- Evita problemas de CORS e caminhos relativos

### Opções de Servidor

#### Opção 1: Python (mais fácil)

Se você tem Python instalado (geralmente já vem no Mac/Linux):

```bash
python3 -m http.server 8000
```

Depois abre: `http://localhost:8000/html/index.html`

#### Opção 2: Node.js (se tiver instalado)

```bash
npx http-server -p 8000
```

Depois abre: `http://localhost:8000/html/index.html`

#### Opção 3: Extensão do VS Code

Se usa VS Code, instala a extensão "Live Server" e clica com botão direito no `index.html` > "Open with Live Server"

#### Opção 4: Abrir direto (pode dar problema)

Pode tentar abrir o `html/index.html` direto no navegador, mas pode ter alguns problemas com localStorage e caminhos.

### Como usar

1. **Criar conta**: Clica em "Criar uma conta" e preenche os dados
2. **Fazer login**: Usa o email e senha que você cadastrou
3. **Adicionar transação**: Clica no botão de + (flutuante) para adicionar entrada ou saída
4. **Ver saldo**: O saldo aparece no topo da página inicial
5. **Ver tudo**: Clica em "Ver todas" ou vai na página de transações para ver o histórico completo

## 🛠️ Tecnologias

Usei tecnologias bem básicas, nada de framework complexo:

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilos e responsividade
- **JavaScript puro** - Toda a lógica sem bibliotecas
- **Bootstrap 5** - Pra facilitar o layout e componentes
- **Bootstrap Icons** - Ícones prontos
- **LocalStorage** - Salva tudo no navegador (não precisa de banco de dados)

## 📁 Estrutura do Projeto

```
NikelWeb/
├── assets/
│   └── images/          # Imagens e logos do projeto
├── css/
│   └── styles.css        # Estilos customizados
├── html/
│   ├── index.html        # Página de login/cadastro
│   ├── home.html         # Dashboard principal
│   └── transaction.html  # Lista de transações
├── js/
│   ├── index.js          # Lógica de autenticação
│   ├── home.js           # Lógica do dashboard
│   ├── transaction.js    # Lógica de transações
│   └── utils.js          # Funções utilitárias compartilhadas
├── tests/
│   ├── test.html         # Página de testes
│   └── README.md         # Documentação dos testes
└── README.md             # Este arquivo
```

## 🧪 Testes

Criei uma página de testes pra validar se tudo está funcionando direito. É bem simples de usar:

1. Roda o servidor (se ainda não estiver rodando)
2. Acessa: `http://localhost:8000/tests/test.html`
3. Os testes rodam automaticamente e mostram o resultado

Os testes verificam:
- Se a validação de email funciona
- Se valores são validados corretamente
- Se o localStorage está salvando/recuperando dados
- Se a formatação de valores está ok
- Se as notificações aparecem
- Se a sessão está sendo gerenciada direito

Tem mais detalhes em `tests/README.md` se quiser saber mais.

## 🎨 Interface

Tentei fazer uma interface limpa e moderna:

- Design com gradientes (roxo e azul)
- Animações suaves nas ações
- Feedback visual quando você faz algo (toasts ao invés de alerts chatos)
- Responsivo - funciona bem no celular também
- Cores que indicam se o saldo é positivo (verde) ou negativo (vermelho)

## 📝 Observações

- Tudo fica salvo no navegador (localStorage), então se limpar os dados do navegador, perde tudo
- Cada email tem seus próprios dados separados
- Se marcar "Permanecer logado", não precisa fazer login toda vez
- Os dados ficam salvos mesmo depois de fechar o navegador

## 🔒 Sobre Segurança

Como é um projeto de aprendizado, não está preparado pra produção. As senhas ficam salvas em texto plano no localStorage (não faça isso em produção!).

Se fosse usar de verdade, precisaria:
- Fazer hash das senhas
- Ter um backend com banco de dados
- Validação no servidor
- HTTPS

## 🤝 Contribuições

É um projeto do curso Codaí: Introdução à Programação (Growdev), mas se tiver alguma sugestão ou quiser melhorar algo, fique à vontade!

## 📄 Licença

Projeto desenvolvido como parte de um curso de programação.

---

**Nikel** - Organize suas finanças de forma simples 💰

