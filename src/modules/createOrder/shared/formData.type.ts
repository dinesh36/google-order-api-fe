export type OrderContact = {
  email?: string,
  phoneNumber?: string,
  firstName?: string,
  lastName?: string
};

export type OrderLocation = {
  formattedAddress?: string,
  zipCode?: string,
  city?: string,
  state?: string
}

export type FormDataType = {
  merchantId?: string;
  // lineItems?: string;
  location?: OrderLocation;
  contact?: OrderContact;
  deliveryFee?: string;
  subTotal?: string;
  total?: string;
  paymentType?: string;
};


export type FormItemType = {
  label: string;
  key: string;
  type: string;
}
