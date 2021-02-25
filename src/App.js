import React, { useState, useEffect} from 'react';
import "./App.css";
function App() {
  // const [product, setProdut] = useState([])
  // // menu html
  // useEffect(()=>{
  //   fetch('https://random-data-api.com/api/users/random_user')
  //   .then(res => res.json())
  //   .then(data => setMenus(se))
  // },[])
  var menus = ['Home', 'Service', 'Product', 'Contact'];
  // service html
  var product = [
    {
      name: 'Software Development',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Product Manegment',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Seo 7 Years Experience',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Wordpress Development',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Marketing Development',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Social Marketing',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Ecomarce Development',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    },
    {
      name: 'Ecomarce Development',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis est hic.',
    }
  ]
  // menu css
  var style = {
    border: '1px solid red', float: 'left',
  }
  var menuCss = {
    display: 'flex', justifyContent: 'center', padding: '20px 0'
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul style={menuCss}>
          {
            menus.map(menu => <li style={style}><a href="#">{menu}</a></li>)
          }
        </ul>
        <Counter></Counter>
        <div className="container">
          <div className="row">
            {
              product.map(items => <Menustyle info={items}></Menustyle>)
            }
          </div>
        </div>
      </header>{" "}
    </div>
  );
}
// number count
function Counter() {
  const [count, setCount] = useState(0);
  const countStyle = {
    textAlign: 'center', 
    marginBottom: '30px'
  }
  const btnStyle = {
    border: '0',
    padding: '8px 18px',
    margin: '15px 8px',
    border: '1px solid red',
    backgroundColor: 'transparent',
    color: 'white'
  }
  return (
    <div style={countStyle}>
      <h1>Counter : {count}</h1>
      <div className="button">
      <button onClick={() => setCount(count - 1)} style={btnStyle}>Dncrease</button>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>Increase</button>
      </div>
    </div>
  )
}
// user data
function Menustyle(props) {
  // service css
  const productStyle = {
    border: '1px solid red',
    color: 'white',
    padding: '20px',
    float: 'left',
    textAlign: 'center',
    overflow: 'hidden'
  }
  return (
    // service html
    <div className="single-item col-xl-3 col-md-6" style={productStyle}>
      <h1>{props.info.name}</h1>
      <p>{props.info.text}</p>
      <button style={{border: '0', padding: '8px 18px'}}>Read more</button>
    </div>)
}
export default App;