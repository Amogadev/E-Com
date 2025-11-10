
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
import { Eye, Edit, Trash2, Users, ShoppingBag, Headset, Receipt, TrendingUp, TrendingDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { customers, Customer, CustomerStatus } from './data';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';

const statusCards = [
    { title: 'All Customers', value: '+22.63k', trend: '+34.4%', icon: <Users className="h-6 w-6 text-orange-500" />, trendDirection: 'up' as const },
    { title: 'Orders', value: '+4.5k', trend: '-8.1%', icon: <ShoppingBag className="h-6 w-6 text-orange-500" />, trendDirection: 'down' as const },
    { title: 'Services Request', value: '+1.03k', trend: '+12.6%', icon: <Headset className="h-6 w-6 text-orange-500" />, trendDirection: 'up' as const },
    { title: 'Invoice & Payment', value: '$38,908.00', trend: '+45.9%', icon: <Receipt className="h-6 w-6 text-orange-500" />, trendDirection: 'up' as const },
];

const getStatusBadge = (status: CustomerStatus) => {
    switch (status) {
        case 'Completed': return <Badge className="bg-green-100 text-green-800 border border-green-300 hover:bg-green-100">Completed</Badge>;
        case 'Pending': return <Badge className="bg-orange-100 text-orange-800 border border-orange-300 hover:bg-orange-100">Pending</Badge>;
        case 'Cancel': return <Badge className="bg-red-100 text-red-800 border border-red-300 hover:bg-red-100">Cancel</Badge>;
        default: return <Badge variant="secondary">{status}</Badge>;
    }
}

export default function CustomersPage() {
  return (
    <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statusCards.map(card => (
                <Card key={card.title}>
                    <CardContent className="p-4 flex flex-col justify-between h-full">
                        <div className="flex items-start justify-between">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                {card.icon}
                            </div>
                        </div>
                        <div className="mt-2">
                             <p className="text-sm text-muted-foreground">{card.title}</p>
                            <div className="flex items-end justify-between mt-1">
                                <p className="text-2xl font-bold">{card.value}</p>
                                <div className={`flex items-center text-xs ${card.trendDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                    {card.trendDirection === 'up' ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                                    {card.trend}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Customers List</CardTitle>
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
                <TableHead className="w-[50px]"><Checkbox /></TableHead>
                <TableHead>Customer Name</TableHead>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Amount Due</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={customer.avatar} alt={customer.name} />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{customer.invoiceId}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell className="text-muted-foreground">${customer.totalAmount.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">${customer.amountDue.toLocaleString()}</TableCell>
                  <TableCell className="text-muted-foreground">{format(customer.dueDate, 'dd MMM, yyyy')}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-gray-200 rounded-lg w-8 h-8" asChild>
                        <Link href="#">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-orange-100 rounded-lg w-8 h-8" asChild>
                        <Link href="#">
                          <Edit className="h-4 w-4 text-orange-400" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-red-100 rounded-lg w-8 h-8">
                        <Trash2 className="h-4 w-4 text-red-400" />
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
