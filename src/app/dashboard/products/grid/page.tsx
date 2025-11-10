
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MoreHorizontal, ShoppingCart, Search, Filter, Plus, ChevronDown, Heart } from 'lucide-react';
import { products } from '../data';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useToast } from '@/hooks/use-toast';
import React from 'react';


function Rating({ rating, reviewCount }: { rating: number, reviewCount: number }) {
  return (
    <div className="flex items-center gap-1.5">
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
      <span className="text-xs text-muted-foreground">{rating.toFixed(1)} ({reviewCount} Review)</span>
    </div>
  );
}

const categories = [
    'All Categories',
    'Fashion Men, Women & Kid\'s',
    'Eye Ware & Sunglass',
    'Watches',
    'Electronics Items',
    'Furniture',
    'Headphones',
    'Beauty & Health',
    'Foot Ware'
];

const priceRanges = [
    'All Price',
    '$0 - $100',
    '$100 - $250',
    '$250 - $500',
    '$500 - $1000',
    'Over $1000'
];

export default function ProductGridPage() {
    const { toast } = useToast();

    const handleComingSoon = (feature: string) => {
        toast({
            title: 'Coming Soon!',
            description: `The ${feature} feature is under development.`,
        });
    }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
            <div className="relative">
                <Input placeholder="Search..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            
            <Card>
                <CardContent className="p-4">
                     <Accordion type="multiple" defaultValue={['categories', 'price']} className="w-full">
                        <AccordionItem value="categories">
                            <AccordionTrigger className="text-base font-semibold">Categories</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3 pt-2">
                                {categories.map((category, index) => (
                                    <div key={category} className="flex items-center gap-3">
                                        <Checkbox id={`cat-${index}`} defaultChecked={index === 0}/>
                                        <label htmlFor={`cat-${index}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{category}</label>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="price">
                            <AccordionTrigger className="text-base font-semibold">Product Price</AccordionTrigger>
                            <AccordionContent>
                               <div className="space-y-3 pt-2">
                                {priceRanges.map((range, index) => (
                                    <div key={range} className="flex items-center gap-3">
                                        <Checkbox id={`price-${index}`} defaultChecked={index === 0}/>
                                        <label htmlFor={`price-${index}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{range}</label>
                                    </div>
                                ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground">
                        <span className="text-foreground cursor-pointer hover:underline">Categories</span> &gt; <span className="text-foreground cursor-pointer hover:underline">All Product</span>
                    </p>
                    <p className="text-muted-foreground mt-1">Showing all <strong>{products.length}</strong> items results</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={() => handleComingSoon('More Settings')}><MoreHorizontal className="mr-2 h-4 w-4" /> More Setting</Button>
                    <Button variant="outline" onClick={() => handleComingSoon('Filters')}><Filter className="mr-2 h-4 w-4" /> Filters</Button>
                    <Button asChild><Link href="/dashboard/products/create"><Plus className="mr-2 h-4 w-4" /> New Product</Link></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => {
                    const discountedPrice = product.price * (1 - product.discount / 100);
                    return (
                        <Card key={product.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                            <div className="relative aspect-[4/3] w-full bg-secondary">
                                <Image
                                    src={product.images[0].url}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-background/60 hover:bg-background/80 rounded-full h-8 w-8" onClick={() => handleComingSoon('Liking products')}>
                                    <Heart className="h-4 w-4 text-destructive" />
                                </Button>
                            </div>
                            <CardContent className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-base font-semibold mb-2 truncate">{product.name}</h3>
                                    <Rating rating={product.rating} reviewCount={product.reviews} />
                                </div>
                                <div className="mt-4">
                                     <div className="flex items-baseline gap-2 mb-4">
                                        <p className="text-lg font-bold text-primary">${discountedPrice.toFixed(2)}</p>
                                        {product.discount > 0 && (
                                            <>
                                                <p className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</p>
                                                <Badge variant="destructive" className="text-xs">({product.discount}% Off)</Badge>
                                            </>
                                        )}
                                    </div>
                                    <div className="flex justify-between items-center gap-2">
                                        <Button variant="outline" size="icon" onClick={() => handleComingSoon('More Options')}>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                        <Button className="w-full" variant="outline" onClick={() => handleComingSoon('Add to Cart')}>
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            Add To Cart
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="flex justify-end mt-8">
                <div className="flex items-center gap-2">
                    <Button variant="outline">Previous</Button>
                    <Button>1</Button>
                    <Button variant="outline">2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                </div>
            </div>

        </div>
    </div>
  );
}
