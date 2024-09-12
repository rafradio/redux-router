import { useDispatch, useSelector } from 'react-redux';
import { selectDatas, selectButtonState, selectNavState } from '../store/selectors';
import { Outlet, Link } from "react-router-dom";
import '../index.css';
import { TableData } from './TableData';
import { btnTableClick, toggleNavLink } from './CounterSlice';

export const Root = () => {
    const dispatch = useDispatch();
    const datas = useSelector(selectDatas);
    const buttonType = useSelector(selectButtonState);
    const clkButton = () => {
      dispatch(btnTableClick());
      dispatch(toggleNavLink());
    }
    const navigatorLink = useSelector(selectNavState);

    return (
      <>
        <div id="sidebar">
          <h1>React Router Redux Project</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <button>New</button>
          </div>
          <nav>
            <ul>
              <li>
                <a>Таблица 1</a>
              </li>
              <li>
                <a>Таблица 2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" className='detail'>
          
          <TableData />
          <div id='info'>Котировки на следующий рабочий день</div>
          <Link to={navigatorLink}><div id='show' onClick={clkButton}>{buttonType}</div></Link>
          <div>
            <Outlet />
          </div>
        </div>
      </>
    );
  }