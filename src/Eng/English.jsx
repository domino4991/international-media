import React from "react";
import s from "./English.module.scss";
import Logo from "../Image/logo.png";
import Eng from "../Image/eng.svg";
import Rus from "../Image/rus.svg";
import Linia from "../Image/Vector.svg";
import whats from "../Image/whats.jpg";
import Logo1 from "../Image/logo1.png";
import mail from "../Image/mail-fix.jpg";

import { Link } from "react-router-dom";
import { Engg, Russ } from "../path";

const English = () => {
  return (
    <>
      <div className="header">
        <div className={s.header__item}>
          <div className={s.lang}>
            <div className={s.d}>
              <Link className={s.eng} to={Engg}>
                <div className={s.dabydi}>
                  <p className={s.ppp}>English</p>
                  <img  src={Eng} alt="" />
                </div>
              </Link>
              <Link className={s.eng} to={Russ}>
                <div className={s.dabydi}>
                  <p className={s.ppp}>Russian</p>
                  <img className={s.imgrus} src={Rus} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className={s.title__real}>
            <div className={s.title}>
              <img className={s.title__image} src={Logo} alt="" />
              <h1 className={s.title__h1}>International Media</h1>
            </div>
            <p className={s.title__p}>
              has been successfully supplying high-quality and reliable
              equipment from the world's best manufacturers both near and far
              abroad for more than 10 years.
            </p>
            <p className={s.title__p}>
              The company's activities are not limited to the supply of
              equipment, the company also provides a full range of logistics
              services.
            </p>
          </div>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.main__item}>
          <img src={Linia} alt="" className={s.Linia} />
          <h1 className={s.main__catl}>Catalog of services</h1>
          <img src={Linia} alt="" className={s.Linia} />
        </div>
        <div className={s.main__categ}>
          <div className={s.main__img}>
            <h2 className={s.main__h2}>
              Wholesale and retail trade of a wide range of goods;
            </h2>
          </div>
          <div className={s.main__img1}>
            <h2 className={s.main__h21}>Export of a wide range of goods;</h2>
          </div>
          <div className={s.main__img2}>
            <h2 className={s.main__h21}>Import of a wide range of goods;</h2>
          </div>
          <div className={s.main__img3}>
            <h2 className={s.main__h22}>
              Provision of legal services to individuals and legal entities;
            </h2>
          </div>
          <div className={s.main__img4}>
            <h2 className={s.main__h21}>
              Sales of cars, auto parts and car accessories;
            </h2>
          </div>
          <div className={s.main__img5}>
            <h2 className={s.main__h22}>
              Provision of transport services, including car transportation;
            </h2>
          </div>
          <div className={s.main__img6}>
            <h2 className={s.main__h22}>
              Provision of consolidated cargo transportation services;
            </h2>
          </div>
          <div className={s.main__img7}>
            <h2 className={s.main__h23}>
              And other activities not prohibited by the current legislation
              Kyrgyz Republic.
            </h2>
          </div>
        </div>
      </div>
      <div className={s.main__about}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__h1}>About us</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.about}>
        <div className={s.about__text}>
          <p className={s.width}>
            LLC International Media was founded in February 2010. The company
            supplied a wide range of goods to the territory of the Kyrgyz
            Republic. It also successfully imported goods from near and far
            abroad to the territory of Kyrgyzstan. Today the company has
            expanded its commercial activities not only in trade but also in
            logistics services of a Wide profile
          </p>
          <p className={s.width}>
            Payment and delivery: Our company works by bank transfer in
            accordance with the agreed conditions Within the framework of
            concluded contracts with customers
          </p>
          <p className={s.width}>
            Delivery, the terms of its execution and the cost are negotiated
            separately with each client in accordance with the terms of delivery
            or service performance in a separate contract
          </p>
          <img src={Logo1} alt="" className={s.img__logo1} />
        </div>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__quality}>Quality policy:</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width1}>
          The profile of our company is to ensure the continuous satisfaction of
          our customers' needs. At the same time, we increase our
          competitiveness, strengthen relations with the client, develop
          recommendations and ensure the development of our company. The level
          of quality of our relationships with counterparties largely depends on
          how well we know the basic needs and requirements of our clients. We
          rely on our practical experience and individual approach to our
          business partners for a high level of professionalism. The main
          concept of our company is to promptly meet the needs of our customers.
        </p>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__h1}>Cooperation</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width2}>
          Our company offers mutually beneficial cooperation to suppliers of
          equipment of a wide profile and we are sure that our joint work will
          serve to maximize customer satisfaction in providing quality goods in
          compliance with service and warranty obligations. for cooperation,
          please contact: We will discuss the terms of cooperation.
        </p>
      </div>
      <div className={s.main__pol}>
        <img src={Linia} alt="" className={s.Linia1} />
        <h1 className={s.main__h1}>Contacts</h1>
        <img src={Linia} alt="" className={s.Linia1} />
      </div>
      <div className={s.bleat}>
        <p className={s.width2}>
          Chat us and we will and we will definitely contact you
        </p>
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

export default English;
