import React, { FC } from 'react';
interface IMastHeadProps {}

export const MastHead: FC<IMastHeadProps> = () => {
  return (
    <header className="masthead">
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          backgroundImage:
            'url("https://i.pinimg.com/564x/8e/b8/71/8eb871e702b44fa39d4bae621a645672.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">Welcome to Cozy Coffee Shop</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">The best place to enjoy your coffee.</p>
            <a className="btn btn-primary btn-xl" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
