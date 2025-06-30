import React, { Children } from "react";

export interface DialogTextProps {
    children: React.ReactNode;
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    align?: 'left' | 'center' | 'right';
    className?: string;
}

const DialogText: React.FC<DialogTextProps> = ({
    children,
    variant = 'body',
    align = 'left',
    className = ''
}) => {
    const variantClasses = {
        title: 'text-lg font-semibold text-gray-900',
        subtitle: 'text-base font-medium text-gray-800',
        body: 'text-sm text-gray-700',
        caption: 'text-xs text-gray-500'
    };
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    const Component = variant === 'title' ? 'h2' : variant === 'subtitle' ? 'h3'  : 'p';

    return(
        <Component className={`${variantClasses[variant]} ${alignClasses[align]} ${className}`}>
            {children}
        </Component>
    );
};

export default DialogText;