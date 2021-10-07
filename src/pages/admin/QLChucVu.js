import React, { useEffect, useState } from 'react'
import { GetById } from '../../api/ChucVuApi';
function QLChucVu() {
    const [chucvu, setchucvu] = useState({});
    const [isChanged, setisChanged] = useState(false);
    useEffect(()=>{
        GetById('nvkt')
        .then(res => setchucvu(res)).then(console.log('wtf'))
        .catch(error=> console.log(error));
    },[isChanged]);

    const handleChange = (e) =>{
        setchucvu({
            ...chucvu,
            [e.taget.name]:[e.target.value]
        });
    }
    const handleSave = () =>{

    }
    return (
        <div>
             <div key={chucvu.machucvu}>
                        <input name="tenchucvu" type='text' value={chucvu.tenchucvu} onChange={()=>handleChange()} />
                        <input name="mucluong" type="number" value={chucvu.mucluong} onChange={()=>handleChange()} />
                        <button onClick={()=>handleSave()}>Click</button>
            </div>
        </div>
    )
}

export default QLChucVu
