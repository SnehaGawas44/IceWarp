import React from "react";
import DialogText from "./DialogText";
import DialogButtonGroup, {DialogButtonGroupProps} from "./DialogButtonGroup";

export interface DialogFooterProps {
    buttons?: DialogButtonGroupProps['buttons'];
    additionalInfo?: string;
    className?: string;
}

const DialogFooter: React.FC<DialogFooterProps> = ({
    buttons = [],
    additionalInfo,
    className = ''
}) => {
    if (buttons.length === 0 && !additionalInfo){
        return null;
    }

    return (
        <div className={`flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50 ${className}`}>
            <div className="flex-1">
                {additionalInfo && (
                <DialogText variant="caption" className="text-gray-600">
                    {additionalInfo}
                </DialogText>
                )}
            </div>
            {buttons.length > 0 && (
                <DialogButtonGroup buttons={buttons} />
            )}
        </div>
    );
};

export default DialogFooter;