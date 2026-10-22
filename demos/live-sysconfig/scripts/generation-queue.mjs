export class GenerationQueue {
  revision = 0;
  processedRevision = 0;
  stopped = false;
  pending = null;
  timer = null;

  constructor({ generate, publish, onError }) {
    this.generate = generate;
    this.publish = publish;
    this.onError = onError;
  }

  request() {
    this.revision++;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), 250);
  }

  flush() {
    clearTimeout(this.timer);
    if (this.pending || this.stopped) return this.pending;
    this.pending = this.drain().then(
      () => {
        this.pending = null;
      },
      (error) => {
        this.pending = null;
        throw error;
      },
    );
    return this.pending;
  }

  async drain() {
    while (!this.stopped && this.processedRevision !== this.revision) {
      const revision = this.revision;
      this.processedRevision = revision;
      try {
        const iframeUrl = await this.generate(revision);
        if (this.stopped || revision !== this.revision) continue;
        await this.publish(iframeUrl);
      } catch (error) {
        if (!this.stopped) this.onError(error);
      }
    }
  }

  stop() {
    this.stopped = true;
    clearTimeout(this.timer);
  }
}
