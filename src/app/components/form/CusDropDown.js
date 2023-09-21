"use client"
import {SlArrowDown} from 'react-icons/sl'
import {useEffect, useState} from "react";

/**
 * A component for Dropdown select
 * @param label the description of the field
 * @param title the text when nothing be selected
 * @param data what will show in the list
 * @param onUpdate A function, Need to passing a parameter, it will be called when the select be changed,
 * @param def default value, which will be showed before User select
 * @returns {JSX.Element}
 * @constructor
 */
export default function CusList({label, title, data, onUpdate, def = 0}) {

    const [isSelected, setIsSelected] = useState(def !== 0);
    const [selectedOption, setSelectedOption] = useState(def === 0 ? 0 : def);

    useEffect(() => {
        setSelectedOption(def === 0 ? title : def);
        setIsSelected(def !== 0);
    }, [def]);

    function handleSelectChange(e) {
        let val = parseInt(e.target.value);
        setSelectedOption(val);
        if (val === 0)
            setIsSelected(false);
        else
            setIsSelected(true);
        onUpdate(val);
    }

    function LabelSelect({isSel, label}) {
        if (isSel === true)
            return (<div>
                <label className="text-gray-400">{label}</label>
            </div>);
        else
            return (<div className="p-3"></div>)
    }

    function Options({title, data}) {
        return (
            <>
                <option value={0} className="text-gray-400">{title}</option>
                {data.map((o, i) => {
                    return ( <option key={i} value={o.id}>{o.name}</option> );
                })}
            </>
        );
    }

    return (
        <div className="w-full">
            <LabelSelect isSel={isSelected} label={label}/>
            <div className="w-full">
                <select
                    className={"border-b-2 border-black appearance-none inline-block pr-6 w-full outline-0 text-2xl "
                        + (isSelected ? "" : "text-gray-400")}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    defaultValue={def}
                >
                    <Options
                        title={title}
                        data={data}/>
                </select>
                <SlArrowDown className="inline-block -ml-4 text-green-600"/>
            </div>
        </div>

    )
}
