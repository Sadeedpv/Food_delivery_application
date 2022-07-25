import styles from  '../styles/Header.module.css'
import Link from 'next/link'
import {BsCart} from 'react-icons/bs'
import {FaPizzaSlice} from 'react-icons/fa'
import useStore from '../libs/useStore';
import { useEffect, useState } from 'react';

function Header() {
    const [cartSpace, setcartSpace] = useState(0);
    const cart = useStore(state => state.food);
    useEffect(() =>{
        setcartSpace(cart.length);
    }, [])
  return (
    <div className={styles.header}>

        {/* Logo part */}
        <div className={styles.logo}>
            <h2 className={styles.logoheader}> 
                <Link href='/'>Recipe</Link>
                <FaPizzaSlice color='red' style={{
                    marginLeft: '10px',
                }}/>
            </h2>
        </div>

        {/* Menu */}

        <ul className={styles.menu}>
            <li><Link href='/' ><a>Home</a></Link></li>
            <li><Link href='/#menu' ><a>Menu</a></Link></li>
            <li>Contact</li>
        </ul>

        {/* Cart */}

        <div className={styles.flexEnd}>
            <Link href='/Cart'>
                <BsCart size={45}/>
            </Link>
            {cartSpace !== 0 ? <span className={styles.span}>{cartSpace}</span> :''}           
        </div>

    </div>
  )
}

export default Header