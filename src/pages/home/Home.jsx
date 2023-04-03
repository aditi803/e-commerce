import React from 'react'
import Slider from '../../components/hero/Slider'
import Order from '../../components/hero/Order'
import { Category } from '../../components/category/Category'
import Product from '../../components/product/Product'

const Home = () => {
  // window.addEventListener("scroll", function () {
  //   const header = this.document.querySelector(".header")
  //   header.classList.toggle("active", this.window.scrollY > 100)
  // })
  // window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})
  
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  )
}

export default Home