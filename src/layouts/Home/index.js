import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div>
                <Link to={"/model1"}>Khu vực 1</Link>
            </div>
            <div>
                <Link to={"/model2"}>Khu vực 2 - Phương án 1</Link>
            </div>
            <div>
                <Link to={"/model3"}>Khu vực 2 - Phương án 2</Link>
            </div>
            <div>
                <Link to={"/model4"}>Khu vực 3</Link>
            </div>
            <div>
                <Link to={"/model5"}>Khu vực 4</Link>
            </div>
        </>
    )
}
export default Home;