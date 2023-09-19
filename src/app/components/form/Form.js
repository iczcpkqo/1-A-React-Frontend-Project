"use client"
import {useState} from "react";
import CusInput from "./CusInput"
import CusDropDown from "./CusDropDown"
import CusUserList from "./CusUserList"


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

    function onCancel() {
        setInitId(0);
        setInitEmail("");
        setInitCountry(0);
        setInitLang(0);

        setNextEmail("");
        setNextCountry(0);
        setNextLang(0);
    }

    function onApplyUserData(id) {
        let user = usersData.find((item) => {
            return item.id === id;
        });

        console.log(user);

        setInitId(user.id);
        setInitEmail(user.email);
        setInitCountry(user.country);
        setInitLang(user.lang);

        setNextEmail(user.email);
        setNextCountry(user.country);
        setNextLang(user.lang);
    }

    function onSave() {

        if (nextEmail === "" ||
            nextCountry === 0 ||
            nextLang === 0 ||
            !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(nextEmail)) )
            return;

        if (initId === 0)
            setUsersData([...usersData, {
                id: initUserData.at(-1).id + 1,
                email: nextEmail,
                country: nextCountry,
                lang: nextLang
            }]);
        else
            setUsersData(usersData.map(item => item.id === initId ? {
                email: nextEmail,
                country: nextCountry,
                lang: nextLang
            } : item));


        onCancel();

        console.log(initUserData);
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
                    <CusDropDown
                        label="Countries/Region"
                        title="Please Select a Countries/Region"
                        data={initCountriesData}
                        def={nextCountry}
                        onUpdate={onUpdateCountry}
                    />
                </div>
                <div className="w-full">
                    <CusDropDown
                        label="Content Language(as available)"
                        title="Please Select Content Language(as available)"
                        data={initLangsData}
                        def={nextLang}
                        onUpdate={onUpdateLang}
                    />
                </div>
            </div>

            <div className="border rounded-2xl border-blue-400 w-full mx-auto mt-5 p-5">

                <CusUserList
                    countries={initCountriesData}
                    langs={initLangsData}
                    data={usersData}
                    applyUser={onApplyUserData}/>


            </div>

            <div className="border rounded-2xl border-blue-400 w-full mx-auto mt-5">
                <div className="space-x-6 px-20 py-6">

                    <button className="hover:bg-green-50 rounded-xl border-green-700 border-2 px-20 py-3"
                            onClick={onSave}
                    >SAVE
                    </button>

                    <button className="underline outline-0"
                            onClick={onCancel}
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
    {id: 3, email: 'ccc@gmail.com', country: 3, lang: 3},
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
