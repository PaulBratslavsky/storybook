import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button/button';
import ArrowIcon from '../components/ArrowIcon/arrowIcon';

storiesOf("Keystone/Button", module)
  .add("Button", () => (
    <Button text="Submit" icon={<ArrowIcon />} onClick={action("button-click")}/>
  ))
  .add("Button Disabled", () => (
    <Button text="Submit" icon={<ArrowIcon />} disabled onClick={action("button-click")}/>
  ))