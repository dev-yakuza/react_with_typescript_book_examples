import { BrowserRouter } from 'react-router-dom';
import { ToDoListContextProvider } from 'contexts/ToDoList';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ToDoListContextProvider>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ToDoListContextProvider>
  ),
];
