import {DivTurn, ArticlePreview, Titles, ImgTurn, Figure, CancelButton} from "./TurnStyle";
import axios from 'axios'

const Turno = ({Turno, onCancel}) => {
    const {date, time, status, id} = Turno
    const fecha = Turno.date.split('T')[0];

    const HandleOnCancel = async () => {
        await axios.put(`http://localhost:3005/appointments/cancel/${id}`)
        .then(() => {
            alert("turno cancelado nasheeeee");
            onCancel();
        })
        .catch(()=> alert("Error al cancelar turno"));
    }
    return (
        <DivTurn>
            <Figure>
                <ImgTurn src="src/assets/logo/snow-scenery.jpg"/>
            </Figure>
            <ArticlePreview>
            <Titles>Nro. Turno: {id}</Titles>
            <Titles>Fecha: {fecha}</Titles>
            <Titles>Hora: {time}</Titles>
            <Titles>Estado: {status}</Titles>
            <CancelButton onClick={HandleOnCancel} disabled={status === "cancelled"}>Cancelar turno</CancelButton>
            </ArticlePreview>
        </DivTurn>
    )
}

export default Turno