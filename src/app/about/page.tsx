/*import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      Contact Page
    </main>
  );
}

*/

import Image from 'next/image';

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Image 
        src="/profilepics/Frame 63.jpg" 
        alt="Frame 63" 
        width={500} // adjust width as needed
        height={500} // adjust height as needed
      />
    </div>
  );
};

export default AboutPage;
