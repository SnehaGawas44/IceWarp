import React from "react";

export interface DialogContentProps{
    children?: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const DialogContent: React.FC<DialogContentProps> = ({
    children,
    className='',
    padding='md'
}) =>  {
    const PaddingClasses = {
        none: '', sm: 'p-2', md: 'p-4', lg: 'p-6'
    }

    return(
        <div className={`flex-1 overflow-auto ${PaddingClasses} ${className}`}>
            {children}
        </div>
    );
};

export default DialogContent;