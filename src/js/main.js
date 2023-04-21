import "./_vendor";
import vars from "./_vars";
import "./_functions";
// import "./_components";

import Swiper, { Navigation, Pagination } from 'swiper';
  Swiper.use([Navigation, Pagination]);

import GraphModal from "graph-modal";

import { validateForms } from "./functions/validate-forms";
import Cookies from "./vendor/js.cookie.min.js";

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector("html").classList.add("ie");
}
if (isMobile.any()) {
  document.querySelector("html").classList.add("_touch");
}

window.onload = function () {

  const swiper = new Swiper('.new-arrivals__slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      567: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    },
  });

 const products = document.querySelectorAll('.product');
 if (products.length > 0) {
  products.forEach((item) => {
    if (!item.querySelector('.stock.not') && (!item.classList.contains('in-basket'))) {
      let productBtn = item.querySelector('.product-btn');
      productBtn.classList.remove('btn-stroke')
      productBtn.classList.add('btn-light');
      productBtn.innerHTML = `
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.431153 0.907829C0.257504 0.988516 0.0983253 1.14809 0.0419341 1.29794C-0.0808437 1.62409 0.0762835 2.04696 0.378976 2.20511C0.432346 2.23297 1.03654 2.35934 1.72162 2.48589C2.40675 2.61244 2.97447 2.72305 2.9833 2.73166C2.99211 2.74031 3.47438 5.16073 4.055 8.1104C4.63562 11.0601 5.13743 13.5449 5.17014 13.6323C5.24787 13.8399 5.44915 14.0036 5.68762 14.0533C5.81547 14.0799 7.53056 14.0894 11.0045 14.0826L16.1327 14.0725L16.2912 13.9875C16.5951 13.8245 16.5579 13.9514 17.4953 9.87904C18.4443 5.75606 18.4259 5.8658 18.216 5.60094C18.155 5.52392 18.0311 5.42298 17.9408 5.37666L17.7765 5.29242H11.3744H4.97236L4.64524 3.61689C4.46533 2.69538 4.28549 1.87068 4.24558 1.78427C4.16058 1.60017 3.99197 1.45995 3.7858 1.40187C3.55773 1.33766 0.806013 0.836727 0.68648 0.837663C0.628112 0.838112 0.513204 0.869676 0.431153 0.907829ZM16.7098 6.79945C16.7092 6.82521 16.4096 8.14361 16.0439 9.72927L15.379 12.6123L10.9007 12.6218L6.42246 12.6313L6.38222 12.4346C6.3601 12.3264 6.10724 11.0416 5.82036 9.5795C5.53344 8.1174 5.2899 6.88324 5.27912 6.83689L5.25954 6.75265H10.9852C15.5413 6.75265 16.7106 6.76219 16.7098 6.79945ZM6.27548 15.2528C4.92563 15.6078 4.16174 17.0417 4.6166 18.3665C5.20285 20.074 7.36246 20.5568 8.61665 19.2606C9.02907 18.8345 9.24613 18.3291 9.27902 17.7183C9.36693 16.0863 7.84776 14.8393 6.27548 15.2528ZM13.4525 15.2364C12.9856 15.3499 12.4866 15.6679 12.1605 16.0597C11.9783 16.2786 11.7402 16.7611 11.6721 17.0491C11.6453 17.1624 11.6237 17.4151 11.6242 17.6108C11.6256 18.2678 11.8597 18.815 12.3469 19.3002C13.0911 20.0414 14.1494 20.2119 15.0929 19.7427C15.9967 19.2933 16.5184 18.3315 16.4087 17.3174C16.3457 16.7352 16.1476 16.333 15.7045 15.8871C15.3509 15.5315 15.0176 15.3374 14.5849 15.2354C14.2862 15.1649 13.7448 15.1654 13.4525 15.2364ZM7.36817 16.7572C7.6822 16.9588 7.83224 17.2295 7.83355 17.5971C7.83649 18.4267 6.826 18.8604 6.23397 18.2836C6.03328 18.0881 5.96328 17.939 5.94094 17.6593C5.90789 17.2463 6.10481 16.8996 6.47281 16.723C6.73105 16.599 7.1463 16.6149 7.36817 16.7572ZM14.4179 16.7073C14.8593 16.9086 15.0841 17.4501 14.9235 17.9246C14.8551 18.1264 14.6384 18.355 14.4171 18.4587C13.9085 18.697 13.293 18.4208 13.1118 17.8731C12.959 17.4112 13.1996 16.8948 13.6615 16.6932C13.8368 16.6168 14.2356 16.6242 14.4179 16.7073Z" fill="#4092F1"/>
      </svg>
      <span>В корзину</span>
      `
    }
  })
 }

 let inputs = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);

  const questionForm = document.getElementById("question-form");

  if (questionForm) {
    const succQuestionForm = document.getElementById("success__question");

    if (Cookies.get("succContactForm") == "Yes") {
      // succContactForm.classList.add("message--show");
      // succContactForm.innerHTML = "Ваши контакты успешно отправлены";
      // contactForm.classList.add("is-hidden");
    } else {
      const rulesQuestion = [
        {
          ruleSelector: ".input-name",
          rules: [
            {
              rule: "minLength",
              value: 6,
              errorMessage: "Имя должно содержать не менее 6 символов!",
            },
            {
              rule: "maxLength",
              value: 20,
              errorMessage: "Имя должно содержать не более 20 символов!",
            },
            {
              rule: "required",
              value: true,
              errorMessage: "Введите свое имя!",
            },
          ],
        },
        {
          ruleSelector: ".input-email",
          rules: [
            {
              rule: "minLength",
              value: 6,
              errorMessage: "Email должен содержать не менее 6 символов!",
            },
            {
              rule: 'email',
              errorMessage: 'Введите корректный email!'
            },
            {
              rule: "required",
              value: true,
              errorMessage: "Заполните email!",
            },
          ],
        },
        {
          ruleSelector: ".input-tel",
          tel: true,
          telError: "Введите корректный телефон",
          rules: [
            {
              rule: "required",
              value: true,
              errorMessage: "Заполните телефон!",
            },
          ],
        },
        {
        ruleSelector: ".input-message",
          rules: [
            {
              rule: "minLength",
              value: 6,
              errorMessage: "Вопрос должен содержать не менее 15 символов!",
            },
            {
              rule: "required",
              value: true,
              errorMessage: "Введите свой вопрос!",
            },
          ],
        },
      ];

      const afterFormQuestion = () => {
        const modal = new GraphModal().open('question-thenk');
        // Cookies.set("succQuestionForm", "Yes", { expires: 1 });
        setTimeout(() => {
          questionForm.reset;
        },3000)
      };

      const errorFormQuestion = () => {
        succQuestionForm.classList.add("message--show");
        succQuestionForm.classList.add('error-message');
        succQuestionForm.innerHTML =
          "К сожалению в данный момент отправка невозможна!";
        questionForm.classList.add("is-hidden");
        setTimeout(() => {
          succQuestionForm.classList.remove("message--show");
          succQuestionForm.innerHTML = '';
          questionForm.reset;
          questionForm.classList.remove("is-hidden");
        },3000)
      }

      validateForms("#question-form", rulesQuestion, afterFormQuestion, errorFormQuestion);

      const checkboxQuestion = questionForm.querySelector('.custom-checkbox__field');
      const btn_submit = document.querySelector(".question-form__btn");

      checkboxQuestion.addEventListener("change", () => {
        if (checkboxQuestion.checked) {
            btn_submit.removeAttribute("disabled");
        } else {
            btn_submit.setAttribute("disabled", true);
        }
    });

    }

  }

};

