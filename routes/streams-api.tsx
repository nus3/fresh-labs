import { Head, asset } from "$fresh/runtime.ts";
import StreamPlayground from "../islands/StreamPlayground.tsx";

export default function Streams() {
  return (
    <>
      <Head>
        <title>Streams API | Fresh Labs</title>
        <link rel="stylesheet" href={asset("/style.css")} />
      </Head>
      <header>
        <h1>Streams API</h1>
      </header>
      <main>
        <StreamPlayground />
      </main>
    </>
  );
}
