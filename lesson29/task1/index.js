const addImage = (imgSrc, callback) => {
  const container = document.querySelector('.page');
  const image = document.createElement('img');
  image.setAttribute('src', imgSrc);
  image.setAttribute('alt', 'some image');
  image.addEventListener('error', callback('Image load is faile'));
  // image.addEventListener('error', onError);
  // image.addEventListener('error', event => {
  //   console.log(event);
  // });
  // });
  container.append(image);
  image.addEventListener('load', callback(null, image));
  // image.addEventListener('load', callback(null, image));

  // function onImageLoaded() {
  //   callback(null, image);
  // }
  // function onError() {
  //   callback('Image load is failed');
  // }
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
