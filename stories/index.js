import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../components/checkbox';
import Card from '../components/card';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox />
  ));  

storiesOf('Card', module)
  .add('default', () => (
    <Card />
  ));