import React, {useState} from 'react';

const Demo = () => {

    const[name,setname]=useState({
        var:"Rumaisa"
    })
    return (
        <div>

            <h1>{name.var}</h1>
            <button onClick={()=>setname({var:"Riaz"})}>change</button>

            </div>
    );
};

export default Demo;