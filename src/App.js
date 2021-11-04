import React, { useState } from "react";
import "./styles.css";
import song from './sufi.mp3';
import Waveform from "./Waveform";

 const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(song);

  return (
    <div className="App">
     <h1> My PLayer</h1>
      <Waveform url={selectedTrack} />     
      <br />
    </div>
  );
}
