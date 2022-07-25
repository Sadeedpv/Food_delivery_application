import Layout from "../components/Layout"
import useStore from "../libs/useStore"
import styles from '../styles/Cart.module.css'
import cart from '../assets/cart.png'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Cart(){
    const [food, setfood] = useState();
    const [noofitems, setnoofitems] = useState(0);
    const FoodItems = useStore((state) => state.food);

    useEffect(() =>{
        setfood(FoodItems);
        setnoofitems(FoodItems.length);
    }, [FoodItems])

    const removeFood = useStore((state) => state.removeFood);

    const RemoveFromCart = (f) =>{
        removeFood(f);
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h2 className={styles.header}>Welcome to your{' '}<span className={styles.cartSpan}>Cart!</span></h2>
                <div className={styles.innercontainer}>
                    {noofitems > 0 ? (
                        <>
                        {
                            food && food.map((f, i) => {
                                return (
                                <div className={styles.flex} key={i}>
                                    <Image src={f.src} 
                                    height={250}
                                    width={250}
                                    alt={f.name}
                                    className={styles.image}
                                    objectFit="cover"
                                    />
                                    <div>
                                        <h3 className={styles.name}>{f.name}</h3>
                                        <h3 className={styles.desc}>{f.description}</h3>
                                        <div className={styles.innerflex}>
                                            <h3>quantity : {f.quantity}</h3>
                                            <h3>Price: $ {f.price}</h3>
                                        </div>
                                        <h3 className={styles.totalPrice}>Total Price: $ {f.price * f.quantity}</h3>
                                        <div className={styles.innerflex}>
                                            <button className="btn"
                                            onClick={() =>{
                                                removeFood(f);
                                            }}
                                            >Buy</button>
                                            <button className="btn"
                                            onClick={() =>{
                                                removeFood(f);
                                            }}
                                            >Remove</button>
                                        </div>
                                    </div>
                                </div>

                                )
                            })
                        }
                        </>
                    ): (
                        <div className={styles.emptyCart}>
                            <Image 
                            src={cart}
                            alt="cart"
                            width={400}
                            height={400}
                            objectFit="contain"
                            />
                            <h1>Your cart is empty!</h1>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}