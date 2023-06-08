import React, { useState } from 'react';
import callCreateOrderService from './shared/createOrder.services';
import { FormDataType } from './shared/formData.type';
import { SAMPLE_DATA } from './shared/sample.data';
import FormItems from "./FormItems";

const CreateOrderForm = () => {
  const [formData, setFormData] = useState<FormDataType>(SAMPLE_DATA);
  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callCreateOrderService(formData);
  };

  return (
    <form onSubmit={submitForm}>
      <FormItems formData={formData} setFormData={setFormData}/>
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
