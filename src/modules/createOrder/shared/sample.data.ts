import { FormDataType } from './formData.type';

export const lineItemData = [
  {
    name: 'Spicy Fried Chicken',
    type: 'REGULAR',
    id: '299977679',
    quantity: 2,
    price: {
      type: 'ESTIMATE',
      amount: {
        currencyCode: 'AUD',
        units: '39',
        nanos: 600000000,
      },
    },
    offerId: 'MenuItemOffer/QWERTY/scheduleId/496/itemId/143',
    extension: {
      '@type': 'type.googleapis.com/google.actions.v2.orders.FoodItemExtension',
    },
  },
];

export const locationData = {
  coordinates: {
    latitude: -33.8376441,
    longitude: 151.0868736,
  },
  formattedAddress: 'Killoola St, 1, Concord West NSW 2138',
  zipCode: '2138',
  city: 'Concord West',
  postalAddress: {
    regionCode: 'AU',
    postalCode: '2138',
    administrativeArea: 'NSW',
    locality: 'Concord West',
    addressLines: [
      'Killoola St',
      '1',
    ],
  },
};

export const contactData = {
  displayName: 'Hab Sy',
  email: 'hab9878.sy@gmail.com',
  phoneNumber: '+61000000000',
  firstName: 'Hab',
  lastName: 'Sy',
};

export const SAMPLE_DATA: FormDataType = {
  lineItems: JSON.stringify(lineItemData, null, 4),
  contact: JSON.stringify(contactData, null, 4),
  location: JSON.stringify(locationData, null, 4),
  merchantId: 'xxx',
  deliveryFee: '0',
  subTotal: '0',
  total: '0',
  googleOrderId: '000000',
  paymentType: 'ON_FULFILLMENT',
};
