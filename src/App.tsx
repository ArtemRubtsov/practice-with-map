import { useEffect, useState } from 'react';
import './App.css';
import { Comments } from './components/Comments/Comments';

type DataPropsType = {
  id?: number,
  name?: string,
  email?: string,
  body?: string,
  // postId?: number
}



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
    </>
  )
}

export default App;
