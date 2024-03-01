import { useEffect, useState } from 'react';
import './App.css';
import { Comments } from './components/Comments/Comments';
import { Cars } from './components/Cars/Cars';

type DataPropsType = {
  id?: number,
  name?: string,
  email?: string,
  body?: string,
  // postId?: number
}
const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]


const App: React.FC<DataPropsType> = (props) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then( comments => {
        setComments(comments)
      })
  }, [])

  return (
    <>
      <Comments comments={comments}/>
      <Cars topCars={topCars}/>
    </>
  )
}

export default App;
