import { FC, useState } from 'react';
import styles from "./SearchBar.module.css";
import { useNavigate } from 'react-router-dom';

export interface IAppProps {
  products: productObj[]
  search: string,
  setSearch: (product:string)=>void,
}

interface productObj {
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

const SearchBar: FC<IAppProps> = (props) => {
  const navigate = useNavigate();
  const [suggest, setSuggest] = useState<boolean>(false);
  function handleFocus(){
    setSuggest(true);
  }

  function handleKeyDown(event:any){
    if(event.key == 'Enter'){
      navigate("/result");
        // console.log(props.search)
    }
  }
  function handleLogoClick(){
    navigate("/result");
    // console.log(props.search);
  }
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input className={styles.search} placeholder="Search" onChange={(event)=>props.setSearch(event.target.value)} onKeyDown={handleKeyDown} onFocus={handleFocus}/>
        <img className={styles.searchLogo} src={require('./search.png')} alt="searchBar" onClick={handleLogoClick}/>
      </div>

      {suggest?(<div className={styles.suggestionWrapper}>
        <div className={styles.suggestion}>
          <h3>Latest Trends</h3>
          <div className={styles.photosFlex}>
            {props.products.slice(0, 5).map((product) => (
              <div className={styles.photo}>
                <img src={product.imgUrls[0]} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <h3>Popular Suggestions</h3>
       
              <div className={styles.popularSuggestions}>
              <p>Table</p>
              <p>Chair</p>
              <p>Bed</p>
              <p>Armchair</p>
            </div>
          
          
        </div>

      </div>): ""}

    </div>

    // <Routes>
    // <Route path="/" element={<Home search={search} setSearch={setSearch} products={products} setProducts={setProducts}/>}/>
    // <Route path="/result" element = { <Result search={search} setSearch={setSearch} products={products} setProducts={setProducts}/> } />
    // </Routes>
  );
}

export default SearchBar;
