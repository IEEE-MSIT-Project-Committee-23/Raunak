import '../src/styles/globals.css';
import Navbar from '../src/components/common/navbar/index';
import Image from 'next/image';

const centeringContainer = {
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  marginTop: '2rem'
};

const background = {
  backgroundImage: 'url(/background.jpg)', // Use 'url' as a string
  backgroundSize: 'cover', // Specify 'cover' as a string
  backgroundRepeat: 'no-repeat', // Specify 'no-repeat' as a string
  height: '100vh'
};

export default function Donate() {
  return (
    <div style={background}>
      <Navbar />
      <div style={centeringContainer}>
        <Image
          src="/qrchimpX4096 (1).png"
          alt="Image Description"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
