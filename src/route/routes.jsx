import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import { TableData } from '../features/TableData'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: "table/:number",
          element: <TableData />,
        },
      ]
    },
]);