import './style.css'
import notificationIcon from '../../assets/img/notification-icon.svg'

export function NotificationButton() {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={notificationIcon} alt="Notificar" />
            </div>
        </div>
    )
}