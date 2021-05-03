import styles from './styles.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Modal } from './components/modal/Modal';
import { Content } from "./pages/Content";
import { BrowserRouter } from 'react-router-dom';

export default function App(){

  return(
      <div>
          <img className={styles.backgroundImage} src="../red_fire_wallpaper.jpg" alt="Imagem de Fundo"/>
          
          <Modal/>

          <BrowserRouter>
            <Navbar/>
            <Content/>
          </BrowserRouter>
          
      </div>
  )

}
