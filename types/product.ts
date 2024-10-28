export interface Product {
    data: Data[];
}

export interface Data {
    id:            number;
    documentId:    string;
    productName:   string;
    slug:          string;
    description:   string;
    active:        boolean;
    price:         number;
    origin:        string;
    taste:         string;
    isFeatured:    boolean;
    createdAt:     Date;
    updatedAt:     Date;
    publishedAt:   Date;
    locale:        null;
    images:        Image[];
    category:      Category;
    localizations: any[];
}

export interface Category {
    id:           number;
    documentId:   string;
    categoryName: string;
    slug:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       null;
}

export interface Image {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    locale:            null;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:         EXT;
    url:         string;
    hash:        string;
    mime:        MIME;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
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
