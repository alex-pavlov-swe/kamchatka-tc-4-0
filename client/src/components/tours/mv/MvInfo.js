import React from 'react';

const MvInfo = () => {
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
          <p>
            - трансферы по программе, по дорогам микроавтобусы, по бездорожью
            вахтовка Камаз с комфортным мягким салоном
          </p>
          <p>- встреча и проводы в аэропорт</p>
          <p>
            - двухместное проживание в гостинице "Фламинго" (одна ванная комната
            на два номера), завтраки и ужины в гостинице
          </p>
          <p>- проживание в гостевых домиках в поселке Козыревск</p>
          <p>- работа гида-инструктора и второго гида</p>
          <p>- трехразовое питание на маршруте</p>
          <p>- работа повара в базовом лагере </p>
          <p>
            - аренда общественного снаряжения (палатки, костровое оборудование и
            т.д.)
          </p>
          <p>- разрешение на посещение природного парка </p>
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
          <p>
            - обеды в кафе (день 1 - в Петропавловске, дни 2, 11 - в Мильково)
          </p>
          <p>- аренда спальника, коврика, палок (при необходимости)</p>
          <p>- авиабилет до Петропавловска-Камчатского.</p>
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
            размере 15 000 рублей (банковским переводом). В случае отказа от
            участия в туре позднее чем за 60 дней до его начала предоплата не
            возвращается.
          </p>
          <p>
            Полная оплата тура производится по прилету в
            Петропавловск-Камчатский, в день начала тура.
          </p>
          <p>
            Инструктор встречает в аэропорте, обеспечивает транспорт, размещение
            в гостинице, полноценное трехразовое питание, навигацию по маршруту
            и любую необходимую помощь.
          </p>
          <p>
            Еда в походе (на костре или газе) готовится самими туристами в
            порядке очереди (дежурства) при содействии и под руководством гида
            (помощника гида). В базовом лагере готовит повар.
          </p>
          <p>
            Маршрут и график его прохождения может быть изменен по решению гида
            в целях безопасности группы.
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
            Для покупки недорогих авиабилетов нужно начинить мониторить начало
            их продаж в начале октября и приобретать сразу после их появления.
            Минимальная стоимость - 25 000 рублей туда-обратно из Москвы, если
            не успеть купить во время - в 2-3 раза выше. Если Вы запишетесь в
            поход в августе-сентябре предыдущего года, мы оповестим вас о начале
            продаже дешевых билетов в день их появления.
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
            <li>сандалии с застегивающейся пяткой (для бродов)</li>
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
            <li>гамаши</li>
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
            Летний сезон на Камчатке длится с 1 июля по 15 сентября. Дождливые и
            солнечные дни равновероятно распределены по всему году. У нас нет
            "сезона дождей". Один год август будет солнечнее июля, другой -
            наоборот, никогда не угадаешь. Но в разных районах Камчатки у июля и
            августа есть свои особенности, отличные друг от друга, такие как
            количество снега, комаров и ночные температуры.
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
            В базовом лагере нам готовит повар, на маршруте - сами участники в
            порядке дежурства под руководством гида. Завтрак - каша (гречка,
            овсянка, рис, пшенка - на сгущенном молоке); обед - сухой паек
            (хлеб/сухари, сыр, колбаса, орехи, сухофрукты, шоколад, чай);
            варианты ужина - макароны или гречка с тушенкой, рис с сайрой, пюре
            с лососем (в консервах); чай, кофе, конфеты, печенье, пряники.
          </p>
        </div>
      </div>
      {/* Animals */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-27"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-27"
            aria-expanded="false"
            aria-controls="collapse-27"
            onClick={e => toggleArrowIcon(e)}
          >
            Медведи на маршруте
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-27">
          <p>
            Камчатка - это земля медведей. На полуострове живут 300 000 человек
            и 30 000 медведей. Камчатский бурый медведь питается лососем,
            ягодами и шиками. Человек не является для него предметом охоты. Но
            нападения медведей на людей случаются каждый год. Как правило это
            происходит в тот период когда рыба еще не зашла на нерест в реки
            (май - июнь), в августе - сентябре медведи посвящают все свое время
            рыбалке и наеданию достаточного количества жира для того чтобы
            пережить зиму.
          </p>
          <p>
            {' '}
            В рыбный период нападения медведей на людей могут произойти при
            неблагополучном стечении обстоятельств, которые могут быть
            спровоцированы опасным поведением со стороны человека - нахождение
            на берегу нерестовой реки, хождение в темное время суток, оствление
            продуктов питания и т.д.
          </p>
          <p>
            Все наши гиды имеют многолетний опыт пребывания в условиях природы
            Камчатки и хорошо осведомлены о том как минимизировать шанс
            конфликта с медведем.
          </p>
          <p>
            Большинство наших групп встречают как минимум одного медведя.
            Некоторые группы не встречают ни одного, но это скорее исключение.
            Некоторым группам везет повстречать с десяток медведей.
          </p>
          <p>
            За более чем 10 лет работы "Турклуба Камчатка" с нами путешествовали
            более 2000 человек и у нас не случилось ни одного нападения медведя.
            Что не доказывает невозможности подобного исхода. Но Вы можете
            оценить вероятность.
          </p>
        </div>
      </div>
      {/* Satelite network */}
      <div className="card">
        <div className="card-header">
          <button
            id="btn-info-27"
            className="btn text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapse-27"
            aria-expanded="false"
            aria-controls="collapse-27"
            onClick={e => toggleArrowIcon(e)}
          >
            Мобильная связь
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-27">
          <p>
            Мобильная связь есть только в дни ночевок в гостинице. Когда мы
            ночуем в палатках мобильной связи не будет.
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

export default MvInfo;
