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
    name: 'Cozy Living Room Set',
    images: [
      { id: 1, url: p3_1?.imageUrl || 'https://picsum.photos/seed/p3-1/800/600' },
      { id: 2, url: p1_2?.imageUrl || 'https://picsum.photos/seed/p1-2/800/600' },
    ],
    description: 'A complete living room set designed for comfort and style. Includes a plush sofa and matching armchairs, perfect for creating a warm and inviting atmosphere for family and guests.',
    price: 1250.0,
    discount: 15,
    stock: 0,
    category: 'Living Room',
    rating: 4.9,
    reviews: 88,
    dimensions: 'Varies by piece',
    material: 'Fabric, Oak Wood',
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
    description: 'A comprehensive bedroom suite featuring a stylish bed frame, matching nightstands, and a spacious dresser. Its clean lines and modern aesthetic will transform your bedroom into a serene retreat.',
    price: 1599.0,
    discount: 0,
    stock: 45,
    category: 'Bedroom',
    rating: 4.8,
    reviews: 33,
    dimensions: 'Queen Bed, 2 Nightstands, 1 Dresser',
    material: 'Engineered Wood, Metal',
    color: 'White & Oak',
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
    description: 'A beautiful and comfortable accent chair that adds a pop of personality to any room. Perfect as a standalone piece or as part of a larger seating arrangement.',
    price: 299.0,
    discount: 5,
    stock: 65,
    category: 'Living Room',
    rating: 4.7,
    reviews: 28,
    dimensions: '32" W x 34" D x 36" H',
    material: 'Boucle Fabric, Wood',
    color: 'Cream',
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
    description: 'A comfortable and sleek armchair with a modern design. Features a plush seat and a sturdy frame, making it an ideal addition to your living room or study.',
    price: 380.0,
    discount: 0,
    stock: 30,
    category: 'Living Room',
    rating: 4.6,
    reviews: 19,
    dimensions: '34" W x 35" D x 33" H',
    material: 'Linen Blend, Metal',
    color: 'Charcoal Gray',
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
    description: 'A chic and contemporary armchair featuring high-quality upholstery and a unique silhouette. This chair is a statement piece that combines both comfort and high-end design.',
    price: 450.0,
    discount: 20,
    stock: 25,
    category: 'Living Room',
    rating: 4.9,
    reviews: 45,
    dimensions: '31" W x 33" D x 34" H',
    material: 'Velvet, Brass',
    color: 'Emerald Green',
    createdAt: '2023-03-18T11:25:00Z',
    updatedAt: '2023-06-02T10:10:00Z',
  },
  {
    id: 8,
    name: 'Chic Living Room Interior Set',
    images: [
      { id: 1, url: p8_1?.imageUrl || 'https://picsum.photos/seed/p8-1/800/600' },
      { id: 2, url: p1_3?.imageUrl || 'https://picsum.photos/seed/p1-3/800/600' },
    ],
    description: 'A full set for a chic living room interior with a modern aesthetic. Includes a sofa, coffee table, and accent lighting to create a cohesive and stylish space.',
    price: 1899.99,
    discount: 10,
    stock: 15,
    category: 'Living Room',
    rating: 4.9,
    reviews: 72,
    dimensions: 'Varies by piece',
    material: 'Mixed Materials',
    color: 'Neutral Palette',
    createdAt: '2023-05-01T18:00:00Z',
    updatedAt: '2023-05-25T15:00:00Z',
  },
];
