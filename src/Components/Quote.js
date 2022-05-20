import React, { useState } from "react";
import * as PropTypes from "prop-types";
import QuoteForm from "./QuoteForm";

function TodoForm(props) {
    return null;
}

function Quote({quotes, ImportantQuote, removeQuote, updateQuote}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateQuote(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <QuoteForm edit={edit} onSubmit={submitUpdate} input={edit.value}/>
    }

    return quotes.map((quote, index) => (
        <div className={quote.isImportant ? 'quote-row important' : 'quote-row'}
             key={index}
        >
            <div key={quote.id} onClick={() => ImportantQuote(quote.id)}>
                {quote.text}
            </div>
            <button onClick={() => removeQuote(quote.id)}
                className="remove-quote" >
                remove
            </button>
            <button onClick={() => setEdit({ id: quote.id, value: quote.text})}
                 className="edit-quote">
                edit
            </button>
        </div>
    ));
}

export default Quote;
