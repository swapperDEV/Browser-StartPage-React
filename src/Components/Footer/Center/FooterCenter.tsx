import React, {useContext, useEffect, useState} from 'react'
import Wrapper from '../../../UI/Wrapper'
import PhotoContext from '../../../Store/photo-data-context'
import { Fade } from 'react-awesome-reveal'

const FooterCenter = () => {
    const phtCtx = useContext(PhotoContext)
    const [actQuote, setQuote] = useState<any>({
        content: '',
        author: ''
    });
    const [authorClass, setAuthorClass] = useState('quoteAuthor')
    const displayAuthor = () => {
        setAuthorClass('quoteAuthor quotesAuthorActive')
    }
    const unDisplayAuthor = () => {
        setAuthorClass('quoteAuthor')
    }
    async function updateQuote() {
        try {
          const response = await fetch("https://api.quotable.io/random");
          const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
          setQuote(data);
        } catch (error) {
          console.error(error);
          setQuote({ content: "Opps... Something went wrong" });
        }
    }
    const newQuote = () => {
        updateQuote()
    }
    useEffect(() => {
        updateQuote()
    },[])
    return (
        <Wrapper classes='footer-center' onMouseLeave={unDisplayAuthor}>
            <Fade>
                <div onMouseEnter={displayAuthor}>
                    <p className='locationInfo'>Photo from: {phtCtx.location}</p>
                    <p className='quotes'>{actQuote.content}
                    </p>
                    <p className={authorClass}>{actQuote.author} <i className="fas fa-sync-alt" onClick={newQuote}></i></p>
                </div>
            </Fade>
        </Wrapper>
    )
}

export default FooterCenter