export interface IProducts {
  id:         number;
  attributes: IProductAttributes;
}

export interface IProductAttributes {
  title:       string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  description: null;
  price:       number;
  offer:       null;
  slug:        string;
  main_image:  Category;
  images:      Category;
  category:    Category;
}

export interface Category {
  data: Data | null;
}

export interface Data {
  id:         number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  title?:       string;
  createdAt?:   Date;
  updatedAt?:   Date;
  publishedAt?: Date;
  url?:         string;
}
