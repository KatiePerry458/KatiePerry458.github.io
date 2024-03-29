// /* Lazy Loading */
// const images = document.querySelectorAll("img[data-src]");

// function preloadImage(img) {
// const src = img.getAttribute("data-src");
//   if (!src){
//     return;
//   }

//   img.src = src;
// }

// const imgOptions = {
// };

// const imgObserver = new IntersectionObserver(
//   (entries, imgObserver) => {
//     entries.forEach(entry => {
//     if(!entry.isIntersecting){
//       return;
//     } else {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);

//     }
//   })
// }, imgOptions);

// images.forEach (image => {
//   imgObserver.observe(image);
// });

const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
