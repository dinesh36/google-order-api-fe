export const FORM_ITEM_TYPES = {
  INPUT: 'input',
  TEXT_AREA: 'textarea',
};

export const FORM_ITEMS = [
  { key: 'merchantId', type: FORM_ITEM_TYPES.INPUT },
  { key: 'lineItems', type: FORM_ITEM_TYPES.TEXT_AREA },
  { key: 'location', type: FORM_ITEM_TYPES.TEXT_AREA },
  { key: 'contact', type: FORM_ITEM_TYPES.TEXT_AREA },
  { key: 'deliveryFee', type: FORM_ITEM_TYPES.INPUT },
  { key: 'subTotal', type: FORM_ITEM_TYPES.INPUT },
  { key: 'total', type: FORM_ITEM_TYPES.INPUT },
  { key: 'googleOrderId', type: FORM_ITEM_TYPES.INPUT },
  { key: 'paymentType', type: FORM_ITEM_TYPES.INPUT },
];
