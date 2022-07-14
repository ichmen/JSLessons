import { addImage } from './addImage.js';

const addImageV2 = url => {
  // put your code here
  const p = new Promise((success, reject) => {
    addImage(url, imgCallback);
    function imgCallback(error, size) {
      if (error) {
        reject(error);
      }
      success(size);
    }
  });
  return p;
};

// examples

// addImageV2(
//   'ttps://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
// )
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// addImageV2('https://server.com/image.png')
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
