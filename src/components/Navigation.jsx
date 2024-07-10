import { Link } from "react-router-dom"
import { Cris1 } from "./Cris1"
import { Cris2 } from "./Cris2"
import { Cris3 } from "./Cris3"
import { Cris4 } from "./Cris4"
import { Cris5 } from "./Cris5"
import { Cris6 } from "./Cris6"

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/Cris1" className="links">
            <figure className="image-size">
                <Cris1 />
                <figcaption>Cristiano Con Real Madrid</figcaption>
            </figure>
        </Link>
        <Link to="/Cris2" className="links">
            <figure className="image-size">
                <Cris2 />
                <figcaption>Cristiano  Con la Eurocopa</figcaption>
            </figure>
        </Link>
        <Link to="/Cris3" className="links">
            <figure className="image-size">
                <Cris3 />
                <figcaption>Cristiano Con Portugal</figcaption>
            </figure>
        </Link>
        <Link to="/Cris4" className="links">
            <figure className="image-size">
                <Cris4 />
                <figcaption>Cristiano Manchester United</figcaption>
            </figure>
        </Link>
        <Link to="/Cris5" className="links">
            <figure className="image-size">
                <Cris5 />
                <figcaption>Cristiano joven Manchester United</figcaption>
            </figure>
        </Link>
        <Link to="/Cris6" className="links">
            <figure className="image-size">
                <Cris6 />
                <figcaption>Cristiano Con 5 Champions</figcaption>
            </figure>
        </Link>
    </div>
  )
}
