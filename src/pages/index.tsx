import React, { useState } from 'react';
import deviceData from '../data/static/devices.json';

const IndexPage: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-30 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <img
                src="https://nouvag.com/_assets/72a85ef8bb35092c8a4f6d9a66921874/images/logo.svg"
                alt="Nouvag"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
            <div className="w-full max-w-md">
              {!isLoggedIn ? (
                <>
                  <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Login
                  </h1>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    onClick={() => {
                      if (username === 'test' && password === 'test') {
                        setIsLoggedIn(true);
                      }
                    }}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Select a Device
                  </h1>

                  <select
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Choose a device...</option>
                    {deviceData.devices.map((device) => (
                      <option key={device.id} value={device.id}>
                        {device.name} - {device.category}
                      </option>
                    ))}
                  </select>

                  {selectedDevice && (
                    <button
                      className="w-full mt-4 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition-colors"
                      onClick={() => {
                        // Create a Blob with some basic content
                        const content = `Hello World!\nThis is a test file for device ${selectedDevice}`;
                        const blob = new Blob([content], { type: 'application/zip' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${selectedDevice}.zip`;
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                        setDownloadComplete(true);
                      }}
                    >
                      Download Update Files
                    </button>
                  )}
                  {downloadComplete && (
                    <p className="mt-4 text-sm text-gray-600 text-center">
                      Download started. When done, please transfer the downloaded .zip to a USB drive and install on the device.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;