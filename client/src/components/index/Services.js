import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              {/*<i className="far fa-4x fa-map mb-4"></i>*/}
              <img
                className="mb-3"
                src={require('../../img/logo-home-white.jpg')}
                alt="логотип Камчатка-ТК"
                width="250"
              />
              <p className="text-muted mb-0">Компания основана в 2008 году.</p>
              <p className="text-muted mb-0">
                Номер в реестре туроператоров России РТО 021443.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="far fa-4x fa-thumbs-up mb-4"></i>
              <p className="text-muted mb-0">
                С нами уже путешествовали более 2000 гостей из России, Европы,
                Японии, Австралии, США, Китая, Малазии, Сингапура и других стан.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="fas fa-4x fa-mountain mb-4"></i>
              <p className="text-muted mb-0">
                Находимся в Петропавловске-Камчатском. Команда гидов, поваров и
                водителей шлифовалась и оттачивала профессионализм годами.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="m-1">
              <i className="fas fa-4x fa-hiking mb-4"></i>
              <p className="text-muted mb-0">
                Имеем большой опыт организации пеших походов, автомобильных
                туров, морских экспедиций, фототуров, индивидуальных джип-туров,
                сплавов и восхождений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
