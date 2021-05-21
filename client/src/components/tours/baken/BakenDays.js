import React from 'react';

const BakenDays = () => {
    const togglePlusIcon = e => {
        /*
        if (e.target.nodeName === 'BUTTON') {

          const item = document.querySelector('#' + e.target.id + ' .fas');
          item.classList.toggle('fa-plus');
          item.classList.toggle('fa-minus');

        } else {
          e.target.classList.toggle('fa-plus');
          e.target.classList.toggle('fa-minus');
        }
        */
    };
    return (
        <div className="col-lg-7 days">
            {/* DAY 1 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-1"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 1. Прилет, экскурсия по
            городу.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-1">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day1.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
            Прилет в аэропорт Петропавловска-Камчатского. Сразу отправляемся на
            небольшую экскурсию по Петропавловску-Камчатскому (обзор на город и
            Авачинскую бухту со смотровой площадки), затем переезжаем к
            побережью Тихого океана (Халактырский пляж), где мочим ноги в
            ледяной воде (в теплую погоду и при отсутствии ветра самые
            закаленные могут искупаться), ощущаем себя на краю огромной пропасти
            занимающей более трети поверхности Земного шара.
          </p>
                    <p>
                        К вечеру заселяемся хостел в Пертропавловске-Камчатском (проживание в хостеле не входит в стоимость).
          </p>
                    <p>
                        * На экскурсию к океану отправляются туристы, прибывшие на Камчатку
                        до 14-00. Прилетающим позже нужно будет добраться до гостиницы на
                        такси. Если удобный Вам рейс прибывает позже 14-00, но Вы хотите
                        попасть на экскурсию первого дня, то необхоимо прилетать на день
                        раньше.
          </p>
                </div>
            </div>
            {/* DAY 2 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-2"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 2. Переход к озеру Демидова.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-2">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day2.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                            Рано утром выезжаем в центральную часть полуострова к точке старта нашего маршрута
                            неподалеку от вулкана Бакенинг. Ехать 230 км, по пути попробуем знаменитые своими
                            размерами пирожки в поселке Сокоч и заедем покупаться на Малкинские горячие
                            источники. По приезду делаем перекус, складываем продукты и палатки в рюкзаки.
                            Сегодня у нас небольшой переход вдоль притока реки Правая Камчатка через кусты
                            ольхового и кедрового стланика, полянки и березовый лес. Вечер у костра, ужин,
                            знакомство группы. Ночлег в палатках.
                     </p>

                    <p>Переход — 4 км. Высота ночевки — 700 м.</p>
                </div>
            </div>
            {/* DAY 3 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-3"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 3. Озеро Демидова. Радиальное восхождение на Ново-Бакенинг.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-3">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day3.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Завтракаем, собираем палаточный лагерь. Сегодня нас ждет короткий переход к озеру
                        Демидова. Сначала поднимаемся на невысокое плато (древний заросший лавовый поток)
                        и нашему вниманию предстает величественный вулкан Бакенинг (2276 м). Пересекаем
                        плато, делаем еще один подъем, распутываем лабиринты кедрача и мы на месте ночевки
                        у озера. Ставим лагерь, делаем перекус и идем гулять налегке. Яркие осенние пейзажи
                        завораживают. Сначала полюбуемся озером с небольшой высоты, а после поднимемся
                        на вулкан Ново-Бакенинг (1500 м) ведь с высоты все смотрится совсем иначе.
                        Возвращение в лагерь, ужин и беседы у костра.
                    </p>
                    <p>Переход — 6 км. Прогулка налегке - 10 км. Высота ночевки — 1000 м.</p>
                </div>
            </div>
            {/* DAY 4 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-4"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 4. Переход к Верхне-Авачинскому озеру.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-4">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day4.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Ранний завтрак, сбор лагеря и пора в путь. Сегодня у нас очень насыщенный день: по
                        знакомой дорожке идем на перевал Майский (1262 м), проходим тундру и спускаемся к
                        озеру Медвежьему где делаем перекус. Желающие могут порыбачить ведь в озере есть
                        голец. После отдыха делаем короткий переход к озеру Верхне-Авачинскому и вот здесь
                        нужно будет приложить усилия: хорошая и не очень тропа, кусты, заросли стланика,
                        овраги, камни — такой вот набор. Ставим лагерь, дежурные готовят ужин, а остальные
                        собирают дрова или ловят рыбу. Сегодня в меню уха и запеченная рыбка.
                    </p>
                    <p>Переход — 15 км, через перевал 1260 метров. Высота ночевки — 800 м.</p>
                </div>
            </div>
            {/* DAY 5 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-5"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 5. Верхне-Авачинское озеро.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-5">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day5.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Сегодня день отдыха и рыбалки ведь далее по маршруту возможности порыбачить уже не
                        будет. Проведем весь день на озере Верхне-Авачинском, здесь весьма красиво и сытно:)
                        Наловим рыбы, приготовим ее в разных вариантах, проведем фотосессии и наберемся
                        сил перед завтрашним днем. Для желающих возможен радиальный выход на ближайшую
                        вершину, с которой открываются чудесные виды.
                    </p>
                    <p>Высота ночевки — 800 м.</p>
                </div>
            </div>
            {/* DAY 6 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-6"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 6. "7 перевалов", часть 1.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-6">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day6.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Наш путь начнется с брода реки Средняя Авача, берущей начало из озера. Мы перейдем
                        реку у самого истока, где вода ниже колена и слабое течение. Далее следует одно из
                        главных испытаний сегодняшнего дня в виде крутого подъема на поросший стлаником
                        склон хребта. Необходимо подняться всего на 260 метров по вертикали, но это будет
                        настоящее приключение. Поднявшись, мы насладимся прекрасным видом Бакенинга,
                        Верхне-Авачинского озера и его окрестностей. В ближайшие два дня мы пересечем весь
                        хребет через 7 "перевалов" и доберемся до Тимоновских горячих источников. Перевалы
                        символические 100-200 метров и главная сложность это подойти к ним, для этого порой
                        нужно обходить глубокие труднопроходимые овраги. Отсутствие троп, необходимость
                        распутывать лабиринты зарослей стланика, двигаясь то вверх, то вниз, утомляет. Пройдя
                        4 "перевала", приходим на место стоянки около ручья, ставим лагерь, пьем чай, собираем
                        дрова и идем гулять на озеро Безымянное, что в 1 км от лагеря. Виды вокруг
                        потрясающие. Встречаем закат, ужин у костра.
                    </p>
                    <p>Переход — 8 км. Прогулка налегке — 3-4 км. Высота ночевки — 1140 м.</p>
                </div>
            </div>
            {/* DAY 7 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-7"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-7"
                        aria-expanded="false"
                        aria-controls="collapse-7"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 7. "7 перевалов", часть 2.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-7">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day7.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                    Сегодня мы пройдем оставшиеся 3 перевала и спустимся к Тимоновским горячим
                    источникам. Переход не такой сложный как вчера, виды вокруг шикарные. Увидим
                    Бакенинг во всей красе, хребет Ганальские востряки вдалеке. Возможно увидим
                    медведей, они часто пасутся на здешних ягодных тундрах. Мы последуем их примеру и
                    также наедимся ягод. Иногда можно встретить горных коз. Если вчера самое сложное
                    было подняться на хребет, то сегодня — с него спуститься. Тропы нет, спускаемся через
                    березовый лес и кусты к единственному островку цивилизации на нашем пути — горному
                    приюту святого Тимона. Отсюда 800 метров по хорошей тропе до нашей стоянки, которая
                    совсем рядом с Тимоновскими горячими источниками. Здесь есть маленький домик на 6-8
                    человек, который может стать нашим если будет свободен. Купаемся, пьем нарзан,
                    ужинаем. Ночлег в домике/палатке.
                    </p>
                    <p>Переход — 9 км. Высота ночевки — 700 м.</p>
                </div>
            </div>
            {/* DAY 8 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-8"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-8"
                        aria-expanded="false"
                        aria-controls="collapse-8"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 8. Тимоновские горячие источники.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-8">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day8.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                            Сегодня день отдыха: релаксируем, купаемся, стираемся, приводим себя в порядок и
                            мысленно настраиваемся на вторую часть пути, которая также весьма интересна. Обед.
                            По желанию можем сделать радиальный выход налегке к весьма живописному водопаду
                            (2—3 часа).
                    </p>
                    <p>Прогулка по желанию — 4 км. Высота ночевки — 700 м.</p>
                </div>
            </div>
            {/* DAY 9 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-9"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-9"
                        aria-expanded="false"
                        aria-controls="collapse-9"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 9. Озеро Костакан.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-9">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day9.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Ранний завтрак. Сегодня наша цель — озеро Костакан, переход к нему сложный и займет
                        весь день. Чтобы сократить наш путь, мы пойдем через сопку, а не в обход как ходили
                        ранее предыдущие группы. Да, это сложнее технически, но выигрыш в 2—3 часа и идти
                        на 5 км меньше. Поднимемся по березовому лесу, руслам высохших ручьев и кустам на
                        300 метров, пройдем по полянкам на вершине и спустимся на 400 метров. Далее немного
                        камчатских джунглей с медвежьими тропами и перед нами река Средняя Авача, которую
                        мы будем бродить (в сентябре уровень воды приемлемый и течение не такое
                        стремительное). После брода делаем большой привал на перекус и отдых. Набираемся
                        сил перед финишным рывком. Впереди еще один маленький брод и 7 км до лагеря по
                        достаточно хорошей тропе с плавным набором высоты. Уставшие, но довольные собой
                        разбиваем лагерь, делаем ужин. Вечер у костра.
                    </p>
                    <p>Переход — 15 км. Высота ночевки — 770 м.</p>
                </div>
            </div>
            {/* DAY 10 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-10"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-10"
                        aria-expanded="false"
                        aria-controls="collapse-10"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 10. Озеро Высокое.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-10">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day10.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        После завтрака идем налегке на прогулку. Сначала поднимемся на лавовый поток,
                        поросший мхом, ягелем, кедровым стлаником и маленькими березками, потом заберемся
                        на древний вулканический конус и с него сделаем отличные фото озера и его окружения.
                        Возвращаемся в лагерь, собираем рюкзаки и идем на озеро Высокое. Медвежьими
                        тропами через лес, кусты, сухое русло ручья, высокотравье и лабиринт стланика
                        поднимаемся к Малым озерам (Егорова и Росомашье) где отдыхаем и делаем перекус.
                        Обходим оба озера, делаем остановки для фото и в скором времени приходим на
                        стоянку. Разбиваем лагерь на берегу под прикрытием лавового потока, который
                        остановился перед озером. Ужин, возможен костер.
                    </p>
                    <p>Переход — 8.5 км. Высота ночевки — 1050 м.</p>
                </div>
            </div>
            {/* DAY 11 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-11"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-11"
                        aria-expanded="false"
                        aria-controls="collapse-11"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 11. Восхождение на вулкан Бакенинг.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-11">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day11.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Ранний завтрак и радиальное восхождение на вершину вулкана Бакенинг (2276). Сегодня
                        гуляем налегке. Поднимаемся на перевал Рыжий (1500) и с него продолжаем наш путь к
                        вершине. Подъем технически не сложный, но ближе к вершине следует быть осторожным
                        и обязательно иметь треккинговые палки! В хорошую погоду виды с вершины просто
                        потрясающие и просматривается большая часть нашего маршрута! Видны вулканы:
                        Авачинский, Корякский, Арик, Камень, Зимина, Ичинский и озера: Высокое, Росомашье,
                        Егорова, Верхне-Авачинское, Медвежье. Делаем перекус и назад в лагерь. Ужин. За
                        время похода мы стали командой и пришло время подвести итоги нашего путешествия,
                        обменяться мыслями и впечатлениями о походе.
                    </p>
                    <p>Радиальное восхождение на Бакенинг (2276) — 8 км (4 вверх, 4 вниз). Высота ночевки — 1050 м.</p>
                </div>
            </div>
            {/* DAY 12 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-11"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-11"
                        aria-expanded="false"
                        aria-controls="collapse-11"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 12. Замыкаем круг — окончание похода.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-11">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day11.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
                        Ранний завтрак и сбор лагеря. Сегодня мы замыкаем кольцо вокруг Бакенинга и
                        заканчиваем маршрут. По знакомой дорожке поднимаемся на перевал Рыжий, проходим
                        небольшое плато и спускаемся в долину по которой шли в первый день. Точка старта и
                        финиша совпадают. Уже к обеду мы на месте, после перекуса грузимся в транспорт и
                        едем в город где нас ждет мягкая постель, горячий душ и другие прелести цивилизации.
                    </p>
                    <p>Переход — 14 км. Переезд — 230 км.</p>
                </div>
            </div>
            {/* DAY 13 */}
            <div className="card">
                <div className="card-header">
                    <button
                        id="btn-day-12"
                        className="btn text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-12"
                        aria-expanded="false"
                        aria-controls="collapse-12"
                        onClick={e => togglePlusIcon(e)}
                    >
                        <i className="fas fa-plus mr-2"></i> День 13. Рыбный рынок, магазин
            сувениров, трансфер в аэропорт.
          </button>
                </div>
                <div className="card card-body collapse" id="collapse-12">
                    <p>
                        <img
                            src={require('../../../img/tour-baken/small/day12.jpg')}
                            alt="Поход вокруг вулкана Бакенинг"
                        />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
                </div>
            </div>
        </div>
    )
};

export default BakenDays;
