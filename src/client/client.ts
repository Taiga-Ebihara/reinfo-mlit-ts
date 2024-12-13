export class FetchClient {
  constructor(private readonly options: { apiKey: string }) {}

  async getJson<T>(url: string): Promise<T> {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": this.options.apiKey,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    return res.json();
  }
}
