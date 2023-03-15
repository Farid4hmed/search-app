
import styles from "./SearchBar.module.css";

export interface IAppProps {
}

export function SearchBar (props: IAppProps) {  

  return (
    <div className={styles.container}>
        <input className={styles.search} placeholder="Search">

        </input>


    </div>
  );
}
