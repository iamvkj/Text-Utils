import React from "react";

const About = (props) => {

    const myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
        border: "2px solid white",
        borderColor: props.mode === "dark" ? "white" : "#042743"
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2 className="my-3">About Us</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <strong>Analyze your text!</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laudantium distinctio molestiae minima asperiores sequi tenetur quia assumenda eum ipsum unde iure culpa eveniet, rem nemo placeat enim. Nihil, nemo!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <strong>Free to use!</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi repellendus pariatur fugit nulla architecto obcaecati, adipisci tenetur nihil reprehenderit ut voluptates neque dolore voluptatem facere rem dicta blanditiis et!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <strong>Browser Compatiable!</strong>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum suscipit expedita enim obcaecati deserunt molestiae laborum nostrum, eos deleniti facilis voluptatibus accusamus impedit corporis iure laboriosam eius adipisci sapiente.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;