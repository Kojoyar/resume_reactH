import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
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

    <Link to="/details" >
      <button class="header__btn"> Hire Me </button>
    </Link>
      </div>

      <div class="info">
        <div data-aos="fade-up" data-aos-duration="2000" class="info__block">
            <div class="info__content">
                <div class="info__content__block">
                    <img width="100px" height="100px" class="info__img" src="./image/html (1).png" alt=""/>
                    <h1 class="info__content-title">HTML</h1>
                    <p class="info__text">
                        HTML — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц
                        в браузере.
                    </p>

                    <div class="info__button">
                        <button class="info__btn">Подробнее</button>
                    </div>
                </div>
            </div>

            <div class="info__content">
                <div id="info__id" class="info__content__block">
                    <img width="100px" height="100px" class="info__img" src="./image/css-file.png" alt=""/>
                    <h1 class="info__content-title">CSS</h1>
                    <p class="info__text">
                        CSS — формальный язык описания внешнего вида документа, написанного с использованием языка
                        разметки.
                    </p>

                    <div class="info__button">
                        <button class="info__btn">Подробнее</button>
                    </div>
                </div>
            </div>

            <div class="info__content">
                <div id="info__id_2" class="info__content__block">
                    <img width="100px" height="100px" class="info__img" src="./image/js.png" alt=""/>
                    <h1 class="info__content-title">JavaScript</h1>
                    <p class="info__text">
                        JavaScript — мультипарадигменный язык программирования. Поддерживает
                        объектно-ориентированный, императивный стиль.
                    </p>

                    <div class="info__button">
                        <button class="info__btn">Подробнее</button>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home