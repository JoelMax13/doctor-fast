import React from 'react';
import DatosRecetasPaciente from './DatosRecetasPaciente';

const ListaRecetas = () => {
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: '',
            headers: { 
              'token': token
            }
        };
        axios(config).then((response)=>{
            setList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    return(
        <div>
            {
                list.map((Receta, index)=>(
                    <DatosRecetasPaciente
                        key={index}
                        Receta={Receta}
                    />
                ))
            }
        </div>
    );
}
export default ListaRecetas;