import React from 'react';
import { action as handleAction } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => (
  <Button onClick={handleAction('clicked')}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={handleAction('clicked')}>
    <span aria-label="so cool" role="img">
      😀 😎 👍 💯
    </span>
  </Button>
);
