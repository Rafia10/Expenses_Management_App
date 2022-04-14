import { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "../Expenses/ExpenseItems.css";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <div className="card">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button
          onClick={() => {
            setTitle("Upadated!!!");
            console.log(title);
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
export default ExpenseItems;
