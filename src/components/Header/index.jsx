import React from "react";
import { Logo } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export const Header = ({ title, name }) => {
  return (
    <>
      {name === "admin" || name === "user" ? (
        <header className="p-3 bg-main flex flex-row justify-between">
          <title>{title}</title>
          <div className="flex">
            <Link to={"/"} className="w-full flex">
              <img src={Logo} alt="Logo" className="mx-1" />
              <span className="text-white my-2 mx-2 text-lg font-bold">
                Back to School
              </span>
            </Link>
          </div>
          <div className="flex flex-shrink">
            <div className="p-2 bg-grey rounded-full w-11 mx-2 h-full">
              <button>
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  inverse
                  className="mx-1"
                />
              </button>
            </div>
          </div>
        </header>
      ) : (
        <>
          {name === "userIsAuth" ? (
            <header className="p-3 bg-white flex flex-row justify-between shadow-md ">
              <title>{title}</title>
              <div className="flex w-1/2 items-center">
                <Link to={"/"} className="w-full flex">
                  <img src={Logo} alt="Logo" className="mx-1" />
                  <span className="text-black my-2 mx-2 text-lg font-bold">
                    Back to School
                  </span>
                </Link>
              </div>
              <div className="flex flex-shrink items-center font-bold gap-x-6">
                <div className="p-2 mx-2">
                  <Link to="/">Home</Link>
                </div>
                <div className="p-2">
                  <a href="#about">About</a>
                </div>
                <div className="p-2">
                  <a href="#services">Services</a>
                </div>
                <div className="p-2">
                  <a href="#contact">Contact</a>
                </div>
              </div>
              <div className="flex flex-shrink">
                <div className="p-2 bg-main rounded-full items-center text-center w-14 mx-7 h-full">
                  <button>
                    <FontAwesomeIcon
                      icon={faUser}
                      size={"2x"}
                      inverse
                      className="mx-1"
                    />
                  </button>
                </div>
              </div>
            </header>
          ) : (
            <header className="p-3 bg-white flex flex-row justify-between shadow-md ">
              <title>{title}</title>
              <div className="flex">
                <Link to={"/"} className="w-full flex">
                  <img src={Logo} alt="Logo" className="mx-1" />
                  <span className="text-black my-2 mx-2 text-lg font-bold">
                    Back to School
                  </span>
                </Link>
              </div>
              <div className="flex flex-shrink font-bold gap-x-6">
                <div className="p-2 mx-2">
                  <Link to="/">Home</Link>
                </div>
                <div className="p-2">
                  <a href="#about">About</a>
                </div>
                <div className="p-2">
                  <a href="#services">Services</a>
                </div>
                <div className="p-2">
                  <a href="#contact"> Contact</a>
                </div>
              </div>
              <div className="flex flex-shrink">
                <div className="text-center">
                  <Link
                    to="/auth/login"
                    type="button"
                    className="p-2 w-32 mx-2 text-black font-semibold bg-white border border-secMain rounded ease-linear transition-all duration-150 shadow hover:shadow-lg hover:bg-secMain"
                  >
                    Login
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/auth/register"
                    type="button"
                    className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </header>
          )}
        </>
      )}
    </>
  );
};
