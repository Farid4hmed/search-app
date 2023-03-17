import { FC } from 'react';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import  Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Result.module.css";
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

const Result:FC<IAppProps> = (props) => {
  console.log(props.search);
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
        <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" onChange={(e)=>props.setSearch(e.target.value)}/>
        <img className={styles.searchLogo} src={require("../../components/SearchBar/search.png")} alt="searchBar" />
      </div>
        </div>

        <div className={styles.results}>
        <Sidebar search={props.search} setSearch={props.setSearch} products={props.products} setProducts={props.setProducts}/>
        <ProductsGrid products={props.products} setProducts={props.setProducts}/>
        </div>
    </div>
  );
}

export default Result;