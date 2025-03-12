import Container from "../../Layout/Container/Container"
import About from "./About"
import Banner from "./Banner"
import Faq from "./Faq"
import Packages from "./Packages"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Packages/>
        <Testimonial/>
        <Faq/>
        <About/>
    </div>
  )
}

export default Home
