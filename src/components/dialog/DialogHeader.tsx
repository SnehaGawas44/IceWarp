import React from "react";
import DialogButtonGroup, {DialogButtonGroupProps} from "./DialogButtonGroup";
import DialogIcon, { DialogIconProps } from "./DialogIcon";
import DialogText from "./DialogText";

export interface DialogHeaderProps {
    icon?: DialogIconProps;
    title: string;
    buttons?: DialogButtonGroupProps['buttons'];
    className?: string
}

const DialogHeader: React.FC<DialogHeaderProps> = ({
    icon, title, buttons = [], className = ''
}) => {
    return(
         <div className={`flex items-center justify-between p-4 border-b border-gray-200 ${className}`}>
            <div className="flex items-center gap-3">
                {icon && <DialogIcon {...icon} />}
                <DialogText variant="title">{title}</DialogText>
            </div>
            {buttons.length > 0 && (
                <DialogButtonGroup buttons={buttons} spacing="tight" />
            )}
        </div>
    );
};

export default DialogHeader;