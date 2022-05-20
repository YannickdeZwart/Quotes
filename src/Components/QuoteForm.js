import React, { useState } from "react";

function QuoteForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });
    }
    return (
        <div>
            <form className="Quote-Form" onSubmit={handelSubmit}>
                <input type="text"
                       placeholder="Add a quote"
                       value={input}
                       name="text"
                       className="Quote-input"
                       onChange={handleChange}
                />
                <button className="quote-Button">Add a Quote</button>
            </form>
        </div>
    );
}

export default QuoteForm;
