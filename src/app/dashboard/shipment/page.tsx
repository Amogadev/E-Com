
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, Edit, Trash2, Truck, Package, PackageCheck, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { shipments, Shipment, ShipmentStatus } from './data';
import { format } from 'date-fns';

const statusCards = [
    { title: 'Total Shipments', value: '1.2k', icon: <Truck className="h-6 w-6 text-blue-500" /> },
    { title: 'In Transit', value: 340, icon: <Package className="h-6 w-6 text-orange-500" /> },
    { title: 'Delivered', value: 850, icon: <PackageCheck className="h-6 w-6 text-green-500" /> },
    { title: 'Failed Attempts', value: 12, icon: <AlertTriangle className="h-6 w-6 text-red-500" /> },
];

const getStatusBadge = (status: ShipmentStatus) => {
    switch (status) {
        case 'Delivered': return <Badge className="bg-green-100 text-green-800 border-green-300">Delivered</Badge>;
        case 'In Transit': return <Badge className="bg-blue-100 text-blue-800 border-blue-300">In Transit</Badge>;
        case 'Pending': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
        case 'Failed': return <Badge className="bg-red-100 text-red-800 border-red-300">Failed</Badge>;
        default: return <Badge variant="secondary">{status}</Badge>;
    }
};

export default function ShipmentPage() {
  return (
    <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statusCards.map(card => (
                <Card key={card.title}>
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">{card.title}</p>
                            <p className="text-2xl font-bold">{card.value}</p>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-lg">
                           {card.icon}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

      <Card>
        <CardHeader>
          <CardTitle>All Shipment List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Tracking Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Est. Delivery</TableHead>
                <TableHead>Delivered On</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium text-primary hover:underline">
                    <Link href="#">{shipment.id}</Link>
                  </TableCell>
                  <TableCell>{shipment.orderId}</TableCell>
                  <TableCell>{shipment.carrier}</TableCell>
                  <TableCell>{shipment.trackingNumber}</TableCell>
                  <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                  <TableCell>{format(shipment.estimatedDelivery, 'MMM dd, yyyy')}</TableCell>
                  <TableCell>
                    {shipment.actualDelivery ? format(shipment.actualDelivery, 'MMM dd, yyyy') : '-'}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="#">
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
            <div className="flex items-center gap-2">
                <Button variant="outline">Previous</Button>
                <Button>1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}
