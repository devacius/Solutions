import React from 'react'
import {  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
 } from 'recoil';

import { charCountState } from '../store/count.tsx';
import {textState} from '../store/text.tsx';

export default function About() {

  return (
    <>
     <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
    
    </>
  );
}
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CountMe/>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
function  CountMe() {
  const [count,setCount]= useRecoilState(charCountState)
  return(
    <>
    <div>
      count = {count}
      <br/>
      <button onClick={()=>{setCount(count+1)}}> Increase</button>
      <button onClick={()=>{setCount(count-1)}}> Decrease</button>
    </div>
    </>
  )
}
       



