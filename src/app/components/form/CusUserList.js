"use client"
import {useEffect, useState} from "react";

/**
 * A component, Show Users information
 * @param data Array, user's data e.g. {id: 1, email: 'aaa@gmail.com', country: 1, lang: 1}
 * @param applyUser A function, what will happen when the info be clicked
 * @param countries Array, all the counties, in the data, the param data depend on this field, e.g. {id: 1, name: 'English'},
 * @param langs Array, all the languages, in the data, the param data depend on this field, e.g. {id: 1, name: 'English'},
 * @returns {JSX.Element}
 * @constructor
 */
export default function CusUserList({data, applyUser, countries, langs}) {
    const [users, setUsers] = useState(data)

    useEffect(() => {
        setUsers(data);
    }, [data]);

    function LiUsers({users}) {

        function onLiClick(id) {
            applyUser(id);
        }

        return users.map((o, i) => {
            return (
                <li
                    className="hover:bg-green-50 cursor-pointer space-x-6"
                    key={i} onClick={() => onLiClick(o.id)}>
                    <span> Email: {o.email}</span>
                    <span> Country: {
                        countries.find((item) => item.id===o.country).name
                    }</span>
                    <span> Language: {
                        langs.find((item) => item.id===o.lang).name
                    }</span>
                </li>
            );
        });
    }


    return (
        <div>
            <ul className="overflow-auto h-20">
                <LiUsers users={data}/>
            </ul>
        </div>
    );
}
