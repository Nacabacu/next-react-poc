export interface Reviewer {
  name: string;
  comment: string;
  rate: number;
}

export interface BusinessData {
  shopName: string;
  landingImageUrl: string;
  address: string;
  description: string;
  reviewers: Reviewer[];
  contactNumber: string;
}
