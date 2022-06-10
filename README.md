# prac_vue

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 추가 설정

#### setting.json, .eslintrc.js

- prettier, eslint 설정 파일

  1. setting.json, .eslintrc.js 설정 파일 추가
  1. 설치
     npm install eslint --save -dev
     npm install --save-dev eslint-plugin-prettier eslint-config-prettier
     yarn add eslint-plugin-prettier eslint-config-prettier --dev
  1. package.json에 아래 스크립트 추가
     - "lint": "eslint --ext .js,.vue src",
     - "fix": "eslint --fix --ext .js,.vue src"
  1. yarn lint / yarn fix 실행
  1. eslint, prettier 익스텐션 설치
  1. 에디터 재실행

#### scss 설정

```
npm install --save-dev node-sass sass-loader
```

#### code convention

#####
