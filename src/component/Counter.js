import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  //  const inc =()=>{
  //     setCount(count + 1 );
  //  }
  //  const dec = ()=>{
  //     count===0?setCount(count):setCount(count-1);

  //  }
  return (
    <div className="counter">
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        label="INCREMENT"
        id="inc"
      >
        INCREMENT
      </Button>
      <span style={{ color: "red", fontSize: 22 }}>Count:{count}</span>
      <Button
        disabled={count === 0}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        label="DECREMENT"
        id="dec"
      >
        DECREMENT
      </Button>
    </div>
  );
};

export default Counter;
