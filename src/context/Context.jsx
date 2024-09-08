import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [user, setUser] = useState(false);
    const [departmentName, setDepartmentName] = useState('');
    const [departmenId, setDepartmentId] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [allDepartements, setAllDepartements] = useState([]);
    const [beds, setBeds] = useState([]);

    return <Context.Provider value={{ departmenId, setDepartmentId,departmentName, setDepartmentName, user, setUser, timeSlots, setTimeSlots, timeSlot, setTimeSlot, allDepartements, setAllDepartements, beds, setBeds }}>
        {props.children}
    </Context.Provider>
}
