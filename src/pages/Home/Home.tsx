import { FC, useEffect, useState } from 'react';
import  SearchBar  from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css"

export interface IAppProps {
  search: string,
  setSearch: (product: string)=>void,
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


const Home:FC<IAppProps>= (props) => {
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <SearchBar products={props.products} search={props.search} setSearch={props.setSearch}/>
      </div>
    </div>
  );
}

export default Home;