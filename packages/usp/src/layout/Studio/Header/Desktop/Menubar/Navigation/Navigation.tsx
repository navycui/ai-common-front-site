/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef} from 'react';
import clsx from 'clsx';
import {
  NavLink, useLocation
} from 'react-router-dom';
import { RouteType, ServiceRoutes } from '~/Router';
import * as styles from './styles';


function Navigation(args: any) {
  const location = useLocation();
  const showMenu = useRef<any>();
  // const [showbox, setShowbox] = useState("");


  console.log(location.pathname)
  const handleClick = (e:any,i:number)  => {
    // showMenu.current.querySelector("a").className="";
    // showMenu.current.querySelector("ul").style.display = 'none';
    console.log(showMenu.current);
    console.log(e.target.children[i]);
    console.log(showMenu);
    // showMenu.current.querySelector("ul").style.display = 'none';
    // if(showMenu.current.children[i].children[i].className === "active"){
    //   showMenu.current.children[i].children[i].className="";
    // }
    if(e.target.children[i] === undefined){
      return;
    } else {
      e.target.children[i].style.display='flex';
      e.target.className='active';
    }
  }

  return (
    <nav role="navigation" css={styles.container} {...args}>
      <ul css={styles.menu} ref={showMenu}>
        {ServiceRoutes.map((row: RouteType, i: number) => {
          const isActive = (row.children || []).some(
            (route) => location.pathname === `/${row.path}/${route.path}`
          );
          return (
            <li key={i}> 
              <a className={clsx([!!isActive && 'active'])} onClick={(e)=> {handleClick(e,i)}}>
                {row.label}
                <ul css={styles.menu}>
                  {(row.children || []).map((col: RouteType, k: number) => {
                    return (
                      <li key={k}>
                        <NavLink to={`/${row.path}/${col.path}`} replace>
                          {col.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
