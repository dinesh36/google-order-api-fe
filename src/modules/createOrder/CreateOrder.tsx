import React, { useState } from 'react';
import callCreateOrderService from './shared/createOrder.services';
import { FormDataType } from './shared/formData.type';

const CreateOrderForm = () => {
  const [formData, setFormData] = useState<FormDataType>({});
  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callCreateOrderService(formData);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        value={formData.merchantId}
        onChange={({ target: { value } }) => setFormData({ ...formData, merchantId: value })}
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
