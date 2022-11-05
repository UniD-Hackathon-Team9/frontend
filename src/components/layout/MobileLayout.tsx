import { FC } from "react";

interface MobileBgProps {
    children: React.ReactNode
}

const MobileLayout:FC<MobileBgProps> =({children}) => {
    return (
        <div className="flex justify-center">
            <main className="max-w-2xl flex flex-1 min-h-screen	pt-14">
                {children}
            </main>
        </div>
    )
}

export default MobileLayout;