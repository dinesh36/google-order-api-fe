import { FormDataType } from './formData.type';

const getCreateOrderRequestBody = ({
  merchantId = 'xxxx',
  // lineItems = [],
  location = {},
  contact = {},
  deliveryFee = '0',
  subTotal = '0',
  total = '0',
  paymentType = 'ON_FULFILLMENT',
}: FormDataType) => ({
    merchantId,
    lineItems: [],
    location,
    contact,
    deliveryFee,
    subTotal,
    total,
    paymentType
  }
);

export default getCreateOrderRequestBody;
