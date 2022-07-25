import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../libs/client";
import styles from '../../styles/Food.module.css'
import {BsTriangleFill} from 'react-icons/bs'
import { useState } from "react";
import useStore from "../../libs/useStore";

export default function Food({food}){
    const [quantity, setQuantity] = useState(1);
    const src = urlFor(food.image).url();

    const Itemexists = false;

    const Addfood = useStore(state => state.addFood);
    const Allfood = useStore(state => state.food);
    const updateFood = useStore(state => state.updateQuantity);

    const AddtoCart = () =>{
        const item = {
            name: food.name,
            description: food.description,
            price: food.price,
            src: src,
            quantity: quantity
        }

        Allfood.map(item => {
            if(item.name === food.name){
                updateFood(item.name, quantity);
                alert('Item already in cart');
                Itemexists = true;
            }
        })
        if (Itemexists === false){
            Addfood(item);
        }

    }
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image 
                    loader={() => src}
                    unoptimized={true}
                    layout='fill'
                    src={src}
                    />
                </div>
                <div className={styles.details}>
                    <span>{food.name}</span>
                    <span>{food.description}</span>
                    <div className={styles.price}>Price : <span className={styles.dollar}>${food.price}</span></div>
                    {/* Quantity */}
                    <div className={styles.quantity}>
                        <BsTriangleFill color="#F54748" style={{
                            transform: "rotate(270deg)",
                        }} onClick={() =>{
                            {quantity > 1 && setQuantity(quantity - 1)}
                        }} />
                        <span className={styles.quantityNo}>{quantity}</span>                        
                        <BsTriangleFill color="#F54748" style={{
                            transform: "rotate(90deg)",
                        }} onClick={() =>{
                            setQuantity(quantity + 1)
                        }} />
                    </div>
                    {/* Buy now */}
                    <button className={`btn ${styles.button}`}
                    onClick={AddtoCart}
                    >Add to Cart</button>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type == 'food' && defined(slug.current)][].slug.current`
    );
    return {
        paths: paths.map((slug) => ({
            params: {slug}
        })),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const {slug =''} = context.params;
    const food  = await client.fetch(
        `*[_type == "food" && slug.current == '${slug}'][0]`
    )
    return{
       props:{
        food
       } 
    }
}