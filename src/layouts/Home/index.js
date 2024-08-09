import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div>
                <Link to={"/model1"}>Model 1</Link>
            </div>
            <div>
                <Link to={"/model2"}>Model 2</Link>
            </div>
            <div>
                <Link to={"/model3"}>Model 3</Link>
            </div>
            <div>
                <Link to={"/model4"}>Model 4</Link>
            </div>
        </>
    )
}
export default Home;