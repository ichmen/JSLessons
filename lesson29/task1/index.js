export const addImage = (imgSrc, callback) => {
  const container = document.querySelector('.page');
  const image = document.createElement('img');
  image.setAttribute('src', imgSrc);
  image.setAttribute('alt', 'some image');
  image.addEventListener('load', onImageLoaded(null, image));
  image.addEventListener('error', onImageLoaded('Image load is failed'));
  container.append(image);

  // put your code here
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(imgElem);
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
