import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="container">
        <div class="about">
            <h1 class="about__title">About Me</h1>
            <div class="about__block">
                <div class="about__flex">
                    <img class="about__logo" data-aos="fade-up" data-aos-duration="1000" width="170px" height="170px"
                        src="./image/man.png" alt="#"/>
                    <div data-aos="fade-up" data-aos-duration="1000" class="about__content">
                        <p class="about__text">
                            Я Кожояр,учусь на веб-разработчика в Makers , Кыргызстан . У меня богатый опыт в HTMl, CSS ,
                            создании и настройке веб-сайтов, Скоро изучим JavaScript.
                        </p>
                        <button class="about__btn">Download</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="services">
            <div data-aos="fade-up" data-aos-duration="1000" class="service__block">
                <ul class="services__list">
                    <li class="services__item">
                        <div class="service__flex">
                            <img src="./image/fire.png" width="40px" height="40px" alt="#" class="services__icon"/>
                            <div class="service__flex_title">
                                <h4 class="service__span">Projects completed</h4>
                                <h4 class="services__title">13</h4>
                            </div>
                        </div>
                    </li>
                    <li class="services__item">
                        <div class="service__flex">
                            <img src="./image/coffee-cup.png" width="40px" height="40px" alt="#" class="services__icon"/>
                            <div class="service__flex_title">
                                <h4 class="service__span">Cup or Coffee</h4>
                                <h4 class="services__title"> 113 </h4>
                            </div>
                        </div>
                    </li>
                    <li class="services__item">
                        <div class="service__flex">
                            <img src="./image/user.png" width="40px" height="40px" alt="#" class="services__icon"/>
                            <div class="service__flex_title">
                                <h4 class="service__span">Clients</h4>
                                <h4 class="services__title">121</h4>
                            </div>
                        </div>
                    </li>
                    <li class="services__item">
                        <div class="service__flex">
                            <img src="./image/medal.png" width="40px" height="40px" alt="#" class="services__icon"/>
                            <div class="service__flex_title">
                                <h4 class="service__span">Nominees winner</h4>
                                <h4 class="services__title">57</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" class="resume">
            <h1 class="resume__title">Образование</h1>
            <img class="resume__img" width="420px" height="420px" src="./image/school.png" alt=""/>
            <ul>
                <li class="resume__item">
                    <div class="resume__date">2012 - 2021</div>
                    <div class="resume__content">
                        <p class="resume__info">Школа #2 гимназия</p>
                        <p class="resume__info">Я отучился там 9 лет, аттестат взял</p>
                    </div>
                </li>
                <li class="resume__item">
                    <div class="resume__date">2019 - 2022</div>
                    <div class="resume__content">
                        <p class="resume__info">Лицей</p>
                        <p class="resume__info">Учился в 10-11 классах </p>
                    </div>
                </li>
                <li class="resume__item">
                    <div class="resume__date">2022</div>
                    <div class="resume__content">
                        <p class="resume__info">Makers</p>
                        <p class="resume__info">Учусь на Front-End разработчика </p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="card">
            <h1 class="card__title_main">Hobby</h1>
            <div data-aos="zoom-in-down" data-aos-duration="2000" class="card__block">
                <div class="card-inline">
                    <div class="card__flex">
                        <img src="" alt="" class="card__img"/>
                        <h2 class="card__title">Валейбол</h2>
                    </div>
                    <div class="card__flex_2">
                        <img src="./image/voleyball (1).png" alt=""/>
                        <p class="card__text">
                            Люблю смотреть и играть в волейбол.Волейбол является одним из самых популярных игровых видов
                            спорта в
                            мире. Появившись в конце XIX века в качестве игры для развлечения
                        </p>
                    </div>
                </div>

                <div id="card__id" class="card-inline">
                    <div class="card__flex">
                        <img src="" alt="" class="card__img"/>
                        <h2 class="card__title">Playstation</h2>
                    </div>
                    <div class="card__flex_2">
                        <img src="./image/ghost.png" alt=""/>
                        <p class="card__text">
                            Люблю играть в консольные игры. С друзьми часто играем
                        </p>
                    </div>
                </div>

                <div id="card__id_2" class="card-inline">
                    <div class="card__flex">
                        <img src="" alt="" class="card__img"/>
                        <h2 class="card__title">Музыка</h2>
                    </div>
                    <div class="card__flex_2">
                        <img src="./image/music-note.png" alt=""/>
                        <p class="card__text">
                            Люблю слушать музыку.
                            Музыку помогает расслабиться
                        </p>
                    </div>
                </div>
            </div>
            <div class="btn__flex">
                <button class="btn"> Go! </button>
            </div>
        </div>
    </div>
  )
}

export default About