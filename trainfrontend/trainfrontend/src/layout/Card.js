import React from 'react';
import th from '../images/th.jpeg';
import OIP from '../images/OIP.jpeg';
import R from '../images/R.jpeg'
import Ella_sri_lanka from '../images/Ella_sri_lanka.webp'

export default function Cards() {
  return (

    <div className="container mt-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={R} className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
              Sri Lanka Railways ( SLR ) is a government department functioning under the Ministry of Transport. It is a major transport service provider and is the only rail transport organization in the country. SLR transports both passenger and freight. At its inception, railway was carrying more freight than passenger. But today, it is passenger oriented. SLR’s market share for passenger transport is about 6.0 % and about 0.7 % for goods transport.
              </p>
              <a href="#" className="btn btn-primary">
                Click
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={OIP} className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">	
              Vision</h5>
              <p className="card-text">
              To be the most sought after land transport provider in Sri Lanka, providing unsurpassed value to our stakeholders.
              </p>
              <a href="#" className="btn btn-primary">
                Click
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={Ella_sri_lanka} className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Mission</h5>
              <p className="card-text">
              To provide a safety reliable and punctual rail transport system for passenger and goods transportation.
              </p>
              <a href="#" className="btn btn-primary">
              Click
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={th} className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h5 className="card-title">Terms & Conditions
              </h5>
              <p className="card-text">
              PAYMENT METHODS<br/>
              You agree that the debit/credit card details provided by you for use of the Sri Lanka Railways online seat reservation service is correct and accurate and you shall not use a Debit/ credit card, that is not lawfully owned by you or the use of which is not authorized by the lawful owner thereof. You further agree and undertake to provide correct and valid debit/credit card details.
              </p>
              <a href="#" className="btn btn-primary">
              Click
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
