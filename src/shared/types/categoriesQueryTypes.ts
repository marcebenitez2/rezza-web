export interface ICategory {
  id:         number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  title:       string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  image:       Image;
}

export interface Image {
  data: Datum[];
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  url: string;
}
