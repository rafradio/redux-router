import { useDispatch, useSelector } from 'react-redux';
import { selectDatas } from '../store/selectors';
import './rsuitestyles.css';
import { TableBox } from '../components/TableBox';

export const TableData = () => {
    let datas = useSelector(selectDatas);
    datas = datas.filter(data => data.date == "15.08.2024");
    
    return (
        <>
          <h4>Курс по состояния на </h4>
          <TableBox datas={datas}/>
        </>
    );
}