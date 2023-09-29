import { Link } from "react-router-dom"
import Carousel from '../components/Carousel'

const PageIndex = () => {
  return (
    <>
      <h1 className="font-bold text-xxl">test</h1>
      <Link to="/inventory">Inventory</Link>
      <Carousel/>
    </>
  )
}

export default PageIndex