import { useEffect, useState } from 'react';
import './App.css';
import { Comments } from './components/Comments/Comments';
import { Cars } from './components/Cars/Cars';
import { Button } from './components/Button/Button';
import { SmartButton, SmartDifButton } from './components/SmartButton/SmartButton,';

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


  const button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }

  const button2Foo = (subscriber: string) => {
      console.log(subscriber)
  }

  const Button3Foo = () => {
      console.log('i am stuppid button, i dont know')
  }

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
      <Cars topCars={topCars}/>
      <Button />
      <SmartDifButton callback={() => button1Foo('i created in cars - my name button1Foo', 21)} name="SmatBtnDif"/>
      <SmartDifButton callback={() => button2Foo('i created in cars - my name button2Foo')} name="SmatBtnDif"/>
      <SmartDifButton  callback={Button3Foo} name="StuppidBtn"/>
      <Comments comments={comments}/>
    </>
  )
}

export default App;
