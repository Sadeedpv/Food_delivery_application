import Image from 'next/image'
import styles from '../styles/Services.module.css'
import service1 from '../assets/s1.png'
import service2 from '../assets/s2.png'
import service3 from '../assets/s3.png'

export default function Services(){
    return (
        <>
            <div className={styles.container}>
                <span>OUR SERVICES</span>
                <span>You Choose</span>
                <span>We Deliver</span>
            </div>
            {/* Services */}
            <div className={styles.services}>
                <div className={styles.serviceItem}>
                    <div className={styles.ImageWrapper}>
                        <Image src={service1} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>Easy to order</span>
                    <span>Straight from our kitchen to your heart. Trusted by every food addict</span>
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.ImageWrapper}>
                        <Image src={service2} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>Fast and secure</span>
                    <span>When you crave for midnight delicacy, just dial our number. Speedy and quicker delivery with us.</span>
                </div>
                <div className={styles.serviceItem}>
                    <div className={styles.ImageWrapper}>
                        <Image src={service3} alt='' objectFit='cover' layout='intrinsic' />        
                    </div>
                    <span>Healthy and affordable</span>
                    <span>Freshness and craziness delivered at your doorstep. Your hunger companion.</span>
                </div>
            </div>
        </>
    )
  
}
