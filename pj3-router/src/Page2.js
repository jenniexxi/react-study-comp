import { useParams } from "react-router-dom";

function Page2() {
    const {id} = useParams()
    return (
        <>
            <h1>page2{id}</h1>
        </>
    )
}

export default Page2;