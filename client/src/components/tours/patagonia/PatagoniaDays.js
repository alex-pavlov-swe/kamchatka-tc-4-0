import React from 'react';

const KsuDays = () => {
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
            <i className="fas fa-plus mr-2"></i> День 1. Встреча в аэропорту
            Буэнос-Айреса. Трансфер, размещение в гостинице. Отдых после
            длительного межконтинентального перелета.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day1.jpg')}
              alt="Камчатка с Севера на Юг"
            />
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
            <i className="fas fa-plus mr-2"></i> Знакомство со столицей
            Аргентины.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day2.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Знакомство со столицей Аргентины. Лучший способ познакомиться с
            городом - это неспешно пройти по нему ногами километров эдак 10 или
            15, посмотреть разные районы, парки, зеленые улицы, ресторанчики,
            чем живут люди и как у них все тут устроено. Никаких скучных
            экскурсий и накачки информацией. Любой всегда может дома открыть
            википедию и за 2 минуты узнать интересующий именно его факт из
            истории города. Мы же будем смотреть глазами и впитывать ощущения.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 3. Буэнос Айрес-
            Эль-Калафате и Эль-Чалтен.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day3.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            День в дороге. Летим в городок Эль-Калафате, который является
            воротами в Патагонию. Сам перелет займет 3 часа. После приземления в
            Эль-Калафате едем на автовокзал, где садимся на местный автобус и
            выдвигаемся в городок Эль-Чалтен (еще 2,5 часа в пути). Размещение в
            гостинице.
          </p>
          <p>
            В нашей группе будет два гида и для путешествий в районе Фицроя
            группа разобъется на две части в зависимости от желаний и
            возможностей участников.
          </p>
          <p>
            Первая часть группы пойдет в пеший трек с двумя ночевками в палатках
            в лагере Пойнсенот. Этот вариант дает больше возможностей в первую
            очередь фотографам. Мы сможем подняться к Лагуне Лос Трес на
            рассвете и снять самые эпичные кадры, наблюдать и снимать Фицрой как
            в рассветном, так и в закатном свете, наблюдать рассвет с отражением
            Фицроя в озере. Также в лагере Пойценот отличные возможности для
            астрофотосъемки, то есть для ночной съемки звездного неба, млечного
            пути.
          </p>
          <p>
            Этот вариант подходит как для увлеченных фотографов так и для всех
            остальных, физически готовых к пешим переходам и морально к ночевкам
            в палатке и подъемам в 3-4 часа утра. Даже если вы не фотограф,
            подобный график позволит своими глазами увидеть самую волшебную
            красоту и в полной мере насладиться великолепием здешних гор.
          </p>
          <p>
            Вторая часть группы будет жить в гостниице и совершать одноденвые
            треки к Фицрою, возвращаясь к вечеру в уютную гостиницу с душем и
            рестораном. Здесь имеется как минимум три интереснейших трека от 12
            до 20 километров в день. В зависимости от физической готовности
            участников и погоды можно будет ходить в треки каждый день, либо
            чередовать их днями отдыха и короткими прогулками по городку. Это
            тоже замечательный вариант.
          </p>
          <p>
            Для фотографов есть еще и третий вариант. Можно жить в гостинице и
            выходить каждый день не в 9-10 утра как обычные люди, а в 3-4 утра
            на рассветные съемки, возвращаясь после них в гостиницу и проводя
            все ночи в комфорте. Этот вариант также здесь очень распространен и
            удобен, по горной тропе ночами тянутся вереницы людей с фонариками.
          </p>
          <p>
            В общем, пишите нам свои пожелания, будем формировать программу и
            подгруппы с учетом пожеланий.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 4. Треккинг в районе
            Фийроя.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <h4>Группа 1</h4>
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day4.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            С вечера собираем рюкзаки и в 4-30 утра, еще затемно, выходим в
            трек. Рассвет в это время года происходит в 8-20 утра. Примерно за 2
            часа мы пройдем 6 километров с набором высоты 300 метров и окажемся
            возле группы небольших озер. На рассвете Фицрой окрашивается в ярко
            красный, а затем в оранжевый свет. Мы будем наблюдать это
            феерическое зрелище с отражением в озере под звуки природы -
            журчание воды в ручье и пение птиц - незабывамые впечатления и
            фотокадры в хорошую погоду гарантированны.
          </p>
          <p>
            После утренних приключений мы пройдем еще 2 километра до лагеря
            Пойнсенот, который расположился в колоритном лесу с видами на
            Фицрой, поставим лагерь, приготовим обед.
          </p>
          <p>
            Во второй половине дня мы будем наслаждаться видами Фицроя и
            осеннего леса в районе лагеря Пойнсенот, отдыхать после ночного
            перехода, далеко ходить не будем, в радиусе километра от лагеря есть
            немало интересных вариантов фотосъемки. Ночевка в палатках.
          </p>
          <p>
            В хорошую погоду желающие могут заняться ночной съемкой звездного
            неба, которое в этой части земного шара просто потрясающее, отлично
            виден млечный путь, в окрестностях лагеря есть множество эпичных
            деревьев, которые подходят для переднего плана.
          </p>
          <h4>Облегченный вариант - группа 2</h4>
          <p>
            Однодневный трекинг к лагерю Пойнсенот откуда открывается
            восхитительный вид на Фицрой в обрамлении золотой осени. Идем
            налегке, 8 километров в одну сторону, 16 километров туда-обратно, к
            вечеру возвращаемся в гостиницу. Трек к Фицрою по праву считается
            одним из самых красивых горных треков в мире!
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 5. Треккинг в районе
            Фицроя.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <h4>Группа 1.</h4>
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day5.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Выходим из лагеря налегке в 5 утра, еще под звездное небо.
            Поднимаемся выше к Фицрою, на высоту около 1150 метров, к так
            называемой Лагуне Лос Трес, это живописное озеро, в котором опять же
            на рассвете эпично отражается Фицрой. Подъем довольно крутой и
            непростой, но ничего сверхъестественного, десятки человек
            поднимаются сюда каждую ночь, чтобы встретить рассвет, ночное
            движение по тропе с фонариками довольно активное. Встречаем рассвет,
            снимаем на самом рассвете и в течение часа-двух после него, когда
            свет наиболее благоприятный, а краски просто фантастические. К обеду
            спускаемся в лагерь. Вторую половину дня и ночь проводим также как и
            предыдущий день.
          </p>
          <h4>Группа 2.</h4>
          <p>
            День отдыха в Эль-Чалтене после вчерашнего трека. Знакомство с
            окрестностями городка. Резервный день на случай непогоды.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 6. Треккинг в районе
            Фицроя.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <h4>Группа 1</h4>
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day6.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            В очередной раз выходим затемно, на этот раз уже собрав лагерь. Идем
            в сторону города Эль-Чалтен, встречаем рассвет у живописного
            водопадика в трех километрах от Пойнсенота. После окончания утренних
            съемок продолжаем путь и к обеду приходим в Эль-Чалтен, заселяемся в
            гостиницу, отмываемся, стираемся, а потом идем ужинать в местный
            ресторан с великолепным местным красным вином.
          </p>
          <h4>Группа 1</h4>
          <p>
            Однодневный трек к подножию пика Серро Торре. Серро Торре - вторая
            красивейшая вершина в этой части Патагонии. У подножия ледника
            расположено красивое озеро Торре, в котором плавают небольшие
            айсберги. Если нам повезет - то много таких льдин будет лежать на
            берегу. Вечером возвращение в гостиницу.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 7. Эль-Чалтен -
            Эль-Калафате.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day7.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Сегодня мы прощаемся с Эль-Чалтеном и горой Фицрой и отправляемся в
            Эль-Калафате. Прибытие в Калафате вечером, размещение в гостинице,
            отдых. Свободное время.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 8. Ледник Перито Морено.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day8.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Отправляемся смотреть один из самых больших и красивых ледников мира
            - Перито Морено. Из-за своей живописности и одновременно доступности
            Перито Морено стал одной из самых посещаемых достопримечательностей
            в Патагонии. Стены синего льда высотой 69 метров нависают прямо
            перед вами. Про цвет стоит отдельно сказать - синий оттенок льда
            настолько яркий, что поначалу просто в это не веришь. Место
            фантастическое и обязательное для посещения! Возвращение в гостиницу
            во второй половине дня, свободное время.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 9. переезд в Чили,
            Торрес-Дель-Пайне.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day9.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Рано утром мы садимся на автобус и выезжаем в сторону Чилиской
            границы. Пересекаем ее, приезжаем в городок Пуэрто Наталес, закупаем
            продукты и отправляемся в национальный парк Торрес-дель-Пайне.
            Останавливаемся в кемпинге на берегу озера Пео, ставим палатки. С
            берега озера Пео открывается самый красивый вид на башни Куэрнос.
            Проживание предусмотрено в палатках, так как гостиницы в парке
            баснословное дорогие. Кемпинг хорошо оборудован, палатки и коврики
            мы предоставим. Для каждой палатки есть навес, защищающий от дождя и
            ветра, стол, мангал. На территории есть по современному
            оборудованный туалет и душевые кабины.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 10. Торрес-Дель-Пайне.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day10.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Два дня мы посвятим прогулкам в районе озера, откуда открываются
            самые красивые виды в парке. Закаты и рассветы на берегу озера Пео,
            водопад Сальто-Гранде, обзорная площадка Миродор Кондор и т.д.
            Торрес-дель-Пайне - самый известный и самый посещаемый туристический
            объект Чили, жемчужина чилийской Патагонии и главная визитная
            карточка страны, расположен в 112 км от Пуэрто-Наталеса. Потрясающие
            горные пейзажи парка настолько великолепны, что не имеют аналогов в
            мире и считаются одним из самых впечатляющих творений природы. Такое
            звучное название парка Торрес-дель-Пайне в переводе с языка индейцев
            теулче означает «голубые башни». В 1978 году парк был взят под
            охрану ЮНЕСКО как биосферный заповедник.
          </p>
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
            <i className="fas fa-plus mr-2"></i> День 11. Торрес-Дель-Пайне -
            Эль-Калафате.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            Сегодня мы прощаемся с Чилийской Патагонией, возвращаемся в
            аргентинский Эль-Калафате и заселяемся в гостиницу. Приезд в Эль
            Калафате поздно вечером.
          </p>
        </div>
      </div>
      {/* DAY 12 */}
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
            <i className="fas fa-plus mr-2"></i> День 12. Эль-Калафате - Буэнос
            Айрес.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day12.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            До середины дня свободное время в Эль-Чалтене, покупка сувениров из
            Патагонии и т.д. Перелет в Буэнос Айрес, размещение в гостинице.
            Отдых.
          </p>
        </div>
      </div>
      {/* DAY 13 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-13"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-13"
            aria-expanded="false"
            aria-controls="collapse-13"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 13. Буэнос Айрес.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day13.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Свободный день в Буэнос Айресе. По сути это запасной день на случай
            нелетной погоды в Калафате, что в Патагонии бывает. Он нужен чтобы к
            межконтинентальному перелету быть точно в городе. Прогулки по центру
            города, покупка местных вин, деликатесов и сувениров перед
            отправлением домой. Вечером возможно посетить красивое танго-шоу в
            старинном театре, с красивыми танцорами, живой музыкой и ужином..
          </p>
        </div>
      </div>
      {/* DAY 13 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-14"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-14"
            aria-expanded="false"
            aria-controls="collapse-14"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 14. Вылет домой.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../img/tour-patagonia/small/day14.jpg')}
              alt="Камчатка с Севера на Юг"
            />
            Сегодня мы прощаемся с Аргентиной и отправляемся домой. Можно
            выбирать перелет на любое время.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KsuDays;
