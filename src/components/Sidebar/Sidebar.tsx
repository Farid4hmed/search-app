import { FC, useState, useEffect } from 'react';
import styles from "./Sidebar.module.css";

export interface SidebarProps {
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

const Sidebar:FC<SidebarProps> = (props) =>{
  const [tempProds, setTempProds] = useState<productObj[]>([]);
  console.log(tempProds);

  function handleIkea(){
    // props.setProducts(tempProds);
    const check1 = document.getElementById("brand1") as HTMLInputElement | null;
    if(check1!.checked == true){
        const newArray = props.products.filter((product)=>{
          return product.company.includes("Ikea");
        });
        props.setProducts([...newArray]);
    }
    else {
      props.setProducts([...tempProds]);
    }
    
  }
  function handleCaressa(){
    const check2 = document.getElementById("brand2") as HTMLInputElement | null;
    if(check2!.checked == true){
      const newArray = props.products.filter((product)=>{
        return product.company.includes("Caressa");
      });
      props.setProducts([...newArray]);
  }
  else {
    props.setProducts([...tempProds]);
  }
  }
  useEffect(() => {
    setTempProds(props.products);
  }, [])
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
            <input type="checkbox" id="brand1" onChange={handleIkea}/>
            <h4>Ikea</h4>
          </div>
          <div className={styles.brand2}>
            <input type="checkbox" id="brand2" onChange={handleCaressa}/>
            <h4>Caressa</h4>
          </div>
        </div>
        <hr/>
        <div className={styles.price}>
          <h3>Price Range</h3>
          <p>⌄</p>
        </div>
        <div className={styles.priceList}>
          <div className={styles.price1}>
            <input type="checkbox" />
            <h4>Under 1000</h4>
          </div>
          <div className={styles.price2}>
            <input type="checkbox" />
            <h4>1000 to 3099</h4>
          </div>
        </div>
        <hr/>
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

export default Sidebar;