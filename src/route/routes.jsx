import {createBrowserRouter} from "react-router-dom";
import { Root } from '../features/Root'
import { TableNext } from '../features/TableNext'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: "table/:dateID",
          element: <TableNext />,
        },
      ]
    },
]);