import React from "react";
import {AlertCircle, CheckCircle, Info, XCircle, HelpCircle, InfoIcon} from "lucide-react";
//import { ReactFormState } from "react-dom/client";

export interface DialogIconProps {
    type:'warning' | 'success' | 'info' | 'error' | 'question';
    size?: 'sm' | 'md' | 'lg';
    className: string;

}

const DialogIcon: React.FC<DialogIconProps> = ({ type, size = 'md', className = ''}) => {
    const icons = {
        warning: AlertCircle,
        success: CheckCircle,
        info: Info,
        error: XCircle,
        question: HelpCircle
    };

    const colors = {
        warning: 'text-amber-500',
        success: 'text-green-500',
        info: 'text-blue-500',
        error: 'text-red-500',
        question: 'text-gray-500'
    };

    const sizes = {
        sm: 20,
        md: 24,
        lg: 32
    };
     const IconComponent = icons[type];

     return (
        <IconComponent size={sizes[size]} className ={`${colors[type]} ${className}`} />
     );
};

export default DialogIcon;