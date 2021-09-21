import { deposit, withdraw, reset } from "./store/balance/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        {" "}
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br></br>
      <input
        type="text"
        value={customAmount}
        placeholder="enter an amount to deposit"
        onChange={(event) => {
          setCustomAmount(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(deposit(parseInt(customAmount)));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
