import styles from './Banner.module.css';
import coloredCircle from 'assets/colored_circle.png';
import myPhoto from 'assets/my_photo.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.title}>Olá, mundo!</h1>
                <p className={styles.paragraph}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
                    Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>
            <div className={styles.img}>
                <img className={styles.coloredCircle} src={coloredCircle} aria-hidden={true} alt=""/>
                <img className={styles.myPhoto} src={myPhoto} alt="Foto do Antônio Evaldo sorrindo"/>
            </div>
        </div>
    );
}