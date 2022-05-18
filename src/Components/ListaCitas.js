import React from 'react'

const ListaCitas = () =>{

    //Ver Get
    const uri = "";
    const getData = async () =>{
        const response = axios.get(uri);
        return response;
    }
    const [list, setList] = useState([])

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    }, [])
    return(
        <div>
            {
                list.map((Citas, index)=>(
                    <CuadroCitas
                        key={index}
                        Cita={Citas}
                    />
                ))
            }
        </div>
    );
}
export default ListaCitas;