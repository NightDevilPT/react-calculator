import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme,setTheme] = useState("dark");
  const [bg,setBg] = useState(theme==="dark"?"#1c1d1d":"white");
  const [fg,setFg] = useState(theme==="dark"?"white":"black");
  const [highlight,setHighlight] = useState("#168aad");
  const [display,setDisplay] = useState("");
  const [ans,setAns] = useState();

  useEffect(()=>{
    setBg(theme==="dark"?"#1c1d1d":"white");
    setFg(theme==="dark"?"white":"black");
  },[theme])

  const DisplayAns=(val)=>{
    try{
      setAns(eval(val));
    }catch(err){
      return
    }
  }

  return (
    <div className="App" style={{"--bg":bg,"--fg":fg,"--highlight":highlight}}>
      <div className='calculator-frame'>
        <div className='setting-frame'>
          {/* Theme Frame */}
          <div className='theme-changer-frame'>
            <input type={"checkbox"} className="checkbox-btn" onClick={e=>setTheme(theme==="dark"?"light":"dark")}></input>
            {theme==="dark"?
            <FaMoon onClick={e=>setTheme("light")} className='theme-icons moon'/>:
            <FaSun onClick={e=>setTheme("dark")} className='theme-icons sun'/>}
          </div>

          {/* HighLighter Frame */}
          <div className='highlight-frame'>
            <div className={`colors ${highlight==="#F94A29"?"active-color":"unactive-color"}`} style={{backgroundColor:"#F94A29"}} onClick={e=>setHighlight("#F94A29")}></div>
            <div className={`colors ${highlight==="#C70039"?"active-color":"unactive-color"}`} style={{backgroundColor:"#C70039"}} onClick={e=>setHighlight("#C70039")}></div>
            <div className={`colors ${highlight==="#D800A6"?"active-color":"unactive-color"}`} style={{backgroundColor:"#D800A6"}} onClick={e=>setHighlight("#D800A6")}></div>
            <div className={`colors ${highlight==="#A91079"?"active-color":"unactive-color"}`} style={{backgroundColor:"#A91079"}} onClick={e=>setHighlight("#A91079")}></div>
            <div className={`colors ${highlight==="#FF5403"?"active-color":"unactive-color"}`} style={{backgroundColor:"#FF5403"}} onClick={e=>setHighlight("#FF5403")}></div>
            <div className={`colors ${highlight==="#007965"?"active-color":"unactive-color"}`} style={{backgroundColor:"#007965"}} onClick={e=>setHighlight("#007965")}></div>
          </div>
        </div>
        <div className='display-frame'>
          <p className='ans-frame'>{ans}</p>
          <input className='que-frame' type={"text"} value={display} onChange={e=>{setDisplay(e.target.value);DisplayAns(e.target.value)}} />
        </div>
        <div className='buttons-frame'>
          <input type={"button"} className="button clear" value={"Clear"} onClick={e=>{setDisplay("");setAns("")}}></input>
          <input type={"button"} className="button highlight-btn" id='plus' value={"+"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"9"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"8"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"7"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button highlight-btn" value={"%"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"6"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"5"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"4"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button highlight-btn" value={"*"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"3"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"2"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"1"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button highlight-btn" value={"/"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" id='zero' value={"0"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" value={"."} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button highlight-btn" value={"-"} onClick={e=>{setDisplay(display+e.target.value);DisplayAns(display+e.target.value)}}></input>
          <input type={"button"} className="button normal-btn" id='equal' value={"="} onClick={e=>{DisplayAns(display);setDisplay(ans)}}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
