  const pictureInnerContainer = document.querySelector('.picture-inner-container');
  
  const allImages = [
    'assets/img/gallery/galery1.jpg', 'assets/img/gallery/galery2.jpg', 'assets/img/gallery/galery3.jpg', 'assets/img/gallery/galery4.jpg',
    'assets/img/gallery/galery5.jpg', 'assets/img/gallery/galery6.jpg', 'assets/img/gallery/galery7.jpg', 'assets/img/gallery/galery8.jpg',
    'assets/img/gallery/galery9.jpg', 'assets/img/gallery/galery10.jpg', 'assets/img/gallery/galery11.jpg', 'assets/img/gallery/galery12.jpg',
    'assets/img/gallery/galery13.jpg', 'assets/img/gallery/galery14.jpg', 'assets/img/gallery/galery15.jpg'
  ];
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const shuffledAllImages = shuffle(allImages);
  
  shuffledAllImages.map(function (i,n) {
  
    let img = document.createElement('img');
    img.classList.add('gallery-img');
    img.classList.add('wow');
    img.classList.add('animate__animated');
    img.classList.add('animate__slideInUp');
    img.src = i;
    img.alt = '';
  
    if ( n === 0 || n === 10 || n === 9 ) {
      img.style.marginTop = '50px';
    }
  
  
    pictureInnerContainer.append(img);
  
  });
  
  
  