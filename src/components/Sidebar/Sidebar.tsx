import { FC, useState, useEffect } from 'react';
import styles from "./Sidebar.module.css";

export interface SidebarProps {
  products: productObj[],
  setProducts: (product: productObj[])=>void, 
}

export interface productObj {
  available: string,
  category: string,
  colors: Array<string>,
  company: string,
  customerRevs: number,
  desc: string,
  freeShipping: number,
  imgUrls: Array<string>,
  name: string,
  price: number,
  sku: string,
  stars: number,
  __v: number,
  _id: string
}

const Sidebar:FC<SidebarProps> = (props) =>{

  

  function handleIkea(){
    const check1 = document.getElementById("brand1") as HTMLInputElement | null;
    if(check1!.checked == true){
        const newArray = props.products.filter((product)=>{
          return product.company.includes("Ikea");
        });
        props.setProducts([...newArray]);
    }
    
  }
  function handleCaressa(){
    const check2 = document.getElementById("brand2") as HTMLInputElement | null;
    if(check2!.checked == true){
      const newArray = props.products.filter((product)=>{
        return product.company.includes("Caressa");
      });
      props.setProducts([...newArray]);
  }
  }



  function handle1000(){
    const price1 = document.getElementById("price1") as HTMLInputElement | null;
    if(price1!.checked == true){
      const newArray = props.products.filter((product)=>{
        return product.price < 1000;
      });
      props.setProducts([...newArray]);
  }
  }
  function handle3099(){
    const price2 = document.getElementById("price2") as HTMLInputElement | null;
    if(price2!.checked == true){
      const newArray = props.products.filter((product)=>{
        return product.price >= 1000;
      });
      props.setProducts([...newArray]);
  }
}
  return (
    <div className={styles.container}>
      <h1>Search Results</h1>
      <div className={styles.filters}>
        <div className={styles.brand}>
          <h3>Brand</h3>
          <p>⌄</p>
        </div>
        <div className={styles.brandList}>
          <div className={styles.brand1}>
            <input type="checkbox" id="brand1" onChange={handleIkea}/>
            <h4>Ikea</h4>
          </div>
          <div className={styles.brand2}>
            <input type="checkbox" id="brand2" onChange={handleCaressa}/>
            <h4>Caressa</h4>
          </div>
        </div>
        <hr/>
        <div className={styles.price}>
          <h3>Price Range</h3>
          <p>⌄</p>
        </div>
        <div className={styles.priceList}>
          <div className={styles.price1}>
            <input type="checkbox" id="price1" onChange={handle1000}/>
            <h4>Under 1000</h4>
          </div>
          <div className={styles.price2}>
            <input type="checkbox" id="price2" onChange={handle3099}/>
            <h4>1000 to 3099</h4>
          </div>
        </div>
        <hr/>
        <div className={styles.ratings}>
          <h3>Ratings</h3>
          <p>⌄</p>
        </div>
        <div className={styles.ratingList}>
          <div className={styles.rating1}>
            <input type="checkbox" />
            <h4>★★★★★</h4>
          </div>
          <div className={styles.rating2}>
            <input type="checkbox" />
            <h4>★★★★☆</h4>
          </div>
          <div className={styles.rating3}>
            <input type="checkbox" />
            <h4>★★★☆☆</h4>
          </div>
          <div className={styles.rating4}>
            <input type="checkbox" />
            <h4>★★☆☆☆</h4>
          </div>
          <div className={styles.rating5}>
            <input type="checkbox" />
            <h4>★☆☆☆☆</h4>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default Sidebar;