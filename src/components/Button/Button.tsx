


export const Button = () => {

    function mySubscriber(event: React.MouseEvent<HTMLButtonElement>) {
        console.log('Hello Jonh')
    }
    const mySubArrow = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Alex')
    }

    const onClickHandler = (name: string) => {
        console.log(name)
    }// передаем callback event и return onClickHandler 

    const foo1 = () => {
        console.log("im function foo1, so i dont have property")
    }

    const foo2 = (number: number) => {
        console.log(`im function foo2 and my property - ${number}`)
    }

  return (
    <div>
        {/* <button onClick={() => onClickHandler("John")}>MyButtonArrow</button>
        <button onClick={() => onClickHandler("Alex")}>MyButton</button>
        <button onClick={() => onClickHandler('i am button 3')}>Button - 3 </button> */}
        <button onClick={() => foo1()}>foo1</button>
        <button onClick={() => foo2(100200)}>foo2</button>
    </div>
  )
}
