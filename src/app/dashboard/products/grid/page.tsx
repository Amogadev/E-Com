
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Eye, Edit } from 'lucide-react';
import { products } from '../data';

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductGridPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.images[0].url}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.stock > 0 ? (
                 <Badge className="absolute top-2 right-2 bg-green-500 text-white">In Stock</Badge>
              ) : (
                <Badge variant="destructive" className="absolute top-2 right-2">Out of Stock</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold mb-2 truncate">{product.name}</CardTitle>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
              <Rating rating={product.rating} />
            </div>
          </CardContent>
          <CardFooter className="p-4 bg-secondary/50">
            <div className="w-full flex justify-end gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/products/${product.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
