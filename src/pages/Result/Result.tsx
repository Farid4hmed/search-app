import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./Result.module.css";
export interface IAppProps {
}

export function Result (props: IAppProps) {
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

        </div>
    </div>
  );
}
