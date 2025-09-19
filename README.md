# WoodWood

Esse é um projeto com o intuido de criar um mini-app de e-commerce com React Native Bare.

## Requisitos Técnicos(Obrigatórios)

### React Native Bare(ou CLI)

O projeto não possui **Expo SDK** e nenhuma de suas bibliotecas. Sendo iniciado com o comando:

```bash
 npx @react-native-community/cli@latest init WoodWood
```

### Feature-based Folders

A estrutura de pastas segue por **Features** e **Shared**. Sendo **@types**, **@types**, **services** e **navigators**, separadas dessa definição.

### Feature-based Folders

As 3 features principais(Catalogo, Detalhes e Carrinho) contam com Testes unitários em todos os arquivos. Utilizando Mocks e Snapshots quando necessário.

### Gerenciamento Global de Estados

A ferramenta escolhida foi o [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction). O projeto possui duas stores:

- **catalogoStore:** comunicação entre o request, filtro e lista de produtos.
- **carrinhoStore:** comunicação entre a feature de **detalhes**, **header** e **carrinho**.

### Estilização com alguma biblioteca

Foi utilizado [emotion](https://emotion.sh/docs/introduction), pois o [styled-components](https://styled-components.com/) será descontinuado. Ambos possuem uma utilização bem parecidade, incluindo a criação de temas com **ThemeProvider**.

### Responsividade e acessibilidade

Desenvolvimento validado em iPhone 16 Plus, iPhone SE, Android 720 x 1280(320dpi) e Android 1080 x 2400(420)dpi. Todo os botões que não possuem texto explicito ou são compostos por imagens/icon, possuem **accessibilityLabel** validado por teste unitário.

## Requisitos Técnicos(Opcionais)

### TypeScript

O projeto possui 88.2% de TypeScript, sendo as demais linguagens para configuração.

### Testes unitários com boa cobertura

O projeto possui mais 80% de Coverage.

### Deep Linking

Configurado para Android e iOS:

```bash
  # Android
  adb shell am start -W -a android.intent.action.VIEW \   -d "myapp://produto/1" \   com.woodwood;

  # iOS
  xcrun simctl openurl booted "myapp://produto/1"
```

### Linter e Formatter

Foi configurada a integração do [ESlint](https://eslint.org/) e [Prettier](https://prettier.io/) para a definição e aplicação das regras. Juntamente a isso, foi configurado o [commitizen](https://commitizen-tools.github.io/commitizen/) com [cz-conventional-changelog](https://commitizen-tools.github.io/commitizen/), para definir as regras de commit. Por fim, foi configurado o [husky](https://github.com/commitizen/cz-conventional-changelog) com [lint-staged](https://github.com/lint-staged/lint-staged), para rodar linters, formatadores e testes unitários relacionados aos arquivos do commit.
