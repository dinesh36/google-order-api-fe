import getCreateOrderRequestBody from './createOrder.data';
import { FormDataType } from './formData.type';

const callCreateOrderService = async (formData: FormDataType) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getCreateOrderRequestBody(formData)),
  };
  const response = await fetch('/api/order', requestOptions);
  const responseData = await response.json();
  return responseData;
};

export default callCreateOrderService;
