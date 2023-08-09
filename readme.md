# MUI Custom React Components Library

This is a custom React components library that provides a set of reusable UI components built using React, TypeScript, and Storybook for development and testing. The library is built using Rollup for bundling and supports testing with Jest and React Testing Library.

## Available Components

The following components are part of the library:

1. `CustomButtonWrapper`: A customizable button component.
2. `CustomTextFieldWrapper`: A customizable text input field component.
3. `CustomCardWrapper`: A customizable card component.
4. `CustomModalWrapper`: A customizable modal component.
5. `CustomSnackbarWrapper`: A customizable snackbar component.

## Development

If you want to contribute to the library or customize it for your specific needs, you can follow these steps to set up the development environment:

1. Clone the repository:

```bash
git clone git@github.com:sanudutta45/mui-custom-react-component-library.git
cd mui-custom-react-component-library
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Build the library:

```bash
npm run build
# or
yarn build
```

4. Run Storybook for interactive development:

```bash
npm run storybook
# or
yarn storybook
```

## Testing

To run the tests for the components, use the following commands:

```bash
npm run test
# or
yarn test
```

To generate test coverage for the components, use the following commands:

```bash
npm run test-coverage-report
```

This will run the Jest test suite along with React Testing Library to ensure that the components behave correctly.
