import LoadingLottie from "./loading-lotite.json"
import { useLottie } from "lottie-react";

const style:any = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.08)"
}
const Loading = () => {
    const { View } = useLottie({
        animationData: LoadingLottie,
        loop: true,
        style: {
            zIndex: 100
        }
    });

    return (
        <div style={style}>
            { View }
        </div>
    )
}

export default Loading;