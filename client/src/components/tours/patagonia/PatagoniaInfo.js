import React from 'react';

const PatagoniaInfo = () => {
  const toggleArrowIcon = e => {
    /*
    if (e.target.nodeName === 'BUTTON') {
      const item = document.querySelector('#' + e.target.id + ' .fas');
      item.classList.toggle('fa-chevron-down');
      item.classList.toggle('fa-chevron-up');
    } else {
      e.target.classList.toggle('fa-chevron-down');
      e.target.classList.toggle('fa-chevron-up');
    }
    */
  };
  return (
    <div className="col-lg-5 info">
      <div>
        <a className="btn-info p-2 mb-2" href="#contact-form">
          ЗАБРОНИРОВАТЬ
        </a>
      </div>
      {/* What is included */}
      <div className="card mt-2">
        <div className="card-header">
          <button
            id="btn-info-20"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-20"
            aria-expanded="false"
            aria-controls="collapse-20"
            onClick={e => toggleArrowIcon(e)}
          >
            В стоимость включено <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-20">
          <p>трансфер аэропорт -отель - аэропорт в Буэнос-Айресе;</p>
          <p>внутренний перелет Буэнос-Айрес - Эль-Калафате - Буэнос-Айрес;</p>
          <p>
            гостиница в Буэнос-Айресе по прилету и перед вылетом домой (4 ночи,
            двухместное размещение);
          </p>
          <p>
            гостиница в Эль-Калафате, Эль-Чалтене (7 ночей, 2-3 местное
            размещение);
          </p>
          <p>завтраки на базе гостиниц;</p>
          <p>пермиты в национальные парки;</p>
          <p>экскурсия по Буэнос-Айресу;</p>
          <p>
            набор продуктов для приготовления пищи в национальном парке
            Торрес-дель-Пайне;
          </p>
          <p>транспорт аэропорт - Эль-Калафате - аэропорт;</p>
          <p>транспорт Эль-Калафате - Эль-Чалтен - Эль-Калафате;</p>
          <p>экскурсия к леднику Перито Морено;</p>
          <p>транспорт Эль-Калафате - Пуэрто-Наталес ;</p>
          <p>транспорт Пуэрто-Наталес - Торрес-дель-Пайне;</p>
          <p>
            стоянка в кемпинге в Пайне (Возможна только в палатках, палатки и
            коврики предоставляем);
          </p>
          <p>работа гида (русский, английский)</p>
          <p>медицинская страховка.</p>
        </div>
      </div>
      {/* What is NOT included */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-21"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-21"
            aria-expanded="false"
            aria-controls="collapse-21"
            onClick={e => toggleArrowIcon(e)}
          >
            В стоимость не включено <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-21">
          <p>международный перелет в Буэнос-Айрес и обратно (около 1000$);</p>
          <p>
            доплата за одноместное размещение в гостиницах в Б-А, Э-Калафате,
            Э-Чалтене (400$);
          </p>
          <p>обеды и ужины в кафе и ресторанах;</p>
          <p>напитки;</p>
          <p>танго-шоу;</p>
          <p>
            могут взиматься дополнительные деньги за багаж на местных
            авиалиниях;
          </p>
          <p>любые другие расходы не входящие в стоимость</p>
        </div>
      </div>
      {/* How to book */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-22"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-22"
            aria-expanded="false"
            aria-controls="collapse-22"
            onClick={e => toggleArrowIcon(e)}
          >
            Порядок оплаты и бронирования
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-22">
          <p>
            Предварительное бронирование места в группе происходит после подачи
            заявки - через форму на сайте, письмом на электронную почту или по
            телефону. Предварительная бронь действительна в течение 45 дней с
            момента подачи заявки.
          </p>
          <p>
            Для окончательного бронирования необходимо внести предоплату в
            размере 800гыв(банковским переводом). В случае отказа от участия в
            туре позднее чем за 60 дней до его начала предоплата не
            возвращается.
          </p>
          <p>
            Полная оплата тура производится по прилету в Буэнос Айрес, в день
            начала тура.
          </p>
          <p>
            В случае отказа от участия в туре ранее чем за 90 дней до его начала
            возвращается 50% от предоплаты (400 $).
          </p>
          <p>
            Инструктор встречает в аэропорте, обеспечивает транспорт, размещение
            в гостинице, полноценное трехразовое питание, навигацию по маршруту
            и любую необходимую помощь.
          </p>
        </div>
      </div>
      {/* Airline tickets */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-23"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-23"
            aria-expanded="false"
            aria-controls="collapse-23"
            onClick={e => toggleArrowIcon(e)}
          >
            Авиабилеты
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-23">
          <p>
            Программа тура начинается в столице Аргентины Буэнос-Айресе. Есть
            несколько вариантов перелета из Москвы. Один из рекомендуемых
            вариантов по состоянию на 2019 год - это перелет турецкой
            авиакомпанией Turkish Airlines, стоимость которого порядка 1000$
            туда-обратно. В таком варианте Вы покупаете прямой билет Москва -
            Буэнос-Айрес с пересадкой в Стамбуле. Въезд в Турцию для граждан
            России безвизовый. Из приятных бонусов - отличный сервис данной
            авиакомпании, два места багажа по 23 кг включены в стоимость,
            пересадка в Стамбуле возможна продолжительностью на выбор от 2-3
            часов до двух суток, что даст возможность посмотреть город. Въезд
            для граждан России в Аргентину и Чили безвизовый.
          </p>
        </div>
      </div>
      {/* The equipment*/}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-30"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-30"
            aria-expanded="false"
            aria-controls="collapse-30"
            onClick={e => toggleArrowIcon(e)}
          >
            Список снаряжения
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-30">
          <ul>
            <li>
              треккинговая обувь (для "тяжелого" треккинга, т.е. высокие
              ботинки)
            </li>
            <li>термобелье (теплое)</li>
            <li>непромокаемые штаны</li>
            <li>
              ветро-влагозащитная куртка (желательно с мембраной и с капюшоном)
            </li>
            <li>куртка из полартека ("флиска")</li>
            <li>пуховая безрукавка</li>
            <li>шапка</li>
            <li>
              перчатки (лучше флисовые, но хотя бы тряпичные иметь необходимо)
            </li>
            <li>головной убор от солнца</li>
            <li>солнцезащитные очки</li>
            <li>теплые носки</li>
            <li>купальник</li>
            <li>спальник с "температурой комфорта" не выше 0 градусов</li>
            <li>рюкзак объемом не менее 75 литров с чехлом от дождя</li>
            <li>
              вкладыш в рюкзак (гермомешок или большой пакет, куда укладывается
              спальник и сухие вещи для защиты от влаги)
            </li>
            <li>посуда (тарелка, кружка, ложка)</li>
            <li>крем от солнца</li>
            <li>
              коврик (на котором спать, по-другому - подстилка, каремат, пенка)
            </li>
            <li>фонарик налобный</li>
            <li>треккинговые палки (обязательно!)</li>
            <li>средство от комаров</li>
            <li>накомарник (обязательно!!!)</li>
            <li>
              индивидуальная аптечка - только специфичные для вас лекарства,
              основное (перевязка, парацетомол и подобное) есть в общей аптечке
              у гида
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      {/* The weather */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-25"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-25"
            aria-expanded="false"
            aria-controls="collapse-25"
            onClick={e => toggleArrowIcon(e)}
          >
            Погода
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-25">
          <p>
            Апрель в Патагонии похож на Камчатский сентябрь. Днем в городе может
            быть +10 - + 15. В горах ночью температура может опускаться до нуля,
            возможен снег. Сильные ветра - очень частое явление. Поэтому одежда
            должна быть теплая. Куртка, шапка, перчатки и теплый спальник -
            обязательно. Это плата за возможность увидеть самое живописное время
            года.
          </p>
        </div>
      </div>
      {/* Accommodation */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-26"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-26"
            aria-expanded="false"
            aria-controls="collapse-26"
            onClick={e => toggleArrowIcon(e)}
          >
            Accommodation
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-26">
          <p>
            Часть нашего путешествия, а именно 11 ночей по программе
            предусмотрены в гостиницах 3*** и 3 ночи в палаточном лагере в Чили.
            Гостиницы по маршруту подобраны хорошего уровня по меркам Южной
            Америки 3+*** . Если вы путешествуете в одиночку, то мы найдем вам
            второго человека в номер. Примеры гостиниц, в которых планируется
            проживание, это могут быть как конкретно эти же гостиницы, так и
            альтернативы такого же уровня: Эль-Чалтен - Hotel Poincenot 3.5***
            Эль-Калафате - Sierra Nevada 3,5 *** Буэнос Айрес - Merit San Telmo
            3 *** Торрес-дель-Пайне (Чили, 3 ночи) - Палаточный кемпинг на
            территории которого есть благоустроенный туалет, душ, крытые места
            под палатки.
          </p>
        </div>
      </div>
      {/* The food */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-26"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-26"
            aria-expanded="false"
            aria-controls="collapse-26"
            onClick={e => toggleArrowIcon(e)}
          >
            Питание на маршруте
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-26">
          <p>
            Когда ночуем в гостиницах, питаемся в кафе и ресторанах (это не
            входит в стоимость). Когда идем в горы - берем с собой продукты и
            готовим сами, на всю группу (продукты в стоимость входят).
          </p>
        </div>
      </div>

      {/* The food */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-28"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-28"
            aria-expanded="false"
            aria-controls="collapse-28"
            onClick={e => toggleArrowIcon(e)}
          >
            Можно ли принять участие если нет опыта
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-28">
          <p>
            Конечно можно. Путешествие по Камчатке - это не управление Боингом
            или атомной электростанцией, можно приехать без опыта и отлично
            провести время. Только одно условие - тщательная подготовка.
            Прочитайте внимательно всю информацию на этой странице, прочитайте
            несколько подробных рассказов о походе по Камчатке в интернете,
            посмотрите видео, прочитайте рекомендации по снаряжению, поговорите
            с опытным продавцом-консультантом в хорошем специализированном
            магазине, задайте вопросы нам как организаторам, оцените свою
            физическую форму и сделайте шаги по ее улучшению если нужно, и все
            будет хорошо!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatagoniaInfo;
