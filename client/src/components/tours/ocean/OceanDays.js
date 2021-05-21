import React from 'react';

const OceanDays = () => {
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
              src={require('../../../img/tour-ocean/small/day1.jpg')}
              alt="Морское путешествие по Камчатке"
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
            К вечеру заселяемся в гостиницу в Паратунке или Петропавловске,
            двухместное размещение, горячее питание включено (ужин, завтрак).
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
            <i className="fas fa-plus mr-2"></i> День 2. Погрузка на тримараны,
            старт экспедиции, переход в бухту Большая Саранная.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day2.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Старт из города Петропавловска-Камчатского на надувных 10-ти местных
            тримаранах. Смотрим скалы Три Брата – символ города
            Петропавловска-Камчатского. Далее путь держим к острову СтАричков,
            возле которого можно увидеть нерп, отдыхающих на камнях. После
            острова уходим вглубь бухты Большая Саранная. Морской переход в этот
            день составит 2,5-3 часа. На косе между бухтой Саранной и
            одноименным озером ставим лагерь, обедаем. После обеда осваиваем
            морские каяки, на которых можно покататься по озеру, упирающемуся в
            вулкан Вилючинский.
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
            <i className="fas fa-plus mr-2"></i> День 3. Бухта Вилючинская.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day3.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Трехчасовой переход в бухту Вилючинская. По пути остановка на мысе
            Зеленом с небольшой пешей прогулкой на видовую точку. После
            постановки лагеря и обеда идем в двухчасовой пеший поход к водопаду,
            с которого открывается красивый вид на бухту и устье реки. Вечером
            можно покататься на каяках по бухте.
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
            <i className="fas fa-plus mr-2"></i> День 4. Бухта Тихирка.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day4.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Трехчасовой переход в бухту Тихирка, расположенную на входе в бухту
            Русская. После постановки лагеря и обеда можно покататься по
            маленькой, но очень красивой бухте Тихирка и по реке,
            расположившейся в красивой долине среди гор. Вечером, на берегу
            реки, организовываем походную баню.
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
            <i className="fas fa-plus mr-2"></i> День 5. Бухта Лиственничная.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day5.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Радиальный выход на тримаранах в бухты Лиственничная и Рукавичка, по
            пути смотрим мыс Кекурный, где расположено лежбище сивучей.
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
            <i className="fas fa-plus mr-2"></i> День 6. Бухта Саранная.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day6.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Возвращение в бухту Большая Саранная. По пути остановка на морскую
            рыбалку.
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
            <i className="fas fa-plus mr-2"></i> День 7. Возвращение в
            гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day7.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            После обеда сбор лагеря и выход. Возвращение в город
            Петропавловск-Камчатский ориентировочно к 16 часам.
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
            <i className="fas fa-plus mr-2"></i> День 8. Переезд к вулкану
            Горелый (100км) и восхождение к кратеру (12 км налегке).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day8.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Переезд в район вулкана Горелый. Восхождение к кратеру вулкана
            Горелого (1829 метров) налегке - 2-3 часа в зависимости от
            физической подготовки, 1,5 часа на обход кратера, фотографирование,
            легкий перекус и спуск к машине, переезд к месту ночевки в палатках.
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
            <i className="fas fa-plus mr-2"></i> День 9. Восхождение к кратеру
            вулкана Мутновский (15 км налегке).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day9.jpg')}
              alt="Морское путешествие по Камчатке"
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
            <i className="fas fa-plus mr-2"></i> День 10. Осомотр Дачных
            термальных источников, резервный день на погоду, возвращение в
            гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day10.jpg')}
              alt="Морское путешествие по Камчатке"
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
            <i className="fas fa-plus mr-2"></i> День 11. Подъезжаем под вулкан
            Авачинский и делаем восхождение на его кратер (высота 2751 метр).
            Путь наверх в среднем темпе занимает от 5 до 7 часов, на кратере нас
            ждет потрясающий вид на окрестности - Петропавловск-Камчатский,
            Авачинская бухта, побережье Тихого океана, Налычевская долина,
            вулканы Корякский, Козельский, Жупановский, Мутновский. В кратере не
            прекращается активная деятельность, пахнет серой, парят фумаролы,
            земля горячая - можно согреться и укрыться от холодного ветра.
            Спустившись с кратера, на машине возвращаемся в гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            <img
              src={require('../../../img/tour-ocean/small/day11.jpg')}
              alt="Морское путешествие по Камчатке"
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
              src={require('../../../img/tour-ocean/small/day12.jpg')}
              alt="Морское путешествие по Камчатке"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OceanDays;
