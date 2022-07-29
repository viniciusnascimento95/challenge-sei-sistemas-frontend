### Challenge developer frontend

- [x] start project in nextjs
- [x] install dependencies from
      chakra ui
- [x] Config routes app
- [ ] Styled project
- [ ] Config connection for get data to use project

## REQUISITOS

- [x] FE01 - Tela de Orçado x Realizado

  - [ ] "Orcado x Realizado" - Grid contento o relatório comparativo entre valores orçados (previstos) e realizados (gastos). Obs. Os valores estão armazenados no banco MySql Cliente.mwb anexo ao projeto.
  - [ ] Paginação de 10 itens
  - [ ] Mostrador de total de itens
  - [ ] O relatório deve exibir as colunas (No, Conta, Real, Orcado, Variação (%), Variação (R$)) No – Coluna id_Conta tabela tb_Orcamentos Conta – Coluna Conta tabela tb_Conta Real – Somatório da coluna vlr_real tabela tb_Orcamentos para Conta  Orcado – Somatório da coluna vlr_orcado tabela tb_Orcamentos para Conta  Variacao (%) – Porcentagem da diferença entre o somatório dos valores reais e valores orçados Variacão (R$) – Diferença entre o somatório dos valores reais e valores orçados

  - [ ] A coluna "Variacão (R$)" deve ter o valor na cor verde para valores positivos, e vermelhos para valores negativos. - [ ] O layout deve seguir o exemplo abaixo

- [ ] FE02 – Gráfico de Orçado x Realizado
  - [ ] Gráfico de barra exibindo o comparativo visual entre os valores orçados x realizados
  - [ ] O eixo X deve exibir as Contas, o eixo Y deve exibir os valores somados por conta
  - [ ] Cada barra deve representar a Conta com o somatório dos valores orçados para aquela conta sobre o somatório dos valores realizados para a mesma conta
  - [ ] O layout deve seguir o exemplo abaixo
  - [x] A aplicacão deve ser web utilizando React
  - [ ] Deve utilizar o banco de dados MySql. Banco Cliente.mwb
  - [ ] Deve seguir o layout dos exemplos, não sendo necessário seguir o padrão de cores
  - [ ] Os componentes Grid e Gráfico podem ser de livre escolha

# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
```

```bash
yarn create next-app --example with-typescript with-typescript-app
```

```bash
pnpm create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
