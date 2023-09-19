"use client"
import {useEffect, useState} from "react";

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
                        countries.find((item) => item.id===o.lang).name
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
