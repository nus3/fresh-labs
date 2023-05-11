import { useState } from "preact/hooks";
import { ComponentChildren } from "preact";

export default function StreamPlayground() {
  const [text, setText] = useState<ComponentChildren>("");
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array>>();

  const pump = async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
    const content = await reader.read();
    if (content.done) return;

    const msg = new TextDecoder().decode(content.value);

    setText((v) => (
      <>
        {v}
        <br /> {msg}
      </>
    ));
    pump(reader);
  };

  const handleStart = async () => {
    const res = await fetch("/api/stream");
    const reader = res.body?.getReader();
    if (reader) {
      pump(reader);
      setReader(reader);
    }
  };

  const handleStop = () => {
    if (!reader) return;
    reader.cancel();
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div class="flex-row gap-2">
      <div class="flex gap-2">
        <button type="button" onClick={handleStart}>
          Start
        </button>
        <button type="button" onClick={handleStop}>
          Stop
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
}
