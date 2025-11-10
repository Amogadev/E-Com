
export type PaymentStatus = 'Paid' | 'Unpaid' | 'Refund';
export type OrderStatus = 'Completed' | 'Packaging' | 'Canceled' | 'Draft';
export type Priority = 'Normal' | 'High' | 'Low';

export type Order = {
    id: string;
    createdAt: Date;
    customer: string;
    priority: Priority;
    total: number;
    paymentStatus: PaymentStatus;
    items: number;
    deliveryNumber: string | null;
    orderStatus: OrderStatus;
};

export const orders: Order[] = [
    {
        id: '#583488/80',
        createdAt: new Date('2024-04-23'),
        customer: 'Gail C. Anderson',
        priority: 'Normal',
        total: 1230.00,
        paymentStatus: 'Unpaid',
        items: 4,
        deliveryNumber: null,
        orderStatus: 'Draft'
    },
    {
        id: '#456754/80',
        createdAt: new Date('2024-04-20'),
        customer: 'Jung S. Ayala',
        priority: 'Normal',
        total: 987.00,
        paymentStatus: 'Paid',
        items: 2,
        deliveryNumber: null,
        orderStatus: 'Packaging'
    },
    {
        id: '#578246/80',
        createdAt: new Date('2024-04-19'),
        customer: 'David A. Arnold',
        priority: 'High',
        total: 1478.00,
        paymentStatus: 'Paid',
        items: 5,
        deliveryNumber: '#D-57837678',
        orderStatus: 'Completed'
    },
    {
        id: '#348930/80',
        createdAt: new Date('2024-04-04'),
        customer: 'Cecilia D. Gordon',
        priority: 'Normal',
        total: 720.00,
        paymentStatus: 'Refund',
        items: 4,
        deliveryNumber: '#D-12345678',
        orderStatus: 'Canceled'
    },
    {
        id: '#982345/80',
        createdAt: new Date('2024-03-28'),
        customer: 'Martha S. Smith',
        priority: 'Low',
        total: 450.50,
        paymentStatus: 'Paid',
        items: 1,
        deliveryNumber: '#D-98765432',
        orderStatus: 'Completed'
    },
    {
        id: '#678912/80',
        createdAt: new Date('2024-03-15'),
        customer: 'Arthur E. Wilson',
        priority: 'High',
        total: 2150.00,
        paymentStatus: 'Paid',
        items: 8,
        deliveryNumber: '#D-45678901',
        orderStatus: 'Completed'
    }
];
