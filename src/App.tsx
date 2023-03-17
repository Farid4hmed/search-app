import { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getProducts } from './api/api'
import  Home from "./pages/Home/Home";
import  Result  from "./pages/Result/Result"

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

const App:FC = () => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<productObj[]>([]);

  async function fetchProducts(){
    const result = await getProducts();
    if (result) {
      setProducts(result);
    }
    else console.log("Couldn't fetch products");
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>

    <Routes>
      <Route path="/" element={<Home search={search} setSearch={setSearch} products={products} setProducts={setProducts}/>}/>
      <Route path="/result" element = { <Result search={search} setSearch={setSearch} products={products} setProducts={setProducts}/> } />
    </Routes>

    </>
  );
}

export default App;
