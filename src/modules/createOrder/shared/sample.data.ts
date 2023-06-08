import {FormDataType, OrderContact, OrderLocation} from './formData.type';

export const lineItemData = [];

export const locationData: OrderLocation = {
  formattedAddress: 'Killoola St, 1, Concord West NSW 2138',
  zipCode: '2138',
  city: 'Concord West',
  state: 'NSW'
};

export const contactData: OrderContact = {
  email: 'hab9878.sy@gmail.com',
  phoneNumber: '+61000000000',
  firstName: 'Hab',
  lastName: 'Sy',
};

export const SAMPLE_DATA: FormDataType = {
  // lineItems: lineItemData,
  contact: contactData,
  location: locationData,
  merchantId: 'xxx',
  deliveryFee: '0',
  subTotal: '0',
  total: '0',
  paymentType: 'ON_FULFILLMENT',
};
