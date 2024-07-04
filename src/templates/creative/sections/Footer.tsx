import { BusinessData } from '@/types/business';
import React, { FC } from 'react';
interface IFooterProps {
  businessData: BusinessData;
}

export const Footer: FC<IFooterProps> = ({ businessData }) => {
  return (
    <footer
      className="
  
  bg-light py-5"
    >
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">Copyright © {new Date().getFullYear()} - ${businessData.shopName}</div>
      </div>
    </footer>
  );
};
