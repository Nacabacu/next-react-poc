import React, { FC } from 'react';
interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">About Us</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Cozy Coffee Shop offers a warm atmosphere and the finest coffee in town. Our beans are
              sourced from the best farms around the world.
            </p>
            <a className="btn btn-light btn-xl" href="#reviewer">
              Read Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
