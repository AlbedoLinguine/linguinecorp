import { Unity, useUnityContext } from "react-unity-webgl";

const UnityApp = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build/Mancala WebGL.loader.js",
        dataUrl: "/Build/Mancala WebGL.data",
        frameworkUrl: "/Build/Mancala WebGL.framework.js",
        codeUrl: "/Build/Mancala WebGL.wasm",
    });

    return (
        <div
            style={{
                minWidth: "50vw",
                maxWidth: "70vw",
                aspectRatio: "16 / 9",
                maxHeight: "80vh",
            }}
        >
            <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%", background: "black" }} devicePixelRatio={window.devicePixelRatio} />
        </div>
    );
};

export default UnityApp;
