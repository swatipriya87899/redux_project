import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import axios from 'axios';


const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products[0]);
    const {id,title} =products;
    console.log(products);

    const fetchProducts= async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("err", err);
        })
        console.log(response);
    }

    useEffect(() => {
    fetchProducts();
    }, [])
    
  return (
    <div>
        <Card sx={{ minWidth: 275 , maxWidth: 375, minHeight: 300}}>
            {title}
        </Card>
    </div>
  )
}

export default ProductComponent