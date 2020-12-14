import React from 'react';

const KoDays = () => {
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
              src={require('../../../img/tour-ko/small/day1.jpg')}
              alt="Поход в Парк Налычево"
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
            К вечеру заселяемся в гостиницу в курортной зоне Паратунка,
            двухместное размещение, горячее питание включено (ужин, завтрак),
            бассейн с природной горячей термальной водой.
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
            <i className="fas fa-plus mr-2"></i> День 2. Начало маршрута,
            переход через перевал Авачинский.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day2.jpg')}
              alt="Поход в Парк Налычево"
            />
            Выезжаем к стартовой точке маршрута - к перевалу между вулканами
            Авачинский и Корякский. Выходим на тропу в Налычевскую долину,
            спускаемся с Авачинского перевала, идем по вулканической пустыне,
            великолепные и необычные виды в хорошую погоду, гигантская постройка
            Авачинского вулкана открывается с новой стороны, виден старый
            лавовый поток, обходим вулкан Корякский (3456 метров) с северной
            стороны, где он сплошь покрыт ледниками. Ночуем в палатках под
            Красной сопкой. Переход 16 км.
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
            <i className="fas fa-plus mr-2"></i> День 3. Переход к реке Шумная.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day3.jpg')}
              alt="Поход в Парк Налычево"
            />
            Продолжаем путь в долину, преодолеваем несколько речушек, возможно
            вброд (глубина по щиколотку), наблюдаем со стороны интересные
            древние вулканы Ааг и Арик, после обеда выходим к водопаду на реке
            Шумной и, чуть пройдя от него, ставим лагерь на поляне под сопкой
            Медвежья. Переход - 12 км.
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
            <i className="fas fa-plus mr-2"></i> День 4. Центральный кордон.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day4.jpg')}
              alt="Поход в Парк Налычево"
            />
            Заключительный день пути к Центральному кордону Налычевского парка,
            сегодня путь идет по красивому каменно-березовому лесу, проходим
            мимо нарзанов и ягодных полян, после обеда выходим к кордону, ставим
            палаточный лагерь на реке Желтой, купаемся в горячих термальных
            источниках, где можно помыться и отлично отдохнуть после долгого
            перехода. На кордоне нас будет ждать заброска продуктов на
            оставшуюся часть маршрута, так что много еды в рюкзаках нести не
            придется. Переход 12 км. Начиная с этого дня размещение на ночь
            возможно не в палатках, а в домиках природного парка по цене 300
            рублей в сутки (не включено в стоимость). По ночам в долине уже
            довольно холодно, поэтому этой возможностью как правило пользуются
            все туристы.
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
            <i className="fas fa-plus mr-2"></i> День 5. День отдыха.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day5.jpg')}
              alt="Поход в Парк Налычево"
            />
            День отдыха, гуляем по долине - купаемся в термальных источниках,
            осматриваем термальную площадку и прочие достопримечательности,
            заходим на экскурсию в небольшой местный музей, где нам расскажут о
            долине, ее вулканах, горячих и холодных минеральных источниках, а
            также о населяющих ее животных. В долине запросто можно увидеть
            соболя, суслика, сурка, зайца, лису и конечно же медведя, возможная
            встреча с которым добавляет остроты ощущениям во время нахождения в
            парке. Отметим, что камчатский бурый медведь кормится рыбой и
            ягодами, человека они стараются избегать и при соблюдении правил
            (которые вам расскажет гид) вы будете в безопасности.
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
            <i className="fas fa-plus mr-2"></i> День 6. Таловский кордон.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day6.jpg')}
              alt="Поход в Парк Налычево"
            />
            После обеда снимаем лагерь и идем дальше, к Таловскому кордону (11
            км), там так же есть термальные источники и возможность переночевать
            в деревянном домике, также есть небольшая грязевая ванна.
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
            <i className="fas fa-plus mr-2"></i> День 7. Вулкан Дзендзур.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day7.jpg')}
              alt="Поход в Парк Налычево"
            />
            Восхождение налегке к разрушенному гигантским взрывом кратеру
            вулкана Дзендзур, путь наверх проходит по ручью "Желоб" - за многие
            годы вода прорубила себе дорогу в лавовом потоке, отполировав стены
            ручья и образовав интересные горки с завихрениями воды. В конце пути
            нас ждет довольно мощная фумарола и интереснейший вид на всю
            Налычевскую долину, вулкана Корякский и Авачинский, а также на
            океан. С перевала Дзендзур открывается завораживающий вид на
            пространства к северу от горной цепи - вулкан Жупановский,
            Жупановский востряки, в хорошую погоду видно находящийся в активной
            стадии извержения вулкан Карымский, силуэт вулкана Кроноцкий. К
            вечеру возвращаемся в лагерь, еще одна ночевка на Таловском кордоне.
            Переход за день 23 км (налегке).
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
            <i className="fas fa-plus mr-2"></i> День 8. Центральный кордон.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day8.jpg')}
              alt="Поход в Парк Налычево"
            />
            Возвращаемся на Центральный кордон парка, где ставим лагерь на реке
            Желтая, купаемся в источниках. Переход - 11 км.
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
            <i className="fas fa-plus mr-2"></i> День 9. Начало обратного пешего
            перехода.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day9.jpg')}
              alt="Поход в Парк Налычево"
            />
            Начинаем путь к выходу с маршрута, подходим к перевалу Пиначевский и
            ставим лагерь на окраине леса. Переход - 10 км.
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
            <i className="fas fa-plus mr-2"></i> День 10. Перевал Пиначевский.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day10.jpg')}
              alt="Поход в Парк Налычево"
            />
            Преодолеваем перевал Пиначевский, с перевала хорошо просматривается
            вся долина, вулканы Дзендзур и Жупановский, Ааг, сопка Медвежья.
            Спускаемся с перевала и ночуем на Семеновском кордоне парка. Переход
            - 12 км.
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
            <i className="fas fa-plus mr-2"></i> День 11. Окончание похода.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day11.jpg')}
              alt="Поход в Парк Налычево"
            />
            Заключительный день, идем вниз по течению реки Пиначевская, по
            хорошей лесной тропе, после обеда выходим к поселку Пиначево, там
            нас встречает машина и везет в гостевой домик, где мы отмываемся,
            отъедаемся и готовимся к вылету домой. Переход 20 км.
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
            <i className="fas fa-plus mr-2"></i> День 12. Рыбный рынок, магазин
            сувениров, трансфер в аэропорт.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../img/tour-ko/small/day12.jpg')}
              alt="Поход в Парк Налычево"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KoDays;
