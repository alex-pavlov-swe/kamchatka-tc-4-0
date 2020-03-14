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
            <i className="fas fa-plus mr-2"></i> Day 1.
            Petropavlovsk-Kamchatsky.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-1">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day1.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Arrival to Petropavlovsk-Kamchatsky airport, transfer to the hotel
            in Paratunka - double rooms, natural thermal water swimming pool,
            rest after long flight, acclimatization. Meeting with the group and
            the guide, discussing plans. In the evening we drive to Mishennaya
            hill in Petropavlovsk city center where we shoot the views of the
            city, nearby volcanoes and Avacha bay.
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
            <i className="fas fa-plus mr-2"></i> Day 2. Kozyrevsk.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day2.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            In the morning we start a long way to the north of the peninsula.
            During the whole trip we will travel by oir 6-wheeled Kamaz off-road
            vehicle with a comfortable interior and seats like in an airplane.
            Usually it takes about 9 hours to reach Kozyrevsk settlement where
            we stay for a night in a very simple but cozy wooden cabins with
            Russian sauna available.
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
            <i className="fas fa-plus mr-2"></i> Day 3. Tolbachik volcano
            region.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day3.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            It takes about 5 hours off-road driving to reach the region of
            Tolbachik eruption. The most famous eruption took place here in 1975
            and the last one in 2012. The place is full with epic solid lava
            flows and moon-like slag craters. There are also some interesting
            lava caves and the Dead Forest which was burned by the eruption. We
            settle our camp close to Tolbachik volcano right in the volcanic
            desert, altitude of the camp is 1700 meters above the sea level, it
            could be quite cold and windy, there is the lack of water here. From
            now and on we live in tents by two.
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
            <i className="fas fa-plus mr-2"></i> Day 4. Tolbachik volcano
            region.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day4.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            We will choose the best locations on the sunrise and sunset to get
            amazing photos. If the weather is suitable, we will shoot the night
            sky in the Dead Forest, it's possible to make an astrophotography
            session.
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
            <i className="fas fa-plus mr-2"></i> Day 5. Tolbachik volcano
            region.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day5.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Second day in the region of Tolbachik volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 6. Kozyrevsk.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day6.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            After one more sunrise photo session we drive back to Kozyrevsk
            guest house where we have some rest and go to the sauna..
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
            <i className="fas fa-plus mr-2"></i> Day 7. The Valley of Giants.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day7.jpg')}
              alt="Grand Photography Tour to Kamchatka"
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
            <i className="fas fa-plus mr-2"></i> Day 8. Kozyrevsk.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day8.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            After shooting on the sunrise, we go back to the lodge in Kozyrevsk.
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
            <i className="fas fa-plus mr-2"></i> Day 9. Podkova Mountain.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day9.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Transfer to the North slopes of Kluchevskoy volcano. Shooting
            magnificent views on Kluchevskoy volcanic range.
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
            <i className="fas fa-plus mr-2"></i> Day 10. Podkoba Mountain.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day10.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
          </p>
          Continue shooting in the area of Podkova mountain.
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
            <i className="fas fa-plus mr-2"></i> Day 11.
            Petropavlovsk-Kamchatsky.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>The road back to our hotel in Paratunka takes the whole day.</p>
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
            <i className="fas fa-plus mr-2"></i> Day 12. Gorely volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day12.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Transfer to the region of Gorely and Mutnovsky volcano, settling a
            camp. Depending on the weather and physical conditions of the group
            we will make a night ascending to Gorely volcano in order to shoot
            sunrise from its top.
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
            <i className="fas fa-plus mr-2"></i> Day 13. Mutnovsly volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-13">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day13.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Trekking inside the active crater of Mutnovsky volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 14. Snow cave.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day14.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            "Dangerous" Waterfall and snow caves on the slopes of Mutnovsky
            volcano. In the evening we return back to a hotel.
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
            <i className="fas fa-plus mr-2"></i> Day 15. Departure.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-15">
          <p>
            <img
              src={require('../../../../img/tour-bfk/small/day15.jpg')}
              alt="Grand Photography Tour to Kamchatka"
            />
            Fish market and gifts shop, then the airport. Goodbye, Kamchatka!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BfkDays;
