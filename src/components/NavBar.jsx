import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import SignUpForm from "./SignUpForm";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`${openModal ? "modalOverlay" : "nav--link"}`}>
      <header className="pic">
        <Link to={`/`}>
          <aside>
            <img
              className="image"
              src="https://ci3.googleusercontent.com/proxy/Y4p0DcNfgrwjw5CPrLJa4JL4VMEkEIVsfb2HTwwKWdhwpRojFLsrakySaDvnmS9gvkTqZBRuhsmGIbUhHLcCirIgh964cZiD6pwg_F_fZNf97Uj_AIl9wXm3hd7WLainCBYhVEJBX-RfV_bFPB8=s0-d-e1-ft#https://img.alicdn.com/imgextra/i3/O1CN01TcPtFk1QxjpRKmuak_!!6000000002043-2-tps-320-80.png"
              alt="logo"
            />
          </aside>
        </Link>
      </header>
      <div className="click--group">
        <div className="">
          <input type="search" className="search--btn" id="" />
          <button className="btnS">Search</button>
        </div>
        <div className={`btnA`}>
          <button onClick={() => setOpenModal(true)}>Account</button>
        </div>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <SignUpForm setOpenModal={setOpenModal} openModal={openModal} />
        </Modal>
      )}
    </div>
  );
};
export default NavBar;
