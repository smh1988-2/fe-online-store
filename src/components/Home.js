import React from "react";

function Home() {
  return (
    <div className="home">
      {/* <div className="box"> */}
        <div className="row">
          <div className="box">
            <div className="col featured-product">
              <h1>I am the featured product</h1>
            </div>

            <div className="col">
              <div className="row welcome-message">
                I am the welcome message. I am the welcome message. I am the
                welcome message. I am the welcome message. I am the welcome
                message. I am the welcome message. I am the welcome message. I
                am the welcome message. I am the welcome message.
              </div>

              <div className="row category">
                <div className="col">hello</div>
                <div className="col">goodbye</div>
              </div>
            </div>
          </div>
          <div className="row footer">I am the footer</div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
