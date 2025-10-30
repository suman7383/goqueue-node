/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Produce = (function() {

    /**
     * Properties of a Produce.
     * @exports IProduce
     * @interface IProduce
     * @property {string|null} [message] Produce message
     */

    /**
     * Constructs a new Produce.
     * @exports Produce
     * @classdesc Represents a Produce.
     * @implements IProduce
     * @constructor
     * @param {IProduce=} [properties] Properties to set
     */
    function Produce(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Produce message.
     * @member {string} message
     * @memberof Produce
     * @instance
     */
    Produce.prototype.message = "";

    /**
     * Creates a new Produce instance using the specified properties.
     * @function create
     * @memberof Produce
     * @static
     * @param {IProduce=} [properties] Properties to set
     * @returns {Produce} Produce instance
     */
    Produce.create = function create(properties) {
        return new Produce(properties);
    };

    /**
     * Encodes the specified Produce message. Does not implicitly {@link Produce.verify|verify} messages.
     * @function encode
     * @memberof Produce
     * @static
     * @param {IProduce} message Produce message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Produce.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified Produce message, length delimited. Does not implicitly {@link Produce.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Produce
     * @static
     * @param {IProduce} message Produce message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Produce.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Produce message from the specified reader or buffer.
     * @function decode
     * @memberof Produce
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Produce} Produce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Produce.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Produce();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Produce message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Produce
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Produce} Produce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Produce.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Produce message.
     * @function verify
     * @memberof Produce
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Produce.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a Produce message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Produce
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Produce} Produce
     */
    Produce.fromObject = function fromObject(object) {
        if (object instanceof $root.Produce)
            return object;
        var message = new $root.Produce();
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a Produce message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Produce
     * @static
     * @param {Produce} message Produce
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Produce.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this Produce to JSON.
     * @function toJSON
     * @memberof Produce
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Produce.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Produce
     * @function getTypeUrl
     * @memberof Produce
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Produce.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Produce";
    };

    return Produce;
})();

$root.ProduceResponse = (function() {

    /**
     * Properties of a ProduceResponse.
     * @exports IProduceResponse
     * @interface IProduceResponse
     * @property {number|Long|null} [id] ProduceResponse id
     */

    /**
     * Constructs a new ProduceResponse.
     * @exports ProduceResponse
     * @classdesc Represents a ProduceResponse.
     * @implements IProduceResponse
     * @constructor
     * @param {IProduceResponse=} [properties] Properties to set
     */
    function ProduceResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProduceResponse id.
     * @member {number|Long} id
     * @memberof ProduceResponse
     * @instance
     */
    ProduceResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ProduceResponse instance using the specified properties.
     * @function create
     * @memberof ProduceResponse
     * @static
     * @param {IProduceResponse=} [properties] Properties to set
     * @returns {ProduceResponse} ProduceResponse instance
     */
    ProduceResponse.create = function create(properties) {
        return new ProduceResponse(properties);
    };

    /**
     * Encodes the specified ProduceResponse message. Does not implicitly {@link ProduceResponse.verify|verify} messages.
     * @function encode
     * @memberof ProduceResponse
     * @static
     * @param {IProduceResponse} message ProduceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProduceResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified ProduceResponse message, length delimited. Does not implicitly {@link ProduceResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProduceResponse
     * @static
     * @param {IProduceResponse} message ProduceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProduceResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProduceResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ProduceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProduceResponse} ProduceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProduceResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProduceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProduceResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProduceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProduceResponse} ProduceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProduceResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProduceResponse message.
     * @function verify
     * @memberof ProduceResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProduceResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a ProduceResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProduceResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProduceResponse} ProduceResponse
     */
    ProduceResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ProduceResponse)
            return object;
        var message = new $root.ProduceResponse();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ProduceResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProduceResponse
     * @static
     * @param {ProduceResponse} message ProduceResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProduceResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this ProduceResponse to JSON.
     * @function toJSON
     * @memberof ProduceResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProduceResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ProduceResponse
     * @function getTypeUrl
     * @memberof ProduceResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProduceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProduceResponse";
    };

    return ProduceResponse;
})();

