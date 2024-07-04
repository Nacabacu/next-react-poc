import { BusinessData } from '@/types/business';
import React, { FC } from 'react';
interface IAboutUsProps {
  businessData: BusinessData;
}

export const AboutUs: FC<IAboutUsProps> = (props) => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">เกี่ยวกับเรา</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              {props.businessData.description}
            </p>
            <a className="btn btn-light btn-xl" href="#reviewer">
              อ่านรีวิว
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
