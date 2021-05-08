import styles from './styles.module.css';

export function Modal(){

    return (
        <div className={styles.modal} id="modal">
            <div className={styles.fade}></div>
            <div className={styles.ctnModal} id="modalContent">
                <p id="description"></p>
                
                <p>Deseja encomendar?</p>
                <div id="maps" className={styles.maps}></div>
            </div>
        </div>
    )
}