import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductCard from './components/ProductCard/ProductCard'
import ProductContainer from './components/ProductContainer/ProductContainer'


function App() {

  return (
      <div>
        <Header />
        <Hero />
        {/* <ProductCard /> */}
        <ProductContainer />
      </div>  
  )
}

export default App
