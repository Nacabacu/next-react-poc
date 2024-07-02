import React, { FC } from 'react';
interface IContactProps {}

export const Contact: FC<IContactProps> = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Contact Us</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">For more information, feel free to contact us.</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted" />
            <div>(555) 123-4567</div>
          </div>
        </div>
      </div>
    </section>
  );
};
