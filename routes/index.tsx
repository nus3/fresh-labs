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
            <a href="./streams-api">Streams API</a>
          </li>
        </ul>
      </main>
    </>
  );
}
