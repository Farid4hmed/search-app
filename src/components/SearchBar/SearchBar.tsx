import { FC } from 'react';
import styles from "./SearchBar.module.css";

export interface IAppProps {

}

const SearchBar:FC = (props: IAppProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" />
        <img className={styles.searchLogo} src={require('./search.png')} alt="searchBar" />
      </div>

      <div className={styles.suggestionWrapper}>
        <div className={styles.suggestion}>
          <h3>Latest Trends</h3>
          <div className={styles.photosFlex}>
            <div className={styles.photo}>
              <img src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Riley-Keough.jpg" />
              <p>Product Name</p>
            </div>
            <div className={styles.photo}>
              <img src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Riley-Keough.jpg" />
              <p>Product Name</p>
            </div>
            <div className={styles.photo}>
              <img src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Riley-Keough.jpg" />
              <p>Product Name</p>
            </div>
            <div className={styles.photo}>
              <img src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Riley-Keough.jpg" />
              <p>Product Name</p>
            </div>
            <div className={styles.photo}>
              <img src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2023/03/Riley-Keough.jpg" />
              <p>Product Name</p>
            </div>
          </div>
          <h3>Popular Suggestions</h3>
          <div className={styles.popularSuggestions}>
            <p>Hello Bello</p>
            <p>Hello Bello</p>
            <p>Hello Bello</p>
            <p>Hello Bello</p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default SearchBar;
