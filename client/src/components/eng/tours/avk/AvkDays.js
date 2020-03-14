import React from 'react';

const AvkDays = () => {
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
              src={require('../../../../img/tour-avk/small/day1.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Arrival at Petropavlovsk-Kamchatsky airport, meeting the group and
            the guide. Excursion to the Pacific Ocean shore - black volcanic
            sand beach stretches to the horizon, roar of the oceanic surf and
            exclusive lunch with local seafood - fish and caviar. On the way
            from the Ocean to the hotel we have a look at Petropavlosk city, one
            of the city hills reveals nice scenery on Avachinskaya bay, "home"
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
            <i className="fas fa-plus mr-2"></i> Day 2. Transfer to Kozyrevsk
            village.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day2.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Early in the morning we start a long way to the north of the
            peninsula in order to reach Kluchevskoy nature park, about 500
            kilometres to go by car. Our target is to see the highest active
            volcano on the continent, the most difficult to climb the untouched
            Kamen volcano, the place of the most powerful eruption of the 20th
            century - Bezymianny volcano, furthermore - new and old Tolbachik
            volcanoes, 1975 eruption place with great volcanic desert and still
            hot craters. Today we stay for a night in a lodge in a small
            Kozyrevsk village
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
            <i className="fas fa-plus mr-2"></i> Day 3. Slag cones, Dead Forest,
            Tolbachik volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day3.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Our off-road Kamaz vehicle brings us to the region of Tolbachik
            eruption that took place in 1975 and again in 2012. We settle our
            tents right on the slag of those eruptions. After lunch we visit
            slag cones of the 1975 eruption, so called Dead Forest and a lave
            cave. From no and on we live in tents.
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
            <i className="fas fa-plus mr-2"></i> Day 4. Plosky Tolbachik
            (trekking 20km, ascending 2000 meters).
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day4.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Ascending Plosky Tolbachik volcano, 3081 meters above the sea level
            (we start from the point 1700 meters above the sea level). It takes
            about five hours to get to the top and see a great view of the huge
            crater two kilometers in diameter, wonderful scenery to the south -
            volcanic desert and cones.
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
            <i className="fas fa-plus mr-2"></i> Day 5. Extra day in case of bad
            weather. Another excursion near Tolbachik.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day5.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
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
            <i className="fas fa-plus mr-2"></i> Day 6. Transfer to the Northen
            slopes of Tolbachik vlocano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day6.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Relocation to the North slopes of Tolbachik volcano, making a camp
            near the Hoof mountain, a hike to a nearby spot with amazing views
            of Kluchevskaya and Kamen volcano. Kluchevskaya is the highest
            volcano in Kamchatka and it is an active one. In some years it is
            just smoking, in lucky ones there is a lava flow going down from its
            top. By some people this place is called "The Valley Of Giants" and
            it's famous for photos of Giants reflecting in the lake. Sunset and
            sunrise shooting sessions, astrophotography session is also possible
            depending on the weather.
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
            <i className="fas fa-plus mr-2"></i> Day 7. Walk in the Valley of
            the Giants.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day7.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
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
            <i className="fas fa-plus mr-2"></i> Day 8. Move bach to a hotel in
            Paratunka.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day8.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
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
            <i className="fas fa-plus mr-2"></i> Day 9. Sea cruise.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day9.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Sea cruise to the StArichkov island (5 hours).
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
            <i className="fas fa-plus mr-2"></i> Day 10. Gorely Volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../../img/tour-avk/small/day12.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Transfer to the region of Gorely and Mutnovsky volcano, settling a
            camp, ascending Gorely volcano, night in tents.
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
              src={require('../../../../img/tour-avk/small/day13.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
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
            <i className="fas fa-plus mr-2"></i> Day 12. Dachnye hot springs,
            extra day in case of bad weather, transfer back to the hotel in
            Paratunka.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../../img/tour-bpk/small/day4.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
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
              src={require('../../../../img/tour-avk/small/day14.jpg')}
              alt="Kamchatka Active Volcanoes Tour"
            />
            Fish market and gifts shop, then the airport. Goodbye, Kamchatka!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvkDays;
