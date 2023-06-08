import type { NextPage } from 'next';
import React from 'react';
import CreateOrderForm from '../src/modules/createOrder/CreateOrder';

const HomePage: NextPage = () => (
  <CreateOrderForm />
);

export default HomePage;
