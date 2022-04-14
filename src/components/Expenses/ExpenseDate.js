import "../Expenses/ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {month}
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{Year}</div>
      </div>
    </div>
  );
};
export default ExpenseDate;
