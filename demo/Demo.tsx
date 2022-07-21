/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React from 'react';

import './Demo.css';

import ShareBar from './share-bar'

//https://api.pexels.com/pt-br/foto/fotografia-de-close-up-de-tigre-792381/
function Demo () {
      return (
        <div>
          <div className="gallery">
            <img
              src="https://4kwallpapers.com/images/wallpapers/porsche-963-prototype-hybrid-sports-car-2022-4488x2993-8326.jpeg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://4kwallpapers.com/images/wallpapers/porsche-963-prototype-hybrid-sports-car-2022-4488x2993-8326.jpeg"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src="https://4kwallpapers.com/images/wallpapers/mercedes-amg-one-hybrid-sports-car-hybrid-electric-cars-2022-3840x3307-8334.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://4kwallpapers.com/images/wallpapers/mercedes-amg-one-hybrid-sports-car-hybrid-electric-cars-2022-3840x3307-8334.jpg"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src=" https://4kwallpapers.com/images/wallpapers/chevrolet-corvette-c8-sports-cars-supercars-5k-6200x4748-8299.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://4kwallpapers.com/images/wallpapers/chevrolet-corvette-c8-sports-cars-supercars-5k-6200x4748-8299.jpgall"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src="https://4kwallpapers.com/images/wallpapers/ducati-v21l-motoe-prototype-electric-sports-bikes-electric-8256x5504-8269.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://4kwallpapers.com/images/wallpapers/ducati-v21l-motoe-prototype-electric-sports-bikes-electric-8256x5504-8269.jpg"></ShareBar>
          </div>
        </div>
      );

}

export default Demo;
