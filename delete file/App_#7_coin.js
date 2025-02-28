import {useState, useEffect} from "react";


function App(){

    const [loading,setLoading]=useState(true);
    const [coins,setCoins] = useState([]);
    const [money,setMoney]=useState(0);
    const [selectOption,setSelectOption]=useState("");
    const [buy,setBuy]=useState(0);
    const onChange=(event)=>setMoney(event.target.value);
    const onChangeSelect = (event)=>setSelectOption(event.target.value);

    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response)=>response.json())
            .then((json)=>{
                setCoins(json);
                setLoading(false);

                if(json.length>0){               
                    setSelectOption(json[0].quotes.USD.price);
                }
                
            });

    },[]);
  
    useEffect(()=>{
            setBuy(parseFloat(money)/parseFloat(selectOption));
        },[money,selectOption]);
        

    return <div>
        <h1>The Coins! {loading ?"": `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong>: null}
        <input value={money} onChange={onChange}></input>
        <h3>{buy} 개 구매가능</h3>
        <select onChange={onChangeSelect}>
            {coins.map((coin,index)=>(
                <option key={index} value={coin.quotes.USD.price}>
                   {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
                </option>
            ))}
        </select>
    </div>;
}

export default App;

/* toDo List
    function App(){
    const [toDo, setTodo] = useState("");
    const [toDos,setTodos]=useState([]);
    const onChange=(event)=>setTodo(event.target.value);    
    const onSubmit=(event)=>{
        event.preventDefault();
        // console.log(toDo);
        if(toDo==""){
            return;
        }
        setTodos((currentArray)=>[toDo, ...currentArray]);
        setTodo("");
    };
    // console.log({toDos});
    return <div>
        <form onSubmit={onSubmit}>
            <h1>My To Dos ({toDos.length})</h1>
            <input 
                onChange={onChange} 
                value ={toDo} 
                type="text" 
                placeholder="Write your to do" >
            </input>

            <button>Add To do</button>
        </form>
        <hr />
        <ul>
            {toDos.map((item, index)=>(
                <li key ={index}>{item}</li>
            ))}
        </ul>

    </div>;
}
*/