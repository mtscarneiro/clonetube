import YOUTUBE_LOGO from "../../assets/img/YouTube-Logo.png"
import USER_IMAGE from "../../assets/img/user.jpg"
import { BsBell, BsFillCameraVideoFill, BsGrid3X3Gap, BsKeyboard, BsMicFill, BsSearch } from "react-icons/bs";
import * as style from "./style"

const Header = () => {
 return (
     <style.Header>
         <button>
             <img alt={""} src={YOUTUBE_LOGO} width='120px'/>
         </button>

         <style.SearchContainer className="search">
             <style.SearchInput type="text" placeholder={"Pesquisar"}/>
             <style.SearchKeyboard><BsKeyboard /></style.SearchKeyboard>
             <button><BsSearch /></button>
             <button><BsMicFill /></button>
         </style.SearchContainer>

         <div className="user_menu">
             <button><BsFillCameraVideoFill /></button>
             <button><BsGrid3X3Gap /></button>
             <button><BsBell /></button>
             <button>
                 <img alt={""} src={USER_IMAGE} width='100px' />
             </button>
         </div>

     </style.Header>
 )
}

export default Header
