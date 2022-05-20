import React, {useState} from "react";
import QuoteForm from "./QuoteForm";
import quote from "./Quote";
import Quote from "./Quote";
function QuoteList() {
    const [quotes, setQuotes] = useState([]);

    const removeQuote = id => {
        const removeArr = [...quotes].filter(todo => todo.id !== id)

        setQuotes(removeArr)
    }

    const updateQuote = (quoteId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setQuotes(prev => prev.map(item => (item.id === quoteId ? newValue : item)));
    }

    const addQuote = quote => {
        if(!quote.text || /^\s*$/.test(quote.text)) {
            return
            }

        const newQuotes = [quote, ...quotes];

        setQuotes(newQuotes);
    };

    const ImportantQuote = id => {
        let updatedQuotes = quotes.map(quote => {
            if (quote.id === id) {
                quote.isImportant = !quote.isImportant
            }
            return quote;
        });
        setQuotes(updatedQuotes);
    }

    return (
        <div>
            <h1>Add your favourite quote</h1>
            <QuoteForm onSubmit={addQuote}/>
            <Quote
                quotes={quotes}
                ImportantQuote={ImportantQuote}
                removeQuote={removeQuote}
                updateQuote={updateQuote}
                />
        </div>
    );
}
export default QuoteList;
