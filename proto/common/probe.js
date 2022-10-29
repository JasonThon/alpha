/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.ProbeRequest = (function() {

        /**
         * Properties of a ProbeRequest.
         * @memberof common
         * @interface IProbeRequest
         * @property {common.ProbeRequest.NodeType|null} [nodeType] ProbeRequest nodeType
         * @property {common.ProbeRequest.ProbeType|null} [probeType] ProbeRequest probeType
         */

        /**
         * Constructs a new ProbeRequest.
         * @memberof common
         * @classdesc Represents a ProbeRequest.
         * @implements IProbeRequest
         * @constructor
         * @param {common.IProbeRequest=} [properties] Properties to set
         */
        function ProbeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProbeRequest nodeType.
         * @member {common.ProbeRequest.NodeType} nodeType
         * @memberof common.ProbeRequest
         * @instance
         */
        ProbeRequest.prototype.nodeType = 0;

        /**
         * ProbeRequest probeType.
         * @member {common.ProbeRequest.ProbeType} probeType
         * @memberof common.ProbeRequest
         * @instance
         */
        ProbeRequest.prototype.probeType = 0;

        /**
         * Creates a new ProbeRequest instance using the specified properties.
         * @function create
         * @memberof common.ProbeRequest
         * @static
         * @param {common.IProbeRequest=} [properties] Properties to set
         * @returns {common.ProbeRequest} ProbeRequest instance
         */
        ProbeRequest.create = function create(properties) {
            return new ProbeRequest(properties);
        };

        /**
         * Encodes the specified ProbeRequest message. Does not implicitly {@link common.ProbeRequest.verify|verify} messages.
         * @function encode
         * @memberof common.ProbeRequest
         * @static
         * @param {common.IProbeRequest} message ProbeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeType != null && Object.hasOwnProperty.call(message, "nodeType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nodeType);
            if (message.probeType != null && Object.hasOwnProperty.call(message, "probeType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.probeType);
            return writer;
        };

        /**
         * Encodes the specified ProbeRequest message, length delimited. Does not implicitly {@link common.ProbeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ProbeRequest
         * @static
         * @param {common.IProbeRequest} message ProbeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProbeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof common.ProbeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ProbeRequest} ProbeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ProbeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.nodeType = reader.int32();
                        break;
                    }
                case 2: {
                        message.probeType = reader.int32();
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
         * Decodes a ProbeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ProbeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ProbeRequest} ProbeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProbeRequest message.
         * @function verify
         * @memberof common.ProbeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProbeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                switch (message.nodeType) {
                default:
                    return "nodeType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.probeType != null && message.hasOwnProperty("probeType"))
                switch (message.probeType) {
                default:
                    return "probeType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ProbeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ProbeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ProbeRequest} ProbeRequest
         */
        ProbeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ProbeRequest)
                return object;
            var message = new $root.common.ProbeRequest();
            switch (object.nodeType) {
            default:
                if (typeof object.nodeType === "number") {
                    message.nodeType = object.nodeType;
                    break;
                }
                break;
            case "Coordinator":
            case 0:
                message.nodeType = 0;
                break;
            case "TaskWorker":
            case 1:
                message.nodeType = 1;
                break;
            case "Connector":
            case 2:
                message.nodeType = 2;
                break;
            }
            switch (object.probeType) {
            default:
                if (typeof object.probeType === "number") {
                    message.probeType = object.probeType;
                    break;
                }
                break;
            case "Liveness":
            case 0:
                message.probeType = 0;
                break;
            case "Readiness":
            case 1:
                message.probeType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ProbeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ProbeRequest
         * @static
         * @param {common.ProbeRequest} message ProbeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProbeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nodeType = options.enums === String ? "Coordinator" : 0;
                object.probeType = options.enums === String ? "Liveness" : 0;
            }
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                object.nodeType = options.enums === String ? $root.common.ProbeRequest.NodeType[message.nodeType] === undefined ? message.nodeType : $root.common.ProbeRequest.NodeType[message.nodeType] : message.nodeType;
            if (message.probeType != null && message.hasOwnProperty("probeType"))
                object.probeType = options.enums === String ? $root.common.ProbeRequest.ProbeType[message.probeType] === undefined ? message.probeType : $root.common.ProbeRequest.ProbeType[message.probeType] : message.probeType;
            return object;
        };

        /**
         * Converts this ProbeRequest to JSON.
         * @function toJSON
         * @memberof common.ProbeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProbeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProbeRequest
         * @function getTypeUrl
         * @memberof common.ProbeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProbeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ProbeRequest";
        };

        /**
         * NodeType enum.
         * @name common.ProbeRequest.NodeType
         * @enum {number}
         * @property {number} Coordinator=0 Coordinator value
         * @property {number} TaskWorker=1 TaskWorker value
         * @property {number} Connector=2 Connector value
         */
        ProbeRequest.NodeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Coordinator"] = 0;
            values[valuesById[1] = "TaskWorker"] = 1;
            values[valuesById[2] = "Connector"] = 2;
            return values;
        })();

        /**
         * ProbeType enum.
         * @name common.ProbeRequest.ProbeType
         * @enum {number}
         * @property {number} Liveness=0 Liveness value
         * @property {number} Readiness=1 Readiness value
         */
        ProbeRequest.ProbeType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Liveness"] = 0;
            values[valuesById[1] = "Readiness"] = 1;
            return values;
        })();

        return ProbeRequest;
    })();

    common.ProbeResponse = (function() {

        /**
         * Properties of a ProbeResponse.
         * @memberof common
         * @interface IProbeResponse
         * @property {number|null} [memory] ProbeResponse memory
         * @property {number|null} [cpu] ProbeResponse cpu
         * @property {boolean|null} [available] ProbeResponse available
         */

        /**
         * Constructs a new ProbeResponse.
         * @memberof common
         * @classdesc Represents a ProbeResponse.
         * @implements IProbeResponse
         * @constructor
         * @param {common.IProbeResponse=} [properties] Properties to set
         */
        function ProbeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProbeResponse memory.
         * @member {number} memory
         * @memberof common.ProbeResponse
         * @instance
         */
        ProbeResponse.prototype.memory = 0;

        /**
         * ProbeResponse cpu.
         * @member {number} cpu
         * @memberof common.ProbeResponse
         * @instance
         */
        ProbeResponse.prototype.cpu = 0;

        /**
         * ProbeResponse available.
         * @member {boolean} available
         * @memberof common.ProbeResponse
         * @instance
         */
        ProbeResponse.prototype.available = false;

        /**
         * Creates a new ProbeResponse instance using the specified properties.
         * @function create
         * @memberof common.ProbeResponse
         * @static
         * @param {common.IProbeResponse=} [properties] Properties to set
         * @returns {common.ProbeResponse} ProbeResponse instance
         */
        ProbeResponse.create = function create(properties) {
            return new ProbeResponse(properties);
        };

        /**
         * Encodes the specified ProbeResponse message. Does not implicitly {@link common.ProbeResponse.verify|verify} messages.
         * @function encode
         * @memberof common.ProbeResponse
         * @static
         * @param {common.IProbeResponse} message ProbeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memory != null && Object.hasOwnProperty.call(message, "memory"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.memory);
            if (message.cpu != null && Object.hasOwnProperty.call(message, "cpu"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.cpu);
            if (message.available != null && Object.hasOwnProperty.call(message, "available"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.available);
            return writer;
        };

        /**
         * Encodes the specified ProbeResponse message, length delimited. Does not implicitly {@link common.ProbeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ProbeResponse
         * @static
         * @param {common.IProbeResponse} message ProbeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProbeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.ProbeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ProbeResponse} ProbeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ProbeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.memory = reader.float();
                        break;
                    }
                case 2: {
                        message.cpu = reader.float();
                        break;
                    }
                case 3: {
                        message.available = reader.bool();
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
         * Decodes a ProbeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ProbeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ProbeResponse} ProbeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProbeResponse message.
         * @function verify
         * @memberof common.ProbeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProbeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memory != null && message.hasOwnProperty("memory"))
                if (typeof message.memory !== "number")
                    return "memory: number expected";
            if (message.cpu != null && message.hasOwnProperty("cpu"))
                if (typeof message.cpu !== "number")
                    return "cpu: number expected";
            if (message.available != null && message.hasOwnProperty("available"))
                if (typeof message.available !== "boolean")
                    return "available: boolean expected";
            return null;
        };

        /**
         * Creates a ProbeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ProbeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ProbeResponse} ProbeResponse
         */
        ProbeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ProbeResponse)
                return object;
            var message = new $root.common.ProbeResponse();
            if (object.memory != null)
                message.memory = Number(object.memory);
            if (object.cpu != null)
                message.cpu = Number(object.cpu);
            if (object.available != null)
                message.available = Boolean(object.available);
            return message;
        };

        /**
         * Creates a plain object from a ProbeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ProbeResponse
         * @static
         * @param {common.ProbeResponse} message ProbeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProbeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.memory = 0;
                object.cpu = 0;
                object.available = false;
            }
            if (message.memory != null && message.hasOwnProperty("memory"))
                object.memory = options.json && !isFinite(message.memory) ? String(message.memory) : message.memory;
            if (message.cpu != null && message.hasOwnProperty("cpu"))
                object.cpu = options.json && !isFinite(message.cpu) ? String(message.cpu) : message.cpu;
            if (message.available != null && message.hasOwnProperty("available"))
                object.available = message.available;
            return object;
        };

        /**
         * Converts this ProbeResponse to JSON.
         * @function toJSON
         * @memberof common.ProbeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProbeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProbeResponse
         * @function getTypeUrl
         * @memberof common.ProbeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProbeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ProbeResponse";
        };

        return ProbeResponse;
    })();

    common.EventRequest = (function() {

        /**
         * Properties of an EventRequest.
         * @memberof common
         * @interface IEventRequest
         * @property {Uint8Array|null} [data] EventRequest data
         */

        /**
         * Constructs a new EventRequest.
         * @memberof common
         * @classdesc Represents an EventRequest.
         * @implements IEventRequest
         * @constructor
         * @param {common.IEventRequest=} [properties] Properties to set
         */
        function EventRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventRequest data.
         * @member {Uint8Array} data
         * @memberof common.EventRequest
         * @instance
         */
        EventRequest.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new EventRequest instance using the specified properties.
         * @function create
         * @memberof common.EventRequest
         * @static
         * @param {common.IEventRequest=} [properties] Properties to set
         * @returns {common.EventRequest} EventRequest instance
         */
        EventRequest.create = function create(properties) {
            return new EventRequest(properties);
        };

        /**
         * Encodes the specified EventRequest message. Does not implicitly {@link common.EventRequest.verify|verify} messages.
         * @function encode
         * @memberof common.EventRequest
         * @static
         * @param {common.IEventRequest} message EventRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified EventRequest message, length delimited. Does not implicitly {@link common.EventRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.EventRequest
         * @static
         * @param {common.IEventRequest} message EventRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventRequest message from the specified reader or buffer.
         * @function decode
         * @memberof common.EventRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.EventRequest} EventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.EventRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
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
         * Decodes an EventRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.EventRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.EventRequest} EventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventRequest message.
         * @function verify
         * @memberof common.EventRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an EventRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.EventRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.EventRequest} EventRequest
         */
        EventRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.common.EventRequest)
                return object;
            var message = new $root.common.EventRequest();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an EventRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.EventRequest
         * @static
         * @param {common.EventRequest} message EventRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this EventRequest to JSON.
         * @function toJSON
         * @memberof common.EventRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EventRequest
         * @function getTypeUrl
         * @memberof common.EventRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EventRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.EventRequest";
        };

        return EventRequest;
    })();

    common.EventResponse = (function() {

        /**
         * Properties of an EventResponse.
         * @memberof common
         * @interface IEventResponse
         * @property {number|null} [code] EventResponse code
         * @property {string|null} [msg] EventResponse msg
         */

        /**
         * Constructs a new EventResponse.
         * @memberof common
         * @classdesc Represents an EventResponse.
         * @implements IEventResponse
         * @constructor
         * @param {common.IEventResponse=} [properties] Properties to set
         */
        function EventResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EventResponse code.
         * @member {number} code
         * @memberof common.EventResponse
         * @instance
         */
        EventResponse.prototype.code = 0;

        /**
         * EventResponse msg.
         * @member {string} msg
         * @memberof common.EventResponse
         * @instance
         */
        EventResponse.prototype.msg = "";

        /**
         * Creates a new EventResponse instance using the specified properties.
         * @function create
         * @memberof common.EventResponse
         * @static
         * @param {common.IEventResponse=} [properties] Properties to set
         * @returns {common.EventResponse} EventResponse instance
         */
        EventResponse.create = function create(properties) {
            return new EventResponse(properties);
        };

        /**
         * Encodes the specified EventResponse message. Does not implicitly {@link common.EventResponse.verify|verify} messages.
         * @function encode
         * @memberof common.EventResponse
         * @static
         * @param {common.IEventResponse} message EventResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified EventResponse message, length delimited. Does not implicitly {@link common.EventResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.EventResponse
         * @static
         * @param {common.IEventResponse} message EventResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EventResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.EventResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.EventResponse} EventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.EventResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
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
         * Decodes an EventResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.EventResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.EventResponse} EventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EventResponse message.
         * @function verify
         * @memberof common.EventResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an EventResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.EventResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.EventResponse} EventResponse
         */
        EventResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.EventResponse)
                return object;
            var message = new $root.common.EventResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an EventResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.EventResponse
         * @static
         * @param {common.EventResponse} message EventResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this EventResponse to JSON.
         * @function toJSON
         * @memberof common.EventResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EventResponse
         * @function getTypeUrl
         * @memberof common.EventResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EventResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.EventResponse";
        };

        return EventResponse;
    })();

    return common;
})();

module.exports = $root;
