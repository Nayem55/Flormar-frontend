import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PerfumeGroup = () => {
  const [linkOneHover, setLinkOneHover] = useState(false);
  const [scrollPosition] = useScroll();
  const [subMenuHover, setSubMenuHover] = useState(false);
  const { setCategory, setBrand } = useContext(ThemeContext);

  return (
    <div
      onMouseEnter={() => setLinkOneHover(true)}
      onMouseLeave={() => setLinkOneHover(false)}
      className={`dropdown h-full transition-all ease-in-out duration-300 ${
        scrollPosition > 80 ? "dropdown-scrolled" : ""
      }`}
    >
      <Link
        onClick={() => {
          setCategory("perfume");
          localStorage.setItem("category", "perfume");
        }}
        to={`/category/Perfume`}
        className="mr-10 block hover:text-accent font-bold "
      >
        PERFUME
        <FontAwesomeIcon
          className="w-3 ms-2"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </Link>

      {/* Perfume Hover Category  */}

      <div
        className={`menu-hover ${
          linkOneHover ? "block  text-start" : "hidden relative"
        } ${
          scrollPosition > 80 ? "menu-scrolled" : ""
        } px-4  pb-4 w-[200px] text-black `}
      >
        <hr className=" w-full mb-2 text-accent" />
        <div
          onMouseEnter={() => setSubMenuHover(true)}
          onMouseLeave={() => setSubMenuHover(false)}
          className="relative"
        >
          <Link
            onClick={() => {
              setCategory("perfume");
              localStorage.setItem("category", "perfume");
            }}
            to="/category/Perfume"
            className=" hover:text-accent"
          >
            Brands
          </Link>

          {/* Perfume Brands  */}

          <div
            className={`sub-menu-hover px-4 pb-4 w-[200px] ${
              subMenuHover ? "block text-start" : "hidden relative"
            } `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link
              onClick={() => {
                setCategory("perfumeBrand");
                localStorage.setItem("category", "perfumeBrand");
                setBrand("armaf");
                localStorage.setItem("brand", "armaf");
              }}
              to="category/armaf perfume"
              className=" hover:text-accent"
            >
              ARMAF
            </Link>
            <hr className=" w-full text-white my-2" />
            <Link
              onClick={() => {
                setCategory("perfumeBrand");
                localStorage.setItem("category", "perfumeBrand");
                setBrand("estiara");
                localStorage.setItem("brand", "estiara");
              }}
              to="category/Estiara Perfume"
              className=" hover:text-accent"
            >
              ESTIARA
            </Link>
            <hr className=" w-full text-white my-2" />
            <Link
              onClick={() => {
                setCategory("perfumeBrand");
                localStorage.setItem("category", "perfumeBrand");
                setBrand("flavia");
                localStorage.setItem("brand", "flavia");
              }}
              to="category/Flavia Perfume"
              className=" hover:text-accent"
            >
              FLAVIA
            </Link>
          </div>
        </div>
        <hr className=" w-full my-2 text-accent" />
        <Link
          onClick={() => {
            setCategory("purePerfumeOil");
            localStorage.setItem("category", "purePerfumeOil");
          }}
          to="/category/pure perfume oil"
          className=" hover:text-accent"
        >
          Pure Perfume Oil
        </Link>
        <hr className=" w-full my-2" />
        <Link
          onClick={() => {
            setCategory("perfumeMen");
            localStorage.setItem("category", "perfumeMen");
          }}
          to="/category/perfume for men"
          className=" hover:text-accent"
        >
          For Men
        </Link>
        <hr className=" w-full my-2" />
        <Link
          onClick={() => {
            setCategory("perfumeWomen");
            localStorage.setItem("category", "perfumeWomen");
          }}
          to="/category/perfume for women"
          className=" hover:text-accent"
        >
          For Women
        </Link>
      </div>
    </div>
  );
};

export default PerfumeGroup;
