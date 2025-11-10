
import { products } from '../data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import React from 'react';

function Rating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-muted-foreground">({reviewCount} reviews)</span>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = React.use(params);
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    notFound();
  }
  
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="container mx-auto py-8">
      <Card>
        <div className="grid md:grid-cols-2 gap-8">
          <CardContent className="p-6">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="aspect-square relative w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.url}
                        alt={`${product.name} image ${image.id}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          
          <CardContent className="p-6 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-bold">{product.name}</CardTitle>
              </CardHeader>
              <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to List
                  </Link>
              </Button>
            </div>

            <Rating rating={product.rating} reviewCount={product.reviews} />
            
            <Separator className="my-4" />
            
            <p className="text-muted-foreground mb-4">{product.description}</p>
            
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-primary">${discountedPrice.toFixed(2)}</span>
              {product.discount > 0 && (
                <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-6">
                {product.stock > 0 ? (
                    <Badge className="bg-green-500 text-white text-sm">In Stock ({product.stock} available)</Badge>
                ) : (
                    <Badge variant="destructive" className="text-sm">Out of Stock</Badge>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
                <div><span className="font-semibold text-foreground">Category:</span> {product.category}</div>
                <div><span className="font-semibold text-foreground">Color:</span> {product.color}</div>
                <div><span className="font-semibold text-foreground">Material:</span> {product.material}</div>
                <div><span className="font-semibold text-foreground">Dimensions:</span> {product.dimensions}</div>
                <div><span className="font-semibold text-foreground">Created:</span> {format(new Date(product.createdAt), 'MMM d, yyyy')}</div>
                <div><span className="font-semibold text-foreground">Updated:</span> {format(new Date(product.updatedAt), 'MMM d, yyyy')}</div>
            </div>

            <div className="flex gap-2">
                <Button size="lg" asChild><Link href={`/dashboard/products/${product.id}/edit`}><Edit className="mr-2 h-4 w-4" /> Edit Product</Link></Button>
                <Button size="lg" variant="outline" className="text-destructive hover:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
