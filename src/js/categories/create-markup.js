function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          id,
          img,
          name,
          price,
        }) => `<li data-id="${id}" class="swiper-slide bicycle-item js-card">
          <img src="${img}" alt="${name}" width="250" />
          <div class="bicycle-des">
            <h2 class="bicycle-name">${name}</h2>
            <h3 class="bicycle-price">${price} грн.</h3>
          </div>

      </li>`
      )
      .join('');
  }
  //   else {
  //     markup = `<li>
  //     <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
  //   </li>`;
  //   }
  list.innerHTML = markup;
}
export { createMarkup };

// `<li data-id="${id}" class="js-card">
//           <img src="${img}" alt="${name}" width="300">
//           <h2>${name}</h2>
//           <p><a class="js-info" href="#">More information</a></p>
//         </li>`
