import Link from 'next/link'
import { useState } from 'react';
import { Hearts } from 'react-loader-spinner';
import styles from '../styles/Menu.module.css'
import Food from './Food'

export default function Menu({food}){
    const [loading, setloading] = useState(false);
    return (
        <>
            <div className={styles.container} id='menu'>
                <span className={styles.header}>Our Menu</span>
                {/* Food component */}
                <div className={styles.flex}>                    
                    {food && food.map((item, index) => {
                        return (
                        <Link href={`./food/${item.slug.current}`}  key={index}>
                            {
                                loading ? <Hearts color="#00BFFF" height={80} width={80} />: <a><Food item={item}
                                onCliick={() =>{
                                    setloading(true);
                                }}
                                /></a>
                            }
 
                        </Link>)
                    })}
                </div>
            </div>
        </>
    )  
}
