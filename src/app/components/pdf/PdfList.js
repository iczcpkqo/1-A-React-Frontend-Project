"use client"
import {useState} from "react";
import axios from 'axios';
import ajax from "@/app/components/api/ajax";

/**
 * a component for processing pdf
 * @returns {JSX.Element}
 * @constructor
 */
export default function PdfList() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [files, setFiles] = useState([]);

    function onFileChange(event) {
        // Update the state
        setSelectedFile(event.target.files[0]);
    };


    function onFileUpload() {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "uploaded_file",
            selectedFile,
            selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:9000/upload", formData);

    };

    async function loadFiles() {
        await ajax("getfiles", {}).then(e => {
            console.log("=======");
            console.log(e.data);
            setFiles(e.data.files)
        }).catch((error) => {
            console.log(error);
        });
    }

    async function downLoadFile(name) {
        await ajax("download/"+name, {}).then(e => {
            console.log(e.data);
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div>
            <input type="file" onChange={onFileChange}/>
            <button className="border border-blue-400 p-2 rounded-md text-blue-700 bg-gray-50 hover:bg-blue-700 hover:text-white "
                    onClick={onFileUpload}>
                Upload!
            </button>
            <button className="border border-blue-400 p-2 rounded-md text-blue-700 bg-gray-50 hover:bg-blue-700 hover:text-white "
                    onClick={loadFiles}>
                get files
            </button>
            <ul>
                {files.map((o,i)=>{
                    return <li key={i} value={o}>{o}
                        <a className="text-blue-600 underline-offset-1" href={"http://localhost:9000/download/"+o}>download</a>

                    </li>
                })}
            </ul>
        </div>
    );
}
