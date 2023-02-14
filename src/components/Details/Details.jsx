import React from 'react';
import './Details.css'

const Details = () => {
  return (
    <div className="container">
        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="header">
        <div class="header__block">
            <img width="150px" height="150px" src="./image/man.png" alt=""/>
            <h1 class="header__title">Jolochiev Kojoyar</h1>
            <h4 class="header__text">I'm Front-End developer </h4>
        </div>

        <div class="header__img">
            <img src="./image/instagram (1).png" alt="" class="header__icon"/>
            <img src="./image/twitter.png" alt="" class="header__icon"/>
            <img src="./image/telegram.png" alt="" class="header__icon"/>
        </div>
      </div>
    </div>
  )
}

export default Details