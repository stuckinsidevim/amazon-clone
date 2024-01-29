export interface Product {
  id: number;
  title: string;
  price: number;
  bestseller?: boolean;
  imageUrl: string;
  author: string;
  stars: number;
  reviewCount: number;
  publishedDate: string
  actualPrice: number;
  ebookPrice?: number;
  audiobookPrice?: number;
  summary: string;
}
