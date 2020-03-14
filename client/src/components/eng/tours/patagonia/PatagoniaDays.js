import React from 'react';

const PatagoniaDays = () => {
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
            <i className="fas fa-plus mr-2"></i> Day 1. Meeting in Buenos Aires.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day1.jpg')}
              alt="Patagonia in Autumn"
            />
            Meeting in the airport of Buenos Aires, transfer, accommodation in a
            hotel, rest after a long flight.
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
            <i className="fas fa-plus mr-2"></i> Day 2. BUENOS AIRES.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day2.jpg')}
              alt="Patagonia in Autumn"
            />
            City tour.
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
            <i className="fas fa-plus mr-2"></i> Day 3. Buenos Aires - El
            Calafate - El Chalten.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day3.jpg')}
              alt="Patagonia in Autumn"
            />
            First, we take a flight to El Calafate (3 hours), the gate to
            Patagonia. Transfer to El Chalten by bus (2-3 hours), accommodation
            in a hotel.
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
            <i className="fas fa-plus mr-2"></i> Day 4. Trekking to Pointenot
            camp.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day4.jpg')}
              alt="Patagonia in Autumn"
            />
            Leave the hotel at 4-30 a.m., trekking 8 kilometers with a backback
            to Poincenot campsite. Observation of the sunrise over Fitzroy
            mountain and its reflections in a small lake. For the next two
            nights we stay in tents.
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
            <i className="fas fa-plus mr-2"></i> Day 5. Laguna Los Tres.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day5.jpg')}
              alt="Patagonia in Autumn"
            />
            Leave the camp at 5-00 a.m., climb to Laguna Los Tres with a
            wonderful lake and another view on Fitzroy
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
            <i className="fas fa-plus mr-2"></i> Day 6. Bach to El Chalten.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day6.jpg')}
              alt="Patagonia in Autumn"
            />
            Once again, we depart from the camp early in the morning, meeting
            sunrise in a new photo spot with a view on Fitzroy. Then we move
            back to a hotel in El Chalten and a restaurant with wonderful local
            wine.
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
            <i className="fas fa-plus mr-2"></i> Day 7. El Chalten - El
            Calafate.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day7.jpg')}
              alt="Patagonia in Autumn"
            />
            Transfer to El Calafate, accommodation in a hotel, free time.
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
            <i className="fas fa-plus mr-2"></i> Day 8. Perito Moreno glacier.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day8.jpg')}
              alt="Patagonia in Autumn"
            />
            Excursion to Perito Moreno glacier.
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
            <i className="fas fa-plus mr-2"></i> Day 9. El Calafate - Torres Del
            Paine, Chile.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day9.jpg')}
              alt="Patagonia in Autumn"
            />
            Long road to Chile and its famous Torres Del Paine national park.
            Here we stay in tents, but the campsite has good toilets, shower and
            kitchen shelters.
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
            <i className="fas fa-plus mr-2"></i> Day 10. Torres Del Paine.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day10.jpg')}
              alt="Patagonia in Autumn"
            />
            Light trekking to different spots around lake Pehoe with different
            views on Cuernos towers.
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
            <i className="fas fa-plus mr-2"></i> Day 11. Torres Del Paine - El
            Calafate.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>Transfer back to El Calafate, hotel.</p>
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
            <i className="fas fa-plus mr-2"></i> Day 12. El Calafate - Buenos
            Aires.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day12.jpg')}
              alt="Patagonia in Autumn"
            />
            Flight to Buenos Aires.
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
            <i className="fas fa-plus mr-2"></i> Day 13. Buenos Aires.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day13.jpg')}
              alt="Patagonia in Autumn"
            />
            Free day in Buenos Aires.
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
            <i className="fas fa-plus mr-2"></i> Day 14. Flight home.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../../img/tour-patagonia/small/day14.jpg')}
              alt="Patagonia in Autumn"
            />
            Goodbye Argentina!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatagoniaDays;
