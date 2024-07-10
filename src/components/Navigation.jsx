import { Link } from "react-router-dom"
import { Cris1 } from "./Cris1"
import { Cris2 } from "./Cris2"
import { Cris3 } from "./Cris3"
import { Cris4 } from "./Cris4"
import { Cris5 } from "./Cris5"
import { Cris6 } from "./Cris6"

export const Navigation = () => {
  return (
    <div>
        <Link to="/Cris1">
            <figure>
                <Cris1 />
                <figcaption>Cristiano Con Real Madrid</figcaption>
            </figure>
        </Link>
        <Link to="/Cris2">
            <figure>
                <Cris2 />
                <figcaption>Cristiano  Con la Eurocopa</figcaption>
            </figure>
        </Link>
        <Link to="/Cris3">
            <figure>
                <Cris3 />
                <figcaption>Cristiano Con Portugal</figcaption>
            </figure>
        </Link>
        <Link to="/Cris4">
            <figure>
                <Cris4 />
                <figcaption>Cristiano Con el Manchester United ultima vez</figcaption>
            </figure>
        </Link>
        <Link to="/Cris5">
            <figure>
                <Cris5 />
                <figcaption>Cristiano joven Manchester United</figcaption>
            </figure>
        </Link>
        <Link to="/Cris6">
            <figure>
                <Cris6 />
                <figcaption>Cristiano Con 5 Champions</figcaption>
            </figure>
        </Link>
    </div>
  )
}
