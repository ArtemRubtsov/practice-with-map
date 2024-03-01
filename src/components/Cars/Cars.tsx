

type CarsType = {
    manufacturer?: string,
    model?: string
}

type CarsPropsType = {
    topCars: Array<CarsType>

}


export const Cars: React.FC<CarsPropsType> = (props: CarsPropsType) => {
   
  return (
    <>
        <table>
            <thead>
                <tr>
                <th scope="col">manufacturer</th>
                <th scope="col">model</th>
                </tr>
            </thead>
            <tbody>
                    {props.topCars.map((manufacturer, index) => {
                        return (
                            <tr>
                            <th key={index} scope="col">{manufacturer.manufacturer}</th>
                            <td>{manufacturer.model}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </>
  )
}
