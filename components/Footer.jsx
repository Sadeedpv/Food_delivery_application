import styles from '../styles/Footer.module.css'
import {BsTwitter, BsGithub, BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
        <div className={styles.footer}>
            <p>Made with ❤️</p>
            <p className={styles.icons}>
                <BsFacebook size={25} />
                <a href='https://twitter.com/pvsadeed'><BsTwitter size={25} /></a>
                <a href='https://Github.com/Sadeedpv'><BsGithub size={25} /></a>
            </p>
        </div>

  )
}

export default Footer