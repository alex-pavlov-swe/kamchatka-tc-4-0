import React from 'react';

const BpkDays = () => {
  document.title = 'Kamchatka Discovery Tour';
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
            <i className="fas fa-plus mr-2"></i> Day 1. Arrival at
            Petropavlovsk-Kamchatsky airport, city tour.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day1.jpg')}
              alt="Kamchatka Discovery tour"
            />
            Excursion to the Pacific Ocean shore - black volcanic sand beach
            stretches to the horizon, roar of the oceanic surf and exclusive
            lunch with local seafood - fish and caviar. On the way from the
            Ocean to the hotel we have a look at Petropavlosk city, one of the
            city hills reveals nice scenery on Avachinskaya bay, "home"
            volcanoes and city streets. In the evening we stay in a comfortable
            hotel with double rooms, dinner, shower and everything needed.
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
            <i className="fas fa-plus mr-2"></i> Day 2. Gorely Volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day2.jpg')}
              alt="Kamchatka Discovery tour"
            />
            Transfer to the region of Gorely and Mutnovsky volcano, settling a
            camp, ascending Gorely volcano, night in tents.
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
            <i className="fas fa-plus mr-2"></i> Day 3. Mutnovsly volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day3.jpg')}
              alt="Kamchatka Discovery tour"
            />
            Trekking inside the active crater of Mutnovsky volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 4. Dachnye hot springs,
            extra day in case of bad weather, transfer back to the hotel in
            Paratunka.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day4.jpg')}
              alt="Kamchatka Discovery tour"
            />
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
            <i className="fas fa-plus mr-2"></i> Days 5 - 7. Rafting along the
            Bystraya river.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day5.jpg')}
              alt="Kamchatka Discovery tour"
            />
            Three days rafting raftin along the Bystraya river. There is a good
            chance to see a bear, the river is full with salmon in August. We
            will stay in tents on the banks of the river for two nights, rafting
            down the river for about 5 hours per day.
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
            <i className="fas fa-plus mr-2"></i> Day 8. Ascending Avacha volcano
            or sea cruise for the "light version".
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day8.jpg')}
              alt="Kamchatka Discovery tour"
            />
            <h4>Option 1</h4>
            Ascending Avacha volcano is quite hard, we need to go up about 2000
            meters, but the view from the summit is magnificient.
          </p>
          <h4>Option 2</h4>
          <p>Sea cruise to the StArichkov island (5 hours).</p>
        </div>
      </div>
      {/* DAY 9 */}
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
            <i className="fas fa-plus mr-2"></i> Day 9. Departure.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day9.jpg')}
              alt="Kamchatka Discovery tour"
            />
            Fish market and gifts shop, then the airport. Goodbye, Kamchatka!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BpkDays;
