
export type ShipmentStatus = 'Pending' | 'In Transit' | 'Delivered' | 'Failed';

export type Shipment = {
    id: string;
    orderId: string;
    carrier: string;
    trackingNumber: string;
    status: ShipmentStatus;
    estimatedDelivery: Date;
    actualDelivery: Date | null;
    origin: string;
    destination: string;
};

export const shipments: Shipment[] = [
    {
        id: 'SHP583488',
        orderId: '#583488/80',
        carrier: 'FedEx',
        trackingNumber: 'FX-123456789',
        status: 'In Transit',
        estimatedDelivery: new Date('2024-04-28'),
        actualDelivery: null,
        origin: 'New York, NY',
        destination: 'Los Angeles, CA'
    },
    {
        id: 'SHP456754',
        orderId: '#456754/80',
        carrier: 'UPS',
        trackingNumber: 'UPS-987654321',
        status: 'Pending',
        estimatedDelivery: new Date('2024-04-25'),
        actualDelivery: null,
        origin: 'Chicago, IL',
        destination: 'Houston, TX'
    },
    {
        id: 'SHP578246',
        orderId: '#578246/80',
        carrier: 'DHL',
        trackingNumber: 'DHL-57837678',
        status: 'Delivered',
        estimatedDelivery: new Date('2024-04-21'),
        actualDelivery: new Date('2024-04-21'),
        origin: 'Miami, FL',
        destination: 'Seattle, WA'
    },
    {
        id: 'SHP348930',
        orderId: '#348930/80',
        carrier: 'USPS',
        trackingNumber: 'USPS-12345678',
        status: 'Failed',
        estimatedDelivery: new Date('2024-04-10'),
        actualDelivery: null,
        origin: 'Boston, MA',
        destination: 'Denver, CO'
    },
    {
        id: 'SHP982345',
        orderId: '#982345/80',
        carrier: 'FedEx',
        trackingNumber: 'FX-98765432',
        status: 'Delivered',
        estimatedDelivery: new Date('2024-04-02'),
        actualDelivery: new Date('2024-04-01'),
        origin: 'San Francisco, CA',
        destination: 'Phoenix, AZ'
    },
    {
        id: 'SHP678912',
        orderId: '#678912/80',
        carrier: 'UPS',
        trackingNumber: 'UPS-45678901',
        status: 'Delivered',
        estimatedDelivery: new Date('2024-03-20'),
        actualDelivery: new Date('2024-03-19'),
        origin: 'Dallas, TX',
        destination: 'Atlanta, GA'
    }
];
