import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ImageFirst, ImageSecond } from "../assets";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const Homepage = () => {
  return (
    <div>
      <header className="App-header">
        <Header name={"homepage"} />
      </header>
      <section className="bg-main w-full h-104 flex p-5">
        <div className="p-2 w-1/2">
          <div className="text-white font-poppins font-bold mt-10">
            <p className="text-sm text-violet-600">Let's Begin</p>
            <p className="text-4xl leading-relaxed">Back to Basic</p>
            <p className="text-4xl leading-relaxed">Back to Basic</p>
            <p className="text-4xl leading-relaxed">Back to Basic</p>
          </div>
          <p className="text-justify text-sm text-grey-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-1/2 p-3">
          <div className="mt-10 ml-28 lg:mt-10 lg:ml-28">
            <img
              src={ImageFirst}
              alt="image_right_section"
              width={380}
              height={380}
            />
          </div>
        </div>
      </section>
      <section id="about" className="bg-white w-full h-104 flex p-5">
        <div className="w-1/2 p-3">
          <div className="mt-10 ml-28">
            <img
              src={ImageSecond}
              alt="image_left_section"
              width={380}
              height={380}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="text-black font-poppins font-bold mt-10">
            <p className="text-sm text-grey-400">SELECTED COURSE</p>
            <p className="text-4xl leading-relaxed">Back to Basic</p>
          </div>
          <p className="text-justify text-sm mt-14 text-grey-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <section id="services" className="bg-white w-full h-104 flex p-5">
        <div className="p-2 w-1/2">
          <div className="text-black font-poppins font-bold mt-10">
            <p className="text-sm text-grey-400">WHAT WE GIVE</p>
            <p className="text-4xl leading-relaxed">
              Coba Try Out Online disini
            </p>
          </div>
          <p className="text-justify text-sm mt-14 text-grey-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-1/2 p-3">
          <div className="flex mt-10 gap-x-6 ml-28">
            <div className="bg-main rounded-md w-60 h-80">
              <div className="flex p-3">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="3x"
                  inverse
                  className="mx-3"
                />
                <p className="text-white text-xl mt-3 ml-5 font-semibold">
                  RP 10.000
                </p>
              </div>
              <div className="p-2">
                <p className="text-white text-xs text-center">
                  Pegawai Pemerintah Dengan Perjanjian Kerja (PPPK)
                </p>
                <p className="text-grey-400 p-2 mt-5 text-xs text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="text-left mt-2 p-2">
                <Link
                  to={`/payment-user`}
                  type="button"
                  className="p-2 w-32 mx-2 text-black text-center font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg hover:shadow-grey-800"
                >
                  Beli Try Out
                </Link>
              </div>
            </div>
            <div className="bg-main rounded-md w-60 h-80">
              <div className="flex p-3">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="3x"
                  inverse
                  className="mx-3"
                />
                <p className="text-white text-xl mt-3 ml-5 font-semibold">
                  RP 10.000
                </p>
              </div>
              <div className="p-2">
                <p className="text-white text-xs text-center">
                  Calon Pegawai Negeri Sipil (CPNS)
                </p>
                <p className="text-grey-400 p-2 mt-5 text-xs text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="text-left mt-2 p-2">
                <Link
                  to="/payment-user"
                  type="button"
                  className="p-2 w-32 mx-2 text-black text-center font-semibold bg-secMain border-none rounded ease-linear transition-all duration-150 shadow hover:shadow-lg hover:shadow-grey-800"
                >
                  Beli Try Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
