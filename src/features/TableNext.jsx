import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './rsuitestyles.css';
import { TableBox } from '../components/TableBox';

export const TableNext = () => {
    const { dateID } = useParams();
    let datas = [];
    if (dateID == 2) {
      datas = useSelector(state => state.counter.dataTable.filter(data => data.date == "16.08.2024"));
    }
    
    return (
      <TableBox datas={datas}/>
  );
}