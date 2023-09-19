"use client"
import {useState, useEffect} from "react";

export default function CusInput({label, title, onUpdate, next, def=""}) {

    const [isInput, setIsInput] = useState(def !== "");
    const [inputValue, setInputValue] = useState(def===""?title:def);

    useEffect(() => {
        setInputValue(def === "" ? title : def);
        setIsInput(def !== "");
    }, [def]);

    function LabelSelect({isInput, label}){
        if( isInput === true)
            return ( <div>
                <label className="text-gray-400">{label}</label>
            </div> );
        else
            return (<div className="p-3"></div>)
    }

    function handleOnFocus(){
        setIsInput(true);
        if(inputValue===title)
            setInputValue("");
    }

    function handleOnBlur(){
        if(inputValue === "") {
            setIsInput(false);
            setInputValue(title);
        }
        else
            setIsInput(true);
    }

    function handleOnChange(e){
        let nextValue = e.target.value
        setInputValue(nextValue);
    }

    return (
        <div className="w-full">
            <LabelSelect isInput={isInput} label={label}/>
            <div className="w-full">
                <input className={"border-b-2 border-black appearance-none inline-block pr-6 w-full outline-0 text-2xl "
                    + (isInput? "":"text-gray-400")}
                       type="text"
                       value={inputValue}
                       onFocus={handleOnFocus}
                       onBlur={handleOnBlur}
                       onChange={handleOnChange}
                />
            </div>
        </div>

    )
}
