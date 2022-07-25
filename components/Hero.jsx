import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import cherry from '../assets/Cherry.png'
import HeroImg from '../assets/HeroImage.png'
import {BsTelephone } from 'react-icons/bs'

function Hero() {
  return (
    <div className={styles.hero}>
        {/* Image */}
        <div className={styles.left}>
            <div className={styles.heroImage}>
                <p>We Promise to deliver on time.</p>
                <Image src={cherry} width={40} height={25} />
            </div>
            
            <div className={styles.Herotext}>
                <span>We deliver Food,</span>
                <span>and only</span>
                <span style={{color:'var(--themeRed)'}}>Good Food</span>
            </div>
            <div className={styles.subpara}>If you are hungry, you are not happy. We can help with that.</div>
            <button className='btn'>
                Get Started!
            </button>
        </div>





        {/* Second part of the flex */}

        <div className={styles.HeroEnd}>
            <div className={styles.imgContainer}>
                <Image src={HeroImg} alt='' layout='intrinsic'/>
            </div>

            <div className={styles.contact}>
                <span>Contact us</span>
                <div><BsTelephone color='#white' /></div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero