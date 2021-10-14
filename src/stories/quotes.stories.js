import React from 'react';
import { storiesOf } from '@storybook/react';
import QuoteBox from '../components/QuoteBox/quoteBox';
import ArrowIcon from '../components/ArrowIcon/arrowIcon';

const quote =
  "I use Keystone in my Advanced React course because it’s super quick to get my content types up and running, add custom server-side cart & checkout logic, and the fine grain access control is just fantastic!";

storiesOf("Keystone/Quotes", module)
  .add("Quotes", () => (
    <QuoteBox text={quote} name={"@wesbos"} icon={<ArrowIcon />} width="300px"/>
  ))