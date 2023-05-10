import { Head, asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Labs</title>
        <link rel="stylesheet" href={asset("/style.css")} />
      </Head>
      <header>
        <h1>Fresh Labs</h1>
      </header>
      <main>
        <ul>
          <li>
            <a href="./pip">Picture-in-Picture</a>
          </li>
          <li>
            <a href="./view-transitions-api/">View Transitions API</a>
          </li>
          <li>
            <a href="./opfs/">Origin private file system</a>
          </li>
        </ul>
      </main>
    </>
  );
}
