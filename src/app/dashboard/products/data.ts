
import { PlaceHolderImages } from '@/lib/placeholder-images';

const p1_1 = PlaceHolderImages.find(img => img.id === 'product-1-1');
const p1_2 = PlaceHolderImages.find(img => img.id === 'product-1-2');
const p1_3 = PlaceHolderImages.find(img => img.id === 'product-1-3');
const p2_1 = PlaceHolderImages.find(img => img.id === 'product-2-1');
const p2_2 = PlaceHolderImages.find(img => img.id === 'product-2-2');
const p3_1 = PlaceHolderImages.find(img => img.id === 'product-3-1');
const p4_1 = PlaceHolderImages.find(img => img.id === 'product-4-1');
const p4_2 = PlaceHolderImages.find(img => img.id === 'product-4-2');
const p4_3 = PlaceHolderImages.find(img => img.id === 'product-4-3');
const p5_1 = PlaceHolderImages.find(img => img.id === 'product-5-1');
const p5_2 = PlaceHolderImages.find(img => img.id === 'product-5-2');
const p6_1 = PlaceHolderImages.find(img => img.id === 'product-6-1');
const p7_1 = PlaceHolderImages.find(img => img.id === 'product-7-1');
const p7_2 = PlaceHolderImages.find(img => img.id === 'product-7-2');
const p8_1 = PlaceHolderImages.find(img => img.id === 'product-8-1');


