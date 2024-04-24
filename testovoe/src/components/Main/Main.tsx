import styles from "./Main.module.scss";
import { createRef } from "react";
import { useState } from "react";
import "./index.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
import Modaly from "../ModalAuth/ModalAuth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Burger from "../Burger/Burger";

const customStyles = {
  content: {
    top: "30%",
    left: "45%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "450px",
    height: "624px",
    scroll: "none",
    transform: "translate(-40%, -10%)",
    background: "rgba(34, 37, 43, 1)",
    border: "17px",
  },
};
interface dat {
  name: string;
  prof: string;
  feedback: string;
  img: string;
  allFeed: string;
}
const data: dat[] = [
  {
    img: "avatar1.png",
    name: "Федот Сергеев",
    prof: "Дизайнер",
    feedback:
      "Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возможно...",
    allFeed:
      "Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возможность создавать и отправлять запросы на выполнение работ, а также следить за своим временем и расходованием ресурсов.",
  },

  {
    img: "avatar2.png",
    name: "Болексей Арисов",
    prof: "Разработчик",
    feedback:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инстру...",
    allFeed:
      "В целом, я считаю, что этот софт для фрилансера - это хороший выбор для тех, кто стремится улучшить свою рабочую эффективность и успешно координировать свои проекты. Он упрощает процессы и облегчает работу, что делает его очень полезным инструментом для фрилансеров.",
  },
  {
    img: "avatar3.png",
    name: "Маман Рамаев",
    prof: "Техлид в РЖД",
    feedback:
      "Благодаря этому софту я смог значительно улучшить свою эффективность и организацию, что, в свою очередь, позволило мне зарабатывать больше денег и удовлетворять потребности моих клиентов. Хорошие функции, такие как автоматизация платежей и напомина...",
    allFeed:
      "Благодаря этому софту я смог значительно улучшить свою эффективность и организацию, что, в свою очередь, позволило мне зарабатывать больше денег и удовлетворять потребности моих клиентов. Хорошие функции, такие как автоматизация платежей и напоминания о задачах, делают его незаменимым инструментом для фрилансеров.",
  },
];

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState<dat | null>(null);
  const openModal = (d: dat) => {
    setCurrentReview(d);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  const [isActive, setActive] = useState(false);
  const [isBurger, setBurger] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const application = createRef<HTMLDivElement>();
  const header = createRef<HTMLDivElement>();
  const toNowMore = createRef<HTMLDivElement>();
  const scrollToRef = () => {
    if (application.current) {
      application.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHeader = () => {
    if (header.current) {
      header.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToMore = () => {
    if (toNowMore.current) {
      toNowMore.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Modaly isActive={isActive} setActive={setActive} />
        <div ref={header} className={styles.navigate}>
          <a className={styles.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="153"
              height="48"
              viewBox="0 0 153 48"
              fill="none"
            >
              <path
                d="M93.3838 38.3998V18.1627H98.0689V38.3998H93.3838Z"
                fill="white"
              />
              <path
                d="M95.7275 15.8202C95.2916 15.8202 94.8978 15.7569 94.5463 15.6297C94.176 15.4955 93.8525 15.2905 93.576 15.0139C93.0392 14.4766 92.7697 13.7723 92.7697 12.9022C92.7697 12.7452 92.7791 12.5934 92.7978 12.4469C92.8166 12.2993 92.8471 12.1575 92.8869 12.0209C93.0182 11.5633 93.2596 11.1655 93.6135 10.8286C94.1783 10.2655 94.8814 9.98364 95.7275 9.98364C96.5455 9.98364 97.2486 10.2526 97.8392 10.7899C98.4275 11.3278 98.7228 12.0315 98.7228 12.9022C98.7228 13.7723 98.4392 14.4766 97.8767 15.0139C97.3142 15.5518 96.597 15.8202 95.7275 15.8202Z"
                fill="white"
              />
              <path
                d="M124.867 11.251V38.3998H129.552V30.3742H132.74L138.154 38.3998H143.606L136.502 27.8014L143.069 18.1627H137.807L132.47 26.2656H129.552V11.251H124.867Z"
                fill="white"
              />
              <path
                d="M102.227 18.1627V38.3998H106.912V28.6844C106.912 27.4299 107.104 26.3166 107.488 25.344C107.87 24.3455 108.447 23.5516 109.216 22.9627C109.985 22.3738 110.917 22.0797 112.019 22.0797C112.408 22.0797 112.764 22.1113 113.088 22.1746C113.505 22.2561 113.866 22.3908 114.168 22.5789C114.707 22.9117 115.117 23.3594 115.399 23.9231C115.488 24.0854 115.567 24.2535 115.638 24.4287C115.67 24.5078 115.701 24.5881 115.729 24.6695C115.774 24.7973 115.816 24.9279 115.851 25.0621C115.919 25.3111 115.973 25.5713 116.013 25.8426C116.116 26.534 116.165 27.2506 116.165 27.9936V38.3998H120.85V27.2254C120.85 25.4846 120.62 23.9102 120.159 22.5022C119.699 21.0942 118.905 19.9674 117.78 19.1231C117.133 18.6262 116.343 18.2752 115.41 18.0707C115.213 18.0268 115.009 17.9899 114.799 17.9594L114.588 17.9325C114.166 17.8815 113.718 17.8557 113.247 17.8557C112.556 17.8557 111.815 17.9582 111.02 18.1627C110.655 18.2448 110.299 18.3514 109.952 18.4826C109.542 18.6367 109.143 18.8248 108.754 19.0463C108.569 19.1518 108.391 19.2672 108.217 19.3926C108.013 19.542 107.817 19.7061 107.629 19.8842C107.36 20.1385 107.109 20.4221 106.872 20.7356L106.605 18.1627H102.227Z"
                fill="white"
              />
              <path
                d="M71.9995 11.251V38.3998H90.9299V34.0223H76.7994V11.251H71.9995Z"
                fill="white"
              />
              <path
                d="M9.59961 11.9998H14.3996V38.3998H9.59961V11.9998Z"
                fill="white"
              />
              <path
                d="M38.3995 33.5998V38.3998H64.7995V33.5998H38.3995Z"
                fill="white"
              />
              <path
                d="M16.7996 11.9998H21.5996V38.3998H16.7996V11.9998Z"
                fill="white"
              />
              <path
                d="M38.3995 26.3998V31.1998H64.7995V26.3998H38.3995Z"
                fill="white"
              />
              <path
                d="M23.9996 11.9998H28.7996V38.3998H23.9996V11.9998Z"
                fill="white"
              />
              <path
                d="M38.3995 19.1998V23.9998H64.7995V19.1998H38.3995Z"
                fill="white"
              />
              <path
                d="M31.1996 11.9998H35.9995V38.3998H31.1996V11.9998Z"
                fill="white"
              />
              <path
                d="M38.3995 11.9998V16.7998H64.7995V11.9998H38.3995Z"
                fill="white"
              />
            </svg>
          </a>
          <nav className={styles.nav__links}>
            <a className={styles.navlink}>Преимущества</a>
            <a className={styles.navlink}>Продукт</a>
            <a className={styles.navlink}>Галерея</a>
            <a className={styles.navlink}>Партнеры</a>
            <a className={styles.navlink}>Отзывы</a>
          </nav>
          <button
            onClick={() => setActive(true)}
            className={styles.enter__button}
          >
            Войти
          </button>
          <button onClick={() => setBurger(true)} className={styles.burgerMenu}>
            <img src="burger.png" alt="" />
          </button>
          <Burger isBurger={isBurger} setBurger={setBurger} />
        </div>
      </header>
      <section className={styles.top__content}>
        <div className={styles.top__text}>
          <h1 className={styles.top__h}>
            Работайте быстрее
            <br />
            скорости мысли
          </h1>
          <p className={styles.top__p}>
            Большинство календарей предназначены для команд. Link <br />
            предназначен для фрилансеров, которым нужен простой <br />
            способ планирования своего расписания
          </p>
        </div>
        <div className={styles.top__buttons}>
          <button onClick={scrollToRef} className={styles.try__free}>
            Попробовать бесплатно
          </button>
          <button onClick={scrollToMore} className={styles.to__know__more}>
            Узнать больше
          </button>
        </div>
        <div className={styles.dashboard}>
          <picture>
            <source srcSet="frame2.png" media="(max-width: 375px)" />
            <img className={styles.topImg} src="dashboard.png" />
          </picture>
        </div>
      </section>
      <section>
        <div className={styles.advantageSection}>
          <div ref={toNowMore} className={styles.advantageSectionTop}>
            <h1 className={styles.adH1}> Преимущества</h1>
            <p className={styles.adtop}>
              Link предназначен для фрилансеров, которым нужен <br /> простой
              способ планирования своего расписания
            </p>
          </div>
          <div className={styles.advantages}>
            <img className={styles.advantagesPicture} src="picture2.png"></img>
            <div className={styles.advantagesUl}>
              <div className={styles.advantagesLi}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6668 4.1333C5.58578 4.1333 1.4668 8.25228 1.4668 13.3333C1.4668 18.4143 5.58578 22.5333 10.6668 22.5333H12.211C12.1599 22.1405 12.1335 21.74 12.1335 21.3333C12.1335 16.2523 16.2524 12.1333 21.3335 12.1333C24.9809 12.1333 28.1326 14.2559 29.6207 17.3333C30.2056 16.1238 30.5335 14.7668 30.5335 13.3333C30.5335 8.25228 26.4145 4.1333 21.3335 4.1333H10.6668Z"
                    fill="#02E4C0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.3335 14.8C17.7252 14.8 14.8001 17.725 14.8001 21.3333C14.8001 24.9416 17.7252 27.8666 21.3335 27.8666C22.704 27.8666 23.976 27.4446 25.0265 26.7234L28.4849 30.1818C28.9536 30.6505 29.7134 30.6505 30.182 30.1818C30.6506 29.7132 30.6506 28.9534 30.182 28.4848L26.7236 25.0264C27.4448 23.9758 27.8668 22.7038 27.8668 21.3333C27.8668 17.725 24.9417 14.8 21.3335 14.8ZM24.8487 19.1514C25.3173 19.6201 25.3173 20.3799 24.8487 20.8485L21.5153 24.1818C21.2903 24.4069 20.9851 24.5333 20.6668 24.5333C20.3485 24.5333 20.0433 24.4069 19.8183 24.1818L17.8183 22.1818C17.3496 21.7132 17.3496 20.9534 17.8183 20.4848C18.2869 20.0161 19.0467 20.0161 19.5153 20.4848L20.6668 21.6362L23.1516 19.1514C23.6202 18.6828 24.38 18.6828 24.8487 19.1514Z"
                    fill="#02E4C0"
                  />
                </svg>

                <div className={styles.advantagesLiText}>
                  <h4 className={styles.adH}>Единый источник истины</h4>
                  <p className={styles.adP}>
                    Когда вы добавляете работу в свой <br></br> календарь Link,
                    мы автоматически <br></br> вычисляем полезные сведения
                  </p>
                </div>
              </div>
              <div className={styles.advantagesLi}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25276 2.80005C8.06459 2.8 7.05395 2.79995 6.24743 2.90839C5.3882 3.02391 4.58322 3.28193 3.93258 3.93258C3.28193 4.58322 3.02391 5.3882 2.90839 6.24743C2.79995 7.05395 2.8 8.06453 2.80005 9.25269L2.80006 9.33339C2.80006 9.99613 3.33731 10.5334 4.00006 10.5334H28.0001C28.6628 10.5334 29.2001 9.99613 29.2001 9.33339V9.25276C29.2001 8.0646 29.2002 7.05395 29.0917 6.24743C28.9762 5.3882 28.7182 4.58322 28.0675 3.93258C27.4169 3.28193 26.6119 3.02391 25.7527 2.90839C24.9462 2.79995 23.9356 2.8 22.7474 2.80005H9.25276Z"
                    fill="#02E4C0"
                  />
                  <path
                    d="M4.00006 13.4667C3.33731 13.4667 2.80006 14.004 2.80006 14.6667L2.80005 22.7473C2.8 23.9355 2.79995 24.9462 2.90839 25.7527C3.02391 26.6119 3.28193 27.4169 3.93258 28.0675C4.58322 28.7182 5.3882 28.9762 6.24743 29.0917C7.05394 29.2002 8.06449 29.2001 9.25263 29.2001L9.33339 29.2C9.99613 29.2 10.5334 28.6628 10.5334 28V14.6667C10.5334 14.004 9.99613 13.4667 9.33339 13.4667H4.00006Z"
                    fill="#02E4C0"
                  />
                  <path
                    d="M14.6667 13.4667C14.004 13.4667 13.4667 14.004 13.4667 14.6667V28C13.4667 28.6628 14.004 29.2 14.6667 29.2L22.7474 29.2001C23.9355 29.2001 24.9462 29.2002 25.7527 29.0917C26.6119 28.9762 27.4169 28.7182 28.0675 28.0675C28.7182 27.4169 28.9762 26.6119 29.0917 25.7527C29.2002 24.9462 29.2001 23.9356 29.2001 22.7475L29.2001 14.6667C29.2001 14.004 28.6628 13.4667 28.0001 13.4667H14.6667Z"
                    fill="#02E4C0"
                  />
                </svg>

                <div className={styles.advantagesLiText}>
                  <h4 className={styles.adH}>Без ограничений</h4>
                  <p className={styles.adP}>
                    Когда вы добавляете работу в свой <br></br> календарь Link,
                    мы автоматически <br></br> вычисляем полезные сведения
                  </p>
                </div>
              </div>
              <div className={styles.advantagesLi}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25276 2.80005H22.7474C23.9356 2.8 24.9462 2.79996 25.7527 2.90839C26.6119 3.02391 27.4169 3.28193 28.0675 3.93258C28.7182 4.58323 28.9762 5.3882 29.0917 6.24744C29.2002 7.05396 29.2001 8.06457 29.2001 9.25274V22.7474C29.2001 23.9355 29.2002 24.9462 29.0917 25.7527C28.9762 26.6119 28.7182 27.4169 28.0675 28.0675C27.4169 28.7182 26.6119 28.9762 25.7527 29.0917C24.9462 29.2002 23.9355 29.2001 22.7474 29.2001H9.25274C8.06457 29.2001 7.05396 29.2002 6.24744 29.0917C5.3882 28.9762 4.58323 28.7182 3.93258 28.0675C3.28193 27.4169 3.02391 26.6119 2.90839 25.7527C2.89678 25.6663 2.88642 25.5777 2.87716 25.4867L10.0001 18.3638L12.4849 20.8486C12.9535 21.3172 13.7133 21.3172 14.1819 20.8486L21.4667 13.5638V16.0001C21.4667 16.6628 22.004 17.2001 22.6667 17.2001C23.3295 17.2001 23.8667 16.6628 23.8667 16.0001V10.6667C23.8667 10.5034 23.8341 10.3478 23.7751 10.2059C23.7179 10.0683 23.634 9.93917 23.5234 9.82644L23.5071 9.81012C23.394 9.69905 23.2642 9.61492 23.126 9.55774C22.9845 9.49909 22.8294 9.46672 22.6667 9.46672H17.3334C16.6707 9.46672 16.1334 10.004 16.1334 10.6667C16.1334 11.3295 16.6707 11.8667 17.3334 11.8667H19.7697L13.3334 18.303L10.8486 15.8182C10.38 15.3496 9.62017 15.3496 9.15154 15.8182L2.80005 22.1697V9.25269C2.8 8.06456 2.79996 7.05394 2.90839 6.24744C3.02391 5.3882 3.28193 4.58323 3.93258 3.93258C4.58323 3.28193 5.3882 3.02391 6.24744 2.90839C7.05394 2.79996 8.06462 2.8 9.25276 2.80005Z"
                    fill="#02E4C0"
                  />
                </svg>

                <div className={styles.advantagesLiText}>
                  <h4 className={styles.adH}>Постоянная поддержка</h4>
                  <p className={styles.adP}>
                    Когда вы добавляете работу в свой <br></br> календарь Link,
                    мы автоматически <br></br> вычисляем полезные сведения
                  </p>
                </div>
              </div>
              <div className={styles.advantagesLi}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6662 2.79987C14.7182 2.7952 12.7981 3.25237 11.0594 4.13059C8.97928 5.17097 7.23064 6.76705 6.00732 8.74518C4.78381 10.7236 4.1337 13.005 4.13232 15.3311C4.12938 16.4563 4.28074 17.5714 4.57763 18.6488C4.88721 19.7724 5.03287 20.4768 5.0748 20.6795C5.08374 20.7228 5.08796 20.7432 5.08805 20.74C5.08486 20.8602 4.98985 21.2351 4.69221 22.128L2.86148 27.6202C2.79094 27.8316 2.78068 28.0586 2.83188 28.2756C2.88307 28.4925 2.99368 28.6909 3.15131 28.8486C3.30895 29.0062 3.50737 29.1168 3.72434 29.168C3.94131 29.2192 4.16824 29.209 4.37971 29.1384L9.87191 27.3077C10.765 27.01 11.14 26.915 11.2599 26.9118C11.2566 26.9119 11.2774 26.9162 11.3216 26.9254C11.526 26.9677 12.23 27.1134 13.3511 27.4223C14.4287 27.7192 15.5437 27.8705 16.6688 27.8676C18.9949 27.8662 21.2763 27.2161 23.2547 25.9926C25.2334 24.769 26.8315 23.0212 27.8719 20.9405V20.938C28.7499 19.199 29.205 17.2791 29.2 15.3312V14.6671C29.1997 14.6454 29.1988 14.6237 29.1974 14.602C29.0278 11.5282 27.7309 8.62248 25.5541 6.4457C23.3773 4.26891 20.4716 2.97205 17.3979 2.80247C17.3762 2.80099 17.3545 2.8001 17.3328 2.7998H16.6687L16.6662 2.79987ZM11.1506 12.4848C11.3758 12.2596 11.6811 12.1331 11.9995 12.1331H21.3328C21.6512 12.1331 21.9566 12.2596 22.1817 12.4848C22.4069 12.7099 22.5334 13.0153 22.5334 13.3337C22.5334 13.6521 22.4069 13.9574 22.1817 14.1826C21.9566 14.4077 21.6512 14.5342 21.3328 14.5342H11.9995C11.6811 14.5342 11.3758 14.4077 11.1506 14.1826C10.9255 13.9574 10.799 13.6521 10.799 13.3337C10.799 13.0153 10.9255 12.7099 11.1506 12.4848ZM11.1506 17.8181C11.3758 17.593 11.6811 17.4665 11.9995 17.4665H17.3328C17.6512 17.4665 17.9566 17.593 18.1817 17.8181C18.4069 18.0432 18.5334 18.3486 18.5334 18.667C18.5334 18.9854 18.4069 19.2907 18.1817 19.5159C17.9566 19.741 17.6512 19.8675 17.3328 19.8675H11.9995C11.6811 19.8675 11.3758 19.741 11.1506 19.5159C10.9255 19.2907 10.799 18.9854 10.799 18.667C10.799 18.3486 10.9255 18.0432 11.1506 17.8181Z"
                    fill="#02E4C0"
                  />
                </svg>

                <div className={styles.advantagesLiText}>
                  <h4 className={styles.adH}>Интуитивный интерфейс</h4>
                  <p className={styles.adP}>
                    Когда вы добавляете работу в свой <br></br> календарь Link,
                    мы автоматически <br></br> вычисляем полезные сведения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.product}>
        <h1 className={styles.productH1}> Продукт</h1>
        <p className={styles.producttop}>
          Мы уделяем особое внимание эргономике <br></br> и стараемся
          соответствовать месту работы
        </p>
        <div className={styles.items}>
          <div className={styles.item}>
            <h3 className={styles.itemH3}>Работа</h3>
            <p className={styles.itemP}>
              Вы когда-нибудь задумывались о том, не <br></br> слишком ли вы
              зависите от клиента в работе?<br></br> Link поможет вам
              определиться
            </p>
            <button className={styles.itemButton}> Регистрация </button>
            <img className={styles.itemImg} src="Macbook Pro.png" alt="" />
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemH3}>Дизайн с реальными данными</h3>
            <p className={styles.itemP}>
              Вы когда-нибудь задумывались о том, не <br></br> слишком ли вы
              зависите от клиента в работе?<br></br> Link поможет вам
              определиться
            </p>
            <button onClick={scrollToRef} className={styles.itemButton}>
              Попробовать бесплатно
            </button>
            <img
              className={styles.itemImg}
              src="Boards Notifications.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.galery}>
        <h1 className={styles.productH1}> Галерея</h1>
        <p className={styles.producttop}>
          Мы уделяем особое внимание эргономике <br></br> и стараемся
          соответствовать месту работы
        </p>
        <div className={styles.pictures}>
          <div className={styles.picturesRow}>
            <img className={styles.picture} src="cosmo.png" alt="" />
            <img className={styles.picture} src="sand.png" alt="" />
            <img className={styles.picture} src="flowers.png" alt="" />
            <img className={styles.picture} src="sea.png" alt="" />
          </div>
          <div className={styles.picturesRow}>
            <img className={styles.picture} src="forest.png" alt="" />
            <img className={styles.picture} src="delivery.png" alt="" />
            <img className={styles.picture} src="mac.png" alt="" />
          </div>
        </div>
        <button className={styles.watchMore}> Смотреть еще </button>
      </section>
      <section className={styles.partners}>
        <h1 className={styles.productH1}> Партнеры</h1>
        <p className={styles.producttop}>
          Мы уделяем особое внимание эргономике <br></br> и стараемся
          соответствовать месту работы
        </p>
        <div className={styles.brands}>
          <img className={styles.brandPicture} src="appstore.png" alt="" />
          <img className={styles.brandPicture} src="api.png" alt="" />
          <img className={styles.brandPicture} src="android.png" alt="" />
          <img className={styles.brandPicture} src="camp.png" alt="" />
          <img className={styles.brandPicture} src="bnb.png" alt="" />
          <img className={styles.brandPicture} src="blender.png" alt="" />
          <img className={styles.brandPicture} src="ibm.png" alt="" />
        </div>
      </section>
      <section className={styles.slider}>
        <div className={styles.feedbackTop}>
          <h1 className={styles.productH1}> Отзывы</h1>
        </div>
        <div className={styles.feedbacksection}>
          <Slider {...settings}>
            {data.map((d: dat) => (
              <div className={styles.feedback}>
                <div className={styles.userInform}>
                  <img className={styles.userImg} src={d.img} alt="" />
                  <div className={styles.user}>
                    <h4 className={styles.userName}>{d.name}</h4>
                    <p className={styles.userProf}>{d.prof}</p>
                  </div>
                </div>
                <div className={styles.fbText}>{d.feedback}</div>
                <button
                  onClick={() => openModal(d)}
                  className={styles.fbButton}
                >
                  Показать ещё
                </button>
              </div>
            ))}
          </Slider>
        </div>
        {currentReview && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className={styles.modal}>
              <button className={styles.exitModal} onClick={closeModal}>
                <img className={styles.exitModalImg} src="exit.png"></img>
              </button>
              <div className={styles.userInform}>
                <img
                  className={styles.userImg}
                  src={currentReview.img}
                  alt=""
                />
                <div className={styles.user}>
                  <h4 className={styles.userName}>{currentReview.name}</h4>
                  <p className={styles.userProf}>{currentReview.prof}</p>
                </div>
              </div>
              <div className={styles.fbText}>{currentReview.allFeed}</div>
            </div>
          </Modal>
        )}
      </section>
      <section className={styles.applicationSection}>
        <div ref={application} className={styles.application}>
          <picture>
            <source srcSet="max375.png" media="(max-width: 375px)" />
            <img src="applic.png" alt="" />
          </picture>

          <div className={styles.form}>
            <div className={styles.inputDiv}>
              <label className={styles.label}>Ваше имя</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Иван"
              ></input>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.label}>Номер телефона</label>
              <input
                className={styles.input}
                type="tel"
                placeholder="+7 000 000-00-00"
              ></input>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.label}>E-mail</label>
              <input
                className={styles.input}
                type="email"
                placeholder="example@email.com"
              ></input>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.label}>Комментарий к заявке</label>
              <input
                className={styles.inputComment}
                type="text"
                placeholder="Здравствуйте, хотелось бы..."
              ></input>
            </div>
            <div className={styles.confidensial}>
              <p className={styles.confidensialP}>
                Нажимая «Отправить» вы соглашаетесь с{" "}
              </p>

              <a className={styles.docs} href="">
                политикой конфиденциальности
              </a>
            </div>
            <button className={styles.try__free}>Отправить</button>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.FooterUl}>
            <h4 className={styles.FooterH}>Link</h4>
            <a className={styles.FooterLi}>Преимущества</a>
            <a className={styles.FooterLi}>Продукт</a>
            <a className={styles.FooterLi}>Галерея</a>
            <a className={styles.FooterLi}>Партнеры</a>
            <a className={styles.FooterLi}>Отзывы</a>
            <a className={styles.FooterLi}>Заявка</a>
          </div>
          <div className={styles.FooterUl}>
            <h4 className={styles.FooterH}>Миссия</h4>
            <a className={styles.FooterLi}>Повествование</a>
            <a className={styles.FooterLi}>Роадмеп</a>
            <a className={styles.FooterLi}>Релизы</a>
            <a className={styles.FooterLi}>Календарь</a>
            <a className={styles.FooterLi}>Сторибук</a>
            <a className={styles.FooterLi}>Художка</a>
          </div>
          <div className={styles.FooterUl}>
            <h4 className={styles.FooterH}>Ресурсы</h4>
            <a className={styles.FooterLi}>Для инвесторов</a>
            <a className={styles.FooterLi}>Вайтлист</a>
            <a className={styles.FooterLi}>Прайслист</a>
            <a className={styles.FooterLi}>Презентация</a>
            <a className={styles.FooterLi}>Файлы</a>
          </div>
          <div className={styles.FooterUl}>
            <h4 className={styles.FooterH}>О нас</h4>
            <a className={styles.FooterLi}>История компании</a>
            <a className={styles.FooterLi}>Об основателе</a>
            <a className={styles.FooterLi}>Наша команда</a>
            <a className={styles.FooterLi}>Вакансии</a>
          </div>
          <div className={styles.contacts}>
            <a className={styles.contact}>
              г. Москва, ул Пушкина, д. Колотушкина 37,<br></br> каб. 142, дверь
              справа
            </a>
            <a className={styles.contact}>+7 999 123-45-67</a>
            <a className={styles.contact}>example@example.com</a>
            <div className={styles.socialIcons}>
              <a href="https://vk.com/feed">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3278 33.1812C15.6984 33.1812 10.2079 26.5927 9.98267 15.6117H14.8255C14.9804 23.6644 18.5281 27.0713 21.3437 27.7752V15.6117H25.891V22.5523C28.6643 22.2566 31.5926 19.089 32.5781 15.5977H37.1112C36.7416 17.405 36.0032 19.1166 34.9423 20.6257C33.8813 22.1348 32.5206 23.4089 30.945 24.3683C32.7033 25.2435 34.256 26.4814 35.5009 28.0005C36.7458 29.5196 37.6545 31.2853 38.1671 33.1812H33.1694C32.0994 29.8447 29.4246 27.2543 25.891 26.9024V33.1812H25.3419H25.3278Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://web.telegram.org/a/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0514 23.2051L27.729 16.477C29.3753 15.7762 34.9585 13.5336 34.9585 13.5336C34.9585 13.5336 37.5354 12.5525 37.3205 14.9352C37.2489 15.9162 36.6766 19.3505 36.1037 23.0646L34.3144 34.0676C34.3144 34.0676 34.1712 35.6795 32.9523 35.9598C31.7334 36.2401 29.7313 34.9787 29.3736 34.6983C29.0874 34.4881 24.0053 31.3343 22.1442 29.7925C21.6431 29.3722 21.0706 28.5309 22.2158 27.5499C24.7926 25.2371 27.8706 22.3636 29.7313 20.5415C30.5903 19.7005 31.4492 17.7381 27.8704 20.1212L17.778 26.7792C17.778 26.7792 16.6326 27.48 14.4854 26.8493C12.3382 26.2186 9.83295 25.3776 9.83295 25.3776C9.83295 25.3776 8.11504 24.3264 11.0498 23.2053L11.0514 23.2051Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9626 15.2157C9.48601 16.7197 9.44145 18.6152 9.35234 22.4062C9.34007 22.9279 9.33325 23.4606 9.33325 24.0002C9.33325 24.5397 9.34007 25.0724 9.35234 25.5941C9.44145 29.3851 9.48601 31.2806 10.9626 32.7846C12.4391 34.2886 14.4319 34.3721 18.4173 34.5392C20.2133 34.6145 22.1328 34.6668 23.9999 34.6668C25.8671 34.6668 27.7865 34.6145 29.5825 34.5392C33.568 34.3721 35.5607 34.2886 37.0373 32.7846C38.5138 31.2806 38.5584 29.3851 38.6475 25.5941C38.6598 25.0724 38.6666 24.5397 38.6666 24.0002C38.6666 23.4606 38.6598 22.9279 38.6475 22.4062C38.5584 18.6152 38.5138 16.7197 37.0373 15.2157C35.5607 13.7117 33.568 13.6282 29.5825 13.4611C27.7865 13.3858 25.8671 13.3335 23.9999 13.3335C22.1328 13.3335 20.2133 13.3858 18.4173 13.4611C14.4319 13.6282 12.4391 13.7117 10.9626 15.2157ZM19.9999 29.3335L29.3333 24.0002L19.9999 18.6668V29.3335Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://dzen.ru/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.0193 23.3509H38.0122C26.0026 23.2197 24.7636 19.3816 24.6522 9.98898C24.6503 9.80786 24.7245 9.63442 24.8577 9.51154C24.9908 9.38802 25.1713 9.32978 25.3505 9.34386C32.4186 9.9877 38.0141 15.5851 38.6567 22.6527C38.6727 22.8331 38.6119 23.0117 38.489 23.1448C38.3681 23.276 38.1978 23.3509 38.0193 23.3509Z"
                    fill="white"
                  />
                  <path
                    d="M24.6529 38.0107C24.7642 28.618 26.0026 24.78 38.0122 24.6488C38.1933 24.6558 38.3655 24.7217 38.489 24.8548C38.6125 24.988 38.6727 25.1665 38.6567 25.347C38.0148 32.4152 32.4193 38.012 25.3511 38.6558C25.3319 38.6577 25.3121 38.6584 25.2929 38.6584C25.1329 38.6584 24.9773 38.5976 24.8583 38.4881C24.7252 38.3652 24.6509 38.1918 24.6529 38.0107Z"
                    fill="white"
                  />
                  <path
                    d="M22.6067 9.34696C15.561 10.0094 9.98337 15.6055 9.34401 22.6538C9.32801 22.8343 9.38817 23.0129 9.51169 23.146C9.63265 23.2772 9.80353 23.3514 9.98145 23.3514H9.98913C21.959 23.2138 23.1949 19.3777 23.3075 9.99144C23.3094 9.81032 23.2346 9.63624 23.1014 9.51336C22.967 9.39048 22.7872 9.33032 22.6067 9.34696Z"
                    fill="white"
                  />
                  <path
                    d="M9.51102 24.8536C9.63326 24.7205 9.78942 24.6257 9.98846 24.6481C21.959 24.7857 23.1942 28.6219 23.3069 38.0075C23.3088 38.1886 23.2339 38.3627 23.1008 38.4856C22.9817 38.595 22.8269 38.6552 22.6669 38.6552C22.647 38.6552 22.6265 38.6545 22.6067 38.6526C15.5609 37.9902 9.9827 32.3941 9.34334 25.3457C9.32734 25.1653 9.38814 24.9867 9.51102 24.8536Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerCopmany}>
            <svg
              width="153"
              height="48"
              viewBox="0 0 153 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93.3838 38.3995V18.1625H98.0689V38.3995H93.3838Z"
                fill="white"
              />
              <path
                d="M95.7275 15.8199C95.2916 15.8199 94.8978 15.7566 94.5463 15.6295C94.176 15.4953 93.8525 15.2902 93.576 15.0137C93.0392 14.4764 92.7697 13.7721 92.7697 12.9019C92.7697 12.7449 92.7791 12.5932 92.7978 12.4467C92.8166 12.299 92.8471 12.1572 92.8869 12.0207C93.0182 11.5631 93.2596 11.1652 93.6135 10.8283C94.1783 10.2652 94.8814 9.9834 95.7275 9.9834C96.5455 9.9834 97.2486 10.2523 97.8392 10.7896C98.4275 11.3275 98.7228 12.0312 98.7228 12.9019C98.7228 13.7721 98.4392 14.4764 97.8767 15.0137C97.3142 15.5515 96.597 15.8199 95.7275 15.8199Z"
                fill="white"
              />
              <path
                d="M124.867 11.2508V38.3995H129.552V30.374H132.74L138.154 38.3995H143.606L136.502 27.8011L143.069 18.1625H137.807L132.47 26.2654H129.552V11.2508H124.867Z"
                fill="white"
              />
              <path
                d="M102.227 18.1625V38.3995H106.912V28.6841C106.912 27.4296 107.104 26.3164 107.488 25.3437C107.87 24.3453 108.447 23.5513 109.216 22.9625C109.985 22.3736 110.917 22.0795 112.019 22.0795C112.408 22.0795 112.764 22.1111 113.088 22.1744C113.505 22.2558 113.866 22.3906 114.168 22.5787C114.707 22.9115 115.117 23.3591 115.399 23.9228C115.488 24.0851 115.567 24.2533 115.638 24.4285C115.67 24.5076 115.701 24.5879 115.729 24.6693C115.774 24.797 115.816 24.9277 115.851 25.0619C115.919 25.3109 115.973 25.5711 116.013 25.8423C116.116 26.5337 116.165 27.2503 116.165 27.9933V38.3995H120.85V27.2252C120.85 25.4843 120.62 23.9099 120.159 22.5019C119.699 21.0939 118.905 19.9672 117.78 19.1228C117.133 18.626 116.343 18.275 115.41 18.0705C115.213 18.0265 115.009 17.9896 114.799 17.9592L114.588 17.9322C114.166 17.8812 113.718 17.8554 113.247 17.8554C112.556 17.8554 111.815 17.958 111.02 18.1625C110.655 18.2445 110.299 18.3512 109.952 18.4824C109.542 18.6365 109.143 18.8246 108.754 19.0461C108.569 19.1515 108.391 19.267 108.217 19.3924C108.013 19.5418 107.817 19.7058 107.629 19.884C107.36 20.1383 107.109 20.4218 106.872 20.7353L106.605 18.1625H102.227Z"
                fill="white"
              />
              <path
                d="M71.9995 11.2508V38.3995H90.9299V34.022H76.7994V11.2508H71.9995Z"
                fill="white"
              />
              <path
                d="M9.59961 11.9996H14.3996V38.3995H9.59961V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 33.5996V38.3995H64.7995V33.5996H38.3995Z"
                fill="white"
              />
              <path
                d="M16.7996 11.9996H21.5996V38.3995H16.7996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 26.3996V31.1996H64.7995V26.3996H38.3995Z"
                fill="white"
              />
              <path
                d="M23.9996 11.9996H28.7996V38.3995H23.9996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 19.1996V23.9996H64.7995V19.1996H38.3995Z"
                fill="white"
              />
              <path
                d="M31.1996 11.9996H35.9995V38.3995H31.1996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 11.9996V16.7996H64.7995V11.9996H38.3995Z"
                fill="white"
              />
            </svg>
            <p className={styles.footerDoc}>ООО «Пример компании», 2020–2023</p>
          </div>
          <div className={styles.footerDocs}>
            <a className={styles.footerDoc}>Политика конфиденциальности</a>
            <a className={styles.footerDoc}>Публичная оферта</a>
          </div>
          <button onClick={scrollToHeader} className={styles.arrive}>
            Вернуться наверх
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3637 5.3637C11.7152 5.01223 12.285 5.01223 12.6365 5.3637L18.6365 11.3637C18.988 11.7152 18.988 12.285 18.6365 12.6365C18.285 12.988 17.7152 12.988 17.3637 12.6365L12.9001 8.17289V18.0001C12.9001 18.4972 12.4972 18.9001 12.0001 18.9001C11.503 18.9001 11.1001 18.4972 11.1001 18.0001V8.17289L6.63649 12.6365C6.28502 12.988 5.71517 12.988 5.3637 12.6365C5.01223 12.285 5.01223 11.7152 5.3637 11.3637L11.3637 5.3637Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className={styles.fotterMobile}>
        <div className={styles.fotterMobileUL}>
          <div className={styles.fotterMobileLi}>
            <p className={styles.fotterLiBold}>Link</p>
            <img className={styles.row} src="chev.png"></img>
          </div>
          <div>
            <p className={styles.fotterLi}>Преимущества</p>
          </div>
          <div>
            <p className={styles.fotterLi}>Продукт</p>
          </div>
          <div>
            <p className={styles.fotterLi}>Галерея</p>
          </div>
          <div>
            <p className={styles.fotterLi}>Партнеры</p>
          </div>
          <div>
            <p className={styles.fotterLi}>Отзывы</p>
          </div>
          <div>
            <p className={styles.fotterLi}>Заявка</p>
          </div>
          <div className={styles.fotterMobileLi}>
            <p className={styles.fotterLiBold}>Миссия</p>
            <img className={styles.row} src="chevd.svg"></img>
          </div>
          <div className={styles.fotterMobileLi}>
            <p className={styles.fotterLiBold}>Заявка</p>
            <img className={styles.row} src="chevd.svg"></img>
          </div>
          <div className={styles.fotterMobileLi}>
            <p className={styles.fotterLiBold}>О нас</p>
            <img className={styles.row} src="chevd.svg"></img>
          </div>
        </div>
        <div className={styles.contacts}>
          <a className={styles.contact}>
            г. Москва, ул Пушкина, д. Колотушкина 37,<br></br> каб. 142, дверь
            справа
          </a>
          <a className={styles.contact}>+7 999 123-45-67</a>
          <a className={styles.contact}>example@example.com</a>
          <div className={styles.social}>
            <svg
              className={styles.footerLogo}
              width="153"
              height="48"
              viewBox="0 0 153 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93.3838 38.3995V18.1625H98.0689V38.3995H93.3838Z"
                fill="white"
              />
              <path
                d="M95.7275 15.8199C95.2916 15.8199 94.8978 15.7566 94.5463 15.6295C94.176 15.4953 93.8525 15.2902 93.576 15.0137C93.0392 14.4764 92.7697 13.7721 92.7697 12.9019C92.7697 12.7449 92.7791 12.5932 92.7978 12.4467C92.8166 12.299 92.8471 12.1572 92.8869 12.0207C93.0182 11.5631 93.2596 11.1652 93.6135 10.8283C94.1783 10.2652 94.8814 9.9834 95.7275 9.9834C96.5455 9.9834 97.2486 10.2523 97.8392 10.7896C98.4275 11.3275 98.7228 12.0312 98.7228 12.9019C98.7228 13.7721 98.4392 14.4764 97.8767 15.0137C97.3142 15.5515 96.597 15.8199 95.7275 15.8199Z"
                fill="white"
              />
              <path
                d="M124.867 11.2508V38.3995H129.552V30.374H132.74L138.154 38.3995H143.606L136.502 27.8011L143.069 18.1625H137.807L132.47 26.2654H129.552V11.2508H124.867Z"
                fill="white"
              />
              <path
                d="M102.227 18.1625V38.3995H106.912V28.6841C106.912 27.4296 107.104 26.3164 107.488 25.3437C107.87 24.3453 108.447 23.5513 109.216 22.9625C109.985 22.3736 110.917 22.0795 112.019 22.0795C112.408 22.0795 112.764 22.1111 113.088 22.1744C113.505 22.2558 113.866 22.3906 114.168 22.5787C114.707 22.9115 115.117 23.3591 115.399 23.9228C115.488 24.0851 115.567 24.2533 115.638 24.4285C115.67 24.5076 115.701 24.5879 115.729 24.6693C115.774 24.797 115.816 24.9277 115.851 25.0619C115.919 25.3109 115.973 25.5711 116.013 25.8423C116.116 26.5337 116.165 27.2503 116.165 27.9933V38.3995H120.85V27.2252C120.85 25.4843 120.62 23.9099 120.159 22.5019C119.699 21.0939 118.905 19.9672 117.78 19.1228C117.133 18.626 116.343 18.275 115.41 18.0705C115.213 18.0265 115.009 17.9896 114.799 17.9592L114.588 17.9322C114.166 17.8812 113.718 17.8554 113.247 17.8554C112.556 17.8554 111.815 17.958 111.02 18.1625C110.655 18.2445 110.299 18.3512 109.952 18.4824C109.542 18.6365 109.143 18.8246 108.754 19.0461C108.569 19.1515 108.391 19.267 108.217 19.3924C108.013 19.5418 107.817 19.7058 107.629 19.884C107.36 20.1383 107.109 20.4218 106.872 20.7353L106.605 18.1625H102.227Z"
                fill="white"
              />
              <path
                d="M71.9995 11.2508V38.3995H90.9299V34.022H76.7994V11.2508H71.9995Z"
                fill="white"
              />
              <path
                d="M9.59961 11.9996H14.3996V38.3995H9.59961V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 33.5996V38.3995H64.7995V33.5996H38.3995Z"
                fill="white"
              />
              <path
                d="M16.7996 11.9996H21.5996V38.3995H16.7996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 26.3996V31.1996H64.7995V26.3996H38.3995Z"
                fill="white"
              />
              <path
                d="M23.9996 11.9996H28.7996V38.3995H23.9996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 19.1996V23.9996H64.7995V19.1996H38.3995Z"
                fill="white"
              />
              <path
                d="M31.1996 11.9996H35.9995V38.3995H31.1996V11.9996Z"
                fill="white"
              />
              <path
                d="M38.3995 11.9996V16.7996H64.7995V11.9996H38.3995Z"
                fill="white"
              />
            </svg>
            <div className={styles.socialIcons}>
              <a href="https://vk.com/feed">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3278 33.1812C15.6984 33.1812 10.2079 26.5927 9.98267 15.6117H14.8255C14.9804 23.6644 18.5281 27.0713 21.3437 27.7752V15.6117H25.891V22.5523C28.6643 22.2566 31.5926 19.089 32.5781 15.5977H37.1112C36.7416 17.405 36.0032 19.1166 34.9423 20.6257C33.8813 22.1348 32.5206 23.4089 30.945 24.3683C32.7033 25.2435 34.256 26.4814 35.5009 28.0005C36.7458 29.5196 37.6545 31.2853 38.1671 33.1812H33.1694C32.0994 29.8447 29.4246 27.2543 25.891 26.9024V33.1812H25.3419H25.3278Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://web.telegram.org/a/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0514 23.2051L27.729 16.477C29.3753 15.7762 34.9585 13.5336 34.9585 13.5336C34.9585 13.5336 37.5354 12.5525 37.3205 14.9352C37.2489 15.9162 36.6766 19.3505 36.1037 23.0646L34.3144 34.0676C34.3144 34.0676 34.1712 35.6795 32.9523 35.9598C31.7334 36.2401 29.7313 34.9787 29.3736 34.6983C29.0874 34.4881 24.0053 31.3343 22.1442 29.7925C21.6431 29.3722 21.0706 28.5309 22.2158 27.5499C24.7926 25.2371 27.8706 22.3636 29.7313 20.5415C30.5903 19.7005 31.4492 17.7381 27.8704 20.1212L17.778 26.7792C17.778 26.7792 16.6326 27.48 14.4854 26.8493C12.3382 26.2186 9.83295 25.3776 9.83295 25.3776C9.83295 25.3776 8.11504 24.3264 11.0498 23.2053L11.0514 23.2051Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9626 15.2157C9.48601 16.7197 9.44145 18.6152 9.35234 22.4062C9.34007 22.9279 9.33325 23.4606 9.33325 24.0002C9.33325 24.5397 9.34007 25.0724 9.35234 25.5941C9.44145 29.3851 9.48601 31.2806 10.9626 32.7846C12.4391 34.2886 14.4319 34.3721 18.4173 34.5392C20.2133 34.6145 22.1328 34.6668 23.9999 34.6668C25.8671 34.6668 27.7865 34.6145 29.5825 34.5392C33.568 34.3721 35.5607 34.2886 37.0373 32.7846C38.5138 31.2806 38.5584 29.3851 38.6475 25.5941C38.6598 25.0724 38.6666 24.5397 38.6666 24.0002C38.6666 23.4606 38.6598 22.9279 38.6475 22.4062C38.5584 18.6152 38.5138 16.7197 37.0373 15.2157C35.5607 13.7117 33.568 13.6282 29.5825 13.4611C27.7865 13.3858 25.8671 13.3335 23.9999 13.3335C22.1328 13.3335 20.2133 13.3858 18.4173 13.4611C14.4319 13.6282 12.4391 13.7117 10.9626 15.2157ZM19.9999 29.3335L29.3333 24.0002L19.9999 18.6668V29.3335Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="https://dzen.ru/">
                <svg
                  className={styles.icon}
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.0193 23.3509H38.0122C26.0026 23.2197 24.7636 19.3816 24.6522 9.98898C24.6503 9.80786 24.7245 9.63442 24.8577 9.51154C24.9908 9.38802 25.1713 9.32978 25.3505 9.34386C32.4186 9.9877 38.0141 15.5851 38.6567 22.6527C38.6727 22.8331 38.6119 23.0117 38.489 23.1448C38.3681 23.276 38.1978 23.3509 38.0193 23.3509Z"
                    fill="white"
                  />
                  <path
                    d="M24.6529 38.0107C24.7642 28.618 26.0026 24.78 38.0122 24.6488C38.1933 24.6558 38.3655 24.7217 38.489 24.8548C38.6125 24.988 38.6727 25.1665 38.6567 25.347C38.0148 32.4152 32.4193 38.012 25.3511 38.6558C25.3319 38.6577 25.3121 38.6584 25.2929 38.6584C25.1329 38.6584 24.9773 38.5976 24.8583 38.4881C24.7252 38.3652 24.6509 38.1918 24.6529 38.0107Z"
                    fill="white"
                  />
                  <path
                    d="M22.6067 9.34696C15.561 10.0094 9.98337 15.6055 9.34401 22.6538C9.32801 22.8343 9.38817 23.0129 9.51169 23.146C9.63265 23.2772 9.80353 23.3514 9.98145 23.3514H9.98913C21.959 23.2138 23.1949 19.3777 23.3075 9.99144C23.3094 9.81032 23.2346 9.63624 23.1014 9.51336C22.967 9.39048 22.7872 9.33032 22.6067 9.34696Z"
                    fill="white"
                  />
                  <path
                    d="M9.51102 24.8536C9.63326 24.7205 9.78942 24.6257 9.98846 24.6481C21.959 24.7857 23.1942 28.6219 23.3069 38.0075C23.3088 38.1886 23.2339 38.3627 23.1008 38.4856C22.9817 38.595 22.8269 38.6552 22.6669 38.6552C22.647 38.6552 22.6265 38.6545 22.6067 38.6526C15.5609 37.9902 9.9827 32.3941 9.34334 25.3457C9.32734 25.1653 9.38814 24.9867 9.51102 24.8536Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerMobileDocs}>
          <p className={styles.footerDoc}>ООО «Пример компании», 2020–2023</p>

          <p className={styles.footerDoc}>Политика конфиденциальности</p>
          <p className={styles.footerDoc}>Публичная оферта</p>

          <button onClick={scrollToHeader} className={styles.arrive}>
            Вернуться наверх
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3637 5.3637C11.7152 5.01223 12.285 5.01223 12.6365 5.3637L18.6365 11.3637C18.988 11.7152 18.988 12.285 18.6365 12.6365C18.285 12.988 17.7152 12.988 17.3637 12.6365L12.9001 8.17289V18.0001C12.9001 18.4972 12.4972 18.9001 12.0001 18.9001C11.503 18.9001 11.1001 18.4972 11.1001 18.0001V8.17289L6.63649 12.6365C6.28502 12.988 5.71517 12.988 5.3637 12.6365C5.01223 12.285 5.01223 11.7152 5.3637 11.3637L11.3637 5.3637Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};
export default Main;
