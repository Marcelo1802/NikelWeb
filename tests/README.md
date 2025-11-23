# 🧪 Guia de Testes - Projeto Nikel

## Como Executar os Testes

1. Certifique-se de que o servidor está rodando na porta 8000
2. Acesse: `http://localhost:8000/tests/test.html`
3. Os testes serão executados automaticamente ao carregar a página
4. Clique em "Executar Testes Novamente" para rodar novamente

## Categorias de Testes

### 📧 Testes de Validação de Email
- ✅ Email válido
- ❌ Email sem @
- ❌ Email sem domínio
- ❌ Email vazio
- ❌ Email com espaços

### 💰 Testes de Validação de Valores
- ✅ Valor positivo válido
- ❌ Valor zero (inválido)
- ❌ Valor negativo (inválido)
- ✅ String numérica válida
- ❌ NaN (inválido)
- ❌ Null (inválido)

### 💾 Testes de LocalStorage
- ✅ Salvar conta
- ✅ Recuperar conta existente
- ✅ Conta inexistente retorna null
- ✅ Salvar sessão

### 🎨 Testes de Formatação
- ✅ Formatação monetária correta (R$ 100,50)
- ✅ Formatação com zero (R$ 0,00)
- ✅ Formatação com decimais (R$ 1234,56)

### 🔔 Testes de Toast (Visual)
- ✅ Cria elemento toast
- ✅ Remove toast anterior
- ✅ Toast com tipo success
- ✅ Toast com tipo error

### 🔐 Testes de Sessão
- ✅ Retorna email quando logado
- ✅ Retorna null quando não logado
- ✅ Restaura sessão do localStorage

### 🔍 Testes de Casos Extremos
- ❌ Email com múltiplos @
- ❌ Email só com pontos
- ❌ String vazia
- ❌ Undefined
- ✅ Número muito grande
- ✅ JSON inválido no localStorage

## Resultados dos Testes

Os testes mostram:
- **✅ Verde**: Teste passou
- **❌ Vermelho**: Teste falhou
- **🟡 Amarelo**: Teste em execução

## Notas

- Os testes não interferem com os dados reais do aplicativo
- Após os testes, os dados de teste são limpos automaticamente
- Os toasts criados durante os testes são removidos automaticamente

## Estrutura

```
tests/
├── test.html      # Página de testes
└── README.md      # Esta documentação
```

