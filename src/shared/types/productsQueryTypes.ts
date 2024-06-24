export interface IProducts {
  id: number;
  attributes: IProductsAttributes;
}

export interface IProductsAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: null;
  price: number;
  offer: null;
  slug: string;
  featured_product: boolean;
  best_selling: boolean;
  main_image: MainImage;
  images: Images;
  category: Category;
}

export interface Category {
  data: Data;
}

export interface Data {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Images {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  url: string;
}

export interface MainImage {
  data: DAT;
}
