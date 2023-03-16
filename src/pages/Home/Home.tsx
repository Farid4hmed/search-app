import { FC } from 'react';
import  SearchBar  from "../../components/SearchBar/SearchBar";

import styles from "./Home.module.css"

export interface IAppProps {

}

const Home:FC = (props: IAppProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <SearchBar />
      </div>
    </div>
  );
}

export default Home;