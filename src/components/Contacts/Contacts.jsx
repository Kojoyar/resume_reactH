import React from 'react';
import './Contacts.css';
import  '../../components/adaptive.css'

const Contacts = () => {
  return (
  <div className="container">
    <footer data-aos="fade-down" data-aos-duration="2000" class="footer">
        <h1 class="footer__title_main">Get in Touch</h1>
        <div class="footer__block">
            <div class="footer__content">
                <h2 class="footer__title">Let's talk about everything!</h2>
                <p class="footer__text">Don't like forms? Send me an email. 👋
                </p>
            </div>
            <div class="footer__info">
                <form>
                    <input class="footer__input" type="text" placeholder="Your name"/>
                    <input class="footer__input" type="email" placeholder="Email address"/>
                </form>
                <form class="form">
                    <input class="footer__input_2" type="text" placeholder="Subject"/>
                </form>
                <form>
                    <input class="footer__input_3" type="text"/>
                </form>
            </div>
        </div>
    </footer>
  </div>
  )
}

export default Contacts