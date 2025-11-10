'use client';

import { useRouter } from 'next/navigation';
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
import { ArrowLeft, Save, Upload } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const formSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.coerce.number().positive('Price must be a positive number'),
  discount: z.coerce.number().min(0).max(100, 'Discount must be between 0 and 100').optional().default(0),
  stock: z.coerce.number().int().min(0, 'Stock cannot be negative'),
  category: z.string().min(1, 'Category is required'),
  color: z.string().min(1, 'Color is required'),
  material: z.string().min(1, 'Material is required'),
  dimensions: z.string().min(1, 'Dimensions are required'),
});

type FormValues = z.infer<typeof formSchema>;

const categories = ['Living Room', 'Office', 'Dining', 'Bedroom'];

export default function CreateProductPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      discount: 0,
      stock: 0,
      category: '',
      color: '',
      material: '',
      dimensions: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('New product data:', values);
    toast({
      title: 'Product Added Successfully!',
      description: `${values.name} has been added to your catalog.`,
    });
    router.push('/dashboard/products');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>Fill out the form to add a new product to your catalog.</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to List
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Elegant Velvet Sofa" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Describe the product..." className="min-h-[150px]" {...field} />
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
                          <FormLabel>Category</FormLabel>
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
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input type="number" step="0.01" placeholder="$99.99" {...field} />
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
                                <Input type="number" placeholder="e.g., 10" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Stock Count</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="e.g., 100" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Color</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Royal Blue" {...field} />
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
                                <Input placeholder="e.g., Velvet, Hardwood" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="dimensions"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Dimensions</FormLabel>
                            <FormControl>
                                <Input placeholder='e.g., 88" W x 35" D x 32" H' {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormItem>
                        <FormLabel>Product Images</FormLabel>
                        <FormControl>
                            <Button variant="outline" className="w-full">
                                <Upload className="mr-2 h-4 w-4" /> Upload Images
                            </Button>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" /> Save Product
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
