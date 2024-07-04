import React, { FC } from 'react';
interface IGalleryProps {}

const images = [
  'https://i.pinimg.com/564x/8e/b8/71/8eb871e702b44fa39d4bae621a645672.jpg',
  'https://i.pinimg.com/564x/84/01/07/840107f9a886f48a64cf08ffd6de7802.jpg'
];

const showImage = (imageUrl: string) => {
  const imageFullPageRef = document.getElementById('fullpage');
  if (imageFullPageRef) {
    imageFullPageRef.style.backgroundImage = `url("${imageUrl}")`;
    imageFullPageRef.style.display = 'block';
  }
};

const hideImage = () => {
  const imageFullPageRef = document.getElementById('fullpage');
  if (imageFullPageRef) {
    imageFullPageRef.style.display = 'none';
  }
};

export const Gallery: FC<IGalleryProps> = () => {
  return (
    <div id="portfolio">
      <div id="fullpage" onClick={hideImage} />
      <div className="container-fluid p-0">
        <div className="row g-0">
          {images.map((imageUrl, idx) => {
            return (
              <div key={`image_key_${idx}`} className="col-lg-4 col-sm-6" style={{ height: 400 }}  onClick={() => showImage(imageUrl)}>
                <div className="portfolio-box h-100" style={{ cursor: 'pointer'}}>
                  <div
                    id="image_0"
                    style={{
                      backgroundImage:
                        `url("${imageUrl}")`,
                      width: '100%',
                      height: '100%',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">กดเพื่อแสดงรูป</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
