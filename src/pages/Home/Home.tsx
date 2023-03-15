import { SearchBar } from "../../components/SearchBar/SearchBar";

import styles from "./Home.module.css"

export interface IAppProps {

}

export function Home (props: IAppProps) {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
}
