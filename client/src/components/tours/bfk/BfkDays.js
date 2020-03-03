import React from 'react';

const BfkDays = () => {
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
            <i className="fas fa-plus mr-2"></i> День 1. Прилет на Камчатку.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day1.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Встреча в аэропорте Петропавловска-Камчатского. Заселение в
            гостиницу в курортной зоне Паратунка, двухместное размещение,
            (туалет и душ - один на 2 номера), горячее питание включено (ужин,
            завтрак), бассейн с природной горячей термальной водой. Знакомство с
            группой и гидом, обсуждение планов. Поездка на сопку Мишенная в
            центре Петропавловска, съемки на закате.
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
            <i className="fas fa-plus mr-2"></i> День 2. переезд в поселок
            Козыревск.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day2.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Рано утром выезжаем на север полуострова, где расположена самая
            масштабная, высокая и пожалуй самая интересная вулканическая группа
            Камчатки. Здесь на сравнительно небольшой территории расположились:
            самый высокий действующий вулкан Евразии - Ключевской (4750м), самый
            сложный для восхождения на Камчатке вулкан Камень, место самого
            мощного извержения в ХХ веке - вулкан Безымянный, а также новые и
            старые Толбачинские вулканы, Овальная Зимина, Большая Удина,
            Крестовский, Ушковский, в хорошую погоду вдалеке можно увидеть
            вулкан Кизимен. Обедаем в Мильковской столовой посередине пути. К
            вечеру прибываем в поселок Козыревск. Здесь нас ждут простые, но
            уютные гостевые домики, баня, ужин. За день мы проедем 200 км по
            асфальту и еще 300 км по грунтовке, дорога достаточно утомительная.
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
            <i className="fas fa-plus mr-2"></i> День 3. район вулкана Толбачик.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day3.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Переезд в район Толбачинского извержения 1975 и 2012 годов, который
            расположен к югу от вулкана Толбачик, базовый лагерь турфирм
            находится у сопки Клешня, (до извержения 2012 года лагерь назывался
            "Ленинградка"). Этот район представляет из себя шлаковую пустыню с
            застывшими лавовыми потоками разных лет, шлаковыми конусами 100-300
            метров в высоту, напоминающих неземной пейзаж (лунный или
            марсианский, кому что больше нравится), лавовые пещеры, а также
            знаменитый "Мертвый Лес". Дорога от поселка Козыревск до места
            лагеря занимает около 5 часов, середина дня будет занята обедом и
            установкой лагеря, затем вечерние и при наличии погоды ночные съемки
            в районе шлаковых конусов.
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
            <i className="fas fa-plus mr-2"></i> День 4. Район вулкана Толбачик.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day4.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Два дня в районе Толбачинского извержения 1975 и 2012 годов. Мы
            будем снимать вулканическую пустыню, шлаковые конусы, свежие
            застывшие лавовые потоки, лавовые пещеры, мертвый лес. Размещение в
            палатках.
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
            <i className="fas fa-plus mr-2"></i> День 5. Район вулкана Толбачик.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day5.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Второй день в районе вулкана Толбачик.
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
            <i className="fas fa-plus mr-2"></i> День 6. Козыревск.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day6.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            После съемок на рассвете мы переезжаем в поселок Козыревск,
            размещаемся в местном гостевом домике, отдых, душ, баня.
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
            <i className="fas fa-plus mr-2"></i> День 7. Гора Копыто.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day7.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Переезд на северный склон вулкана Толбачик, к горе Копыто. Здесь
            открываются замечательные виды на самый высокий действующий вулкан
            континента - Ключевскую сопку, а также на вулкан Камень. Экскурсия к
            озеру с отражением вулканов, место иногда называют "Долиной
            Великанов".
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
            <i className="fas fa-plus mr-2"></i> День 8. Козыревск.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day8.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            ППродолжаем съемки утром и во второй половине дня возвращаемся в
            гостевой домик в поселке Козыревск.
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
            <i className="fas fa-plus mr-2"></i> День 9. Гора Подкова.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day9.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Переезд на северные склоны вулкана Ключевской - к горе Подкова.
            Установка лагеря. Съемки великолепной Ключевской группы вулканов с
            нового ракурса.
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
            <i className="fas fa-plus mr-2"></i> День 10. Продолжаем съемки в
            районе горы Подкова.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day10.jpg')}
              alt="Большой Фототур по Камчатке"
            />
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
            <i className="fas fa-plus mr-2"></i> День 11.
            Петропавловск-Камчатский.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>Переезд обратно в Петропавловск-Камчатский займет весь день.</p>
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
            <i className="fas fa-plus mr-2"></i> День 12. Переезд к вулкану
            Горелый (100км).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day12.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Переезд к вулкану Горелый. При благоприятной погоде мы совершим
            ночное восхождение на вулкан Горелый. Встретить рассвет на его
            вершине - незабываемое зрелище.
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
            <i className="fas fa-plus mr-2"></i> День 13. Восхождение к кратеру
            вулкана Мутновский (15 км налегке), переезд в гостиницу (100км).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day13.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Экскурсия в кратер вулкана Мутновский. Абсолютная высота Мутновского
            - 2323м, один из крупнейших вулканов юга Камчатки, за исторический
            период времени вулкан извергался не менее 16 раз. Наиболее сильное
            извержение произошло в 1848 году. Самое недавнее извержение
            приходится на 2000 год. Имеет сложное строение - несколько сросшихся
            кратеров. Через разрушенную стенку одного из кратеров туристы могут
            пройти внутрь мимо высоких отвесных скал и увидеть интенсивную
            фумарольную деятельность внутри.
          </p>
        </div>
      </div>{' '}
      {/* DAY 14 */}
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
            <i className="fas fa-plus mr-2"></i> День 13. Восхождение к кратеру
            вулкана Мутновский (15 км налегке), переезд в гостиницу (100км).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day14.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Экскурсия в кратер вулкана Мутновский. Абсолютная высота Мутновского
            - 2323м, один из крупнейших вулканов юга Камчатки, за исторический
            период времени вулкан извергался не менее 16 раз. Наиболее сильное
            извержение произошло в 1848 году. Самое недавнее извержение
            приходится на 2000 год. Имеет сложное строение - несколько сросшихся
            кратеров. Через разрушенную стенку одного из кратеров туристы могут
            пройти внутрь мимо высоких отвесных скал и увидеть интенсивную
            фумарольную деятельность внутри.
          </p>
        </div>
      </div>
      {/* DAY 15 */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-day-15"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-15"
            aria-expanded="false"
            aria-controls="collapse-15"
            onClick={e => togglePlusIcon(e)}
          >
            <i className="fas fa-plus mr-2"></i> День 15. Рыбный рынок, магазин
            сувениров, трансфер в аэропорт.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-15">
          <p>
            <img
              src={require('../../../img/tour-bfk/small/day15.jpg')}
              alt="Большой Фототур по Камчатке"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BfkDays;