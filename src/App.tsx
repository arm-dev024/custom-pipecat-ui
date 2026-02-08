import {
  ConnectButton,
  ConversationPanel,
  usePipecatConnectionState,
  UserAudioControl,
} from "@pipecat-ai/voice-ui-kit";
import { PipecatClientAudio, usePipecatClient } from "@pipecat-ai/client-react";
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
    client
      ?.connect({
        audio: true,
        video: false,
      })
      .then(() => {
        console.log("Connected");
      })
      .catch((error) => {
        console.log(error);
      });
    // client?.startBotAndConnect({
    //   endpoint: "http://52.24.239.187:8000/api/offer",
    //   timeout: 10000,
    // });
  };

  return (
    <div>
      <ConnectButton onClick={handleConnect} />
      <PipecatClientAudio />
      {isConnected && (
        <div>
          <UserAudioControl />
          <ConversationPanel />
        </div>
      )}
    </div>
  );
};

export default App;
