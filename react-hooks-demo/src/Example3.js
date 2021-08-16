import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Index1() {
  var time;
  function itemOneAction() {
    time = setInterval(() => {
      console.log('组件1');
    }, 1000);
  }

  useEffect(() => {
    console.log('组件1componentDidMount ');
    return () => {
      console.log('组件1componentWillUnmount 清除定时器');
      clearInterval(time);
    }
  })
  return <div>
    <h2 onClick={() => itemOneAction()}>开始定时器1</h2>
  </div>
}

function Index2() {
  var time;
  function itemTwoAction() {
    time = setInterval(() => {
      console.log('组件2');
    }, 1000);
  }

  useEffect(() => {
    console.log('组件2componentDidMount');
    return () => {
      console.log('组件2componentWillUnmount 清除定时器');
      clearInterval(time);
    }
  })
  return <div>
    <h2 onClick={() => itemTwoAction()}>开始定时器2</h2>
  </div>
}

function Example3() {

  return <div>
    <p>useEffect代替componentWillUnmount使用</p>
    <Router>
      <ul>
        <li><Link to="/">组件1</Link></li>
        <li><Link to="/two/">组件2</Link></li>
      </ul>
      <Route path="/" exact component={Index1} />
      <Route path="/two/" component={Index2} />
    </Router>

  </div>

}

export default Example3;
