import React from 'react';

const KsuDays = () => {
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
              src={require('../../../../img/tour-ksu/small/day1.jpg')}
              alt="Kamchatka from the North to the South"
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
            <i className="fas fa-plus mr-2"></i> Day 2. Kozyrevsk.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-2">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day2.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Early in the morning we start a long way to the north of the
            peninsula in order to reach Kluchevskoy nature park, about 500
            kilometres to go by car. Our target is to see the highest active
            volcano on the continent, the most difficult to climb the untouched
            Kamen volcano, the place of the most powerful eruption of the 20th
            century - Bezymianny volcano, furthermore - new and old Tolbachik
            volcanoes, 1975 eruption place with great volcanic desert and still
            hot craters. Today we stay for a night in a lodge in a small
            Kozyrevsk village.
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
            <i className="fas fa-plus mr-2"></i> Day 3. Slag cones, Dead Forest
            of Tolbachik.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-3">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day3.jpg')}
              alt="Kamchatka from the North to the South"
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
            <i className="fas fa-plus mr-2"></i> Day 4.Plosky Tolbachik.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-4">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day4.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Ascent Plosky Tolbachik volcano, 3081 meters above the sea level (we
            start from the point 1700 meters above the sea level). It takes
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
            <i className="fas fa-plus mr-2"></i> Day 5. Tolud.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-5">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day5.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Trekking to the border of the volcanic desert (12 kilometres).
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
            <i className="fas fa-plus mr-2"></i> Day 6. The valley between three
            volcanoes.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-6">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day6.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Today we overcome the Tolud pass, go inside the mountain valley
            between three volcanoes - Tolbachik, Udina and Zimina (12 more
            kilometres to go). Many rapid mountain rivers cross the valley, the
            tundra is reach with berries and mushrooms, high chances to see
            bears, foxes, hairs in their natural habitat.
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
            <i className="fas fa-plus mr-2"></i> Day 7. Mars Camp.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-7">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day7.jpg')}
              alt="Kamchatka from the North to the South"
            />
            12 more kilometres to go, Tolbachinsky pass to overcome and we reach
            a camp near Mars slag cone. There are many fine little beasts here -
            susliks (like gopher or squirrel) and marmots. They live inside
            tunnels that were made under old solid lava flow. From here we can
            observe a magnificent view on the giant volcanoes - Kluchevskoy,
            Kamen and Bezymyanny.
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
            <i className="fas fa-plus mr-2"></i> Day 8. Polennica.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-8">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day8.jpg')}
              alt="Kamchatka from the North to the South"
            />
            We stay for two nights at the same camp site so today we walk with
            little baggage, we climp up to Jupiter slag cone (20 minutes to go)
            to watch beatifull sceneries of Tolbachik and Zimina volcanoes. We
            also go to unique "Polennica" place which is made of volcanic rocks
            of weird shapes that look like woodpile. If the weather is good we
            can go up the shoulder of Zimina volcano and watch wonderful views
            of Kluchevskoy volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 9. Trekking to Barany
            spring.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-9">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day9.jpg')}
              alt="Kamchatka from the North to the South"
            />
            We pass lava fields and the "city of marmots", finishing semi-circle
            round Tolbachik volcano, about 12 kilometers to go, fantastic views
            of Kluchevskoy, Kamen and Tolbacik volcanoes all around.
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
            <i className="fas fa-plus mr-2"></i> Day 10. Trekking to Kopyto
            Mountain.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-10">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day10.jpg')}
              alt="Kamchatka from the North to the South"
            />
            About three hours to go and we meet hour off-road vehicle which
            takes us back from mountains to the valley of the Kamchatka River
            and furhter to the village of natives called Esso. In Esso we attend
            historical museum and learn many interesting facts about life of
            local people. Esso is also famouse for its huge thermal swimming
            pool, here we can have rest after our long trekking in mountains.
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
            <i className="fas fa-plus mr-2"></i> Day 11.
            Petropavlovsk-Kamchatsky.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-11">
          <p>
            The way back to Petropavlovsk takes the whole day, 500 kilometers to
            go by bus, stay for a night in a comfortable cottage.
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
            <i className="fas fa-plus mr-2"></i> Day 12. Gorely Volcano.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-12">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day12.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Transfer to the region of Gorely and Mutnovsky volcano, settling a
            camp, ascending Gorely volcano, night in tents.
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
              src={require('../../../../img/tour-ksu/small/day13.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Trekking inside the active crater of Mutnovsky volcano.
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
            <i className="fas fa-plus mr-2"></i> Day 14. Departure.
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-14">
          <p>
            <img
              src={require('../../../../img/tour-ksu/small/day14.jpg')}
              alt="Kamchatka from the North to the South"
            />
            Fish market and gifts shop, then the airport. Goodbye, Kamchatka!
          </p>
        </div>
      </div>
    </div>
  );
};

export default KsuDays;
