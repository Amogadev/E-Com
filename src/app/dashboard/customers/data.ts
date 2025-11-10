
import { PlaceHolderImages } from '@/lib/placeholder-images';

const customer1 = PlaceHolderImages.find(img => img.id === 'customer-1');
const customer2 = PlaceHolderImages.find(img => img.id === 'customer-2');
const customer3 = PlaceHolderImages.find(img => img.id === 'customer-3');
const customer4 = PlaceHolderImages.find(img => img.id === 'customer-4');
const customer5 = PlaceHolderImages.find(img => img.id === 'customer-5');

export type CustomerStatus = 'Completed' | 'Pending' | 'Cancel';

export type Customer = {
    id: number;
    name: string;
    avatar: string;
    invoiceId: string;
    status: CustomerStatus;
    totalAmount: number;
    amountDue: number;
    dueDate: Date;
    paymentMethod: 'Mastercard' | 'Visa' | 'Paypal';
};

export const customers: Customer[] = [
    {
        id: 1,
        name: 'Michael A. Miner',
        avatar: customer1?.imageUrl || 'https://picsum.photos/seed/customer-1/100/100',
        invoiceId: '#INV2540',
        status: 'Completed',
        totalAmount: 4521,
        amountDue: 8901,
        dueDate: new Date('2023-01-07'),
        paymentMethod: 'Mastercard',
    },
    {
        id: 2,
        name: 'Theresa T. Brose',
        avatar: customer2?.imageUrl || 'https://picsum.photos/seed/customer-2/100/100',
        invoiceId: '#INV3924',
        status: 'Cancel',
        totalAmount: 7836,
        amountDue: 9902,
        dueDate: new Date('2023-12-03'),
        paymentMethod: 'Visa',
    },
    {
        id: 3,
        name: 'James L. Erickson',
        avatar: customer3?.imageUrl || 'https://picsum.photos/seed/customer-3/100/100',
        invoiceId: '#INV5032',
        status: 'Completed',
        totalAmount: 1347,
        amountDue: 6718,
        dueDate: new Date('2023-09-28'),
        paymentMethod: 'Paypal',
    },
    {
        id: 4,
        name: 'Lily W. Wilson',
        avatar: customer4?.imageUrl || 'https://picsum.photos/seed/customer-4/100/100',
        invoiceId: '#INV1695',
        status: 'Pending',
        totalAmount: 9457,
        amountDue: 3928,
        dueDate: new Date('2023-08-10'),
        paymentMethod: 'Mastercard',
    },
    {
        id: 5,
        name: 'Sarah M. Brooks',
        avatar: customer5?.imageUrl || 'https://picsum.photos/seed/customer-5/100/100',
        invoiceId: '#INV8473',
        status: 'Cancel',
        totalAmount: 4214,
        amountDue: 9814,
        dueDate: new Date('2023-05-22'),
        paymentMethod: 'Visa',
    },
];
