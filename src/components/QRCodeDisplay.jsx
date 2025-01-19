/* eslint-disable react/prop-types */
import { QRCode } from 'react-qrcode-logo';

const QRCodeDisplay = ({ data }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-400">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-semibold mb-4 text-gray-700">Your QR Code</h2>
        <QRCode value={JSON.stringify(data)} size={256} />
      </div>
    </div>
  );
};

export default QRCodeDisplay;
