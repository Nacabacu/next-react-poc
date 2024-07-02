import React, { FC } from 'react';
interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer
      className="
  
  bg-light py-5"
    >
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">Copyright © 2023 - Cozy Coffee Shop</div>
      </div>
    </footer>
  );
};
