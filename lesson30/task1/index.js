function addImage(imgSrc) {
  const p = new Promise((success, erroreous) => {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('src', imgSrc);
    imageElem.setAttribute('alt', 'Some picture');
    const container = document.querySelector('.page');
    container.append(imageElem);
    imageElem.addEventListener('load', () =>
      success({ width: imageElem.width, height: imageElem.height }),
    );

    imageElem.addEventListener('error', () => erroreous(new Error('Image load is failed...')));
  });
  return p;
}

const result = addImage(
  'ttps://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
);

result.then(data => console.log(data));
result.catch(err => console.log(err));
// console.log(result);
