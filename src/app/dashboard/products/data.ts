
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
    name: 'Mid-Century Modern Desk',
    images: [
      { id: 1, url: p2_1?.imageUrl || 'https://picsum.photos/seed/p2-1/800/600' },
      { id: 2, url: p2_2?.imageUrl || 'https://picsum.photos/seed/p2-2/800/600' },
    ],
    description: 'A sleek and stylish desk with a minimalist design, perfect for a productive home office. Features a spacious work surface and elegant tapered legs.',
    price: 349.99,
    discount: 0,
    stock: 75,
    category: 'Office',
    rating: 4.7,
    reviews: 42,
    dimensions: '48" W x 24" D x 30" H',
    material: 'Walnut Veneer, Solid Wood',
    color: 'Walnut',
    createdAt: '2023-02-10T11:00:00Z',
    updatedAt: '2023-04-22T09:15:00Z',
  },
  {
    id: 3,
    name: 'Rustic Farmhouse Table',
    images: [
      { id: 1, url: p3_1?.imageUrl || 'https://picsum.photos/seed/p3-1/800/600' },
      { id: 2, url: p1_2?.imageUrl || 'https://picsum.photos/seed/p1-2/800/600' },
    ],
    description: 'A large dining table with a rustic, farmhouse charm. Perfect for family gatherings and adding a touch of country style to your home.',
    price: 650.0,
    discount: 0,
    stock: 0,
    category: 'Dining',
    rating: 4.9,
    reviews: 88,
    dimensions: '72" L x 36" W x 30" H',
    material: 'Reclaimed Pine',
    color: 'Distressed White',
    createdAt: '2023-03-05T08:00:00Z',
    updatedAt: '2023-06-01T12:00:00Z',
  },
  {
    id: 4,
    name: 'Upholstered Queen Bed',
    images: [
      { id: 1, url: p4_1?.imageUrl || 'https://picsum.photos/seed/p4-1/800/600' },
      { id: 2, url: p4_2?.imageUrl || 'https://picsum.photos/seed/p4-2/800/600' },
      { id: 3, url: p4_3?.imageUrl || 'https://picsum.photos/seed/p4-3/800/600' },
    ],
    description: 'A beautiful upholstered queen-sized bed with a tall headboard. Offers a blend of modern style and ultimate comfort for your bedroom.',
    price: 599.0,
    discount: 0,
    stock: 90,
    category: 'Bedroom',
    rating: 4.6,
    reviews: 33,
    dimensions: '64" W x 85" L x 50" H',
    material: 'Linen Blend, Wood',
    color: 'Light Gray',
    createdAt: '2023-04-12T16:45:00Z',
    updatedAt: '2023-05-30T11:20:00Z',
  },
  {
    id: 5,
    name: 'Leather Recliner Chair',
    images: [
      { id: 1, url: p5_1?.imageUrl || 'https://picsum.photos/seed/p5-1/800/600' },
      { id: 2, url: p5_2?.imageUrl || 'https://picsum.photos/seed/p5-2/800/600' },
    ],
    description: 'A stylish and comfortable leather recliner. The perfect chair to relax in after a long day, adding a touch of sophistication to any room.',
    price: 720.0,
    discount: 5,
    stock: 65,
    category: 'Living Room',
    rating: 4.8,
    reviews: 28,
    dimensions: '38" W x 40" D x 42" H',
    material: 'Genuine Leather',
    color: 'Brown',
    createdAt: '2023-01-20T13:10:00Z',
    updatedAt: '2023-05-18T18:00:00Z',
  },
  {
    id: 6,
    name: 'Industrial Bookshelf',
    images: [
      { id: 1, url: p6_1?.imageUrl || 'https://picsum.photos/seed/p6-1/800/600' },
      { id: 2, url: p2_2?.imageUrl || 'https://picsum.photos/seed/p2-2/800/600' },
    ],
    description: 'A sturdy bookshelf with an industrial design, featuring a metal frame and wooden shelves. Ideal for storage and display in an office or living room.',
    price: 280.0,
    discount: 0,
    stock: 30,
    category: 'Office',
    rating: 4.5,
    reviews: 19,
    dimensions: '36" W x 12" D x 72" H',
    material: 'Steel, Mango Wood',
    color: 'Black & Natural',
    createdAt: '2023-02-25T09:00:00Z',
    updatedAt: '2023-04-15T14:30:00Z',
  },
  {
    id: 7,
    name: 'Bohemian Style Armchair',
    images: [
      { id: 1, url: p7_1?.imageUrl || 'https://picsum.photos/seed/p7-1/800/600' },
      { id: 2, url: p7_2?.imageUrl || 'https://picsum.photos/seed/p7-2/800/600' },
    ],
    description: 'A unique armchair with a bohemian flair, featuring natural materials and a relaxed design. Adds a touch of artistic style to any space.',
    price: 420.0,
    discount: 20,
    stock: 25,
    category: 'Living Room',
    rating: 4.9,
    reviews: 45,
    dimensions: '30" W x 32" D x 35" H',
    material: 'Rattan, Cotton',
    color: 'Natural',
    createdAt: '2023-03-18T11:25:00Z',
    updatedAt: '2023-06-02T10:10:00Z',
  },
  {
    id: 8,
    name: 'Minimalist Coffee Table',
    images: [
      { id: 1, url: p8_1?.imageUrl || 'https://picsum.photos/seed/p8-1/800/600' },
      { id: 2, url: p1_3?.imageUrl || 'https://picsum.photos/seed/p1-3/800/600' },
    ],
    description: 'A minimalist coffee table with clean lines and a simple, elegant design. The perfect centerpiece for a modern living room.',
    price: 199.99,
    discount: 10,
    stock: 150,
    category: 'Living Room',
    rating: 4.7,
    reviews: 72,
    dimensions: '40" L x 20" W x 16" H',
    material: 'Marble, Metal',
    color: 'White & Gold',
    createdAt: '2023-05-01T18:00:00Z',
    updatedAt: '2023-05-25T15:00:00Z',
  },
];
