

type SmartBtnType = {
    name: string,
    callback: ()=> void // выносим функцию на уровень выше через props
}



export const SmartButton: React.FC<SmartBtnType> = ({name}) => {
  return (
    <div>
        <button>{name}</button>
    </div>
  )
}



export const SmartDifButton = (props: SmartBtnType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
      <div>
          <button onClick={onClickHandler}>{props.name}</button>
      </div>
    )
  }


  