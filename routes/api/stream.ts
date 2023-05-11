import { HandlerContext } from "$fresh/server.ts";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const pseudoRenderToReadableStream = () => {
  const stream = new ReadableStream({
    async pull(controller) {
      const firstMessage = new TextEncoder().encode("First render");
      controller.enqueue(firstMessage);

      await sleep(2000);

      const resolvedMessage = new TextEncoder().encode("Resolve render");
      controller.enqueue(resolvedMessage);

      controller.close();
    },
  });

  return stream;
};

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const stream = pseudoRenderToReadableStream();
  return new Response(stream);
};