$root.Consume = (function() {

    /**
     * Properties of a Consume.
     * @exports IConsume
     * @interface IConsume
     * @property {number|Long|null} [id] Consume id
     * @property {string|null} [payload] Consume payload
     * @property {boolean|null} [acked] Consume acked
     * @property {string|null} [timestamp] Consume timestamp
     * @property {number|null} [retries] Consume retries
     */

    /**
     * Constructs a new Consume.
     * @exports Consume
     * @classdesc Represents a Consume.
     * @implements IConsume
     * @constructor
     * @param {IConsume=} [properties] Properties to set
     */
    function Consume(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Consume id.
     * @member {number|Long} id
     * @memberof Consume
     * @instance
     */
    Consume.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Consume payload.
     * @member {string} payload
     * @memberof Consume
     * @instance
     */
    Consume.prototype.payload = "";

    /**
     * Consume acked.
     * @member {boolean} acked
     * @memberof Consume
     * @instance
     */
    Consume.prototype.acked = false;

    /**
     * Consume timestamp.
     * @member {string} timestamp
     * @memberof Consume
     * @instance
     */
    Consume.prototype.timestamp = "";

    /**
     * Consume retries.
     * @member {number} retries
     * @memberof Consume
     * @instance
     */
    Consume.prototype.retries = 0;

    /**
     * Creates a new Consume instance using the specified properties.
     * @function create
     * @memberof Consume
     * @static
     * @param {IConsume=} [properties] Properties to set
     * @returns {Consume} Consume instance
     */
    Consume.create = function create(properties) {
        return new Consume(properties);
    };

    /**
     * Encodes the specified Consume message. Does not implicitly {@link Consume.verify|verify} messages.
     * @function encode
     * @memberof Consume
     * @static
     * @param {IConsume} message Consume message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Consume.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.payload);
        if (message.acked != null && Object.hasOwnProperty.call(message, "acked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.acked);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.timestamp);
        if (message.retries != null && Object.hasOwnProperty.call(message, "retries"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.retries);
        return writer;
    };

    /**
     * Encodes the specified Consume message, length delimited. Does not implicitly {@link Consume.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Consume
     * @static
     * @param {IConsume} message Consume message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Consume.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Consume message from the specified reader or buffer.
     * @function decode
     * @memberof Consume
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Consume} Consume
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Consume.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Consume();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.payload = reader.string();
                    break;
                }
            case 3: {
                    message.acked = reader.bool();
                    break;
                }
            case 4: {
                    message.timestamp = reader.string();
                    break;
                }
            case 5: {
                    message.retries = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Consume message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Consume
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Consume} Consume
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Consume.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Consume message.
     * @function verify
     * @memberof Consume
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Consume.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!$util.isString(message.payload))
                return "payload: string expected";
        if (message.acked != null && message.hasOwnProperty("acked"))
            if (typeof message.acked !== "boolean")
                return "acked: boolean expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isString(message.timestamp))
                return "timestamp: string expected";
        if (message.retries != null && message.hasOwnProperty("retries"))
            if (!$util.isInteger(message.retries))
                return "retries: integer expected";
        return null;
    };

    /**
     * Creates a Consume message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Consume
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Consume} Consume
     */
    Consume.fromObject = function fromObject(object) {
        if (object instanceof $root.Consume)
            return object;
        var message = new $root.Consume();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.payload != null)
            message.payload = String(object.payload);
        if (object.acked != null)
            message.acked = Boolean(object.acked);
        if (object.timestamp != null)
            message.timestamp = String(object.timestamp);
        if (object.retries != null)
            message.retries = object.retries | 0;
        return message;
    };

    /**
     * Creates a plain object from a Consume message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Consume
     * @static
     * @param {Consume} message Consume
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Consume.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.payload = "";
            object.acked = false;
            object.timestamp = "";
            object.retries = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = message.payload;
        if (message.acked != null && message.hasOwnProperty("acked"))
            object.acked = message.acked;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.retries != null && message.hasOwnProperty("retries"))
            object.retries = message.retries;
        return object;
    };

    /**
     * Converts this Consume to JSON.
     * @function toJSON
     * @memberof Consume
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Consume.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Consume
     * @function getTypeUrl
     * @memberof Consume
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Consume.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Consume";
    };

    return Consume;
})();

module.exports = $root;
