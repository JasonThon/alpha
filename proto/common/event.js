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

    common.KeyedDataEvent = (function() {

        /**
         * Properties of a KeyedDataEvent.
         * @memberof common
         * @interface IKeyedDataEvent
         * @property {common.IJobId|null} [jobId] KeyedDataEvent jobId
         * @property {common.IEntry|null} [key] KeyedDataEvent key
         * @property {number|null} [toOperatorId] KeyedDataEvent toOperatorId
         * @property {Array.<common.IEntry>|null} [data] KeyedDataEvent data
         * @property {google.protobuf.ITimestamp|null} [eventTime] KeyedDataEvent eventTime
         * @property {google.protobuf.ITimestamp|null} [processTime] KeyedDataEvent processTime
         * @property {number|null} [fromOperatorId] KeyedDataEvent fromOperatorId
         */

        /**
         * Constructs a new KeyedDataEvent.
         * @memberof common
         * @classdesc Represents a KeyedDataEvent.
         * @implements IKeyedDataEvent
         * @constructor
         * @param {common.IKeyedDataEvent=} [properties] Properties to set
         */
        function KeyedDataEvent(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyedDataEvent jobId.
         * @member {common.IJobId|null|undefined} jobId
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.jobId = null;

        /**
         * KeyedDataEvent key.
         * @member {common.IEntry|null|undefined} key
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.key = null;

        /**
         * KeyedDataEvent toOperatorId.
         * @member {number} toOperatorId
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.toOperatorId = 0;

        /**
         * KeyedDataEvent data.
         * @member {Array.<common.IEntry>} data
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.data = $util.emptyArray;

        /**
         * KeyedDataEvent eventTime.
         * @member {google.protobuf.ITimestamp|null|undefined} eventTime
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.eventTime = null;

        /**
         * KeyedDataEvent processTime.
         * @member {google.protobuf.ITimestamp|null|undefined} processTime
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.processTime = null;

        /**
         * KeyedDataEvent fromOperatorId.
         * @member {number} fromOperatorId
         * @memberof common.KeyedDataEvent
         * @instance
         */
        KeyedDataEvent.prototype.fromOperatorId = 0;

        /**
         * Creates a new KeyedDataEvent instance using the specified properties.
         * @function create
         * @memberof common.KeyedDataEvent
         * @static
         * @param {common.IKeyedDataEvent=} [properties] Properties to set
         * @returns {common.KeyedDataEvent} KeyedDataEvent instance
         */
        KeyedDataEvent.create = function create(properties) {
            return new KeyedDataEvent(properties);
        };

        /**
         * Encodes the specified KeyedDataEvent message. Does not implicitly {@link common.KeyedDataEvent.verify|verify} messages.
         * @function encode
         * @memberof common.KeyedDataEvent
         * @static
         * @param {common.IKeyedDataEvent} message KeyedDataEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyedDataEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jobId != null && Object.hasOwnProperty.call(message, "jobId"))
                $root.common.JobId.encode(message.jobId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                $root.common.Entry.encode(message.key, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.toOperatorId != null && Object.hasOwnProperty.call(message, "toOperatorId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.toOperatorId);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.common.Entry.encode(message.data[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.eventTime != null && Object.hasOwnProperty.call(message, "eventTime"))
                $root.google.protobuf.Timestamp.encode(message.eventTime, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.processTime != null && Object.hasOwnProperty.call(message, "processTime"))
                $root.google.protobuf.Timestamp.encode(message.processTime, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.fromOperatorId != null && Object.hasOwnProperty.call(message, "fromOperatorId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.fromOperatorId);
            return writer;
        };

        /**
         * Encodes the specified KeyedDataEvent message, length delimited. Does not implicitly {@link common.KeyedDataEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.KeyedDataEvent
         * @static
         * @param {common.IKeyedDataEvent} message KeyedDataEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyedDataEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyedDataEvent message from the specified reader or buffer.
         * @function decode
         * @memberof common.KeyedDataEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.KeyedDataEvent} KeyedDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyedDataEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.KeyedDataEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.jobId = $root.common.JobId.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.key = $root.common.Entry.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.toOperatorId = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.common.Entry.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.eventTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.processTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.fromOperatorId = reader.uint32();
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
         * Decodes a KeyedDataEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.KeyedDataEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.KeyedDataEvent} KeyedDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyedDataEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyedDataEvent message.
         * @function verify
         * @memberof common.KeyedDataEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyedDataEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jobId != null && message.hasOwnProperty("jobId")) {
                var error = $root.common.JobId.verify(message.jobId);
                if (error)
                    return "jobId." + error;
            }
            if (message.key != null && message.hasOwnProperty("key")) {
                var error = $root.common.Entry.verify(message.key);
                if (error)
                    return "key." + error;
            }
            if (message.toOperatorId != null && message.hasOwnProperty("toOperatorId"))
                if (!$util.isInteger(message.toOperatorId))
                    return "toOperatorId: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.common.Entry.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.eventTime != null && message.hasOwnProperty("eventTime")) {
                var error = $root.google.protobuf.Timestamp.verify(message.eventTime);
                if (error)
                    return "eventTime." + error;
            }
            if (message.processTime != null && message.hasOwnProperty("processTime")) {
                var error = $root.google.protobuf.Timestamp.verify(message.processTime);
                if (error)
                    return "processTime." + error;
            }
            if (message.fromOperatorId != null && message.hasOwnProperty("fromOperatorId"))
                if (!$util.isInteger(message.fromOperatorId))
                    return "fromOperatorId: integer expected";
            return null;
        };

        /**
         * Creates a KeyedDataEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.KeyedDataEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.KeyedDataEvent} KeyedDataEvent
         */
        KeyedDataEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.common.KeyedDataEvent)
                return object;
            var message = new $root.common.KeyedDataEvent();
            if (object.jobId != null) {
                if (typeof object.jobId !== "object")
                    throw TypeError(".common.KeyedDataEvent.jobId: object expected");
                message.jobId = $root.common.JobId.fromObject(object.jobId);
            }
            if (object.key != null) {
                if (typeof object.key !== "object")
                    throw TypeError(".common.KeyedDataEvent.key: object expected");
                message.key = $root.common.Entry.fromObject(object.key);
            }
            if (object.toOperatorId != null)
                message.toOperatorId = object.toOperatorId >>> 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".common.KeyedDataEvent.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".common.KeyedDataEvent.data: object expected");
                    message.data[i] = $root.common.Entry.fromObject(object.data[i]);
                }
            }
            if (object.eventTime != null) {
                if (typeof object.eventTime !== "object")
                    throw TypeError(".common.KeyedDataEvent.eventTime: object expected");
                message.eventTime = $root.google.protobuf.Timestamp.fromObject(object.eventTime);
            }
            if (object.processTime != null) {
                if (typeof object.processTime !== "object")
                    throw TypeError(".common.KeyedDataEvent.processTime: object expected");
                message.processTime = $root.google.protobuf.Timestamp.fromObject(object.processTime);
            }
            if (object.fromOperatorId != null)
                message.fromOperatorId = object.fromOperatorId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a KeyedDataEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.KeyedDataEvent
         * @static
         * @param {common.KeyedDataEvent} message KeyedDataEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyedDataEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.jobId = null;
                object.key = null;
                object.toOperatorId = 0;
                object.eventTime = null;
                object.processTime = null;
                object.fromOperatorId = 0;
            }
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = $root.common.JobId.toObject(message.jobId, options);
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = $root.common.Entry.toObject(message.key, options);
            if (message.toOperatorId != null && message.hasOwnProperty("toOperatorId"))
                object.toOperatorId = message.toOperatorId;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.common.Entry.toObject(message.data[j], options);
            }
            if (message.eventTime != null && message.hasOwnProperty("eventTime"))
                object.eventTime = $root.google.protobuf.Timestamp.toObject(message.eventTime, options);
            if (message.processTime != null && message.hasOwnProperty("processTime"))
                object.processTime = $root.google.protobuf.Timestamp.toObject(message.processTime, options);
            if (message.fromOperatorId != null && message.hasOwnProperty("fromOperatorId"))
                object.fromOperatorId = message.fromOperatorId;
            return object;
        };

        /**
         * Converts this KeyedDataEvent to JSON.
         * @function toJSON
         * @memberof common.KeyedDataEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyedDataEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyedDataEvent
         * @function getTypeUrl
         * @memberof common.KeyedDataEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyedDataEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.KeyedDataEvent";
        };

        return KeyedDataEvent;
    })();

    common.Entry = (function() {

        /**
         * Properties of an Entry.
         * @memberof common
         * @interface IEntry
         * @property {common.DataTypeEnum|null} [dataType] Entry dataType
         * @property {Uint8Array|null} [value] Entry value
         */

        /**
         * Constructs a new Entry.
         * @memberof common
         * @classdesc Represents an Entry.
         * @implements IEntry
         * @constructor
         * @param {common.IEntry=} [properties] Properties to set
         */
        function Entry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Entry dataType.
         * @member {common.DataTypeEnum} dataType
         * @memberof common.Entry
         * @instance
         */
        Entry.prototype.dataType = 0;

        /**
         * Entry value.
         * @member {Uint8Array} value
         * @memberof common.Entry
         * @instance
         */
        Entry.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new Entry instance using the specified properties.
         * @function create
         * @memberof common.Entry
         * @static
         * @param {common.IEntry=} [properties] Properties to set
         * @returns {common.Entry} Entry instance
         */
        Entry.create = function create(properties) {
            return new Entry(properties);
        };

        /**
         * Encodes the specified Entry message. Does not implicitly {@link common.Entry.verify|verify} messages.
         * @function encode
         * @memberof common.Entry
         * @static
         * @param {common.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dataType);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link common.Entry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Entry
         * @static
         * @param {common.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @function decode
         * @memberof common.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Entry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dataType = reader.int32();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
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
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Entry message.
         * @function verify
         * @memberof common.Entry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Entry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                switch (message.dataType) {
                default:
                    return "dataType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            return null;
        };

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Entry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Entry} Entry
         */
        Entry.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Entry)
                return object;
            var message = new $root.common.Entry();
            switch (object.dataType) {
            default:
                if (typeof object.dataType === "number") {
                    message.dataType = object.dataType;
                    break;
                }
                break;
            case "DATA_TYPE_ENUM_UNSPECIFIED":
            case 0:
                message.dataType = 0;
                break;
            case "DATA_TYPE_ENUM_BIGINT":
            case 1:
                message.dataType = 1;
                break;
            case "DATA_TYPE_ENUM_NUMBER":
            case 2:
                message.dataType = 2;
                break;
            case "DATA_TYPE_ENUM_NULL":
            case 3:
                message.dataType = 3;
                break;
            case "DATA_TYPE_ENUM_STRING":
            case 4:
                message.dataType = 4;
                break;
            case "DATA_TYPE_ENUM_BOOLEAN":
            case 5:
                message.dataType = 5;
                break;
            case "DATA_TYPE_ENUM_OBJECT":
            case 6:
                message.dataType = 6;
                break;
            }
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Entry
         * @static
         * @param {common.Entry} message Entry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Entry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.dataType = options.enums === String ? "DATA_TYPE_ENUM_UNSPECIFIED" : 0;
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = options.enums === String ? $root.common.DataTypeEnum[message.dataType] === undefined ? message.dataType : $root.common.DataTypeEnum[message.dataType] : message.dataType;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this Entry to JSON.
         * @function toJSON
         * @memberof common.Entry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Entry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Entry
         * @function getTypeUrl
         * @memberof common.Entry
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Entry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Entry";
        };

        return Entry;
    })();

    common.JobId = (function() {

        /**
         * Properties of a JobId.
         * @memberof common
         * @interface IJobId
         * @property {number|null} [streamId] JobId streamId
         */

        /**
         * Constructs a new JobId.
         * @memberof common
         * @classdesc JobId, represents a stream job.
         * @implements IJobId
         * @constructor
         * @param {common.IJobId=} [properties] Properties to set
         */
        function JobId(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JobId streamId.
         * @member {number} streamId
         * @memberof common.JobId
         * @instance
         */
        JobId.prototype.streamId = 0;

        /**
         * Creates a new JobId instance using the specified properties.
         * @function create
         * @memberof common.JobId
         * @static
         * @param {common.IJobId=} [properties] Properties to set
         * @returns {common.JobId} JobId instance
         */
        JobId.create = function create(properties) {
            return new JobId(properties);
        };

        /**
         * Encodes the specified JobId message. Does not implicitly {@link common.JobId.verify|verify} messages.
         * @function encode
         * @memberof common.JobId
         * @static
         * @param {common.IJobId} message JobId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.streamId);
            return writer;
        };

        /**
         * Encodes the specified JobId message, length delimited. Does not implicitly {@link common.JobId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.JobId
         * @static
         * @param {common.IJobId} message JobId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JobId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JobId message from the specified reader or buffer.
         * @function decode
         * @memberof common.JobId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.JobId} JobId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.JobId();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.streamId = reader.uint32();
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
         * Decodes a JobId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.JobId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.JobId} JobId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JobId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JobId message.
         * @function verify
         * @memberof common.JobId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JobId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            return null;
        };

        /**
         * Creates a JobId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.JobId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.JobId} JobId
         */
        JobId.fromObject = function fromObject(object) {
            if (object instanceof $root.common.JobId)
                return object;
            var message = new $root.common.JobId();
            if (object.streamId != null)
                message.streamId = object.streamId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a JobId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.JobId
         * @static
         * @param {common.JobId} message JobId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JobId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.streamId = 0;
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            return object;
        };

        /**
         * Converts this JobId to JSON.
         * @function toJSON
         * @memberof common.JobId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JobId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JobId
         * @function getTypeUrl
         * @memberof common.JobId
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JobId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.JobId";
        };

        return JobId;
    })();

    common.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof common
         * @interface IResponse
         * @property {string|null} [status] Response status
         * @property {string|null} [errMsg] Response errMsg
         */

        /**
         * Constructs a new Response.
         * @memberof common
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {common.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response status.
         * @member {string} status
         * @memberof common.Response
         * @instance
         */
        Response.prototype.status = "";

        /**
         * Response errMsg.
         * @member {string} errMsg
         * @memberof common.Response
         * @instance
         */
        Response.prototype.errMsg = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof common.Response
         * @static
         * @param {common.IResponse=} [properties] Properties to set
         * @returns {common.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link common.Response.verify|verify} messages.
         * @function encode
         * @memberof common.Response
         * @static
         * @param {common.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link common.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Response
         * @static
         * @param {common.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof common.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.string();
                        break;
                    }
                case 2: {
                        message.errMsg = reader.string();
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
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof common.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Response)
                return object;
            var message = new $root.common.Response();
            if (object.status != null)
                message.status = String(object.status);
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Response
         * @static
         * @param {common.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = "";
                object.errMsg = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof common.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof common.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Response";
        };

        return Response;
    })();

    common.HostAddr = (function() {

        /**
         * Properties of a HostAddr.
         * @memberof common
         * @interface IHostAddr
         * @property {string|null} [host] HostAddr host
         * @property {number|null} [port] HostAddr port
         */

        /**
         * Constructs a new HostAddr.
         * @memberof common
         * @classdesc Represents a HostAddr.
         * @implements IHostAddr
         * @constructor
         * @param {common.IHostAddr=} [properties] Properties to set
         */
        function HostAddr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HostAddr host.
         * @member {string} host
         * @memberof common.HostAddr
         * @instance
         */
        HostAddr.prototype.host = "";

        /**
         * HostAddr port.
         * @member {number} port
         * @memberof common.HostAddr
         * @instance
         */
        HostAddr.prototype.port = 0;

        /**
         * Creates a new HostAddr instance using the specified properties.
         * @function create
         * @memberof common.HostAddr
         * @static
         * @param {common.IHostAddr=} [properties] Properties to set
         * @returns {common.HostAddr} HostAddr instance
         */
        HostAddr.create = function create(properties) {
            return new HostAddr(properties);
        };

        /**
         * Encodes the specified HostAddr message. Does not implicitly {@link common.HostAddr.verify|verify} messages.
         * @function encode
         * @memberof common.HostAddr
         * @static
         * @param {common.IHostAddr} message HostAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostAddr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
            return writer;
        };

        /**
         * Encodes the specified HostAddr message, length delimited. Does not implicitly {@link common.HostAddr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.HostAddr
         * @static
         * @param {common.IHostAddr} message HostAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostAddr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HostAddr message from the specified reader or buffer.
         * @function decode
         * @memberof common.HostAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.HostAddr} HostAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostAddr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.HostAddr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.host = reader.string();
                        break;
                    }
                case 2: {
                        message.port = reader.uint32();
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
         * Decodes a HostAddr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.HostAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.HostAddr} HostAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostAddr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HostAddr message.
         * @function verify
         * @memberof common.HostAddr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HostAddr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };

        /**
         * Creates a HostAddr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.HostAddr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.HostAddr} HostAddr
         */
        HostAddr.fromObject = function fromObject(object) {
            if (object instanceof $root.common.HostAddr)
                return object;
            var message = new $root.common.HostAddr();
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                message.port = object.port >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a HostAddr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.HostAddr
         * @static
         * @param {common.HostAddr} message HostAddr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HostAddr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.host = "";
                object.port = 0;
            }
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this HostAddr to JSON.
         * @function toJSON
         * @memberof common.HostAddr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HostAddr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HostAddr
         * @function getTypeUrl
         * @memberof common.HostAddr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HostAddr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.HostAddr";
        };

        return HostAddr;
    })();

    common.Sort = (function() {

        /**
         * Properties of a Sort.
         * @memberof common
         * @interface ISort
         * @property {string|null} [fieldName] Sort fieldName
         * @property {common.Sort.SortType|null} [type] Sort type
         */

        /**
         * Constructs a new Sort.
         * @memberof common
         * @classdesc Represents a Sort.
         * @implements ISort
         * @constructor
         * @param {common.ISort=} [properties] Properties to set
         */
        function Sort(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sort fieldName.
         * @member {string} fieldName
         * @memberof common.Sort
         * @instance
         */
        Sort.prototype.fieldName = "";

        /**
         * Sort type.
         * @member {common.Sort.SortType} type
         * @memberof common.Sort
         * @instance
         */
        Sort.prototype.type = 0;

        /**
         * Creates a new Sort instance using the specified properties.
         * @function create
         * @memberof common.Sort
         * @static
         * @param {common.ISort=} [properties] Properties to set
         * @returns {common.Sort} Sort instance
         */
        Sort.create = function create(properties) {
            return new Sort(properties);
        };

        /**
         * Encodes the specified Sort message. Does not implicitly {@link common.Sort.verify|verify} messages.
         * @function encode
         * @memberof common.Sort
         * @static
         * @param {common.ISort} message Sort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sort.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fieldName != null && Object.hasOwnProperty.call(message, "fieldName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Sort message, length delimited. Does not implicitly {@link common.Sort.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Sort
         * @static
         * @param {common.ISort} message Sort message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sort.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sort message from the specified reader or buffer.
         * @function decode
         * @memberof common.Sort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Sort} Sort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sort.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Sort();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fieldName = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
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
         * Decodes a Sort message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Sort
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Sort} Sort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sort.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sort message.
         * @function verify
         * @memberof common.Sort
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sort.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                if (!$util.isString(message.fieldName))
                    return "fieldName: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Sort message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Sort
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Sort} Sort
         */
        Sort.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Sort)
                return object;
            var message = new $root.common.Sort();
            if (object.fieldName != null)
                message.fieldName = String(object.fieldName);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "DESC":
            case 0:
                message.type = 0;
                break;
            case "ASC":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Sort message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Sort
         * @static
         * @param {common.Sort} message Sort
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sort.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fieldName = "";
                object.type = options.enums === String ? "DESC" : 0;
            }
            if (message.fieldName != null && message.hasOwnProperty("fieldName"))
                object.fieldName = message.fieldName;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.common.Sort.SortType[message.type] === undefined ? message.type : $root.common.Sort.SortType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this Sort to JSON.
         * @function toJSON
         * @memberof common.Sort
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sort.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sort
         * @function getTypeUrl
         * @memberof common.Sort
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sort.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Sort";
        };

        /**
         * SortType enum.
         * @name common.Sort.SortType
         * @enum {number}
         * @property {number} DESC=0 DESC value
         * @property {number} ASC=1 ASC value
         */
        Sort.SortType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DESC"] = 0;
            values[valuesById[1] = "ASC"] = 1;
            return values;
        })();

        return Sort;
    })();

    /**
     * DataTypeEnum enum.
     * @name common.DataTypeEnum
     * @enum {number}
     * @property {number} DATA_TYPE_ENUM_UNSPECIFIED=0 DATA_TYPE_ENUM_UNSPECIFIED value
     * @property {number} DATA_TYPE_ENUM_BIGINT=1 DATA_TYPE_ENUM_BIGINT value
     * @property {number} DATA_TYPE_ENUM_NUMBER=2 DATA_TYPE_ENUM_NUMBER value
     * @property {number} DATA_TYPE_ENUM_NULL=3 DATA_TYPE_ENUM_NULL value
     * @property {number} DATA_TYPE_ENUM_STRING=4 DATA_TYPE_ENUM_STRING value
     * @property {number} DATA_TYPE_ENUM_BOOLEAN=5 DATA_TYPE_ENUM_BOOLEAN value
     * @property {number} DATA_TYPE_ENUM_OBJECT=6 DATA_TYPE_ENUM_OBJECT value
     */
    common.DataTypeEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DATA_TYPE_ENUM_UNSPECIFIED"] = 0;
        values[valuesById[1] = "DATA_TYPE_ENUM_BIGINT"] = 1;
        values[valuesById[2] = "DATA_TYPE_ENUM_NUMBER"] = 2;
        values[valuesById[3] = "DATA_TYPE_ENUM_NULL"] = 3;
        values[valuesById[4] = "DATA_TYPE_ENUM_STRING"] = 4;
        values[valuesById[5] = "DATA_TYPE_ENUM_BOOLEAN"] = 5;
        values[valuesById[6] = "DATA_TYPE_ENUM_OBJECT"] = 6;
        return values;
    })();

    return common;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
