import React from "react";
import DialogHeader, { DialogHeaderProps } from "./DialogHeader";
import DialogFooter, { DialogFooterProps } from "./DialogFooter";
import DialogContent, { DialogContentProps } from "./DialogContent";

export interface DialogWindowProps{
    isOpen: boolean;
    onClose?: () => void;
    header?: DialogHeaderProps;
    footer?: DialogFooterProps;
    content?: DialogContentProps;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const DialogWindow: React.FC<DialogWindowProps>=({
    isOpen,
    onClose,
    header,
    content,
    footer,
    size = 'md',
    className=''
}) => {
    if(!isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl'
    };

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className={`relative bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full mx-4 max-h-[90vh] flex flex-col ${className}`}>
                {header && <DialogHeader {...header} />}
                <DialogContent {...content} />
                {footer && <DialogFooter {...footer} />}
            </div>
        </div>
    );
};

export default DialogWindow;