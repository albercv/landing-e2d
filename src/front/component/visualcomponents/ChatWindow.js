import React, { useEffect, useState } from "react";
import "../../css/visualcomponents/ChatWindow.css";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../service/LanguageContextProvider";
import { useMessagesCounter } from "../../service/ChatbotMessagesContextProvider";
import { v4 as uuidv4 } from 'uuid';

// Update the webhookUrl to use the current hostname
export const ChatWindow = () => {
    // Get the current hostname and protocol for the webhook URL
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const webhookUrl = `${protocol}//${hostname}:5678/webhook/userMessage`;
    
    const limit = process.env.REACT_APP_CHATBOT_LIMIT;
    const webhookUser = process.env.REACT_APP_WEBHOOK_USER;
    const webhookPassword = process.env.REACT_APP_WEBHOOK_PASSWORD;

    const { t } = useTranslation("global");
    const { language } = useLanguage();
    const { messageNumber, setMessagesNumber } = useMessagesCounter();

    const [isMinimized, setIsMinimized] = useState(true);
    const [typing, setTyping] = useState(false);
    const [sessionId, setSessionId] = useState("");
    const [messages, setMessages] = useState([{
        message: t("chatWindow.greeting"),
        sender: "E2D"
    }]);

    // Initialize session ID on component mount
    useEffect(() => {
        // Check if sessionId exists in sessionStorage
        const existingSessionId = sessionStorage.getItem('chatSessionId');
        if (existingSessionId) {
            setSessionId(existingSessionId);
        } else {
            // Generate new UUID and store it
            const newSessionId = uuidv4();
            sessionStorage.setItem('chatSessionId', newSessionId);
            setSessionId(newSessionId);
        }
    }, []);

    useEffect(() => {
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

    useEffect(() => {
        if (messageNumber > limit) {
            const limitReached = {
                message: t("chatWindow.limitReached"),
                sender: "E2D",
                direction: "incoming"
            }
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1] = limitReached;
                return updatedMessages;
            });
        }
    }, [messageNumber, limit, t]);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        // Update messages state
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
        addMessageNumber();

        // Set typing indicator
        setTyping(true);

        // Send message to webhook
        await sendMessageToWebhook(message);
    }

    const sendMessageToWebhook = async (message) => {
        if (messageNumber <= limit) {
            try {
                // Add timeout to fetch using AbortController
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
                
                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Basic " + btoa(`${webhookUser}:${webhookPassword}`)
                    },
                    body: JSON.stringify({
                        sessionId: sessionId,
                        message: message
                    }),
                    signal: controller.signal
                });
                
                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                processResponse(data);
            } catch (error) {
                console.error("Error sending message to webhook:", error);
                
                // Different error message based on error type
                let errorMessage = "Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
                
                if (error.name === 'AbortError') {
                    errorMessage = "La conexión ha tardado demasiado tiempo. Por favor, verifica tu conexión a internet e inténtalo de nuevo.";
                } else if (error.message.includes('Failed to fetch')) {
                    errorMessage = "No se pudo conectar al servidor. El servicio puede estar temporalmente no disponible.";
                }
                
                setMessages(prevMessages => [
                    ...prevMessages, 
                    {
                        message: errorMessage,
                        sender: "E2D",
                        direction: "incoming"
                    }
                ]);
                setTyping(false);
            }
        } else {
            setTyping(false);
        }
    };

    const addMessageNumber = () => {
        setMessagesNumber(parseInt(messageNumber) + 1);
    };

    const processResponse = (data) => {
        let newText = formatMessage(data.output);

        setMessages(prevMessages => [
            ...prevMessages, 
            {
                message: newText,
                sender: "E2D",
                direction: "incoming"
            }
        ]);
        setTyping(false);
    };

    const formatMessage = (text) => {
        // Format email links
        text = text.replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/g, '<a href="mailto:$2" target="_blank">$1</a>');
        
        // Format WhatsApp links
        text = text.replace(/\[([^\]]+)\]\(https:\/\/wa\.me\/([^)]+)\)/g, '<a href="https://wa.me/$2" target="_blank">$1</a>');
        
        // Format regular links
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Format bold text
        text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        // Format line breaks
        text = text.replace(/\n/g, '<br>');
        
        return text;
    };

    // Remove or replace the old urlify function with the more comprehensive formatMessage function

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
