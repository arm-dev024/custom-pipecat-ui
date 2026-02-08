import { PipecatClient } from "@pipecat-ai/client-js";
import { PipecatClientProvider } from "@pipecat-ai/client-react";
import { SmallWebRTCTransport } from "@pipecat-ai/small-webrtc-transport";
import { ConversationProvider } from "@pipecat-ai/voice-ui-kit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const client = new PipecatClient({
  // transport: new DailyTransport(),
  transport: new SmallWebRTCTransport({
    iceServers: [
      {
        urls: ["stun:stun.l.google.com:19302"],
      },
    ],
    webrtcRequestParams: {
      endpoint: "http://localhost:8000/api/offer",
      timeout: 10000,
    },
  }),
  enableMic: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PipecatClientProvider client={client}>
      <ConversationProvider>
        <App />
      </ConversationProvider>
    </PipecatClientProvider>
  </StrictMode>,
);
