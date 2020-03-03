import React from 'react';

const MvDays = () => {
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
              src={require('../../../img/tour-mv/small/day1.jpg')}
              alt="Активные Вулканы Камчатки"
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
            <i className="fas fa-plus mr-2"></i> День 2. Переезд к Берегу
            Охотского моря, ночевка в палатках.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day2.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Рано утром выезжаем на север полуострова, где расположена самая
            масштабная, высокая и пожалуй самая интересная вулканическая группа
            Камчатки. Здесь на сравнительно небольшой территории расположились:
            самый высокий действующий вулкан Евразии - Ключевской (4750м), самый
            сложный для восхождения на Камчатке вулкан Камень, место самого
            мощного извержения в ХХ веке - вулкан Безымянный, а также новые и
            старые Толбачинские вулканы, Овальная Зимина, Большая Удина,
            Крестовский, Ушковский, в хорошую погоду вдалеке можно увидеть
            вулкан Кизимен.
          </p>
          <p>
            Обедаем в Мильковской столовой посередине пути. К вечеру прибываем в
            поселок Козыревск. Здесь нас ждут простые, но уютные гостевые
            домики, баня, ужин.
          </p>
          <p>
            За день мы проедем 200 км по асфальту и еще 300 км по грунтовой
            дороге, дорога достаточно утомительная.
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
            <i className="fas fa-plus mr-2"></i> День 3. Переезд в поселок
            Паужетка, ночевка в частном доме.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day3.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Продолжаем путь к вулкану Толбачик, съезжаем на лесную дорогу и
            преодолев еще 70 километров утомительной лесной дороги (4-5 часов
            пути) с авто-бродом реки Студеная, попадаем в район Большого
            Трещинного Толбачинского Извержения (БТТИ), произошедшего в 1975
            году и образовавшего новую вулканическую пустыню. В декабре 2012
            года неподалеку началось Новое Трещинное извержение, его
            деятельность закончилась совсем недавно, а последствия можно будет
            наблюдать долгие годы.
          </p>
          <p>
            Подъезжаем на машине к интересным лавовым пещерам, длиной до 50
            метров, поднимаемся на новые вулканы (шлаковые конусы высотой до 300
            метров), где можно наблюдать гигантский старый лавовый поток,
            застывшие лавовые реки и где до сих пор сохранился жар недавнего
            извержения - земля горячая и можно зажечь палку, закопав ее в
            горячие породы. Также наблюдаем последствия Нового Трещинного
            извержения 2012-2013 годов.
          </p>
          <p>
            К вечеру ставим палаточный лагерь в районе сопки "Клешня". Высота
            лагеря - 1300 метров, вода здесь в большом дефиците (есть небольшой
            родничок и с собой мы привозим несколько сотен литров), погода
            неустойчивая, часто дуют сильнейшие ветра, необходима хорошая теплая
            одежда и прочная ветроустойчивая палатка.
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
            <i className="fas fa-plus mr-2"></i> День 4. Пеший переход 13 км от
            границы Кроноцкого заповедника до кордона "Озерный", палатки.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day4.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Восхождение на вулкан Плоский Толбачик (3081 м), на вершине нас ждет
            гигантский кратер около 2 км в диаметре, со стенок которого
            ежеминутно обрушиваются камнепады, красивый вид на юг - вся "лунная"
            вулканическая пустыня с многочисленными шлаковыми конусами.
            Восхождение достаточно сложное физически, набор высоты составляет
            2000 метров, по расстоянию предстоит пройти около 20 километров (без
            рюкзаков, налегке) сложного рельефа. Желающие могут остаться в
            лагере.
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
            <i className="fas fa-plus mr-2"></i> День 5. Экскурсия на Курильском
            озере, палатки.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day5.jpg')}
              alt="Активные Вулканы Камчатки"
            />
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
            <i className="fas fa-plus mr-2"></i> День 6. Выход с Курильского
            озера (13 км пешком), посещение Кутхиных Батов, ночевка в Паужетке.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day6.jpg')}
              alt="Активные Вулканы Камчатки"
            />
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
            <i className="fas fa-plus mr-2"></i> День 7. Переезд по берегу
            Охотского моря, палатки.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day7.jpg')}
              alt="Активные Вулканы Камчатки"
            />
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
            <i className="fas fa-plus mr-2"></i> День 8. Возвращение в гостиницу
            в Паратунке. Окончание "медвежей части" программы.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p></p>
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
            <i className="fas fa-plus mr-2"></i> День 9. Морская прогулка к
            острову СтАричкв (5 часов).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day9.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Морская экскурсия. Катер отправляется утром из морпорта
            Петропавловска-Камчатского, выходит в открытый океан через ворота
            Авачинской бухты и идет на юг вдоль восточного побережья Камчатки,
            изрезанного красивыми бухтами с высокими скальными бортами, по пути
            смотрим символ Петропавловска - скалы "Три брата", птичьи базары,
            виды на "домашние" вулканы и вулкан Вилючинский. Конечная точка -
            остров СтАричков, место гнездования огромного количества птиц. Обед
            на борту из свежесваренной ухи.
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
            <i className="fas fa-plus mr-2"></i> День 10. Переезд к вулкану
            Горелый (100км) и восхождение к кратеру (12 км налегке).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day12.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Переезд в район вулкана Горелый. Восхождение к кратеру вулкана
            Горелого (1829 метров) налегке - 2-3 часа в зависимости от
            физической подготовки, 1,5 часа на обход кратера, фотографирование,
            легкий перекус и спуск к машине, переезд к месту ночевки в палатках.
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
            <i className="fas fa-plus mr-2"></i> День 11. Восхождение к кратеру
            вулкана Мутновский (15 км налегке).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day13.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Экскурсия в кратер вулкана Мутновский. Внутри кратера легкий
            перекус, время на фотографирование, на обратном пути заход к
            водопаду в каньоне Опасный, возвращение к машине и далее в
            палаточный лагерь.
          </p>
          <p>
            Абсолютная высота Мутновского - 2323м, один из крупнейших вулканов
            юга Камчатки, за исторический период времени вулкан извергался не
            менее 16 раз. Наиболее сильное извержение произошло в 1848 году.
            Самое недавнее извержение приходится на 2000 год. Имеет сложное
            строение - несколько сросшихся кратеров. Через разрушенную стенку
            одного из кратеров туристы могут пройти внутрь мимо высоких отвесных
            скал и увидеть интенсивную фумарольную деятельность внутри.
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
            <i className="fas fa-plus mr-2"></i> День 12. Осомотр Дачных
            термальных источников, резервный день на погоду, возвращение в
            гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../img/tour-bpk/small/day4.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Переезд к Мутновской геотермальной электростанции, пешая экскурсия к
            Дачным термальным источникам, к вечеру возвращение в город. Дачные
            горячие источники иногда называют «Малой Долиной Гейзеров» - это
            активное фумарольное поле, горячие газы которого проходят сквозь
            воду холодного ручья, нагревая его и создавая эффект фонтанирования
            в ряде случаев. Ночевка в гостинице.
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
            <i className="fas fa-plus mr-2"></i> День 13. Рыбный рынок, магазин
            сувениров, трансфер в аэропорт.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../img/tour-mv/small/day13.jpg')}
              alt="Активные Вулканы Камчатки"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MvDays;