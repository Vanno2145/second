import logo from './logo.svg';
import './App.css';
import { Medals } from './Medals';
import { Description } from './Description';
import { Players } from './Players';

const currentSquad = [
  { firstName: "Алексей", lastName: "Громов", birthYear: 1995 },
  { firstName: "Илья", lastName: "Морозов", birthYear: 1997 },
  { firstName: "Сергей", lastName: "Швец", birthYear: 1996 },
  { firstName: "Максим", lastName: "Белов", birthYear: 1998 },
  { firstName: "Даниил", lastName: "Плахотнюк", birthYear: 1999 },
  { firstName: "Владимир", lastName: "Елисеев", birthYear: 1994 },
  { firstName: "Егор", lastName: "Карасёв", birthYear: 2000 },
  { firstName: "Никита", lastName: "Журавлёв", birthYear: 1996 },
  { firstName: "Антон", lastName: "Лавров", birthYear: 1993 },
  { firstName: "Артур", lastName: "Синицын", birthYear: 1997 },
  { firstName: "Роман", lastName: "Серебров", birthYear: 1995 }
];


let btn = document.getElementById('first')

btn.addEventListener("click", function(){
  starr.
})

let starr = [st1, st2, st3]


let st1 = {
  backgroungColor: 'black'
}

let st2 = {
  backgroungColor: 'yellow'
}

let st3 = {
  backgroungColor: 'red'
}

function App() {
  return (
    <div id = 'main' style={st}>
      <div id = 'Themes'>
        <button id = 'first'>1</button>
      </div>
      <Description></Description>
      <Medals></Medals>
      <Players arr = {currentSquad}></Players>
    </div>
  );
}

export default App;
