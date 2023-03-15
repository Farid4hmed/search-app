
import styles from "./SearchBar.module.css";

export interface IAppProps {
}

export function SearchBar (props: IAppProps) {  

  return (
    <div className={styles.container}>
        <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" />
        <img className={styles.searchLogo} src={require('./search.png')} alt="searchBar"/>
        </div>

    </div>
  );
}
