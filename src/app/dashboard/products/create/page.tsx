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
import { Save, UploadCloud } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

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
  brand: z.string().min(1, 'Brand is required'),
  weight: z.string().min(1, 'Weight is required'),
  gender: z.string().min(1, 'Gender is required'),
});

type FormValues = z.infer<typeof formSchema>;

const categories = ['Living Room', 'Office', 'Dining', 'Bedroom', 'Fashion', 'Electronics'];
const genders = ['Men', 'Women', 'Unisex'];

export default function CreateProductPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Men Black Slim Fit T-shirt',
      description: '',
      price: 100,
      discount: 30,
      stock: 100,
      category: 'Fashion',
      color: 'Black',
      material: '',
      dimensions: '',
      brand: '',
      weight: '',
      gender: 'Men',
    },
  });
  
  const { watch } = form;
  const watchedValues = watch();

  const discountedPrice = (watchedValues.price || 0) * (1 - (watchedValues.discount || 0) / 100);

  const onSubmit = (values: FormValues) => {
    console.log('New product data:', values);
    toast({
      title: 'Product Added Successfully!',
      description: `${values.name} has been added to your catalog.`,
    });
    router.push('/dashboard/products');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column - Product Preview */}
      <div className="lg:col-span-1">
          <Card className="overflow-hidden">
              <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full bg-secondary flex items-center justify-center">
                      <Image
                          src="https://picsum.photos/seed/tshirt-preview/800/600"
                          alt={watchedValues.name || "Product Preview"}
                          fill
                          className="object-cover"
                      />
                  </div>
                  <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{watchedValues.name || 'Product Name'}</h3>
                      <p className="text-sm text-muted-foreground mb-3">({watchedValues.category || 'Category'})</p>

                      <p className="text-sm font-semibold mb-1">Price:</p>
                      <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                          {(watchedValues.discount || 0) > 0 && (
                              <>
                                  <span className="text-md text-muted-foreground line-through">${(watchedValues.price || 0).toFixed(2)}</span>
                                  <Badge variant="destructive" className="text-xs">({watchedValues.discount}% Off)</Badge>
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

      {/* Right Column - Create Form */}
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
                  <CardDescription>Fill out the form to add a new product to your catalog.</CardDescription>
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
                                          <Input placeholder="e.g., Elegant Velvet Sofa" {...field} />
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
                                      <Textarea placeholder="Describe the product..." className="min-h-[120px]" {...field} />
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
                              <FormField
                                  control={form.control}
                                  name="brand"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Brand</FormLabel>
                                      <FormControl>
                                          <Input placeholder="Brand Name" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="weight"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Weight</FormLabel>
                                      <FormControl>
                                          <Input placeholder="in gm & kg" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="gender"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Gender</FormLabel>
                                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {genders.map((gender) => (
                                                <SelectItem key={gender} value={gender}>
                                                {gender}
                                                </SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
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
                          </div>

                          <div className="flex justify-end gap-2">
                              <Button variant="outline" type="button" onClick={() => router.push('/dashboard/products')}>Cancel</Button>
                              <Button type="submit">
                                  <Save className="mr-2 h-4 w-4" /> Create Product
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