export const products = [
  {
    id: 1,
    name: 'Elegant Velvet Sofa',
    images: [
      { id: 1, url: p1_1?.imageUrl || 'https://picsum.photos/seed/p1-1/800/600' },
      { id: 2, url: p1_2?.imageUrl || 'https://picsum.photos/seed/p1-2/800/600' },
      { id: 3, url: p1_3?.imageUrl || 'https://picsum.photos/seed/p1-3/800/600' },
    ],
    description: 'A luxurious and comfortable sofa, upholstered in premium velvet. Its timeless design and plush cushions make it the perfect centerpiece for any modern living room. Built with a sturdy hardwood frame for lasting durability.',
    price: 899.99,
    discount: 10,
    stock: 120,
    category: 'Living Room',
    rating: 4.8,
    reviews: 25,
    dimensions: '88" W x 35" D x 32" H',
    material: 'Velvet, Hardwood',
    color: 'Royal Blue',
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2023-05-20T14:00:00Z',
  },
  {
    id: 2,
    name: 'Minimalist Desk Setup',
    images: [
      { id: 1, url: p2_1?.imageUrl || 'https://picsum.photos/seed/p2-1/800/600' },
      { id: 2, url: p2_2?.imageUrl || 'https://picsum.photos/seed/p2-2/800/600' },
    ],
    description: 'A clean and minimalist desk setup perfect for a productive home office. Features a spacious work surface and sleek design.',
    price: 450.00,
    discount: 0,
    stock: 80,
    category: 'Office',
    rating: 4.9,
    reviews: 60,
    dimensions: '55" W x 28" D x 30" H',
    material: 'Oak Wood, Steel',
    color: 'Natural Oak',
    createdAt: '2023-02-10T11:00:00Z',
    updatedAt: '2023-04-22T09:15:00Z',
  },
  {
    id: 3,
    name: 'Cozy Living Room Set',
    images: [
      { id: 1, url: p3_1?.imageUrl || 'https://picsum.photos/seed/p3-1/800/600' },
      { id: 2, url: p1_2?.imageUrl || 'https://picsum.photos/seed/p1-2/800/600' },
    ],
    description: 'A cozy living room set that creates a warm and inviting atmosphere. Perfect for relaxing with family and friends.',
    price: 1250.0,
    discount: 15,
    stock: 30,
    category: 'Living Room',
    rating: 4.7,
    reviews: 58,
    dimensions: 'N/A',
    material: 'Fabric, Wood',
    color: 'Light Gray',
    createdAt: '2023-03-05T08:00:00Z',
    updatedAt: '2023-06-01T12:00:00Z',
  },
  {
    id: 4,
    name: 'Modern Bedroom Suite',
    images: [
      { id: 1, url: p4_1?.imageUrl || 'https://picsum.photos/seed/p4-1/800/600' },
      { id: 2, url: p4_2?.imageUrl || 'https://picsum.photos/seed/p4-2/800/600' },
      { id: 3, url: p4_3?.imageUrl || 'https://picsum.photos/seed/p4-3/800/600' },
    ],
    description: 'A complete modern bedroom suite that offers both style and comfort. Includes a bed frame, and nightstands with a cohesive design.',
    price: 1599.0,
    discount: 0,
    stock: 45,
    category: 'Bedroom',
    rating: 4.8,
    reviews: 33,
    dimensions: 'Queen Size',
    material: 'Wood, Fabric',
    color: 'Beige',
    createdAt: '2023-04-12T16:45:00Z',
    updatedAt: '2023-05-30T11:20:00Z',
  },
  {
    id: 5,
    name: 'Stylish Accent Chair',
    images: [
      { id: 1, url: p5_1?.imageUrl || 'https://picsum.photos/seed/p5-1/800/600' },
      { id: 2, url: p5_2?.imageUrl || 'https://picsum.photos/seed/p5-2/800/600' },
    ],
    description: 'A stylish accent chair that adds a pop of color and personality to any room. Perfect as a standalone piece or to complement existing furniture.',
    price: 350.0,
    discount: 5,
    stock: 65,
    category: 'Living Room',
    rating: 4.6,
    reviews: 28,
    dimensions: '32" W x 34" D x 36" H',
    material: 'Fabric, Wood',
    color: 'Teal',
    createdAt: '2023-01-20T13:10:00Z',
    updatedAt: '2023-05-18T18:00:00Z',
  },
  {
    id: 6,
    name: 'Modern Armchair',
    images: [
      { id: 1, url: p6_1?.imageUrl || 'https://picsum.photos/seed/p6-1/800/600' },
      { id: 2, url: p2_2?.imageUrl || 'https://picsum.photos/seed/p2-2/800/600' },
    ],
    description: 'A comfortable and modern armchair with a sleek design. Its ergonomic shape and soft cushions provide excellent support.',
    price: 480.0,
    discount: 0,
    stock: 0,
    category: 'Living Room',
    rating: 4.7,
    reviews: 19,
    dimensions: '30" W x 32" D x 35" H',
    material: 'Fabric, Metal',
    color: 'Gray',
    createdAt: '2023-02-25T09:00:00Z',
    updatedAt: '2023-04-15T14:30:00Z',
  },
  {
    id: 7,
    name: 'Contemporary Armchair',
    images: [
      { id: 1, url: p7_1?.imageUrl || 'https://picsum.photos/seed/p7-1/800/600' },
      { id: 2, url: p7_2?.imageUrl || 'https://picsum.photos/seed/p7-2/800/600' },
    ],
    description: 'A contemporary armchair with a unique design and high-quality upholstery. Adds a touch of modern elegance to any space.',
    price: 520.0,
    discount: 20,
    stock: 25,
    category: 'Living Room',
    rating: 4.9,
    reviews: 45,
    dimensions: '34" W x 35" D x 33" H',
    material: 'Leather, Wood',
    color: 'White',
    createdAt: '2023-03-18T11:25:00Z',
    updatedAt: '2023-06-02T10:10:00Z',
  },
  {
    id: 8,
    name: 'Chic Living Room Interior',
    images: [
      { id: 1, url: p8_1?.imageUrl || 'https://picsum.photos/seed/p8-1/800/600' },
      { id: 2, url: p1_3?.imageUrl || 'https://picsum.photos/seed/p1-3/800/600' },
    ],
    description: 'A beautifully designed living room interior featuring a chic and modern aesthetic. This set includes a sofa and matching decor.',
    price: 2200.00,
    discount: 10,
    stock: 15,
    category: 'Living Room',
    rating: 5.0,
    reviews: 72,
    dimensions: 'N/A',
    material: 'Various',
    color: 'Cream',
    createdAt: '2023-05-01T18:00:00Z',
    updatedAt: '2023-05-25T15:00:00Z',
  },
];
