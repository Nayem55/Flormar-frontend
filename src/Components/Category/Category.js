import { Link } from "react-router-dom";
import "./Category.css";
import useScroll from "../../Hooks/useScroll";
import logo from "../../Images/F-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Category = () => {
  const [linkOneHover, setLinkOneHover] = useState(false);
  const [linkTwoHover, setLinkTwoHover] = useState(false);
  const [linkThreeHover, setLinkThreeHover] = useState(false);
  const [linkFourHover, setLinkFourHover] = useState(false);
  const [linkFiveHover, setLinkFiveHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const [scrollPosition] = useScroll();
  const { setCategory, setBrand ,setProductType } = useContext(ThemeContext);

  return (
    <div
      className={`nav-menu transition-all ease-in-out duration-150 text-center  text-white  ${
        scrollPosition > 80 ? "nav-menu-scrolled" : "p-0"
      }`}
    >
      {scrollPosition > 80 ? (
        <img className="  ms-10 short-logo" src={logo} alt="" />
      ) : (
        ""
      )}

      <div className="all-menu">
        <div
          onMouseEnter={() => setLinkOneHover(true)}
          onMouseLeave={() => setLinkOneHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            onClick={() => {
              setCategory("perfume");
              localStorage.setItem("category", "perfume");
            }}
            to={`/category/Perfume`}
            className="mr-10 hover:text-accent font-bold "
          >
            PERFUME
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
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

        <Link
          className="mr-10 hover:text-accent font-bold"
          to={`/category/Body Mist`}
          onClick={() => {
            setCategory("mist");
            localStorage.setItem("category", "mist");
          }}
        >
          BODY MIST
        </Link>

        <div
          onMouseEnter={() => setLinkTwoHover(true)}
          onMouseLeave={() => setLinkTwoHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Deodorant`}
            onClick={() => {
              setCategory("deodorant");
              localStorage.setItem("category", "deodorant");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            DEODORANT
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkTwoHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <div
              onMouseEnter={() => setSubMenuHover(true)}
              onMouseLeave={() => setSubMenuHover(false)}
              className="relative"
            >
              <Link onClick={() => {
                    setCategory("deodorant");
                    localStorage.setItem("category", "deodorant");
                  }} 
                  to="/category/deodorant" className=" hover:text-accent">Brands</Link>
              <div
                className={`sub-menu-hover px-4 pb-4 w-[200px] ${
                  subMenuHover ? "block text-start" : "hidden relative"
                } `}
              >
                <hr className=" w-full text-white mb-2" />
                <Link
                  onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand('armaf')
                    localStorage.setItem('brand','armaf')
                  }}
                  to="/category/armaf deodorant"
                  className=" hover:text-accent"
                >
                  ARMAF
                </Link>
                <hr className=" w-full text-white my-2" />
                <Link onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand('armaf enchanted')
                    localStorage.setItem('brand','armaf enchanted')
                  }}
                  to="/category/armaf enchanted deodorant"
                  className=" hover:text-accent">ARMAF ENCHANTED</Link>

                <hr className=" w-full text-white my-2" />
                <Link onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand('estiara')
                    localStorage.setItem('brand','estiara')
                  }} 
                  to="/category/estiara deodorant" className=" hover:text-accent">ESTIARA</Link>

                <hr className=" w-full text-white my-2" />
                <Link onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand('flavia')
                    localStorage.setItem('brand','flavia')
                  }} 
                  to="/category/flavia deodorant" className=" hover:text-accent">FLAVIA</Link>

                <hr className=" w-full text-white my-2" />
                <Link onClick={() => {
                    setCategory("deoBrand");
                    localStorage.setItem("category", "deoBrand");
                    setBrand('paris')
                    localStorage.setItem('brand','paris')
                  }} 
                  to="/category/paris deodorant" className=" hover:text-accent">PARIS</Link>

              </div>
            </div>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">For Men</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">For Women</Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setLinkThreeHover(true)}
          onMouseLeave={() => setLinkThreeHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Body & bath`}
            onClick={() => {
              setCategory("body & bath");
              localStorage.setItem("category", "body & bath");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            BODY & BATH
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkThreeHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('body lotion')
                    localStorage.setItem('productType','body lotion')
                  }} 
                  to="/category/body lotion" className=" hover:text-accent">Body Lotion</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('Conditioner')
                    localStorage.setItem('productType','Conditioner')
                  }} 
                  to="/category/Conditioner" className=" hover:text-accent">Conditionerr</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('face wash')
                    localStorage.setItem('productType','face wash')
                  }} 
                  to="/category/face wash" className=" hover:text-accent">Face Wash</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('hair oil')
                    localStorage.setItem('productType','hair oil')
                  }} 
                  to="/category/hair oil" className=" hover:text-accent">Hair Oil</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('shampoo')
                    localStorage.setItem('productType','shampoo')
                  }} 
                  to="/category/shampoo" className=" hover:text-accent">Shampoo</Link>

            <hr className=" w-full text-white my-2" />
            <Link onClick={() => {
                    setCategory("body");
                    localStorage.setItem("category", "body");
                    setProductType('shower gel')
                    localStorage.setItem('productType','shower gel')
                  }} 
                  to="/category/shower gel" className=" hover:text-accent">Shower Gel</Link>

          </div>
        </div>

        <div
          onMouseEnter={() => setLinkFourHover(true)}
          onMouseLeave={() => setLinkFourHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Brands`}
            onClick={() => {
              setCategory("all");
              localStorage.setItem("category", "all");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            BRANDS
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkFourHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className=" hover:text-accent">ARMAF</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">ARMAF ENCHANTED</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">BIOLUXE</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">ESTIARA</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">FLAVIA</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">PARIS</Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setLinkFiveHover(true)}
          onMouseLeave={() => setLinkFiveHover(false)}
          className={`dropdown h-full ${
            scrollPosition > 80 ? "dropdown-scrolled" : ""
          }`}
        >
          <Link
            to={`/category/Best Sellers`}
            onClick={() => {
              setCategory("all");
              localStorage.setItem("category", "all");
            }}
            className="mr-10 hover:text-accent font-bold "
          >
            BESTSELLERS
            <FontAwesomeIcon
              className="w-3 ms-2"
              icon={faChevronDown}
            ></FontAwesomeIcon>
          </Link>
          <div
            className={`menu-hover ${
              linkFiveHover ? "block  text-start" : "hidden relative"
            } ${
              scrollPosition > 80 ? "menu-scrolled" : ""
            } px-4  pb-4 w-[200px] text-black `}
          >
            <hr className=" w-full text-white mb-2" />
            <Link className=" hover:text-accent">PERFUME</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">MIST</Link>
            <hr className=" w-full text-white my-2" />
            <Link className=" hover:text-accent">DEO</Link>
          </div>
        </div>

        <Link
          className="mr-10 hover:text-accent font-bold"
          to={`/category/Gift Set`}
          onClick={() => {
            setCategory("gift set");
            localStorage.setItem("category", "gift set");
          }}
        >
          GIFT SET
        </Link>

        <Link
          to={`/category/Online Exclusive`}
          onClick={() => {
            setCategory("online exclusive");
            localStorage.setItem("category", "online exclusive");
          }}
          className="hover:text-accent font-bold"
          href="/Cosmetics"
        >
          ONLINE EXCLUSIVE
        </Link>
      </div>
    </div>
  );
};

export default Category;
