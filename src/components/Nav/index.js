import './index.css';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsArrowDownCircle } from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react';


function Nav() {
    const [active,setActive]=useState("#home");
    return (
        <div className="navigation">
            <a href='#home' onClick={()=>setActive("#home")}>
                <AiOutlineHome className={'icon'+(active==="#home"?' active-nav':'')} />
            </a>
            <a href='#about' onClick={()=>setActive("#about")}>
                <AiOutlineUser className={'icon'+(active==="#about"?' active-nav':'')}  />
            </a>
            <a href='#skills' onClick={()=>setActive("#skills")}>
                <GiSkills className={'icon'+(active==="#skills"?' active-nav':'')}  />
            </a>
            <a href='#portfolio' onClick={()=>setActive("#portfolio")}>
                <AiOutlineFundProjectionScreen className={'icon'+(active==="#portfolio"?' active-nav':'')}  />
            </a>
            <a href='#contact' onClick={()=>setActive("#contact")}>
                <BiMessageRoundedDots className={'icon'+(active==="#contact"?' active-nav':'')}  />
            </a>
            <a href='#footer' onClick={()=>setActive("#footer")}>
                <BsArrowDownCircle className={'icon'+(active==="#footer"?' active-nav':'')}  />
            </a>
        </div>
    )
}

export default Nav;

