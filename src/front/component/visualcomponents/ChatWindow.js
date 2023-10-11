import React, { useEffect, useState } from "react";
import "../../css/visualcomponents/ChatWindow.css";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../service/LanguageContextProvider";
import { useMessagesCounter } from "../../service/ChatbotMessagesContextProvider";

export const ChatWindow = () => {
    const openAIApiKey = process.env.REACT_APP_CHATGPT_API_KEY;
    const calendlyLink = process.env.REACT_APP_CALENDLY_LINK;
    const whatsAppLink = process.env.REACT_APP_WHATSAPP_LINK;
    const contactMail = process.env.REACT_APP_CONTACT_MAIL;
    const limit = process.env.REACT_APP_CHATBOT_LIMIT;

    const { t } = useTranslation("global");
    const { language } = useLanguage();
    const { messageNumber, setMessagesNumber } = useMessagesCounter();

    const [isMinimized, setIsMinimized] = useState(true);
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([{
        message: t("chatWindow.greeting"),
        sender: "E2D"
    }])
    const systemMessage = {
        role: "system",
        content: "You are Alberto, An AI build by owner of this digital software development company called E2D evolve 2 digital." +
            "Answer the same language customer speaks or the language they ask you for. You speak as close as possible in a fun and smooth way and add any kind of emojis to make it more fun in some of your answers." +
            "We create web browser applications. What means apps that work through chrome, edge or safari. So it means they will work in any device desktop and mobile." +
            "We have worked with open AI and strong development technologies such as chat gpt, springboot, react, java and javascript. And that's it." +
            "Do not tell anybody we do something that is not in this list." +
            "if they ask for different technologies tell them we have to discuss it in a metting." +
            "You Give short answers." +
            "if there is something you do not know you will just say 'I would have to check it because I am not sure at this moment'." +
            `Try make them book a meeting through whatsapp: ${whatsAppLink}, email:${contactMail} or calendly: ${calendlyLink}`
    }

    useEffect(() => {
        console.log('useEffect triggered');
        const greeting = {
            message: t("chatWindow.greeting"),
            sender: "E2D",
            direction: "incoming"
        }
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages[0] = greeting;
            return updatedMessages;
        });
    }, [language, t]);

    console.log(`messageNumber: ${messageNumber}`);

    useEffect(() => {
        if (messageNumber > limit) {
            const limitReached = {
                message: t("chatWindow.limitReached"),
                sender: "E2D",
                direction: "incoming"
            }
            console.log("useEffect triggered limit reached changing text");
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1] = limitReached;
                return updatedMessages;
            });
        }
    }, [messageNumber, limit, t, setMessages]);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        //Update messages state
        const newMessages = [...messages, newMessage];
        setMessages(newMessages)
        addMessageNumber();

        //Set typing indicator
        setTyping(true)

        await processMessageToChatGPT(newMessages)
    }

    async function processMessageToChatGPT(userMessages) {
        let apiMessages = userMessages.map((singleMessage) => {
            let role = singleMessage.sender === "user" ? "user" : "assistant";

            return { role: role, content: singleMessage.message }
        })

        let apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages]
        }

        if (messageNumber <= limit) {
            await callToChatGPT(apiRequestBody);
        }
        setTyping(false);
    }

    const callToChatGPT = async (apiRequestBody) => {
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + openAIApiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            processText(data);
        })
    }

    const addMessageNumber = () => {setMessagesNumber(parseInt(messageNumber) + 1)};

    const processText = (data) => {
        let newText = urlify(data.choices[0].message.content);

        setMessages(prevMessages =>
            [...prevMessages, {
                message: newText,
                sender: "E2D"
            }]
        );
        setTyping(false);
    }

    const urlify = (text) => {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        })
    };

    return (
        <MainContainer>
            <div className={`chat-window ${isMinimized ? "minimized" : "expanded"}`}>
                <div className="window-header">
                    <p className="textTitle">{t("chatWindow.title")}</p>
                    <button className="expandButton" onClick={toggleMinimize}>{isMinimized ? t("chatWindow.expand") : t("chatWindow.minimize")}</button>
                </div>
                {!isMinimized && (
                    <ChatContainer>
                        <MessageList typingIndicator={typing ? <TypingIndicator content={t("chatWindow.typing")} /> : null}>
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder={t("chatWindow.placeholder")} onSend={handleSend} />
                    </ChatContainer>
                )}
            </div>
        </MainContainer>
    );
};
