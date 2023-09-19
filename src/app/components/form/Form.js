"use client"
import {useState} from "react";
import CusInput from "./CusInput"

export default function CusForm() {

    const [usersData, setUsersData] = useState(initUserData);

    const [initId, setInitId] = useState(0);
    const [initEmail, setInitEmail] = useState("");
    const [initCountry, setInitCountry] = useState(0);
    const [initLang, setInitLang] = useState(0);

    const [nextEmail, setNextEmail] = useState("");
    const [nextCountry, setNextCountry] = useState(0);
    const [nextLang, setNextLang] = useState(0);

    const [refreshId, setRefreshId] = useState(0);


    // useEffect(() => {
    //     setUsersData(initUserData);
    // }, []);

    function onUpdateEmail(nextEmail) {
        setNextEmail(nextEmail);
    }

    function onUpdateCountry(nextCountry) {
        setNextCountry(nextCountry);
    }

    function onUpdateLang(nextLang) {
        setNextLang(nextLang);
    }

    return (
        <div className="w-1/2">
            <div className="border border-blue-400 rounded-2xl px-6 pb-12 pt-6 space-y-3 w-full">
                <div className="w-full">
                    <CusInput
                        label="Email Address"
                        title="Please input the Email Address"
                        def={nextEmail}
                        onUpdate={onUpdateEmail}
                    />
                </div>
                <div className="w-full">

                </div>
                <div className="w-full">

                </div>
            </div>

            <div className="border rounded-2xl border-blue-400 w-full mx-auto mt-5">
                <div className="space-x-6 px-20 py-6">

                    <button className="hover:bg-green-50 rounded-xl border-green-700 border-2 px-20 py-3"
                    >SAVE
                    </button>

                    <button className="underline outline-0"
                    >Cancel
                    </button>

                </div>
            </div>


        </div>
    );
}

var initUserData = [
    {id: 1, email: 'aaa@gmail.com', country: 1, lang: 1},
    {id: 2, email: 'bbb@gmail.com', country: 2, lang: 2},
    {id: 3, email: 'bbb@gmail.com', country: 3, lang: 3},
];

const initCountriesData = [
    {id: 1, name: 'Ireland'},
    {id: 2, name: 'Germany'},
    {id: 3, name: 'Iceland'}
];

const initLangsData = [
    {id: 1, name: 'English'},
    {id: 2, name: 'German'},
    {id: 3, name: 'Icelandic'}
];
