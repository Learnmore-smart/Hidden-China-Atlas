export type DestinationCategory = 'nature' | 'culture' | 'heritage';

export interface Destination {
  id: string;
  nameZh: string;
  nameEn: string;
  location: string;
  description: string;
  longDescription: string;
  images: string[];
  coverImage: string;
  category: DestinationCategory;
}
