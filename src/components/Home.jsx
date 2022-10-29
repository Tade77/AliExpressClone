import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header className="pic">
        <aside>
          <img
            className="image"
            src="https://ci3.googleusercontent.com/proxy/Y4p0DcNfgrwjw5CPrLJa4JL4VMEkEIVsfb2HTwwKWdhwpRojFLsrakySaDvnmS9gvkTqZBRuhsmGIbUhHLcCirIgh964cZiD6pwg_F_fZNf97Uj_AIl9wXm3hd7WLainCBYhVEJBX-RfV_bFPB8=s0-d-e1-ft#https://img.alicdn.com/imgextra/i3/O1CN01TcPtFk1QxjpRKmuak_!!6000000002043-2-tps-320-80.png"
            alt="logo"
          />
        </aside>
        <aside className="search">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWsdfErPxB3JecfH4IIRLqjFxjm-3PKyJHizo70AMC5RVHccsFqAKXAjIMN_tLbiflg&usqp=CAU"
            alt=""
          /> */}
        </aside>
      </header>
      <aside className="info">
        <h1>This is an Official customer Page of AliExpress</h1>

        <p>
          You are receiving this mail because you have recently order for a
          headphone. Please the click the link below:
        </p>
        <Link to="products">
          <p>Go to products &rarr;</p>
        </Link>
      </aside>
    </div>
  );
};
export default HomePage;
