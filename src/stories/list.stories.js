import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../components/List/list';
import CheckIcon from '../components/CheckIcon/checkIcon';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

storiesOf('Keystone/List', module).add('List', () => (
  <List items={items} icon={<CheckIcon color="#897ff9" />} />
));
