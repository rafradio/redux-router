import { useDispatch, useSelector } from 'react-redux';
import { selectDatas } from '../store/selectors';
import { Outlet, Link } from "react-router-dom";
import { Table, Button } from 'rsuite';
// import './rsuitestyles.css';
import '../index.css';
import styles from './styles.module.css';
import { TableData } from './TableData';


const { Column, HeaderCell, Cell } = Table;

export const Root = () => {
    const dispatch = useDispatch();
    const datas = useSelector(selectDatas);

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
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Таблица 1</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Таблица 2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail" className='detail'>
          <TableData />
          <div id='info'>Котировки на следующий рабочий день</div>
  
          <Link to={`table/2`}><div id='show'>Показать</div></Link>

          <div>
            <Outlet />
          </div>
        </div>
      </>
    );
  }