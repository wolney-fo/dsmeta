import './style.css'
import notificationIcon from '../../assets/img/notification-icon.svg'
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
}

function handleClick(saleId : number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        console.log("SUCESSO")
    })
}

export function NotificationButton( {saleId} : Props ) {
    return (
        <div className="dsmeta-red-btn-container" onClick={() => handleClick(saleId)}>
            <div className="dsmeta-red-btn">
                <img src={notificationIcon} alt="Notificar" />
            </div>
        </div>
    )
}