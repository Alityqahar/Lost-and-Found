import FloatingLines from "../components/FloatingLines/floatinglines"
import Btn from "../components/PrimaryBtn/Btn"
import styles from './Home.module.css'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div className={styles.container}>
            <div style={{ width: '100%', height: '100vh', position: 'fixed', zIndex: '-1' }}>
                <FloatingLines 
                    enabledWaves={["top","middle","bottom"]}
                    // Array - specify line count per wave; Number - same count for all waves
                    lineCount={5}
                    // Array - specify line distance per wave; Number - same distance for all waves
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>  
            <span className={styles.btn} style={{marginBottom:'10px'}}><img src="/logo1.png" style={{width:'40px', padding: '0px'}} /></span>
            <div className={styles.header}>LostLog <br />Every Lost Item Deserves to Be Found</div>
            <div className={styles.btnContainer}>
                <Link className={styles.btn} to={'/found'} style={{backgroundColor:'white', color:'black',textDecoration:'none'}}>Temukan</Link>
                <span className={styles.btn}>Kehilangan</span>
            </div>
        </div>
    )
}

export default Home
