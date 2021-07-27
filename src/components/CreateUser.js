import { useParams } from "react-router";
import { useState } from 'react';

const CreateUser = ({list, addCallback, status})=>{
    
    let initName = ''
    let initId = ''
    let initDept = ''    
    const {id:eid} = useParams();
    if(eid !== undefined) {
        const u = list.filter(i => i.id == eid)
        initName = u[0].name
        initId = u[0].id
        initDept = u[0].dept
    }

    
    const [name, setName] = useState(initName);
    const [id, setId] = useState(initId);
    const [dept, setDept] = useState(initDept);

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleId = (event) => {
        setId(event.target.value)
    }
    const handleDept = (event) => {
        setDept(event.target.value)
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form>
                Name: <input type='text' name='name' value={name} onChange={handleName} /> <br/>
                ID: <input type='text' name='id' value={id} onChange={handleId} /><br/>
                Dept: <input type='text' name='dept' value={dept} onChange={handleDept}/><br/>
                <button onClick={(e) => addCallback(e, {id, name, dept}, status)}>{status==='add'?'Create':'Update'}</button>
            </form>
        </>
    );
}

export default CreateUser;