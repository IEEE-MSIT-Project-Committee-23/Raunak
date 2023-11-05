import '../src/styles/globals.css';
import Navbar from '../src/components/common/navbar/index';
import Image from 'next/image';

const centeringContainer = {
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  marginTop:"2rem"
};

export default function Donate() {
  return (
    <>
      <Navbar />
      <div style={centeringContainer}>
        <Image
          src="/qrchimpX4096 (1).png"
          alt="Image Description"
          width={300}
          height={300}
        />
      </div>
    </>
  )
}
