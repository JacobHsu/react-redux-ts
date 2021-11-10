# react-redux-ts

[Using Create React App](https://react-redux.js.org/introduction/getting-started)

```sh
# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

```js
yarn add react-redux
npm install @types/react-redux
```

## [Hooks](https://react-redux.js.org/introduction/getting-started#hooks)

react-redux-ts\src\app\hooks.ts
`import { useSelector, useDispatch } from 'react-redux'`

`useSelector` reads a value from the store state and subscribes to updates, while `useDispatch` returns the store's `dispatch` method to let you dispatch actions.