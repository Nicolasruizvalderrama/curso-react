import React,{useState} from 'react'


export default function Header() {
    const[darkMode,setDarkmode]=useState(false);
    
    const handleclick=()=>{

        setDarkmode(!darkMode);
    }
    return (
        <div className="header">
            
        <button type="button" OnClick={handleclick}>{darkMode ?'DarkMode':'Ligth Mode'}</button>
            
        </div>
    )
}
