
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Eye, Edit, Trash2, DollarSign, Ban, Package, Truck, Inbox, Clock, CheckCircle, PackageCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { orders, Order, OrderStatus, PaymentStatus } from './data';
import { format } from 'date-fns';

const statusCards = [
    { title: 'Payment Refund', value: 490, icon: <DollarSign className="h-6 w-6 text-primary" /> },
    { title: 'Order Cancel', value: 241, icon: <Ban className="h-6 w-6 text-destructive" /> },
    { title: 'Order Shipped', value: 630, icon: <Truck className="h-6 w-6 text-blue-500" /> },
    { title: 'Order Delivering', value: 170, icon: <Package className="h-6 w-6 text-orange-500" /> },
    { title: 'Pending Review', value: 210, icon: <Inbox className="h-6 w-6 text-yellow-500" /> },
    { title: 'Pending Payment', value: 608, icon: <Clock className="h-6 w-6 text-gray-500" /> },
    { title: 'Delivered', value: 200, icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { title: 'In Progress', value: 656, icon: <PackageCheck className="h-6 w-6 text-indigo-500" /> },
];

const getPaymentStatusBadge = (status: PaymentStatus) => {
    switch (status) {
        case 'Paid': return <Badge className="bg-green-500 text-white hover:bg-green-600">Paid</Badge>;
        case 'Unpaid': return <Badge variant="secondary">Unpaid</Badge>;
        case 'Refund': return <Badge variant="outline">Refund</Badge>;
        default: return <Badge variant="secondary">{status}</Badge>;
    }
};

const getOrderStatusBadge = (status: OrderStatus) => {
    switch (status) {
        case 'Completed': return <Badge className="bg-green-100 text-green-800 border-green-300">Completed</Badge>;
        case 'Packaging': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Packaging</Badge>;
        case 'Canceled': return <Badge className="bg-red-100 text-red-800 border-red-300">Canceled</Badge>;
        case 'Draft': return <Badge variant="outline">Draft</Badge>;
        default: return <Badge variant="secondary">{status}</Badge>;
    }
}


export default function OrdersPage() {
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Order List</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="This Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Delivery Number</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium text-primary hover:underline">
                      <Link href="#">{order.id}</Link>
                  </TableCell>
                  <TableCell>{format(order.createdAt, 'MMM dd, yyyy')}</TableCell>
                  <TableCell className="font-medium text-primary">{order.customer}</TableCell>
                  <TableCell>{order.priority}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.deliveryNumber || '-'}</TableCell>
                  <TableCell>{getOrderStatusBadge(order.orderStatus)}</TableCell>
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
