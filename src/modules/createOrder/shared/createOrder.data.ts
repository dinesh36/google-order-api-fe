import { FormDataType } from './formData.type';

const getCreateOrderRequestBody = ({
  merchantId = 'xxxx',
  lineItems = '[]',
  location = '{}',
  contact = '{}',
  deliveryFee = '0',
  subTotal = '0',
  total = '0',
  googleOrderId = '000000',
  paymentType = 'ON_FULFILLMENT',
}: FormDataType) => ({
  user: {},
  conversation: {
    conversationId: 'CTKbKfUlHCyDEdcz_5PBJTtf',
  },
  inputs: [
    {
      intent: 'actions.intent.TRANSACTION_DECISION',
      arguments: [
        {
          transactionDecisionValue: {
            order: {
              finalOrder: {
                cart: {
                  merchant: {
                    id: merchantId,
                    name: 'Tep Tep Chicken Club',
                  },
                  lineItems: JSON.parse(lineItems),
                  extension: {
                    '@type': 'type.googleapis.com/google.actions.v2.orders.FoodCartExtension',
                    fulfillmentPreference: {
                      fulfillmentInfo: {
                        delivery: {
                          deliveryTimeIso8601: 'P0M',
                        },
                      },
                    },
                    location: JSON.parse(location),
                    contact: JSON.parse(contact),
                  },
                },
                otherItems: [
                  {
                    name: 'Delivery fee',
                    type: 'DELIVERY',
                    price: {
                      type: 'ESTIMATE',
                      amount: {
                        currencyCode: 'AUD',
                        units: deliveryFee,
                        nanos: 500000000,
                      },
                    },
                  },
                  {
                    name: 'Subtotal',
                    type: 'SUBTOTAL',
                    price: {
                      type: 'ESTIMATE',
                      amount: {
                        currencyCode: 'AUD',
                        units: subTotal,
                        nanos: 600000000,
                      },
                    },
                  },
                ],
                totalPrice: {
                  type: 'ESTIMATE',
                  amount: {
                    currencyCode: 'AUD',
                    units: total,
                    nanos: 100000000,
                  },
                },
                extension: {
                  '@type': 'type.googleapis.com/google.actions.v2.orders.FoodOrderExtension',
                },
              },
              googleOrderId,
              orderDate: '2020-10-22T09:02:06.173Z',
              paymentInfo: {
                displayName: 'Pay when you get your food',
                paymentType,
              },
            },
          },
        },
      ],
    },
  ],
  directActionOnly: true,
  isInSandbox: true,
});

export default getCreateOrderRequestBody;
