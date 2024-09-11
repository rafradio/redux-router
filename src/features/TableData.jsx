import { useDispatch, useSelector } from 'react-redux';
import { selectDatas } from '../store/selectors';
import { Table, Button } from 'rsuite';
import './rsuitestyles.css';

const { Column, HeaderCell, Cell } = Table;

export const TableData = () => {
    const dispatch = useDispatch();
    const datas = useSelector(selectDatas);
    
    return (
        <Table
            height={400}
            width={450}
            data={datas}
        >
          <Column width={150} align="center" fixed>
            <HeaderCell>Масса слитка, г</HeaderCell>
            <Cell dataKey="weight" />
          </Column>

          <Column width={150} align="center">
            <HeaderCell>Цена за 1г, руб</HeaderCell>
            <Cell dataKey="rate" />
          </Column>

          <Column width={150} align="center">
            <HeaderCell>Стоимость</HeaderCell>
            <Cell dataKey="price" />
          </Column>
        </Table>
    );
}