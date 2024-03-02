import { useState } from "react"

type FilterType = 'all' | 'Dollars' | 'RUBLS'


export const Money: React.FC = () => {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
      ])
      
    const [filter, setFilter] = useState<FilterType>('all')
      
    let currentMoney = money  

    if(filter === 'Dollars') {
        currentMoney = money.filter((money => money.banknots === "Dollars"))  
    }

    if(filter === 'RUBLS') {
        currentMoney = money.filter((money => money.banknots === "RUBLS")) 
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    
    

  return (
    <>
    <table>
        <thead>
            <tr>
                <th scope="col">banknots</th>
                <th scope="col">value</th>
                <th scope="col">number</th>
            </tr>
        </thead>
        <tbody>
            {currentMoney.map((money, index) => {
                return(
                    <tr key={index}>
                        <th>{money.banknots}</th>
                        <th>{money.value}</th>
                        <th>{money.number}</th>
                    </tr>
                )
            })}
        </tbody>
    </table>
    <div className="buttonMoney">
        <button onClick={() => onClickFilterHandler('all')}>All</button>
        <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        <button onClick={() => onClickFilterHandler('RUBLS')}>Rubls</button>
    </div>
    </>
  )
}
