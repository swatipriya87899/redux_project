import Header from "./container/Header";
import {Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";


function App() {
  return (
        <>
         <Header/>
         <Routes>
              <Route path="/" element={<ProductListing/>} />
              {/* <Route path="/product/:productId" element={ProductDetail} /> */}
              {/* <Route>404 not found</Route> */}
          </Routes>
       </>
       
  );
}

export default App;
