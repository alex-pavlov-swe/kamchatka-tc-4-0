import React from 'react';

const KsuInfo = () => {
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
          BOOK THIS TOUR
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
            What is icluded <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-20">
          <p>
            - all transfers, comfortable mini-vans in town, 6-wheeled Kamaz
            vehicle for the off-road;
          </p>
          <p>- transfers to and from the airport</p>
          <p>- twin accommodation in Flamingo hotel or similar,</p>
          <p>- staff - two guides, one cook and a driver</p>
          <p>- all meals (full board)</p>
          <p>- needed travel equipment rental (tents, kitchen);</p>
          <p>- all permits, and nature park fees.</p>
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
            What is NOT included <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-21">
          <p>- lunch at days 1, 2, 11;</p>
          <p>- sleeping bags and tents rental (if needed);</p>
          <p>- airline tickets to Petropavlovsk-Kamchatsky.</p>
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
            How to book
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-22">
          <p>
            Initial booking is made by signing the form "Join the tour" or by
            e-mail. After that, we confirm the booking on receipt of the deposit
            (500 $). Final payment could be made on arrival in cash or by bank
            transfer due 3 days before departure. Acceptable forms of payment
            are: direct transfer to our bank account, cash.
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
            Airplane tickets
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-23">
          <p>
            There are direct flights to Petropavlovsk-Kamchatsky from Moscow and
            Vladivostok. We advise to buy them in advance. Usually airline
            companies start selling tickets for the next summer in October.
            Three months before the date of departure they are always much more
            expensive.
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
            List of Equipment
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-30">
          <ul>
            <li>trekking boots</li>
            <li>thermal underwear</li>
            <li>waterproof trousers</li>
            <li>
              gore-tex jacket or another waterproof jacket (preferably with
              hood)
            </li>
            <li>polartec jacket</li>
            <li>a cap</li>
            <li>sunlight glasses</li>
            <li>warm sockes</li>
            <li>swimming suit</li>
            <li>
              sleeping bag with "comfort" temperature 0 degrees Celsius or lower
            </li>
            <li>travelbag</li>
            <li>sleeping mat</li>
            <li>flashlight</li>
            <li>repellent</li>
            <li>individual medicines</li>
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
            The Weather
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-25">
          <p>
            The temperature in the mountains might go below zero degrees Celsius
            sometimes. So, we advise to have warm clothes and a sleeping bag.
            During the day when the weather is sunny the temperature might be
            between +10 and +20 degrees Celsius.
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
            Food
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-26">
          <p>Please let us know if you have any food allergy.</p>
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
            Mobile network
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div className="card card-body collapse" id="collapse-27">
          <p>
            Mobile network is available only at the city. No network in the
            mountains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KsuInfo;
