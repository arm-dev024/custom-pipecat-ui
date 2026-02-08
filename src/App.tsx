import { PipecatClientAudio, usePipecatClient } from "@pipecat-ai/client-react";
import {
  ConnectButton,
  ConversationPanel,
  usePipecatConnectionState,
  UserAudioControl,
} from "@pipecat-ai/voice-ui-kit";
import { useEffect } from "react";

const App = () => {
  const client = usePipecatClient();
  const { isConnected, isConnecting } = usePipecatConnectionState();
  console.log("isConnected", isConnected);
  console.log("isConnecting", isConnecting);
  useEffect(() => {
    console.log(client);
  }, [client]);

  const handleConnect = () => {
    if (isConnected) {
      client?.disconnect();
    } else {
      client?.connect({
        audio: true,
        video: false,
      });
    }
  };

  return (
    <div>
      <ConnectButton onClick={handleConnect} />
      <PipecatClientAudio />
      {isConnected && (
        <div style={{ height: "calc(100vh - 100px)" }}>
          <UserAudioControl />
          <ConversationPanel />
        </div>
      )}
    </div>
  );
};

export default App;
