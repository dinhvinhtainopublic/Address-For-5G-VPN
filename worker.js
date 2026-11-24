export default {
  async fetch(request) {
    return new Response("404 Not Found", { status: 404 });
  }
}
