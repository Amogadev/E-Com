

'use client';

import { products } from '../data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Minus, Plus, Tag, Truck, Gift, Headset } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

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

const serviceFeatures = [
    {
        icon: <Truck className="h-6 w-6 text-primary" />,
        title: "Free shipping for all orders over $200",
        subtitle: "Only in this week",
    },
    {
        icon: <Tag className="h-6 w-6 text-primary" />,
        title: "Special discounts for customers",
        subtitle: "Coupons up to $100",
    },
    {
        icon: <Gift className="h-6 w-6 text-primary" />,
        title: "Free gift wrapping",
        subtitle: "With 100 letters custom note",
    },
    {
        icon: <Headset className="h-6 w-6 text-primary" />,
        title: "Expert Customer Service",
        subtitle: "8:00 - 20:00, 7 days/week",
    }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = React.use(params);
  const product = products.find((p) => p.id === parseInt(productId));
  const [selectedImage, setSelectedImage] = useState(product?.images[0].url);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const discountedPrice = product.price * (1 - product.discount / 100);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="space-y-8">
        <Card>
            <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Image Gallery */}
                    <div>
                        <div className="aspect-square relative w-full overflow-hidden rounded-lg bg-secondary mb-4">
                            <Image
                                src={selectedImage || product.images[0].url}
                                alt={`${product.name} image`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image) => (
                            <div
                                key={image.id}
                                className={`aspect-square relative w-full overflow-hidden rounded-md cursor-pointer border-2 ${selectedImage === image.url ? 'border-primary' : 'border-transparent'}`}
                                onClick={() => setSelectedImage(image.url)}
                            >
                                <Image
                                src={image.url}
                                alt={`${product.name} thumbnail ${image.id}`}
                                fill
                                className="object-cover"
                                />
                            </div>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-2">
                        <Button size="lg" className="w-full">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add To Cart
                        </Button>
                        <Button size="lg" variant="outline" className="w-full">
                            Buy Now
                        </Button>
                        <Button size="lg" variant="outline" className="text-destructive hover:text-destructive">
                            <Heart className="h-5 w-5" />
                        </Button>
                        </div>
                    </div>

                    {/* Right Column: Product Info */}
                    <div>
                        <Badge className="bg-green-500 text-white mb-2">New Arrival</Badge>
                        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

                        <Rating rating={product.rating} reviewCount={product.reviews} />
                        
                        <Separator className="my-4" />
                        
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-bold text-primary">${discountedPrice.toFixed(2)}</span>
                            {product.discount > 0 && (
                                <>
                                    <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                                    <Badge variant="destructive">({product.discount}% Off)</Badge>
                                </>
                            )}
                        </div>
                        
                        <div className="flex gap-8 mb-6">
                            <div>
                                <p className="font-semibold mb-2">Colors &gt; <span className="text-muted-foreground">{product.color}</span></p>
                                <div className="flex gap-2">
                                    <Button size="icon" className="rounded-full border-2 border-primary" style={{backgroundColor: 'navy'}}><span className="sr-only">Dark</span></Button>
                                    <Button size="icon" className="rounded-full" style={{backgroundColor: 'orange'}}><span className="sr-only">Yellow</span></Button>
                                    <Button size="icon" className="rounded-full" style={{backgroundColor: 'white'}}><span className="sr-only">White</span></Button>
                                    <Button size="icon" className="rounded-full" style={{backgroundColor: 'green'}}><span className="sr-only">Green</span></Button>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-2">Size &gt; <span className="text-muted-foreground">M</span></p>
                                <div className="flex gap-2">
                                    <Button variant="outline">S</Button>
                                    <Button>M</Button>
                                    <Button variant="outline">XI</Button>
                                    <Button variant="outline">XXL</Button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="font-semibold mb-2">Quantity :</p>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)}><Minus className="h-4 w-4" /></Button>
                                <span className="text-lg font-bold w-10 text-center">{quantity}</span>
                                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}><Plus className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-green-600 mb-6">
                            {product.stock > 0 ? (
                                <p>✓ In Stock</p>
                            ) : (
                                <p className="text-red-500">X Out of Stock</p>
                            )}
                            <p>✓ Free delivery available</p>
                            <p>✓ Sales 10% Off Use Code: CODE123</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Description :</h3>
                            <p className="text-muted-foreground">{product.description}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
                <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           {feature.icon}
                        </div>
                        <div>
                            <p className="font-semibold text-sm">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Items Detail</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Product Dimensions</span>
                            <span className="text-right">{product.dimensions}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Date First Available</span>
                            <span className="text-right">{format(new Date(product.createdAt), 'dd MMMM yyyy')}</span>
                        </div>
                         <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Material</span>
                            <span className="text-right">{product.material}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Color</span>
                            <span className="text-right">{product.color}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Category</span>
                            <span className="text-right">{product.category}</span>
                        </div>
                         <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-muted-foreground">Stock</span>
                            <span className="text-right">{product.stock > 0 ? `${product.stock} items` : 'Out of Stock'}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Top Review From World</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://picsum.photos/seed/reviewer1/40/40" />
                                <AvatarFallback>HK</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">Henny K. Mark</p>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                        i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                        }`}
                                    />
                                    ))}
                                    <span className="text-sm font-medium ml-2">Excellent Quality</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">"I'm obsessed with my new sofa! The velvet is so soft and the color is even more beautiful in person. It's the perfect centerpiece for my living room."</p>
                        <p className="text-xs text-muted-foreground">Reviewed in Canada on 16 November 2023</p>
                    </div>
                </CardContent>
            </Card>
        </div>

    </div>
  );
}
