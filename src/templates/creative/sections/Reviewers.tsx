/* eslint-disable @next/next/no-img-element */
import { BusinessData } from "@/types/business";
import React, { FC } from "react";
interface IReviewersProps {
  businessData: BusinessData;
}

export const Reviewers: FC<IReviewersProps> = (props) => {
  return (
    <section className="page-section" id="reviewer">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">รีวิว</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          {props.businessData.reviewers.map((reviewer) => {
            return (
              <div key={reviewer.name} className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <img
                      src={`https://avatar.iran.liara.run/public?username=${reviewer.name}`}
                      alt=""
                      width={60}
                      height={60}
                      className='mx-auto'
                    />
                  </div>
                  <h3 className="h4 mb-2">{reviewer.name}</h3>
                  <p className="text-muted mb-0">
                    {reviewer.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
