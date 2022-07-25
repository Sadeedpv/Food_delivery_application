import Image from 'next/image'
import { urlFor } from '../libs/client';
import styles from '../styles/Menu.module.css'

export default function Food({item}) {
    const src = urlFor(item.image).width(300).height(300).fit('max').auto('format').url();
    return (
        <div className={styles.container2}>
            <div className={styles.wrapper}>
                <Image alt='' 
                loader={() => src}
                src={src}
                height={500}
                width={500}
                layout='responsive'
                unoptimized={true}
                className={styles.image}
                />
            </div>
            <div className={styles.subhead}>
                <span>{item.name}</span>
                <span>${item.price}</span>
            </div>
        </div>
    )  
}
