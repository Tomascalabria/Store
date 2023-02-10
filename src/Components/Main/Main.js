import React from 'react'
import { Categories } from './Categories/Categories'
import { Hero } from './Hero/Hero'
import shoes_categories_portrait from '../../Media/Shoe_categories_portrait.webp'
import clothes_categories_portrait from '../../Media/Clothes_categories_portrait.avif'
import accesories_categories_portrait from '../../Media/Accesories_categories_portrait.webp'
import discount_banner from '../../Media/winter_sale_discount_banner.jpg'



export const Main = () => {

  function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
    preloadImage(url, function(){
        loadedCounter++;
            console.log('Number of loaded images: ' + loadedCounter);
      if(loadedCounter == toBeLoadedNumber){
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
  }
}

preloadImages([
  shoes_categories_portrait,
  clothes_categories_portrait,
  accesories_categories_portrait,
  discount_banner

], function(){
  console.log('All images were loaded');
});

  return (
  <>
    <Hero/>
    <Categories/>
  </>
  )
}
