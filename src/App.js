import './App.css';
import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  const [stateTranscript, setStateTranscript] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  const populateTranscript = () => {
    SpeechRecognition.startListening();
    setStateTranscript(transcript)
    // console.log(transcript)
    console.log(stateTranscript)
  }
  return (
    <div>
      <button onClick={populateTranscript}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}

export default App;
