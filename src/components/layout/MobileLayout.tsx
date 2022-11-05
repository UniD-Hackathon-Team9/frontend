import { FC } from "react";

interface MobileBgProps {
  children: React.ReactNode;
}

const MobileLayout: FC<MobileBgProps> = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-100">
      <main className="max-w-lg flex flex-1 min-h-screen	pt-14 bg-white">
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;
