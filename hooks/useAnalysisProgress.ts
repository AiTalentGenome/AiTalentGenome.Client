import { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

export function useAnalysisProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5088/hubs/progress", { withCredentials: true })
      .withAutomaticReconnect()
      .build();

    connection.start()
      .then(() => {
        connection.on("ReceiveProgress", (percent: number) => setProgress(percent));
      })
      .catch(err => console.error("SignalR Error:", err));

    return () => { connection.stop(); };
  }, []);

  return { progress, setProgress };
}