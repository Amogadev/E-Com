
'use client';

import { products } from '../data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';

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
                                <Button size-="icon" className="rounded-full" style={{backgroundColor: 'green'}}><span className="sr-only">Green</span></Button>
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
  );
}
