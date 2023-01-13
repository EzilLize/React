import './App.css';
import React from 'react';

function App() {
  const isAdult= false;
  const isAdmin= true;
  const tex= 'текст';
  const text= '<p>текст</p>';
  const text1= '<p>текст1</p>';
  const text2= '<p>текст2</p>';
  var attr= 'block';
  var str= 'block';
  const  stail= {
    color: 'green',
    border: '1px solid red',
    borderRadius: '30px',
  };
  const show=true;
  const z= 'текст 1';
  const x= 'текст 2';
  const arr= ['a', 'b', 'c', 'd', 'e'];
  function getText() {
    return 'текст';
  }
  function getNum1() {
    return 1;
  }
  function getNum2() {
    return 2;
  }
  return <div>
    gaming
    <p>mania</p>
    <p>online</p>
    <input></input><br></br>
    <input></input>
    <ul>
      <li>samara</li>
      <li>jon</li>
      <li>tajik</li>
      <li>eye</li>
      <li>pak</li>
      <li>flex</li>
      <li>gg</li>
      <li>lug</li>
      <li>jj</li>
      <li>foff</li>
    </ul>
    <table>
        <tr>
          <th>apple</th>
          <th>banana</th>
          <th>cucumber</th>
        </tr>
        <tr>
          <th>fortnite</th>
          <th>babaji</th>
          <th>warzone</th>
        </tr>
        <tr>
          <th>rock</th>
          <th>hip-hop</th>
          <th>metal</th>
        </tr>
    </table>
      <p><div ClassName= 'yey'>
        privet
      </div></p>
      <p><div ClassName= 'yee'>
        drug
      </div></p>
      <p><div ClassName= 'yye'>
        kak dela?
      </div></p>
      
      <div>
        {isAdult? 'you are an adult' : 'You are a little boy'}
      </div>
      <div>
        {isAdmin? <p>you are an admin</p> : '' }
      </div>
      <div>
        текст
      </div>
      <div>
        {tex}
      </div>
      <div>
        {text}
      </div>
      <div>
        <p>{text1}</p>
        <p>!!!</p>
        <p>{text2}</p>
      </div>
      <div id={attr}>
        текст
      </div>
      <div class={str}> текст </div>
      <div style={stail}>Hello!</div>
      <div>
        {show? z : x }
      </div>
      <div arr=''>
        <ul>
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}</li>
          <li>{arr[3]}</li>
          <li>{arr[4]}</li>
        </ul>
      </div>
      <div>
        {getText()}
      </div>
      <div>
        {getNum1()+getNum2()}
      </div>
  </div>
}

export default App;
