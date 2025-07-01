"use client"
import React, { useState } from 'react';
import { DialogWindow } from './dialog';
import DialogText from './dialog/DialogText';

const DialogDemo: React.FC = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const openDialog = (dialogType: string) => {
    setActiveDialog(dialogType);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  const handleAction = (action: string) => {
    console.log(`Dialog action: ${action}`);
    closeDialog();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Basic Confirmation Dialog */}
        <button
          onClick={() => openDialog('confirmation')}
          className="p-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <h3 className="font-semibold text-blue-800">Confirmation Dialog</h3>
          <p className="text-sm text-blue-600">Basic dialog with header and footer buttons</p>
        </button>

        {/* Warning Dialog */}
        <button
          onClick={() => openDialog('warning')}
          className="p-4 bg-amber-100 border border-amber-300 rounded-lg hover:bg-amber-200 transition-colors"
        >
          <h3 className="font-semibold text-amber-800">Warning Dialog</h3>
          <p className="text-sm text-amber-600">Dialog with warning icon and additional info</p>
        </button>

        {/* Success Dialog */}
        <button
          onClick={() => openDialog('success')}
          className="p-4 bg-green-100 border border-green-300 rounded-lg hover:bg-green-200 transition-colors"
        >
          <h3 className="font-semibold text-green-800">Success Dialog</h3>
          <p className="text-sm text-green-600">Simple success message dialog</p>
        </button>

        {/* Error Dialog */}
        <button
          onClick={() => openDialog('error')}
          className="p-4 bg-red-100 border border-red-300 rounded-lg hover:bg-red-200 transition-colors"
        >
          <h3 className="font-semibold text-red-800">Error Dialog</h3>
          <p className="text-sm text-red-600">Error dialog with multiple header buttons</p>
        </button>

        {/* Info Dialog */}
        <button
          onClick={() => openDialog('info')}
          className="p-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <h3 className="font-semibold text-blue-800">Info Dialog</h3>
          <p className="text-sm text-blue-600">Information dialog without footer buttons</p>
        </button>

        {/* Complex Dialog */}
        <button
          onClick={() => openDialog('complex')}
          className="p-4 bg-purple-100 border border-purple-300 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <h3 className="font-semibold text-purple-800">Complex Dialog</h3>
          <p className="text-sm text-purple-600">Dialog with multiple buttons and interactive content</p>
        </button>
      </div>

      {/* Dialog Instances */}

      {/* Basic Confirmation Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'confirmation'}
        onClose={closeDialog}
        size="md"
        header={{
          title: 'Confirm Action',
          icon: {
            type: 'question',
            className: ''
          }
        }}
        content={{
          children: (
            <DialogText>
              Are you sure you want to proceed with this action? This cannot be undone.
            </DialogText>
          )
        }}
        footer={{
          buttons: [
            {
              id: 'cancel',
              children: 'Cancel',
              onClick: closeDialog
            },
            {
              id: 'confirm',
              children: 'Confirm',
              variant: 'primary',
              onClick: () => handleAction('confirmed')
            }
          ]
        }}
      />

      {/* Warning Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'warning'}
        onClose={closeDialog}
        size="lg"
        header={{
          title: 'Warning',
          icon: {
            type: 'warning',
            className: ''
          }
        }}
        content={{
          children: (
            <div className="space-y-3">
              <DialogText>
                This action will permanently delete all selected files from your system.
              </DialogText>
              <DialogText variant="body" className="font-medium">
                Files to be deleted: 15
              </DialogText>
            </div>
          )
        }}
        footer={{
          additionalInfo: 'This action cannot be undone',
          buttons: [
            {
              id: 'cancel',
              children: 'Cancel',
              onClick: closeDialog
            },
            {
              id: 'delete',
              children: 'Delete Files',
              variant: 'danger',
              onClick: () => handleAction('deleted')
            }
          ]
        }}
      />

      {/* Success Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'success'}
        onClose={closeDialog}
        size="sm"
        header={{
          title: 'Success!',
          icon: {
            type: 'success',
            className: ''
          }
        }}
        content={{
          children: (
            <DialogText align="center">
              Your changes have been saved successfully.
            </DialogText>
          )
        }}
        footer={{
          buttons: [
            {
              id: 'ok',
              children: 'OK',
              variant: 'primary',
              onClick: closeDialog
            }
          ]
        }}
      />

      {/* Error Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'error'}
        onClose={closeDialog}
        size="md"
        header={{
          title: 'Error Occurred',
          icon: {
            type: 'error',
            className: ''
          },
          buttons: [
            {
              id: 'help',
              children: 'Help',
              variant: 'secondary',
              onClick: () => handleAction('help')
            },
            {
              id: 'report',
              children: 'Report',
              variant: 'secondary',
              onClick: () => handleAction('report')
            }
          ]
        }}
        content={{
          children: (
            <div className="space-y-3">
              <DialogText>
                An unexpected error occurred while processing your request.
              </DialogText>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                Error Code: ERR_NETWORK_TIMEOUT
              </div>
            </div>
          )
        }}
        footer={{
          buttons: [
            {
              id: 'retry',
              children: 'Retry',
              variant: 'primary',
              onClick: () => handleAction('retry')
            },
            {
              id: 'close',
              children: 'Close',
              onClick: closeDialog
            }
          ]
        }}
      />

      {/* Info Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'info'}
        onClose={closeDialog}
        size="lg"
        header={{
          title: 'System Information',
          icon: {
            type: 'info',
            className: ''
          }
        }}
        content={{
          children: (
            <div className="space-y-4">
              <DialogText>
                Here's some important information about your system:
              </DialogText>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <DialogText variant="subtitle">Version:</DialogText>
                  <DialogText>2.1.4</DialogText>
                </div>
                <div>
                  <DialogText variant="subtitle">Last Updated:</DialogText>
                  <DialogText>2024-06-30</DialogText>
                </div>
                <div>
                  <DialogText variant="subtitle">Storage Used:</DialogText>
                  <DialogText>2.3 GB</DialogText>
                </div>
                <div>
                  <DialogText variant="subtitle">Status:</DialogText>
                  <DialogText>Active</DialogText>
                </div>
              </div>
            </div>
          )
        }}
      />

      {/* Complex Dialog */}
      <DialogWindow
        isOpen={activeDialog === 'complex'}
        onClose={closeDialog}
        size="xl"
        header={{
          title: 'Advanced Settings',
          icon: {
            type: 'info',
            className: ''
          },
          buttons: [
            {
              id: 'reset',
              children: 'Reset',
              variant: 'secondary',
              onClick: () => handleAction('reset')
            }
          ]
        }}
        content={{
          children: (
            <div className="space-y-6">
              <div>
                <DialogText variant="subtitle">Notification Preferences</DialogText>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <DialogText>Email notifications</DialogText>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <DialogText>SMS notifications</DialogText>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <DialogText>Push notifications</DialogText>
                  </label>
                </div>
              </div>

              <div>
                <DialogText variant="subtitle">Theme Settings</DialogText>
                <div className="mt-2">
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
              </div>
            </div>
          )
        }}
        footer={{
          additionalInfo: 'Changes will be applied immediately',
          buttons: [
            {
              id: 'cancel',
              children: 'Cancel',
              onClick: closeDialog
            },
            {
              id: 'apply',
              children: 'Apply Changes',
              variant: 'primary',
              onClick: () => handleAction('applied')
            }
          ]
        }}
      />
    </div>
  );
};

export default DialogDemo;
