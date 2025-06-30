import React from "react";
import DialogButton, { DialogButtonProps } from "./DialogButton";

export interface DialogButtonGroupProps {
    buttons: (DialogButtonProps & {id:string})[];
    spacing?: 'tight' | 'normal' | 'loose';
    alignment?: 'left' | 'center' | 'right';
}

const DialogButtonGroup: React.FC<DialogButtonGroupProps> = ({
    buttons,
    spacing = 'normal',
    alignment = 'right'
}) => {
    const spacingClasses = {
        tight: 'gap-1',
        normal: 'gap-2',
        loose: 'gap-4'
    };
    const alignmentClasses = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end'
    };

    return (
        <div className={`flex ${spacingClasses[spacing]} ${alignmentClasses[alignment]}`}>
            {
                buttons.map(({ id, ...buttonProps}) => (
                    <DialogButton key={id} {...buttonProps} />
                ))
            }
        </div>
    );
};

export default DialogButtonGroup;