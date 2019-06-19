import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox />
  ));  