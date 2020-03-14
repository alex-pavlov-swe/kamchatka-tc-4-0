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
            <i className="fas fa-plus mr-2"></i> Day 1. Arrival to
            Petropavlovsk-Kamchatsky.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day1.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Arrival to Petropavlovsk-Kamchatsky airport, transfer to the hotel
            in Paratunka - double rooms, natural thermal water swimming pool,
            rest after long flight, aclimatization. Meeting with the group and
            the guide, a brief excursion to Petropavlovsk-Kamchatsky and the
            coast of the ocean.
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
            <i className="fas fa-plus mr-2"></i> Day 2. Transfer to the Coast of
            Okhotskoye sea, night in tents.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day2.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Today we start a hard and long road to Kuril Lake by our 6-wheeled
            Kamaz vehicle. We will have to cross rivers and our schedule will
            depend on the tides of the sea. On the first day we plan to cross
            Opala river and stay for a night in tents on the coast of Okhotskoe
            sea.
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
            <i className="fas fa-plus mr-2"></i> Day 3. Transfer to Paujetka
            village, night in a lodge.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day3.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Continue our way to Kuril Lake and in the evening we arrive to
            Paujetka village where we stay for a night in camping with hot
            thermal water swimming pool.
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
            <i className="fas fa-plus mr-2"></i> Day 4. Trekkint to "Ozerny"
            rangers station of Kuril Lake, tents.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day4.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            13 km trekking from the border of Kronotsky Nature Reserve to its
            rangers' station 'Ozernaya'. The station is circled by electricity
            powered fence as a protection against bears. We will observe a lot
            of bears in their natural habitat. Accommodation in tents inside the
            protected area.
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
            <i className="fas fa-plus mr-2"></i> Day 5. Excursions on Kuril
            Lake.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day5.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Excursions on Kuril Lake, watching bears, light trekking.
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
            <i className="fas fa-plus mr-2"></i> Day 6. Excursions on Kuril
            Lake.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day6.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Excursions on Kuril Lake, watching bears, light trekking.
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
            <i className="fas fa-plus mr-2"></i> Day 7. Back to Paujetka.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day7.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Trekking back to the border of the Nature Reserve, transfer to the
            camping in Paujetka.
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
            <i className="fas fa-plus mr-2"></i> Day 8. Driving to Opala River,
            night in tents.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>The first half of the road back to Petropavlovsk-Kamchatsky.</p>
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
            <i className="fas fa-plus mr-2"></i> Day 9. Paratunka.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day9.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Arriving to Petropavlovsk, finishing the main part of the program to
            Kuril Lake. For the participants of the extended program -
            accommodation in a hotel in Paratunka.
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
            <i className="fas fa-plus mr-2"></i> Day 10. Gorely volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day12.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
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
            <i className="fas fa-plus mr-2"></i> Day 11. Mutnovsky volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day13.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Trekking inside the active crater of Mutnovsky volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 12. Back to the hotel in
            Paratunka. гостиницу.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day4.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Waterfall "Dangerous" and snow caves on the slopes of Mutnovsky
            volcano. In the evening we return back to a hotel.
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
            <i className="fas fa-plus mr-2"></i> Day 13. Departure.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../../img/tour-mv/small/day13.jpg')}
              alt="Bears and Volcanoes of Kamchatka"
            />
            Fish market and gifts shop, then the airport. Goodbye, Kamchatka!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MvDays;
