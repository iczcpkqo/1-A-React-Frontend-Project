"use client"
import Image from 'next/image'
import Card from './components/card/Card'
import Form from './components/form/Form'
import PDF from './components/pdf/PdfList'
import {useState} from "react";

export default function Home() {

    const [comps, setComps] = useState(0);

    function onComps(show) {
        setComps(show);
    }

    function ShowCards() {
        return (
            <div className="w-full space-x-3">
                <Card/>
                <Card/>
                <Card/>
            </div>
        );

    }

    function ShowFrom() {
        return (
            <div className="w-full">
                <Form/>
            </div>
        );
    }

    function ShowPdf() {

        return (
            <div>
                <PDF/>
            </div>
        );
    }


    return (
        <main className="flex min-h-screen flex-col items-center p-24 py-5">

            <div className="space-x-4 pb-4">
                <button
                    className={"border border-blue-400 p-2 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white "
                        + (comps === 0 ? "bg-blue-700 text-white" : "")}

                    onClick={() => onComps(0)}>
                    1.1 Rounded cards
                </button>
                <button
                    className={"border border-blue-400 p-2 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white "
                        + (comps === 1 ? "bg-blue-700 text-white" : "")}
                    onClick={() => onComps(1)}>
                    1.2 A Form
                </button>
                <button
                    className={"border border-blue-400 p-2 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white "
                        + (comps === 2 ? "bg-blue-700 text-white" : "")}
                    onClick={() => onComps(2)}>
                    2 - Pdf Merge
                </button>
            </div>

            {comps === 0 ? <ShowCards/> : (comps === 1 ? <ShowFrom/> : <ShowPdf/>)}


        </main>
    )
}
