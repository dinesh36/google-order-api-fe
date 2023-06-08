import React, { useState } from 'react';
import callCreateOrderService from './shared/createOrder.services';
import { FormDataType } from './shared/formData.type';
import { FORM_ITEM_TYPES, FORM_ITEMS } from './shared/formData.contants';
import { SAMPLE_DATA } from './shared/sample.data';

const CreateOrderForm = () => {
  const [formData, setFormData] = useState<FormDataType>(SAMPLE_DATA);
  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callCreateOrderService(formData);
  };

  const renderFormItems = () => FORM_ITEMS.map(({ key, type }) => {
    // @ts-ignore
    const formItemValue = formData[key];

    const formItemCmp = type === FORM_ITEM_TYPES.INPUT ? (
      <input
        style={{ width: '100%' }}
        value={formItemValue}
        onChange={({ target: { value } }) => setFormData({ ...formData, [key]: value })}
      />
    ) : (
      <textarea
        style={{ width: '100%', height: 200 }}
        value={formItemValue}
        onChange={({ target: { value } }) => setFormData({ ...formData, [key]: value })}
      />
    );

    return (
      <div style={{ paddingBottom: 20 }} key={key}>
        <span>
          {key}
          {' '}
          :
        </span>
        <br />
        {formItemCmp}
      </div>
    );
  });

  return (
    <form onSubmit={submitForm}>
      {renderFormItems()}
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
