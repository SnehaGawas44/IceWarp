import React from "react";

export interface DialogButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    className?: string;
}

const DialogButton: React.FC<DialogButtonProps> = ({
    children,
    onClick,
    variant = 'secondary',
    disabled = false,
    className = ''
}) => {
    const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const Variantclasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500"
    };

    return(
        <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${Variantclasses[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default DialogButton;