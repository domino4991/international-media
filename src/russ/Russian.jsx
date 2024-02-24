import React from "react";
import s from "./Russian.module.scss";
import Logo from "../Image/logo.png";
import Eng from "../Image/eng.svg";
import Rus from "../Image/rus.svg";
import Linia from "../Image/Vector.svg";
import whats from "../Image/whats.jpg";
import Logo1 from "../Image/logo1.png";
import mail from "../Image/mail-fix.jpg";

import { Link } from "react-router-dom";
import { Engg, Russ } from "../path";

const Russian = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.header__item}>
          <div className={s.lang}>
            <div className={s.d}>
              <Link className={s.eng} to={Engg}>
                <div className={s.dabydi}>
                  <p className={s.ppp}>Английский</p>
                  <img className={s.imgeng} src={Eng} alt="" />
                </div>
              </Link>
              <Link className={s.eng} to={Russ}>
                <div className={s.dabydi}>
                  <p className={s.ppp}>Русский</p>
                  <img src={Rus} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className={s.title__real}>
            <div className={s.title}>
              <img className={s.title__image}src={Logo} alt="" />
              <h1 className={s.title__h1}>International Media</h1>
            </div>
            <p className={s.title__p}>
              International Media уже более 10 лет успешно поставляет
              Качественное и надёжное оборудование От лучших мировых
              производителей как ближнего так дальнего зарубежья.
            </p>
            <p className={s.title__p}>
              Деятельность компании не ограничивается поставкой оборудования
              компания также предоставляет полный комплекс логистических услуг.
            </p>
          </div>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.main__item}>
          <img src={Linia} alt="" className={s.Linia} />
          <h1 className={s.main__h1}>Каталог услуг</h1>
          <img src={Linia} alt="" className={s.Linia} />
        </div>
        <div className={s.main__categ}>
          <div className={s.main__img}>
            <h2 className={s.main__h2}>
              Оптовая и розничная торговля широким ассортиментом товаров
            </h2>
          </div>
          <div className={s.main__img1}>
            <h2 className={s.main__h21}>Экспорт широким ассортиментом товаров</h2>
          </div>
          <div className={s.main__img2}>
            <h2 className={s.main__h21}>Импорт широким ассортиментом товаров</h2>
          </div>
          <div className={s.main__img3}>
            <h2 className={s.main__h22}>
              Оказание правовых услуг физическим и юредическим лицам
            </h2>
          </div>
          <div className={s.main__img4}>
            <h2 className={s.main__h21}>
              Реализация авто, автозапчастей и автопринадлежностей
            </h2>
          </div>
          <div className={s.main__img5}>
            <h2 className={s.main__h22}>
              Оказание транспортных услуг, в том числе автоперевозка автомобилей
            </h2>
          </div>
          <div className={s.main__img6}>
            <h2 className={s.main__h22}>
              Оказание услуг по консолидированным перевозкам грузов
            </h2>
          </div>
          <div className={s.main__img7}>
            <h2 className={s.main__h23}>
              И другие виды деятельности, не запрещенные действующим
              законодательством Кыргызской Республики
            </h2>
          </div>
        </div>
      </div>
      <div className={s.main__about}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__O}>О нас</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.about}>
        <div className={s.about__text}>
          <p className={s.width}>
            ОсОО International Media основано феврале 2010 г. Компания
            Осуществляла поставки широких ассортиментов товаров на территорию
            кыргызской республики. Также успешно импортировала товары из
            ближнего и дальнего зарубежья на территорию Кыргызстана. На сегодня
            компания расширила свою коммерческую деятельность не только в
            торговле но и логистических услугах Широкого профиля
          </p>
          <p className={s.width}>
            Оплата и доставка: Наша компания работает по безналичному расчёту в
            соответствии с оговоренными условиями В рамках заключённых договоров
            с клиентами
          </p>
          <p className={s.width}>
            Доставка, сроки её выполнения и стоимость оговаривается отдельно с
            каждым клиентом в соответствии с условиями выполнения поставки или
            услуги Отдельным договором
          </p>
          <img src={Logo1} alt="" className={s.img__logo1} />
        </div>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__Pol}>Политика в области качества</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width1}>
          Профилем нашей компании является обеспечение постоянного
          удовлетворения потребностей наших клиентов. При этом мы повышаем нашу
          конкурентноспособность, Укрепляем отношения с клиентом, вырабатываем
          рекомендации и обеспечением развития нашей компании. Уровень качества
          наших взаимоотношений с контрагентами значительной степени зависит от
          того насколько хорошо мы знаем основные потребности и требования наших
          клиентов высокому уровню профессионализма мы полагаемся на наш
          практический опыт индивидуальный подход к нашим деловым партнёром.
          Основной концепцией нашей компании является оперативное Удовлетворение
          потребностей наших клиентов.
        </p>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__h1}>Сотрудничество</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width2}>
          Наша компания предлагает взаимовыгодное сотрудничество поставщикам
          оборудования широкого профиля и мы уверены что наша совместная работа
          послужит максимальному удовлетворению потребностей клиентов в
          обеспечение качественным товаром с соблюдением сервисных и гарантийных
          обязательств. по вопросам сотрудничества и не только-оставляйте заявку
          ниже. Обсудим условия сотрудничества.
        </p>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1}/>
        <h1 className={s.main__h1}>Обратная связь</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width2}>Напишите нам и мы обязательно с вами свяжемся!</p>
      </div>

      <div className={s.contacts}>
        <div className={s.contacts__div}>
          <img src={whats} alt="" className={s.img__contact} />
          <p className={s.whats__color}>+996550047991</p>
        </div>
        <div className={s.contacts__div}>
          <img src={mail} alt="" className={s.img__contact} />
          <p className={`${s.whats__color} ${s.mail__color}`}>
            intrenational.media@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Russian;
