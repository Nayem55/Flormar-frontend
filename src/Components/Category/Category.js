import { Link } from "react-router-dom";
import "./Category.css";
import useScroll from "../../Hooks/useScroll";
import logo from "../../Images/F-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Category = () => {
  const [linkOneHover, setLinkOneHover] = useState(false);
  const [linkTwoHover, setLinkTwoHover] = useState(false);
  const [linkThreeHover, setLinkThreeHover] = useState(false);
  const [linkFourHover, setLinkFourHover] = useState(false);
  const [linkFiveHover, setLinkFiveHover] = useState(false);
  const [scrollPosition] = useScroll();
  return (
    <div
      className={`nav-menu transition-all ease-in-out duration-150 text-center py-4 text-white bg-secondary ${
        scrollPosition > 80 ? "py-8" : ""
      }`}
    >
      {scrollPosition > 80 ? (
        <img
          className="w-[25px] inline float-left ms-10 short-logo"
          src={logo}
          alt=""
        />
      ) : (
        ""
      )}

      <div>
        <div
          onMouseEnter={() => setLinkOneHover(true)}
          onMouseLeave={() => setLinkOneHover(false)}
          className="dropdown"
        >
          <Link className="mr-10 hover:text-accent font-bold ">
            PERFUME
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`${
              linkOneHover ? "block absolute text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "pt-9" : "pt-5"
            } p-4  bg-secondary w-[230px] `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className="text-xl hover:text-accent">Brands</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Pure Perfume Oil</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">For Men</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">For Women</Link>
          </div>
        </div>

        <Link
          className="mr-10 hover:text-accent font-bold"
          href="/GirlsFashion"
        >
          BODY MIST
        </Link>

        <div
          onMouseEnter={() => setLinkTwoHover(true)}
          onMouseLeave={() => setLinkTwoHover(false)}
          className="dropdown"
        >
          <Link className="mr-10 hover:text-accent font-bold ">
            DEODORANT
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`${
              linkTwoHover ? "block absolute text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "pt-9" : "pt-5"
            } p-4  bg-secondary w-[230px] `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className="text-xl hover:text-accent">Brands</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">For Men</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">For Women</Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setLinkThreeHover(true)}
          onMouseLeave={() => setLinkThreeHover(false)}
          className="dropdown"
        >
          <Link className="mr-10 hover:text-accent font-bold ">
            BODY & BATH
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`${
              linkThreeHover ? "block absolute text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "pt-9" : "pt-5"
            } p-4  bg-secondary w-[230px] `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className="text-xl hover:text-accent">Body Lotion</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Conditionar</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Face Wash</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Hair Oil</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Shampoo</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">Shower Gel</Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setLinkFourHover(true)}
          onMouseLeave={() => setLinkFourHover(false)}
          className="dropdown"
        >
          <Link className="mr-10 hover:text-accent font-bold ">
            BODY & BATH
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`${
              linkFourHover ? "block absolute text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "pt-9" : "pt-5"
            } p-4  bg-secondary w-[230px] `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className="text-xl hover:text-accent">ARMAF</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">ARMAF ENCHANTED</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">BIOLUXE</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">ESTIARA</Link>
            <hr className=" w-full text-white" />
            <Link className="text-xl hover:text-accent">FLAVIA</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">PARIS</Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setLinkFiveHover(true)}
          onMouseLeave={() => setLinkFiveHover(false)}
          className="dropdown"
        >
          <Link className="mr-10 hover:text-accent font-bold ">
            PERFUME
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`${
              linkFiveHover ? "block absolute text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "pt-9" : "pt-5"
            } p-4  bg-secondary w-[230px] `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className="text-xl hover:text-accent">PERFUME</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">MIST</Link>
            <hr className=" w-full text-white my-2" />
            <Link className="text-xl hover:text-accent">DEO</Link>
          </div>
        </div>

        <Link
          className="mr-10 hover:text-accent font-bold"
          href="/HomeDecoration"
        >
          GIFT SET
        </Link>

        <Link className="hover:text-accent font-bold" href="/Cosmetics">
          ONLINE EXCLUSIVE
        </Link>
      </div>
    </div>
  );
};

export default Category;
