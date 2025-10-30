import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Produce. */
export interface IProduce {

    /** Produce message */
    message?: (string|null);
}

/** Represents a Produce. */
export class Produce implements IProduce {

    /**
     * Constructs a new Produce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProduce);

    /** Produce message. */
    public message: string;

    /**
     * Creates a new Produce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Produce instance
     */
    public static create(properties?: IProduce): Produce;

    /**
     * Encodes the specified Produce message. Does not implicitly {@link Produce.verify|verify} messages.
     * @param message Produce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProduce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Produce message, length delimited. Does not implicitly {@link Produce.verify|verify} messages.
     * @param message Produce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProduce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Produce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Produce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Produce;

    /**
     * Decodes a Produce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Produce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Produce;

    /**
     * Verifies a Produce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Produce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Produce
     */
    public static fromObject(object: { [k: string]: any }): Produce;

    /**
     * Creates a plain object from a Produce message. Also converts values to other types if specified.
     * @param message Produce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Produce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Produce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Produce
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProduceResponse. */
export interface IProduceResponse {

    /** ProduceResponse id */
    id?: (number|Long|null);
}

/** Represents a ProduceResponse. */
export class ProduceResponse implements IProduceResponse {

    /**
     * Constructs a new ProduceResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProduceResponse);

    /** ProduceResponse id. */
    public id: (number|Long);

    /**
     * Creates a new ProduceResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProduceResponse instance
     */
    public static create(properties?: IProduceResponse): ProduceResponse;

    /**
     * Encodes the specified ProduceResponse message. Does not implicitly {@link ProduceResponse.verify|verify} messages.
     * @param message ProduceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProduceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProduceResponse message, length delimited. Does not implicitly {@link ProduceResponse.verify|verify} messages.
     * @param message ProduceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProduceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProduceResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProduceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProduceResponse;

    /**
     * Decodes a ProduceResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProduceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProduceResponse;

    /**
     * Verifies a ProduceResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProduceResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProduceResponse
     */
    public static fromObject(object: { [k: string]: any }): ProduceResponse;

    /**
     * Creates a plain object from a ProduceResponse message. Also converts values to other types if specified.
     * @param message ProduceResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProduceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProduceResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProduceResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Consume. */
export interface IConsume {

    /** Consume id */
    id?: (number|Long|null);

    /** Consume payload */
    payload?: (string|null);

    /** Consume acked */
    acked?: (boolean|null);

    /** Consume timestamp */
    timestamp?: (string|null);

    /** Consume retries */
    retries?: (number|null);
}

/** Represents a Consume. */
export class Consume implements IConsume {

    /**
     * Constructs a new Consume.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsume);

    /** Consume id. */
    public id: (number|Long);

    /** Consume payload. */
    public payload: string;

    /** Consume acked. */
    public acked: boolean;

    /** Consume timestamp. */
    public timestamp: string;

    /** Consume retries. */
    public retries: number;

    /**
     * Creates a new Consume instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Consume instance
     */
    public static create(properties?: IConsume): Consume;

    /**
     * Encodes the specified Consume message. Does not implicitly {@link Consume.verify|verify} messages.
     * @param message Consume message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsume, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Consume message, length delimited. Does not implicitly {@link Consume.verify|verify} messages.
     * @param message Consume message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsume, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Consume message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Consume
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Consume;

    /**
     * Decodes a Consume message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Consume
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Consume;

    /**
     * Verifies a Consume message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Consume message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Consume
     */
    public static fromObject(object: { [k: string]: any }): Consume;

    /**
     * Creates a plain object from a Consume message. Also converts values to other types if specified.
     * @param message Consume
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Consume, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Consume to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Consume
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
