import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/CounterSlice';
// import { selectCount } from './store/selectors';
// import { PostsList } from './features/posts/PostLists';
// import { AddPostForm } from './features/posts/AddPostForm';
import { Root } from './features/Root'
import { Navbar } from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const count = useSelector(selectCount);


  return (
    <>
        <Root />

    </>
  )
}

export default App;
