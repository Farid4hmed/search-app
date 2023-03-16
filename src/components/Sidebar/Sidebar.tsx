import styles from "./Sidebar.module.css";
export interface IAppProps {
}

export function Sidebar(props: IAppProps) {
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
            <input type="checkbox" />
            <h4>Mango</h4>
          </div>
          <div className={styles.brand2}>
            <input type="checkbox" />
            <h4>H&M</h4>
          </div>
        </div>
        <div className={styles.price}>
          <h3>Price Range</h3>
          <p>⌄</p>
        </div>
        <div className={styles.priceList}>
          <div className={styles.price1}>
            <input type="checkbox" />
            <h4>Under 500</h4>
          </div>
          <div className={styles.price2}>
            <input type="checkbox" />
            <h4>1000 to 3000</h4>
          </div>
        </div>
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
