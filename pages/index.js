import { useState, useEffect, useRef } from 'react';
import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const IndexPage = () => {
    const timeoutId = useRef(null);
    const [isArticleVisible, setIsArticleVisible] = useState(false);
    const [timeoutState, setTimeoutState] = useState(false);
    const [articleTimeout, setArticleTimeout] = useState(false);
    const [article, setArticle] = useState('');
    const [loading, setLoading] = useState('is-loading');

    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchAsyncData = async () => {
            timeoutId.current = setTimeout(async () => {
                const response = await fetch(
                    "https://gist.githubusercontent.com/ethanx94/b130e3098fb28604339a026964e4e6c0/raw/personal-site.json"
                );
                if (response.status === 200) {
                    const responseJSON = await response.json();
                    setContent(responseJSON);
                }
                setLoading('');
            }, 100)
        };

        fetchAsyncData();
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current)
            }
        }
    }, []);

    const handleOpenArticle = (articleLocal) => {
        setIsArticleVisible(!isArticleVisible);
        setArticle(articleLocal);

        setTimeout(() => {
            setTimeoutState(!timeoutState);
        }, 325)

        setTimeout(() => {
            setArticleTimeout(!articleTimeout);
        }, 350)
    }

    const handleCloseArticle = () => {
        setArticleTimeout(!articleTimeout);

        setTimeout(() => {
            setTimeoutState(!timeoutState);
        }, 325);

        setTimeout(() => {
            setIsArticleVisible(!isArticleVisible);
            setArticle('');
        }, 350);
    }

    return (
        <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
            <div>
                <Head>
                    <title>Ethan Richardson - Associate Developer</title>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div id="wrapper">
                    <Header onOpenArticle={handleOpenArticle} timeout={timeoutState} />
                    <Main
                        isArticleVisible={isArticleVisible}
                        timeout={timeoutState}
                        articleTimeout={articleTimeout}
                        article={article}
                        onCloseArticle={handleCloseArticle}
                        content={content}
                    />
                    <Footer timeout={timeoutState} />
                </div>
                <div id="bg" />
            </div>
        </div>
    );
}

export default IndexPage
