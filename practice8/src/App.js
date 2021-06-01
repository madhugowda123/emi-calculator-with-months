import React,{useState} from "react";
import './App.css';
import {withStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core"


const PrettoSlider =withStyles({
  root:{color:"orange",height:5,width:1400,marginLeft:30},
  thumb:{height:15,width:15,backgroundColor:"orange",border:"1px solid black",marginTop:-5,marginLeft:-9},
  track:{height:5,borderRadius:4},
  rail:{height:5,borderRadiu:4,paddingleft:5},
})(Slider);

function App() {
  const [pAmount,setpAmount]=useState(0);
  const [interest,setinterest]=useState(0);
  const [duration,setDuration]=useState(0);
  const maxValue=500000;
  const intMax=20;
  const maxDuration=36;
  const intr=interest/1200;
  const emi=duration ? Math.round(pAmount* intr/(1-(Math.pow(1/(1+intr),duration)))):0;

  return (
    <div className="App">
      <div className="Apps">
      <h2 className="Heading "><u>EMI calculator</u></h2>
      <div className="card " >
      <br/>

        <div className="Headings">
        Amount you need: <input type="text"  value={pAmount}  pamount={{pAmount}} style={{width:350,height:50,borderRadius:10,  backgroundColor:" rgb(56, 54, 54)",color:"orange"}}></input></div>
        <PrettoSlider className="maxSlider" value={pAmount}  onChange={(event,vAmt)=>{setpAmount(vAmt);}}defaultValue={pAmount} max={maxValue}/>         
     
     <div> <span style={{color:"orange"}}>{pAmount}</span>
       <span  className="CalAmount" >₹5 Lakh</span>
       </div>
        </div>
<p></p>      
  <div  className="card" >
        <Typography  className="CalTenure"gutterBottom>Tenure:</Typography>
    <div>    
  <Button  style={{marginLeft:320,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20
}} value={duration} onClick={(event,vDur)=>{setDuration(3);}}defaultValue={duration} max={maxDuration}>3 months</Button>
  <Button  style={{marginLeft:220,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20}} value={duration} onClick={(event,vDur)=>{setDuration(6);}}defaultValue={duration} max={maxDuration}>6 months</Button>
  <Button  style={{marginLeft:220,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20}} value={duration} onClick={(event,vDur)=>{setDuration(12);}}defaultValue={duration} max={maxDuration}>12 months</Button>
  </div>
<br/>
<div>
  <Button style={{marginLeft:320,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20}} value={duration} onClick={(event,vDur)=>{setDuration(18);}}defaultValue={duration} max={maxDuration}>18 months</Button>
  <Button  style={{marginLeft:220,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20}} value={duration} onClick={(event,vDur)=>{setDuration(24);}}defaultValue={duration} max={maxDuration}>24 months</Button>
  <Button style={{marginLeft:220,color:"orange",border:" 1px solid white",width:120,height:30,borderRadius:20}} value={duration} onClick={(event,vDur)=>{setDuration(36);}}defaultValue={duration} max={maxDuration}>36 months</Button>
      </div> 
      <br/> 
</div>
        

        
        <div className="CalTenure">
        <PrettoSlider  value={interest} onChange={(event,vInt)=>{setinterest(vInt);}}defaultValue={interest} max={intMax}/>
       Interest: <h6 style={{color:"orange"}}> {interest}%</h6>
        </div>
      <div>
      <div className="card" >
<h2  style={{color:"orange",textAlign:"center"}} >EMI:{emi}</h2>
</div>
      </div>
      </div>
    </div>
  );
}

export default App;
