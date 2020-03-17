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
            переход к подножию вулкана Бакенинг.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day2.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Рано утром выезжаем на север полуострова к точке старта нашего
            маршрута неподалеку от подножия вулкана Бакенинг. Этот древний
            потухший вулкан незаслуженно обходят стороной туристы, а ему есть
            чем нас удивить: пестрое ожерелье озер вокруг, дикая нетронутая
            природа, пугливые бурые медведи — туристы здесь большая редкость;
            зато есть высокогорная тундра, вулканические конуса, поросшие ягелем
            и кедрачом лавовые потоки, целебные Тимоновские горячие источники и
            нарзан...Сегодня нам предстоит проехать на транспорте порядка 230
            км, по пути отведаем знаменитые «Сокочинские» пирожки. После
            перекуса мы делаем переход 10 км: сначала идем по пойме одного из
            притоков реки Правой Камчатки, потом поднимаемся на небольшое плато
            (древний заросший лавовый поток) и нашему вниманию предстает
            величественный Бакенинг высотой 2276 метров...Проходим плато, еще
            один небольшой подъем, проход через островки кедрача и мы на месте
            ночевки — озеро Демидова. Вечер у костра, ужин, знакомство группы.
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
            <i className="fas fa-plus mr-2"></i> День 3. Озеро Высокое.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day3.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            С утра делаем небольшую прогулку чтобы насладиться видом озера с
            высоты. Завтракаем, собираем лагерь и идем к озеру Высокому. Первая
            часть пути слегка осложнена отсутствием явной тропы и наличием
            преград в виде оврагов, кустов рододендрона и ольхового стланика. Мы
            распутаем этот лабиринт и спустя пару- тройку часов подойдем к
            кулуару по которому совершим подъем на перевал 1500
            метров...Придется попотеть…На перевале может быть ветрено и
            прохладно...С перевала открывается шикарный вид на озеро Высокое,
            которое находится в глубокой долине со всех сторон обрамленной
            горами...Наслаждаемся видами и начинаем спуск к озеру...по пути
            кушаем ягоду (брусника, шикша)...не забываем собрать немного на
            вечерний компот...Разбиваем лагерь на берегу под прикрытием лавового
            потока который остановился перед озером. Ужин, прогулка вдоль озера
            (по желанию), возможен вечерний костер.
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
            <i className="fas fa-plus mr-2"></i> День 4. Восхождение на вулкан
            Бакенинг.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day4.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Ранний завтрак и радиальное восхождение на вершину вулкана Бакенинг.
            Сегодня гуляем налегке. По знакомой дорожке поднимаемся обратно на
            вчерашний перевал и с него продолжаем наш путь к вершине. Подьем
            технически не сложный за исключением последних 300 метров, которые
            мы преодолеем, включая местами свои «4WD». В хорошую погоду вид с
            вершины просто супер и просматривается большая часть нашего
            маршрута!!! Видны вулканы: Авачинский, Корякский, Арик, Ааг, Камень,
            Зимина, Ичинский. Видны озера: Высокое, Росомашье, Егорова,
            Костакан, Верхне-Авачинское, Медвежье...Делаем перекус и назад в
            лагерь… Ужин, возможен вечерний костер.
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
            <i className="fas fa-plus mr-2"></i> День 5. Озеро Костакан.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day5.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Сегодня достаточно простой переход до озера Костакан: по пути мы
            пройдем озера Росомашье и Егорова (они же Малые озера), преодолеем
            пару маленьких «перевальчиков» 50-100 метров и попадем в зону леса и
            кустарников. Озеро Костакан лежит ниже по высоте и здесь все
            несколько иначе. Разбиваем лагерь, делаем перекус с горячим чаем и
            отправляемся исследовать окрестности озера. Сначала мы поднимемся на
            лавовый поток который почти полностью порос мхом, ягелем, редким
            кедрачом и маленькими березками, потом заберемся на древний
            вулканический конус и с него сделаем отличные фото нашего озера и
            его окружения...Обратно возвращаемся другим путем тем самым замыкая
            круг вокруг озера. Собираем дрова, готовим вкусный ужин и
            наслаждаемся трапезой у большого костра на берегу озера...Кстати,
            озеро значительно мелеет к осени и порой перепад местами составляет
            5-7 метров...берег похож на велотрек!
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
            <i className="fas fa-plus mr-2"></i> День 6. Тимоновские горячие
            источники.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day6.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Сегодня у нас длинный спуск/переход к Тимоновским горячим
            источникам. Ходить будем много (преимущественно по тропам), будем
            бродить пару раз реку среднюю Авачу (в сентябре уровень воды
            приемлемый и течение не такое стремительное)...Брод освежает и
            придает сил для финишного рывка...Немного Камчатских джунглей и
            выходим на джипперскую дорогу...по которой добираемся до базы
            отдыха, которая находится в 15 минутах от источников...Разбиваем
            лагерь, идем купаться и пить нарзан!!! Горячая водичка это кайф...мы
            его заслужили!!!
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
            <i className="fas fa-plus mr-2"></i> День 7. День отдыха.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day7.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Сегодня у нас день отдыха: релаксируем, купаемся, стираемся,
            приводим себя в порядок и мысленно настраиваемся на вторую часть
            пути, которая также весьма интересна. Обед. Делаем радиальный выход
            налегке к весьма живописному водопаду (2-3 часа).
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
            <i className="fas fa-plus mr-2"></i> День 8. Переход к озеру
            Верхне-Авачинское.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day8.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Сегодня мы начинаем наш переход к озеру Верхне-Авачинскому — это
            поистине красивейшее озеро в котором водится голец (рыба). Мы его
            поймаем и приготовим в разных вариантах…Но это будет завтра, а пока
            что нам предстоит проститься с чудесным горячим источником и снова
            устремиться вверх…В ближайшие 2 дня мы пройдем 6 небольших
            перевалов, увидим красивые горные цирки, таинственное озеро,
            возможно встретим медведя (кстати, встреча с ним возможна
            повсеместно) и горных коз…, увидим обратную сторону
            Бакенинга...Самое сложное в сегодняшнем дне это подняться к первому
            перевалу по диким местам без тропы через кусты и лес...Мы справились
            и теперь нам предстоит шагать по высокогорной тундре через пару
            небольших перевальчиков. В красивом месте сделаем перекус с видом на
            Бакенинг — зрелище завораживает! Проходим траверсом склон очередного
            перевала и с радостью наблюдаем место нашего лагеря... Разбиваем
            лагерь около ручья что впадает в маленькое озерцо...Отдыхаем. Пьем
            чай. Перед ужином можно прогуляться на соседнее озеро и встретить
            закат...Собираем дрова, делаем костер, ужинаем.
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
            <i className="fas fa-plus mr-2"></i> День 9. Озеро
            Верхне-Авачинское.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day9.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Продолжаем наш путь к гольцу! Еще пара «перевалов» с траверсами
            склона и мы практически на месте — осталось спуститься вниз к озеру
            Верхне-Авачинскому (что потребует от нас ловкости и упорства) и
            сделать брод знакомой нам уже реки Средней Авачи практически у ее
            истока. Пройдя немного по берегу озера встаем на стоянку, разбиваем
            лагерь и желающие идут рыбачить — все что нам нужно это немного
            лески + блесна, ну и запастись терпением…
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
            <i className="fas fa-plus mr-2"></i> День 10. Озеро Медвежье.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../img/tour-baken/small/day10.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Утренняя рыбалка по желанию. Рюкзак наш изрядно уже полегчал — оно и
            понятно — скоро финиш. Сегодня идем до озера Медвежьего по тропе
            через тундру, кусты, заросли ольхового стланика, вдоль реки (брод по
            колено). Переход не большой и не сильно сложный. Мы уже и не такое
            видели…При желании можно попробовать порыбачить. Лагерь, сбор дров,
            костер, ужин...Классика жанра одним словом! Ранний отбой.
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
              src={require('../../../img/tour-baken/small/day11.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Сегодня у нас заключительный день в районе Бакенинга. Ранний завтрак
            и вперед штурмовать перевал 1260 метров…Он не столько высокий
            сколько протяженный. С перевала открывается хороший вид на Бакенинг
            (абсолютно разный со всех сторон), прекрасная панорама мини-вулкана
            Ново-Бакенинг и его лавовых потоков, озера Сусликового…Спуск с
            перевала, перекус. Еще немного и мы замыкаем круг и выходим на
            знакомую тропу по которой устремляемся на финиш!!! Переезд в
            гостиницу 230 км.
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
              src={require('../../../img/tour-baken/small/day12.jpg')}
              alt="Поход вокруг вулкана Бакенинг"
            />
            Окончание тура, трансфер в аэропорт с заездом на рыбный рынок и в
            магазин сувениров.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BakenDays;
