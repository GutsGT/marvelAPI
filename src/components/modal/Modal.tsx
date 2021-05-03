import styles from './styles.module.css';

export function Modal(){

    return (
        <div className={styles.fade} id="modal">
            <div className={styles.ctnModal} id="modalContent">
                <p id="description"></p>
                <div id="maps"></div>
            </div>
        </div>
    )
}