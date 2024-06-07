import {NavLink} from "react-router-dom";
import { MdOutlineCatchingPokemon, MdHomeFilled, MdOutlinePets} from "react-icons/md";
import { GiCirclingFish } from "react-icons/gi";

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to = {'/'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
      <NavLink to = {'/mens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdOutlinePets />Dog</div></NavLink>
      <NavLink to = {'/womens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><MdOutlineCatchingPokemon /> Cat</div></NavLink>
      <NavLink to = {'/kids'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1"><GiCirclingFish />Fish</div></NavLink>
    </nav>
  )
}

export default Navbar