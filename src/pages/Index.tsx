import React from 'react';
import DialogDemo from "@/components/DialogDemo";
import { DialogText } from '@/components/dialog';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dialog Window Component System
          </h1>
          <DialogText variant="body" align="center" className="text-lg text-gray-600 max-w-3xl mx-auto">
            A modular React TypeScript dialog system built with 7 subcomponents that can be assembled
            like "Lego" pieces. Each dialog is statically centered and demonstrates different configurations
            with variable numbers of buttons in headers and footers.
          </DialogText>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Dialog Variations
            </h2>
            <DialogText className="text-gray-600">
              Click on any card below to test different dialog configurations. Each dialog showcases
              different combinations of the 7 subcomponents: DialogWindow, DialogHeader, DialogContent,
              DialogFooter, DialogButton, DialogButtonGroup, DialogIcon, and DialogText.
            </DialogText>
          </div>

          <DialogDemo />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Component Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Core Components</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• DialogWindow</li>
                <li>• DialogHeader</li>
                <li>• DialogContent</li>
                <li>• DialogFooter</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">UI Elements</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• DialogButton</li>
                <li>• DialogButtonGroup</li>
                <li>• DialogIcon</li>
                <li>• DialogText</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Features</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Modular Architecture</li>
                <li>• TypeScript Support</li>
                <li>• Responsive Design</li>
                <li>• Customizable Styling</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">Capabilities</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Variable Button Counts</li>
                <li>• Optional Components</li>
                <li>• Multiple Sizes</li>
                <li>• Icon Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
