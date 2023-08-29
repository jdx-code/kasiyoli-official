// Inside Introduction component
import React from 'react';

const Introduction = (props) => {
    const contentArray = props.content; // Array of question-answer pairs

    const renderedContent = contentArray.map(item => (
        <div key={item.id}>
            <p>Question: {item.question}</p>
            <p>Answer: {item.answer}</p>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {renderedContent}
                </div>
                <div className="col-md-4">
                    <img src={props.img} alt="Intro Img" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;

