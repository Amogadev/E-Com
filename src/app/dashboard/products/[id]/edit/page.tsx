'use client';

import { products } from '../../data';
import { notFound, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Save, UploadCloud } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.coerce.number().positive('Price must be a positive number'),
  discount: z.coerce.number().min(0).max(100, 'Discount must be between 0 and 100'),
  stock: z.coerce.number().int().min(0, 'Stock cannot be negative'),
  category: z.string().min(1, 'Category is required'),
  color: z.string().min(1, 'Color is required'),
  material: z.string().min(1, 'Material is required'),
  dimensions: z.string().min(1, 'Dimensions are required'),
});

type FormValues = z.infer<typeof formSchema>;

const categories = ['Living Room', 'Office', 'Dining', 'Bedroom', 'Fashion', 'Electronics'];

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = React.use(params);
  const router = useRouter();
  const { toast } = useToast();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    notFound();
  }

  const discountedPrice = product.price * (1 - product.discount / 100);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      category: product.category,
      color: product.color,
      material: product.material,
      dimensions: product.dimensions,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('Updated product data:', values);
    toast({
      title: 'Product Saved!',
      description: `${values.name} has been updated.`,
    });
    router.push(`/dashboard/products/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Product Preview */}
        <div className="lg:col-span-1">
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <div className="relative aspect-[4/3] w-full bg-secondary">
                        <Image
                            src={product.images[0].url}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">({product.category})</p>

                        <p className="text-sm font-semibold mb-1">Price:</p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                            {product.discount > 0 && (
                                <>
                                    <span className="text-md text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                                    <Badge variant="destructive" className="text-xs">({product.discount}% Off)</Badge>
                                </>
                            )}
                        </div>

                        <div className="mb-4">
                             <p className="text-sm font-semibold mb-2">Size :</p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">S</Button>
                                <Button variant="default" size="sm">M</Button>
                                <Button variant="outline" size="sm">XI</Button>
                                <Button variant="outline" size="sm">XXL</Button>
                            </div>
                        </div>

                         <div>
                            <p className="text-sm font-semibold mb-2">Colors :</p>
                            <div className="flex gap-2">
                                <Button size="icon" className="rounded-full h-6 w-6 border-2 border-primary" style={{backgroundColor: 'navy'}}><span className="sr-only">Dark</span></Button>
                                <Button size="icon" className="rounded-full h-6 w-6" style={{backgroundColor: 'orange'}}><span className="sr-only">Yellow</span></Button>
                                <Button size="icon" className="rounded-full h-6 w-6" style={{backgroundColor: 'white'}}><span className="sr-only">White</span></Button>
                                <Button size="icon" className="rounded-full h-6 w-6" style={{backgroundColor: 'red'}}><span className="sr-only">Red</span></Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Right Column - Edit Form */}
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Add Product Photo</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">
                            Drop your images here, or <span className="text-primary font-semibold cursor-pointer">click to browse</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Product Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Product Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Product Categories</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                {category}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} className="min-h-[120px]" />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input type="number" step="0.01" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="discount"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Discount (%)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="stock"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Stock Count</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="color"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="material"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Material</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dimensions"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Dimensions</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => router.push('/dashboard/products')}>Cancel</Button>
                                <Button type="submit">
                                    <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
