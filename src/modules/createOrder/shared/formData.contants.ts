export const FORM_ITEM_TYPES = {
  INPUT: 'input',
  TEXT_AREA: 'textarea',
};

export const FORM_ITEMS = [
  {
    group: 'Address',
    items: [
      { label: 'Address', key: 'location.formattedAddress', type: FORM_ITEM_TYPES.TEXT_AREA },
      { label: 'Zip Code', key: 'location.zipCode', type: FORM_ITEM_TYPES.INPUT },
      { label: 'City', key: 'location.city', type: FORM_ITEM_TYPES.INPUT },
      { label: 'State', key: 'location.state', type: FORM_ITEM_TYPES.INPUT },
    ]
  },
  // { key: 'lineItems', type: FORM_ITEM_TYPES.TEXT_AREA },
  {
    group: 'Contact Details',
    items: [
      { label: 'First Name', key: 'contact.firstName', type: FORM_ITEM_TYPES.TEXT_AREA },
      { label: 'Last Name', key: 'contact.lastName', type: FORM_ITEM_TYPES.INPUT },
      { label: 'Email', key: 'contact.email', type: FORM_ITEM_TYPES.INPUT },
      { label: 'Phone Number', key: 'contact.phoneNumber', type: FORM_ITEM_TYPES.INPUT },
    ]
  },
  { label: 'Marchant ID', key: 'merchantId', type: FORM_ITEM_TYPES.INPUT },
  { label: 'Delivery Fee', key: 'deliveryFee', type: FORM_ITEM_TYPES.INPUT },
  { label: 'Subtotal', key: 'subTotal', type: FORM_ITEM_TYPES.INPUT },
  { label: 'Total', key: 'total', type: FORM_ITEM_TYPES.INPUT },
  { label: 'Payment Type', key: 'paymentType', type: FORM_ITEM_TYPES.INPUT },
];
