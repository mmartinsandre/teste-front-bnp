import React, { createContext, useContext, useState } from 'react';
import { IToastMessage } from '@/types/toast-message';

interface ToastContextType {
    messages: IToastMessage[];
    addMessage: (message: IToastMessage) => void;
    setMessages: React.Dispatch<React.SetStateAction<IToastMessage[]>>; // Adicionando setMessages
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<IToastMessage[]>([]);

    const addMessage = (message: IToastMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <ToastContext.Provider value={{ messages, addMessage, setMessages }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};