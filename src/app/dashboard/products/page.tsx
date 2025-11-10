
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Eye, Edit, Trash2, Star, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const products = [
  {
    id: 1,
    name: 'Elegant Velvet Sofa',
    imageUrl: 'https://picsum.photos/seed/p1/200/200',
    dimensions: '84"W x 36"D x 34"H',
    price: 899.99,
    stock: 120,
    sold: 45,
    category: 'Living Room',
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 2,
    name: 'Mid-Century Modern Desk',
    imageUrl: 'https://picsum.photos/seed/p2/200/200',
    dimensions: '48"W x 24"D x 30"H',
    price: 349.99,
    stock: 75,
    sold: 22,
    category: 'Office',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Rustic Farmhouse Table',
    imageUrl: 'https://picsum.photos/seed/p3/200/200',
    dimensions: '72"W x 36"D x 30"H',
    price: 650.0,
    stock: 50,
    sold: 15,
    category: 'Dining',
    rating: 4.9,
    reviews: 150,
  },
  {
    id: 4,
    name: 'Upholstered Queen Bed',
    imageUrl: 'https://picsum.photos/seed/p4/200/200',
    dimensions: '64"W x 85"D x 45"H',
    price: 599.0,
    stock: 90,
    sold: 30,
    category: 'Bedroom',
    rating: 4.6,
    reviews: 110,
  },
  {
    id: 5,
    name: 'Leather Recliner Chair',
    imageUrl: 'https://picsum.photos/seed/p5/200/200',
    dimensions: '38"W x 40"D x 42"H',
    price: 720.0,
    stock: 65,
    sold: 18,
    category: 'Living Room',
    rating: 4.8,
    reviews: 95,
  },
];

export default function ProductListPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>All Product List</CardTitle>
                <CardDescription>An overview of all your furniture products.</CardDescription>
            </div>
            <div className="flex items-center gap-4">
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Product
                </Button>
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
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead className="min-w-[250px]">Product Name & Size</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.dimensions}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <div>
                    <p>{product.stock} Item Left</p>
                    <p className="text-sm text-muted-foreground">{product.sold} Sold</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{product.category}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{product.rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} Reviews)</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
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
    </Card>
  );
}
