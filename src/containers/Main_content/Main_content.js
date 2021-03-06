import React from 'react'
import classes from './Main_content.module.scss'
import Content_img from '../../components/Main_content_img/Main_content_img'
import niderland_png from '../../img/countries/nider.png'
import maldives_png from '../../img/countries/mal.png'
import vengr_png from '../../img/countries/vengr.png'
import mram_png from '../../img/countries/mram.png'
import kanada_png from '../../img/countries/kanada.png'
import NY_png from '../../img/countries/NY.png'
import { NavLink } from 'react-router-dom'

const Main_content = () => {


   return (
      <section className={classes.main_content} id="main__content">
         <div className={classes.main_content__container}>
            <div className={classes.main_content__text}>
               <div className={classes.main_content__buttPerpose + ' ' + classes.classRight + ' ' + classes._animItems + ' ' + classes.overflow + ' ' + classes.button}>
                  <NavLink
                     to="/other_offers"
                  >Предложения</NavLink>
               </div>
               <div className={classes.content__subtitle + ' ' + classes.classLeft + ' ' + classes._animItems + ' ' + classes.overflow}>Увидь то, что не увидишь из своего окна, <br /> почувствуй солёные брызги водопада, <br /> сравни архитектуру запада и востока, <br /> окунись в традиции незнакомых стран</div>
            </div>
            <Content_img
               contentCountries__wrapper={classes.contentCountries__wrapper}
               img__wrapper={classes.img__wrapper}
               isLimited={classes.img__limiter}
               blockImg={classes.block_img + ' ' + classes.block_imgOther}
               img_countries={classes.img_countries}
               block_text={classes.block_text}
               content__title={classes.content__title}
               content__text={classes.content__text}
               content__text_title={classes.content__text_title}
               content__text_subtitleClass={classes.content__text_subtitle}
               countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
               countrie={"/niderlands"}
               imgSrc={niderland_png}
               title="Нидерланды"
               content__text_subtitle="Известная голландская пословица гласит: «Бог создал землю, Голландию создали голландцы». Это выражение необыкновенно точно передает то впечатление, которое появляется при посещении страны."
            />
            <div className={classes.content__countries}>
               <Content_img
                  contentCountries__wrapper={classes.contentCountries__wrapper}
                  img__wrapper={classes.img__wrapper}
                  blockImg={classes.block_img}
                  img_countries={classes.img_countries}
                  block_text={classes.block_text}
                  content__title={classes.content__title}
                  content__text={classes.content__text}
                  content__text_title={classes.content__text_title}
                  content__text_subtitleClass={classes.content__text_subtitle}
                  countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
                  countrie={"/maldives"}
                  imgSrc={maldives_png}
                  title="Мальдивы"
                  content__text_subtitle="Мальдивы — это место, где пляжный отдых отличается безмятежностью, уединенностью и поистине райской атмосферой, а подводный мир – невероятным богатством и красотой."
               />
               <Content_img
                  contentCountries__wrapper={classes.contentCountries__wrapper}
                  img__wrapper={classes.img__wrapper}
                  blockImg={classes.block_img}
                  img_countries={classes.img_countries}
                  block_text={classes.block_text}
                  content__title={classes.content__title}
                  content__text={classes.content__text}
                  content__text_title={classes.content__text_title}
                  content__text_subtitleClass={classes.content__text_subtitle}
                  countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
                  countrie={"/vengria"}
                  imgSrc={vengr_png}
                  title="Венгрия"
                  content__text_subtitle="Венгрия – это страна, где легендарная гора Токай с ее уникальными виноградниками, пещерами и погребами уже более пяти веков будоражит воображение истинных ценителей винодельческого искусства."
               />
            </div>

            <div className={classes.main_content__mram}>
               <Content_img
                  contentCountries__wrapper={classes.contentCountries__wrapper}
                  img__wrapper={classes.img__wrapper}
                  isLimited={classes.img__limiter}
                  blockImg={classes.block_img + ' ' + classes.block_imgOther}
                  img_countries={classes.img_countries}
                  block_text={classes.block_text}
                  content__title={classes.content__title}
                  content__text={classes.content__text}
                  content__text_title={classes.content__text_title}
                  content__text_subtitleClass={classes.content__text_subtitle}
                  countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
                  countrie={"/marble_canyon"}
                  imgSrc={mram_png}
                  title="Мраморный каньон"
                  content__text_subtitle="Вас ждет посещение Мраморного каньона Рускеала, Вы увидите легендарные Рускеальские водопады, прогуляетесь по энергетическим местам, попробуете лечебные Карельские бальзамы."
               />
            </div>
            <div className={classes.content__countries}>
               <Content_img
                  contentCountries__wrapper={classes.contentCountries__wrapper}
                  img__wrapper={classes.img__wrapper}
                  blockImg={classes.block_img}
                  img_countries={classes.img_countries}
                  block_text={classes.block_text}
                  content__title={classes.content__title}
                  content__text={classes.content__text}
                  content__text_title={classes.content__text_title}
                  content__text_subtitleClass={classes.content__text_subtitle}
                  countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
                  countrie={"/new_york"}
                  imgSrc={NY_png}
                  title="Нью Йорк"
                  content__text_subtitle="Нью-Йорк, основанный голландскими колонистами в 17 веке, сегодня самый большой по площади и численности населения город США. Это главный порт страны, ее культурный и экономический центр."
               />
               <Content_img
                  contentCountries__wrapper={classes.contentCountries__wrapper}
                  img__wrapper={classes.img__wrapper}
                  blockImg={classes.block_img}
                  img_countries={classes.img_countries}
                  block_text={classes.block_text}
                  content__title={classes.content__title}
                  content__text={classes.content__text}
                  content__text_title={classes.content__text_title}
                  content__text_subtitleClass={classes.content__text_subtitle}
                  countrieDesk={classes.countrieDesk + ' ' + classes.countrieDeskOther}
                  countrie={"/kanada"}
                  imgSrc={kanada_png}
                  title="Канада"
                  content__text_subtitle="Туры в Канаду всегда привлекали неутомимых путешественников. Эта красивая страна многогранна и велика и посмотреть все ее достопримечательности за одну поездку Вам вряд ли удастся"
               />
            </div>
         </div>
      </section>
   )
}

export default Main_content