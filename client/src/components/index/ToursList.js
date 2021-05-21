import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ToursList = () => {
    return (
        <div id="tours-list">
            <div className="container">
                <div className="row">
                    {/*<!-- KSU -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link to="/ksu#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/ksu.jpg')}
                                alt=""
                                width="100%"
                            />
                        </Link>
                        <h3>Камчатка с Севера на Юг</h3>
                        <h4>14 дней, 72 000 рублей</h4>
                        <p>
                            6-дневный пеший поход c рюкзаком средней сложности по диким местам
                            уникальной Ключевской группы вулканов, а также восхождения на
                            Толбачик, Мутновский, Горелый.
            </p>
                    </div>
                    {/*<!-- BPK -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/bpk#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/bpk.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Большое Путешествие по Камчатке</h3>
                        <h4>9 дней, 67 000 рублей</h4>
                        <p>
                            Самый популярный и доступный автомобильный тур на Камчатке -
                            вулканы Мутновский и Горелый, сплав по реке Быстрая, а также
                            морская прогулка.
            </p>
                    </div>
                    {/*<!-- AVK -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/avk#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/avk.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Активные Вулканы Камчатки</h3>
                        <h4>13 дней, 82 000 рублей</h4>
                        <p>
                            Автомобильный тур к вулканам Толбачик, Ключевской, Мутновский,
                            Горелый с однодневными трекингами, морская прогулка.
            </p>
                    </div>
                    {/*<!-- BAKEN -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/baken#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/baken.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Бакенинг</h3>
                        <h4>13 дней, 47 000 рублей</h4>
                        <p>Поход по красивейшему и мало посещаемому району Камчатки</p>
                    </div>
                    {/*<!-- MV -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link to="/mv#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/mv.jpg')}
                                alt=""
                                width="100%"
                            />
                        </Link>
                        <h3>Медведи и Вулканы</h3>
                        <h4>8 дней</h4>
                        <p>Наблюдение за медведями на Курильском озере.</p>
                    </div>
                    {/*<!-- PATAGONIA -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/patagonia#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/patagonia.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Осенняя Патагония</h3>
                        <h4>14 дней</h4>
                        <p>Незабываемая поездка в горы Аргентины и Чили.</p>
                    </div>
                    {/*<!-- PHOTOTOUR -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="bfk#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/bfk.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Большой Фототур по Камчатке</h3>
                        <h4>15 дней</h4>
                        <p>
                            Самые привлекательные места для фотографов в правильное время -
                            Ключевская группа вулканов, Южные вулканы.
            </p>
                    </div>
                    {/*<!-- OCEAN -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/ocean#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/ocean.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Морское Путшествие</h3>
                        <h4>12 дней</h4>
                        <p>На тримаранах по южным бухтам Камчатки.</p>
                    </div>
                    {/*<!-- KO -->*/}
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-box" to="/ko#tour">
                            <img
                                className="img-fluid"
                                src={require('../../img/tours-index/ko.jpg')}
                                alt=""
                            />
                        </Link>
                        <h3>Краски Осени</h3>
                        <h4>12 дней</h4>
                        <p>
                            Поход с рюкзаком в парк Налычево в сентябре - огненные краски
                            осени и согревающие горячие источники.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursList;
