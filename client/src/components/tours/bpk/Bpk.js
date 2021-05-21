import React from 'react';
import Contact from '../Contact';
import BpkInfo from './BpkInfo';
import BpkDays from './BpkDays';
import BpkGallery from './BpkGallery';

const Bpk = () => {
    document.title = 'Тур Большое Путешествие по Камчатке';
    return (
        <div id="tour">
            {/* TOP IMAGE */}
            <div className="top-image-tour top-image-tour-bpk" id="top-image-home">
                <div className="container h-75">
                    <div className="row h-75 justify-content-center text-center">
                        <div className="col-lg-10">
                            <h3>13 ИЮЛЯ - 21 ИЮЛЯ 2021, (осталось 16 мест)</h3>
                            <h3>22 ИЮЛЯ - 30 ИЮЛЯ 2021, (лайт, осталось 16 мест)</h3>
                            <h1>Большое Путешествие по Камчатке</h1>
                            <h4>
                                Классическая 9-дневная программа - основные вулканы и сплав по
                                реке
              </h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* TOP INFO TABLE */}
            <div className="container">
                <div className="row text-center" id="top-info-table">
                    <div className="col">
                        <p>9 дней</p>
                        <p>67 000 рублей</p>
                    </div>
                    <div className="col">
                        <p>Переходы налегке - 4 дня (по 8 - 12 км)</p>
                        <p>переезды на авто - 400 км</p>
                    </div>
                    <div className="col">
                        <p>В палатке - 4 ночей</p>
                        <p>В гостинице - 4</p>
                    </div>
                    <div className="col">
                        <p>Группа - 16 человек</p>
                        <p>2 гида</p>
                    </div>
                </div>
            </div>
            {/* TOP INFO TEXT and MAP */}
            <div id="top-info-text">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-12">
                            <iframe
                                src="https://www.google.com/maps/d/embed?mid=1Eui_0JOPLVWXD4z5rHSxS_Ifc2ngB5NU&hl=en"
                                width="640"
                                height="480"
                                id="tour-map"
                            ></iframe>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p>
                                Большое путешествие по Камчатке - это классическая программа, в
                                которую включен довольно стандартный набор экскурсий - три
                                вулкана и сплав по реке. Вулканы Мутновский, Горелый и
                                Авачинский находятся в относительной близости от
                                Петропавловска-Камчатского, поэтому переезды не слишком
                                утомительны. Однако это самый настоящие активные вулканы, самые
                                посещаемые на полустрове, и это не случайно.
              </p>
                            <p>
                                Кратер вулкана Мутновский поражает активностью, вулкан Горелый -
                                красотой вида на кратерное озеро и окрестности, а Авачинский -
                                правильной формой конуса, кратер которого дымится выше облаков.
                                На сплаве по реке Быстрой можно увидеть совсем другую Камчатку,
                                здесь нет вулканов, зато есть лосось и медведи.
              </p>
                            <p>
                                В облегченной версии мы заменяем довольно сложное физически
                                восхождение на Авачинский вулкан на морскую прогулку.
              </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* EXPAND ALL button */}
            <div className="container">
                <div className="row" id="expand-all">
                    <div className="col-sm-12 text-left">
                        <button
                            className="btn text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target=".collapse"
                            aria-expanded="false"
                        >
                            <i className="fas fa-chevron-right"></i>
              развернуть все вкладки
            </button>
                    </div>
                </div>
            </div>
            {/* DAYS and INFO */}
            <div className="container-fluid">
                <div className="row mb-4">
                    <BpkDays />
                    <BpkInfo />
                </div>
            </div>
            <div className="container-fluid">
                <BpkGallery />
                <Contact />
            </div>
            {/* VIDEO */}
            <div id="video">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12" id="main-video-wrapper">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/rW3XBQVO0MQ"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Kamchatka Discovery movie"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bpk;
