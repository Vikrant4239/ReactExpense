import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

function App() {
  const expenses = [
    { title: "car insurance", amount: "200", date: new Date(2021, 7, 28) },
    { title: "Toilet Paper", amount: "100", date: new Date(2021, 6, 28) },
    { title: "medical", amount: "50", date: new Date(2022, 7, 26) },
    { title: "batteries", amount: "40", date: new Date(2022, 4, 22) },
  ];
  return (
    <Card>
      <h2>lets get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </Card>
  );
}

export default App;
