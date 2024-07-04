import { BusinessData } from '@/types/business';
import React, { FC } from 'react';
interface IMastHeadProps {
  businessData: BusinessData;
}

export const MastHead: FC<IMastHeadProps> = (props) => {
  return (
    <header className="masthead relative">
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          backgroundImage:
            `url("${props.businessData.landingImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">{props.businessData.shopName}</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">{props.businessData.address}</p>
            <a className="btn btn-primary btn-xl" href="#about">
              ร้านเราคือ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
