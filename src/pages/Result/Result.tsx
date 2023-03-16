import { FC } from 'react';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import  Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Result.module.css";
export interface IAppProps {
}

const Result:FC = (props: IAppProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
        <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" />
        <img className={styles.searchLogo} src={require("../../components/SearchBar/search.png")} alt="searchBar" />
      </div>
        </div>

        <div className={styles.results}>
        <Sidebar />
        <ProductsGrid />
        </div>
    </div>
  );
}

export default Result;