import './style.css';

const MyComponent = () => {
    //const tuananh = "eric " // string
    // const tuananh = 25 // number
    // const tuananh = true 
    // const tuananh = undefined 
    const tuananh = null // null
    return (
        <>
            <div>{tuananh}Le Tuan Anh</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child</div >
        </>
    );
}

export default MyComponent;