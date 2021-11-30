"use strict"
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
document.addEventListener('DOMContentLoaded', () => {

  let link = document.querySelectorAll('.smooth');
  for (let i = 0; i < link.length; i++) {
    const elem = link[i];
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      let blockID = elem.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  };

  // Anim
  let menuItem = document.querySelectorAll('.menu__item');
  let menuHover = 'menu__item--hover';
  let menuUnHover = 'menu__item--unhover';

  menuItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (item.classList.contains(menuUnHover)) {
        item.classList.remove(menuUnHover);
      }
      item.classList.add(menuHover);
    });
    item.addEventListener('mouseleave', () => {
      if (item.classList.contains(menuHover)) {
        item.classList.remove(menuHover);
        item.classList.add(menuUnHover);
      }
    });
  });

  // spoiler

  let contactUs = document.querySelector('.contact-us');
  let contactUsClick = 'contact-us--click';
  let showContactBodyClass = 'contact-body--active';
  let contactBody = document.querySelector('.contact-body');

  contactUs.addEventListener('click', () => {
    contactUs.classList.toggle(contactUsClick);
    contactBody.classList.toggle(showContactBodyClass);
  })

  // inputErr

  let modalForm = document.querySelector('.header-modal__form');
  let modalInput = document.querySelectorAll('.header-modal__input');
  let modalCheckBox = document.querySelector('.header-modal__checkbox');
  let checkBoxSpan = document.querySelector('.check-box');
  let modalFormOnce = true;

  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    modalInput.forEach(item => {
      if (!item.value) {
        item.classList.add('err');
      } else if (!item.value.trim()) {
        item.classList.add('err');
      } else {
        if (modalCheckBox.checked && modalFormOnce === true) {
          checkBoxSpan.classList.remove('err');
          console.log('next logic');
          modalFormOnce = false;
        }
        item.classList.remove('err');
      }
      if (!modalCheckBox.checked) {
        checkBoxSpan.classList.add('err');
      }
    })
  });

  //lmnt form

  let Form = document.querySelector('.form');
  let Input = document.querySelectorAll('.input');
  let lmntCheckBox = document.querySelector('.lmnt-checkbox__input');
  let lmnCheckBoxSpan = document.querySelector('.lmnt-checkbox__span');
  let lmntOnce = true;

  Form.addEventListener('submit', item => {
    item.preventDefault();
    Input.forEach(item => {
      if (!item.value) {
        item.classList.add('err');
      } else if (!item.value.trim()) {
        item.classList.add('err');
      } else {
        if (lmntCheckBox.checked && lmntOnce === true) {
          lmnCheckBoxSpan.classList.remove('err');
          console.log('next logic');
          lmntOnce = false;
        }
        item.classList.remove('err');
      }
      if (!lmntCheckBox.checked) {
        lmnCheckBoxSpan.classList.add('err');
      }
    })
  })
  //lmnt form 2

  let planForm = document.querySelector('.plan__forme');
  let Inputs = document.querySelectorAll('.plan__input');
  let lmntCheckBoxplan = document.querySelector('.lmnt-checkbox__plan-input');
  let lmnCheckBoxSpanplan = document.querySelector('.lmnt-checkbox__plan-span');
  let lmntOncePlan = true;

  if (planForm !== null) {
    planForm.addEventListener('submit', item => {
      item.preventDefault();
      Inputs.forEach(item => {
        if (!item.value) {
          item.classList.add('err');
        } else if (!item.value.trim()) {
          item.classList.add('err');
        } else {
          if (lmntCheckBoxplan.checked && lmntOncePlan === true) {
            lmnCheckBoxSpanplan.classList.remove('err');
            console.log('next logic');
            lmntOncePlan = false;
          }
          item.classList.remove('err');
        }
        if (!lmntCheckBoxplan.checked) {
          lmnCheckBoxSpanplan.classList.add('err');
        }
      })
    })
  }


  // modal header

  let contactButton = document.querySelector('.contact-body__button');
  let headerModal = document.querySelector('.header-modal');
  let modalClose = document.querySelector('.header-modal__close');

  contactButton.addEventListener('click', () => {
    headerModal.classList.add('show');
    document.body.classList.add('no-scroll');
  })

  modalClose.addEventListener('click', () => {
    headerModal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  })

  headerModal.addEventListener('click', (e) => {
    e.target.classList.remove('show');
    if (e.target.classList.contains('header-modal')) {
      document.body.classList.remove('no-scroll');
    }
  })

  // mobile-menu

  let openMenu = document.querySelector('.mobile-menu');
  let menu = document.querySelector('.menu');
  let closeMenu = document.querySelector('.menu__cross');

  openMenu.addEventListener('click', () => {
    if (!menu.classList.contains('open')) {
      menu.classList.add('open');
      addNoScroll();
    }
  })

  closeMenu.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      removeNoScroll();
    }
  })
  menu.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      removeNoScroll();
    }
  })

  // Stage

  const stageInfo = {
    title: [
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения",
      "Обсуждение проекта, составление moodboard'а и обмер помещения"
    ],
    text: [
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
      `Мы подбираем референсы и составляем коллажи на основе Ваших пожеланий и по принципу нравится/не нравится. Дизайнер выезжает на Ваш объект и производит подробный обмер помещения.`,
    ],
    progress: [
      '6.7',
      '21.9',
      '42.1',
      '49.7',
      '75.9',
      '86.2',
      '90.9',
      '95.0',
      '100.0',
    ]
  }
  let stage = document.querySelector('.stage');
  let stageButton = document.querySelectorAll('.stage-interact__button');
  let stageItem = document.querySelectorAll('.stage__item');
  let stageTitle = document.querySelector('.stage-interact__title');
  let stageText = document.querySelector('.stage-interact__text');
  let progressBar = document.querySelector('.progress-bar__track');
  let progressBarTrack = stageInfo.progress;
  let stageMargin = 0;
  let counter = 1;
  let newStageItem = []
  let milliseconds = 700;

  const stageItemSortArr = () => {
    let arr = stageItem;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      newStageItem[element.dataset.index - 1] = arr[i];
    }
  }

  stageItemSortArr();

  function revive(obj, stageInfo, timeOut = 1000) {
    obj.classList.remove('next');
    setTimeout(() => {
      obj.innerText = stageInfo;
      obj.classList.add('next');
    }, timeOut)
  }

  stageButton.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.classList.contains('next') && counter < stageItem.length) {
        newStageItem[counter].classList.add('active');
        revive(stageTitle, stageInfo.title[counter], milliseconds);
        revive(stageText, stageInfo.text[counter], milliseconds);
        progressBar.style.width = progressBarTrack[counter] + '%';
        counter++;
        if (counter >= stageItem.length) {
          e.target.classList.remove('active');
          e.target.classList.add('passive');
        }
        if (window.innerWidth <= 1140) {
          stageMargin += -70;
          stage.style.marginLeft = `${stageMargin}px`;
        }
        if (window.innerWidth <= 500) {
          stageMargin += -60;
          stage.style.marginLeft = `${stageMargin}px`;
        }
      }
      if (e.target.classList.contains('prev') && counter > 1) {
        counter--;
        newStageItem[counter].classList.remove('active');
        revive(stageTitle, stageInfo.title[counter - 1], milliseconds);
        revive(stageText, stageInfo.text[counter - 1], milliseconds);
        progressBar.style.width = progressBarTrack[counter - 1] + '%';
        if (counter >= 1) {
          e.target.classList.remove('active');
          e.target.classList.add('passive');
        }
        if (window.innerWidth <= 1140) {
          stageMargin += 70;
          stage.style.marginLeft = `${stageMargin}px`;
        }
        if (window.innerWidth <= 500) {
          stageMargin += 60;
          stage.style.marginLeft = `${stageMargin}px`;
        }
      }
      if (counter > 1 && counter < stageItem.length) {

        stageButton.forEach(button => {
          button.classList.remove('passive');
          button.classList.add('active');
        })
      }
    })
  })

  // MODAL PARTFOLIO 

  let modalPartfolio = document.querySelector('.modal__partfolio');
  let cardPartfolio = document.querySelectorAll('.portfolio__item');
  let partfolioClose = document.querySelector('.partfolio__close');
  const addNoScroll = () => document.body.classList.add('no-scroll');
  const removeNoScroll = () => document.body.classList.remove('no-scroll');

  if (modalPartfolio !== null) {
    cardPartfolio.forEach(cardItem => {
      cardItem.addEventListener('click', card => {
        modalPartfolio.classList.add('show');
        addNoScroll();
      })
    });

    partfolioClose.addEventListener('click', () => {
      removeNoScroll()
      modalPartfolio.classList.remove('show');
    })

    modalPartfolio.addEventListener('click', e => {
      e.target.classList.remove('show');
      if (e.target.classList.contains('modal')) {
        removeNoScroll()
      }
    })
  }

  // MODAL SERVICES
  let modalServices = document.querySelector('.modal__services');
  let cardServices = document.querySelectorAll('.services__item');
  let servicesClose = document.querySelectorAll('.services__close');

  if (modalServices !== null) {
    cardServices.forEach(cardItem => {
      cardItem.addEventListener('click', card => {
        modalServices.classList.add('show');
        addNoScroll();
      })
    });


    for (let i = 0; i < servicesClose.length; i++) {

      servicesClose[i].addEventListener('click', () => {
        removeNoScroll()
        modalServices.classList.remove('show');
      })
    }

    modalServices.addEventListener('click', e => {
      e.target.classList.remove('show');
      if (e.target.classList.contains('modal')) {
        removeNoScroll()
      }
    })
  }

  let menuWrapper = document.querySelector('.header__wrapp');
  let menuContactBody = document.querySelector('.contact-body');

  if (window.innerWidth >= 790) {
    const menuFixed = () => {
      if (window.pageYOffset > 110) {
        menuWrapper.classList.add('menu--fixed');
        menuContactBody.classList.add('contact-body--bg')
      } else {
        menuWrapper.classList.remove('menu--fixed');
        menuContactBody.classList.remove('contact-body--bg')
      }
    }
    document.addEventListener('scroll', menuFixed)
    menuFixed();
  }

  // POP-UP-IMAGES

  let popUpImages = document.querySelectorAll('.pop-up-img');

  popUpImages.forEach(point => {
    point.addEventListener('click', (e) => {
      e.preventDefault();
      let popContainer = document.createElement("div");
      let popImage = document.createElement("img");
      let srcImages = point.children[0].children[1].getAttribute('src')
      document.body.append(popContainer);
      popContainer.classList.add('pop-img');
      popContainer.append(popImage);
      popImage.src = srcImages;
      popImage.classList.add('plan__img');
      popImage.classList.add('pop-img__full');
      setTimeout(() => {
        popContainer.classList.add('anim');
        popImage.classList.add('anim');
      }, 100)
      addNoScroll();
      popContainer.addEventListener('click', () => {
        popContainer.classList.remove('anim');
        popImage.classList.remove('anim');
        setTimeout(() => {
          popContainer.remove()
        }, 800)
        removeNoScroll();

      })
    })
  })

  // QUIZ

  let quiz = document.querySelector('.quiz');
  let quizAnimInner = document.querySelectorAll('.quiz__anim-inner');
  let quizInner = document.querySelectorAll('.quiz__contant-inner');
  let quizFirstButton = document.querySelector('.quiz__button--first');
  let quizButtonNext = document.querySelectorAll('.quiz__next');
  let quizButtonPrev = document.querySelectorAll('.quiz__prev');
  let quizFormRoom = document.querySelectorAll('.quiz__form-cout-room');
  let roomInputRadio = document.querySelectorAll('.quiz__input-room-count');
  let inputNum = document.querySelector('.quiz__input-num');
  let inputText = document.querySelector('.quiz__input-text');
  let giftBtn = document.querySelector('.gifts__button');

  let quizPeopleParent = document.querySelector('.quiz__people-item--parent');
  let quizPeopleChildren = document.querySelector('.quiz__people-item--children');
  let quizPeoplePet = document.querySelector('.quiz__people-item--pet');
  let quizPeopleNumber = document.querySelectorAll('.quiz__people-number');
  let lastform = document.querySelector('.quiz__lastform');
  let count = [0, 0, 0];
  let answer = [];

  if (quiz) {
    quizPeopleParent.addEventListener('click', (parent) => {
      if (parent.target.classList.contains('quiz__people-btn-minus')) {
        if (count[0] > 0) {
          count[0]--;
          quizPeopleNumber[0].innerHTML = count[0];
        }
      } else if (parent.target.classList.contains('quiz__people-btn-plus')) {
        if (count[0] >= 0) {
          count[0]++;
          quizPeopleNumber[0].innerHTML = count[0];
        }
      }
    });
    quizPeopleChildren.addEventListener('click', (children) => {
      if (children.target.classList.contains('quiz__people-btn-minus')) {
        if (count[1] > 0) {
          count[1]--;
          quizPeopleNumber[1].innerHTML = count[1];
        }
      } else if (children.target.classList.contains('quiz__people-btn-plus')) {
        if (count[1] >= 0) {
          count[1]++;
          quizPeopleNumber[1].innerHTML = count[1];
        }
      }
    });
    quizPeoplePet.addEventListener('click', (pet) => {
      if (pet.target.classList.contains('quiz__people-btn-minus')) {
        if (count[2] > 0) {
          count[2]--;
          quizPeopleNumber[2].innerHTML = count[2];
        }
      } else if (pet.target.classList.contains('quiz__people-btn-plus')) {
        if (count[2] >= 0) {
          count[2]++;
          quizPeopleNumber[2].innerHTML = count[2];
        }
      }
    });

    quizFirstButton.addEventListener('mouseover', () => {
      quizAnimInner[0].style.transform = 'rotateY(30deg)';
    })
    quizFirstButton.addEventListener('mouseleave', () => {
      quizAnimInner[0].style.transform = '';
    })
    quizFirstButton.addEventListener('click', () => {
      quizAnimInner[0].style.transform = '';
      quizAnimInner[0].classList.add('quiz__coup');
      setTimeout(() => {
        quizAnimInner[1].classList.remove('quiz__passive');
        quizAnimInner[0].classList.add('quiz__passive');
      }, 900);
    })
    quizFormRoom.forEach((form, Formindex) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
      form.addEventListener('change', () => {
        roomInputRadio.forEach((radio, index) => {
          if (radio.checked && radio.name === 'count-room') {
            answer[0] = radio.value;
            quizButtonNext[Formindex].classList.remove('quiz__button--passive');
          }
          if (radio.checked && radio.name === 'newbuild') {
            answer[1] = radio.value;
            quizButtonNext[Formindex].classList.remove('quiz__button--passive');
          }
          if (inputNum.name === 'quiz__input-num') {
            answer[2] = inputNum.value;
            quizButtonNext[Formindex].classList.remove('quiz__button--passive');
          }
          if (inputText.name === 'quiz__input-text') {
            answer[3] = inputText.value;
            quizButtonNext[Formindex].classList.remove('quiz__button--passive');
          }
        })
      })
    })

    quizButtonNext.forEach((quizBtn, quizBtnIndex) => {
      quizBtn.addEventListener('click', () => {
        if (quizBtnIndex <= 4) {
          quizAnimInner[quizBtnIndex + 2].classList.remove('quiz__passive');
          quizAnimInner[quizBtnIndex + 1].classList.add('quiz__passive');
        }
      })
    })
    quizButtonPrev.forEach((quizBtn, quizBtnIndex) => {
      quizBtn.addEventListener('click', () => {
        if (quizBtnIndex <= 4) {
          quizAnimInner[quizBtnIndex + 2].classList.add('quiz__passive');
          quizAnimInner[quizBtnIndex + 1].classList.remove('quiz__passive');
        }
      })
    })
    let quizLastFormInput = document.querySelectorAll('.quiz__input-lastform');
    let quizLastFormInputCheckbox = document.querySelector('.quiz__lastcheckbox');
    let quizLastFormInputCheckboxSpan = document.querySelector('.quiz__lastcheckbox-span');
    lastform.addEventListener('submit', (formEvent) => {
      formEvent.preventDefault();
      let nextlogik = [false, false];
      quizLastFormInput.forEach((item, itemindex) => {
        if (!item.value) {
          item.classList.add('err');
        } else if (!item.value.trim()) {
          item.classList.add('err');
        } else {
          item.classList.remove('err');
          nextlogik[itemindex] = true;
        }
        if (!quizLastFormInputCheckbox.checked) {
          quizLastFormInputCheckboxSpan.classList.add('err');
        }
        if (quizLastFormInputCheckbox.checked) {
          quizLastFormInputCheckboxSpan.classList.remove('err');
        }
        if (quizLastFormInputCheckbox.checked && nextlogik[0] && nextlogik[1]) {
          quiz.classList.add('quiz--hidden');
          quizInner[quizInner.length - 1].classList.add('quiz__contant-inner--hidden');
          removeNoScroll();
          giftBtn.remove();
          localStorage.setItem('gift', '0');
          setTimeout(() => {
            quiz.style.display = 'none';
          }, 800)
          console.log('1. Какое количество комнат в квартире?', answer[0]);
          console.log('2. Новостройка или вторичное жилье?', answer[1]);
          console.log('3. Площадь вашего объекта', answer[2]);
          console.log('4. Введите адрес объекта/название ЖК', answer[3]);
          console.log('5. Укажите Количество проживающих (Сколько человек планирует проживать в квартире?', 'Взрослые');
          console.log('Взрослые', count[0]);
          console.log('Дети', count[1]);
          console.log('Петомцы', count[2]);
          console.log('6. Оставьте, пожалуйста, свои контакты.Это нам нужно для того, чтобы отправить вам планировку.');
          console.log(quizLastFormInput[0].value, 'Имя');
          console.log(quizLastFormInput[1].value, 'телефон');
        }
      })

    })
    let quizClose = document.querySelector('.quiz__close');
    quizClose.addEventListener('click', () => {
      quiz.classList.add('quiz--hidden');
      quizInner[quizInner.length - 1].classList.add('quiz__contant-inner--hidden');
      removeNoScroll();
    })

    giftBtn.addEventListener('click', () => {
      addNoScroll();
      quizInner[quizInner.length - 1].classList.remove('quiz__contant-inner--hidden');
      quiz.classList.remove('quiz--hidden');
    });

    if (localStorage.getItem('gift') === '0') {
      giftBtn.remove();
    }
  }
});

const swiper = new Swiper(".style-slider", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".style__pagination",
    clickable: true,
  },

});
const swipers = new Swiper(".partfolio-slider", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".style__pagination",
    clickable: true,
  },

});
const servicesSwiper = new Swiper(".services", {
  breakpoints: {
    300: {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
      loopedSlides: 4,
      slideActiveClass: 'services__mobile-active'
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
      slideActiveClass: 'services__mobile-active'
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  pagination: {
    el: ".services__pagination",
    clickable: true,
  },
});