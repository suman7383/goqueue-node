import axios from "axios";
import {
  Produce,
  Consume,
  ProduceResponse,
  IConsume,
} from "./proto/message_pb";

export type SerializationType = "json" | "protobuf";
export type TOption = {
  format?: SerializationType;
  topic: string;
};

export type TConsumeMessage = Omit<IConsume, "id"> & {
  id?: string;
};

export class GoQueueClient {
  private baseUrl: string;
  private format: SerializationType;
  private topic: string;

  constructor(baseUrl: string, { format = "json", topic }: TOption) {
    this.baseUrl = baseUrl;
    this.format = format;
    this.topic = topic;
  }

  setTopic(topic: string) {
    this.topic = topic;
  }

  async produce(payload: string): Promise<number | Long> {
    if (!this.checkReqFields())
      throw new Error("Missing required fields baseUrl or topic");

    // check for protobuf
    if (this.format === "protobuf") {
      // protobuf mode
      const req = Produce.create({ message: payload });
      const buffer = Produce.encode(req).finish();

      const res = await axios.post(this.generateProduceUrl(), buffer, {
        headers: {
          ...this.setReqHeaders("x-protobuf"),
        },
      });

      return res.data;
    } else {
      const res = await axios.post(
        this.generateProduceUrl(),
        {
          message: payload,
        },
        {
          headers: {
            ...this.setReqHeaders("json"),
          },
        },
      );

      return res.data;
    }
  }

  async consume(): Promise<TConsumeMessage> {
    if (!this.checkReqFields())
      throw new Error("Missing required fields baseUrl or topic");

    if (this.format === "protobuf") {
      // protobuf mode
      const res = await axios.get(this.generateConsumeUrl(), {
        headers: {
          ...this.setResHeaders("x-protobuf"),
        },
        responseType: "arraybuffer",
      });

      const resp = Consume.decode(new Uint8Array(res.data))?.toJSON();

      return resp;
    } else {
      const res = await axios.get(this.generateConsumeUrl(), {
        headers: {
          ...this.setResHeaders("json"),
        },
      });

      return res.data;
    }
  }

  async ack(id: string): Promise<boolean> {
    if (!this.checkReqFields())
      throw new Error("Missing required fields baseUrl or topic");

    if (!id) throw new Error("Missing id");

    const res = await axios.put(this.generateAckUrl(id));

    return res.data;
  }

  private setReqHeaders(content: "json" | "x-protobuf") {
    return {
      "Content-Type": `application/${content}`,
    };
  }

  private setResHeaders(content: "json" | "x-protobuf") {
    return {
      Accept: `application/${content}`,
    };
  }

  private checkReqFields(): boolean {
    if (
      typeof this.topic === undefined ||
      typeof this.topic === null ||
      this.topic.length === 0
    )
      return false;
    if (
      typeof this.baseUrl === undefined ||
      typeof this.baseUrl === null ||
      this.baseUrl.length === 0
    )
      return false;

    return true;
  }

  private generateProduceUrl() {
    return `${this.baseUrl}/produce/${this.topic}`;
  }

  private generateConsumeUrl() {
    return `${this.baseUrl}/consume/${this.topic}`;
  }

  private generateAckUrl(id: string) {
    return `${this.baseUrl}/ack/${this.topic}/${id}`;
  }
}
