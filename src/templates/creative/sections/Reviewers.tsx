import React, { FC } from 'react';
interface IReviewersProps {}

export const Reviewers: FC<IReviewersProps> = () => {
  return (
    <section className="page-section" id="reviewer">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Reviews</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt=""
                  srcSet=""
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="h4 mb-2">John Doe</h3>
              <p className="text-muted mb-0">Excellent coffee and cozy atmosphere!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/706/706830.png"
                  alt=""
                  srcSet=""
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="h4 mb-2">Jane Smith</h3>
              <p className="text-muted mb-0">Best coffee shop in town. Highly recommend!</p>
            </div>
          </div>
          {/* Add more reviews as needed */}
        </div>
      </div>
    </section>
  );
};
