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
              src="https://i.pinimg.com/736x/2e/99/e4/2e99e41f266a8e51fbd344a90960d8a4.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://i.pinimg.com/736x/2e/99/e4/2e99e41f266a8e51fbd344a90960d8a4.jpg"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/323/372/925/lamborghini-car-lamborghini-aventador-vehicle-wallpaper-preview.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://c4.wallpaperflare.com/wallpaper/323/372/925/lamborghini-car-lamborghini-aventador-vehicle-wallpaper-preview.jpg"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/659/406/505/brown-and-green-mountains-under-white-and-blue-sky-wallpaper-preview.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://c4.wallpaperflare.com/wallpaper/659/406/505/brown-and-green-mountains-under-white-and-blue-sky-wallpaper-preview.jpgall"></ShareBar>
          </div>
          <div className="gallery">
            <img
              src="https://wallpapercave.com/wp/wp2707526.jpg"
              width="300"
              alt="tigre"
            />
            <ShareBar url="https://wallpapercave.com/wp/wp2707526.jpg"></ShareBar>
          </div>
        </div>
      );

}

export default Demo;
