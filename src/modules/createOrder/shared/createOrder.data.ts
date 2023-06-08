import { FormDataType } from './formData.type';

const getCreateOrderRequestBody = ({ merchantId }: FormDataType) => ({
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
                  lineItems: [
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
                  ],
                  extension: {
                    '@type': 'type.googleapis.com/google.actions.v2.orders.FoodCartExtension',
                    fulfillmentPreference: {
                      fulfillmentInfo: {
                        delivery: {
                          deliveryTimeIso8601: 'P0M',
                        },
                      },
                    },
                    location: {
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
                    },
                    contact: {
                      displayName: 'Hab Sy',
                      email: 'hab9878.sy@gmail.com',
                      phoneNumber: '+61000000000',
                      firstName: 'Hab',
                      lastName: 'Sy',
                    },
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
                        units: '3',
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
                        units: '39',
                        nanos: 600000000,
                      },
                    },
                  },
                ],
                totalPrice: {
                  type: 'ESTIMATE',
                  amount: {
                    currencyCode: 'AUD',
                    units: '43',
                    nanos: 100000000,
                  },
                },
                extension: {
                  '@type': 'type.googleapis.com/google.actions.v2.orders.FoodOrderExtension',
                },
              },
              googleOrderId: '01412971004192156198',
              orderDate: '2020-10-22T09:02:06.173Z',
              paymentInfo: {
                displayName: 'Pay when you get your food',
                paymentType: 'ON_FULFILLMENT',
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
