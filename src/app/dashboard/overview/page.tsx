
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { products } from '../products/data';
import { BarChart, LineChart, PieChart } from 'lucide-react';

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
  } from '@/components/ui/chart';
import { Bar, CartesianGrid, XAxis, YAxis, Line, Pie, Cell } from 'recharts';
import { Area, AreaChart, ResponsiveContainer } from "recharts"

const salesData = [
    { date: 'Jan', sales: 4000, revenue: 2400 },
    { date: 'Feb', sales: 3000, revenue: 1398 },
    { date: 'Mar', sales: 2000, revenue: 9800 },
    { date: 'Apr', sales: 2780, revenue: 3908 },
    { date: 'May', sales: 1890, revenue: 4800 },
    { date: 'Jun', sales: 2390, revenue: 3800 },
    { date: 'Jul', sales: 3490, revenue: 4300 },
];

const categoryData = [
    { name: 'Living Room', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Office', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'Bedroom', value: 300, fill: 'hsl(var(--chart-3))' },
    { name: 'Dining', value: 200, fill: 'hsl(var(--chart-4))' },
];

const recentSales = [
    { id: 1, customer: 'Olivia Martin', amount: 199.99, status: 'Shipped' },
    { id: 2, customer: 'Jackson Lee', amount: 329.00, status: 'Processing' },
    { id: 3, customer: 'Isabella Nguyen', amount: 75.50, status: 'Shipped' },
    { id: 4, customer: 'William Kim', amount: 899.99, status: 'Delivered' },
    { id: 5, customer: 'Sofia Davis', amount: 49.99, status: 'Canceled' },
];

export default function OverviewPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                        <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                        <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+1,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Sales & Revenue Overview</CardTitle>
                        <CardDescription>A summary of your sales and revenue for the last 7 months.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={{}} className="h-[300px] w-full">
                            <ResponsiveContainer>
                                <AreaChart data={salesData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                                        </linearGradient>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Area type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorRevenue)" />
                                    <Area type="monotone" dataKey="sales" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorSales)" />
                                    <ChartLegend content={<ChartLegendContent />} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Top Categories</CardTitle>
                         <CardDescription>Your best-performing product categories this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <ChartContainer config={{}} className="h-[300px] w-full">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>A list of your most recent sales.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentSales.map((sale) => (
                                    <TableRow key={sale.id}>
                                        <TableCell>{sale.customer}</TableCell>
                                        <TableCell>${sale.amount.toFixed(2)}</TableCell>
                                        <TableCell><Badge variant={sale.status === 'Canceled' ? 'destructive' : 'secondary'}>{sale.status}</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Top Products</CardTitle>
                        <CardDescription>Your best-selling products this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {products.slice(0, 4).map((product) => (
                                <div key={product.id} className="flex items-center gap-4">
                                    <Image
                                        src={product.images[0].url}
                                        alt={product.name}
                                        width={64}
                                        height={64}
                                        className="rounded-md object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium">{product.name}</p>
                                        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                                    </div>
                                    <p className="font-medium">+{product.reviews} sales</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
