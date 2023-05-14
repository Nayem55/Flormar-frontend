import { ThemeContext } from "../../Contexts/ThemeContext";
import useScroll from "../../Hooks/useScroll";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DeoGroup = () => {
  const [linkTwoHover, setLinkTwoHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const { setCategory, setBrand } = useContext(ThemeContext);
  const [scrollPosition] = useScroll();


    return (
     
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
            <Link onClick={()=>{
            setCategory("deoMen");
            localStorage.setItem("category", "deoMen");
          }}
          to="category/deodorant for men" className=" hover:text-accent">For Men</Link>
            <hr className=" w-full text-white my-2" />
            <Link onClick={()=>{
            setCategory("deoWomen");
            localStorage.setItem("category", "deoWomen");
          }}
          to="category/deodorant for women" className=" hover:text-accent">For Women</Link>
          </div>
        </div>
    );
};

export default DeoGroup;