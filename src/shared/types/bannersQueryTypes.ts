export interface Banners {
    data: BannersData[];
    meta: Meta;
}

export interface BannersData {
    id:         number;
    attributes: BannersAttributes;
}

export interface BannersAttributes {
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    title:             string;
    banner:            Banner;
    responsive_banner: Banner;
}

export interface Banner {
    data: Data[];
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
