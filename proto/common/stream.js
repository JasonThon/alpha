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

    common.DataflowMeta = (function() {

        /**
         * Properties of a DataflowMeta.
         * @memberof common
         * @interface IDataflowMeta
         * @property {number|null} [center] DataflowMeta center
         * @property {Array.<number>|null} [neighbors] DataflowMeta neighbors
         */

        /**
         * Constructs a new DataflowMeta.
         * @memberof common
         * @classdesc StreamGraph metadata, it stores the structural information of a stream graph
         * @implements IDataflowMeta
         * @constructor
         * @param {common.IDataflowMeta=} [properties] Properties to set
         */
        function DataflowMeta(properties) {
            this.neighbors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataflowMeta center.
         * @member {number} center
         * @memberof common.DataflowMeta
         * @instance
         */
        DataflowMeta.prototype.center = 0;

        /**
         * DataflowMeta neighbors.
         * @member {Array.<number>} neighbors
         * @memberof common.DataflowMeta
         * @instance
         */
        DataflowMeta.prototype.neighbors = $util.emptyArray;

        /**
         * Creates a new DataflowMeta instance using the specified properties.
         * @function create
         * @memberof common.DataflowMeta
         * @static
         * @param {common.IDataflowMeta=} [properties] Properties to set
         * @returns {common.DataflowMeta} DataflowMeta instance
         */
        DataflowMeta.create = function create(properties) {
            return new DataflowMeta(properties);
        };

        /**
         * Encodes the specified DataflowMeta message. Does not implicitly {@link common.DataflowMeta.verify|verify} messages.
         * @function encode
         * @memberof common.DataflowMeta
         * @static
         * @param {common.IDataflowMeta} message DataflowMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataflowMeta.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.center != null && Object.hasOwnProperty.call(message, "center"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.center);
            if (message.neighbors != null && message.neighbors.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.neighbors.length; ++i)
                    writer.uint32(message.neighbors[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DataflowMeta message, length delimited. Does not implicitly {@link common.DataflowMeta.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.DataflowMeta
         * @static
         * @param {common.IDataflowMeta} message DataflowMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataflowMeta.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataflowMeta message from the specified reader or buffer.
         * @function decode
         * @memberof common.DataflowMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.DataflowMeta} DataflowMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataflowMeta.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.DataflowMeta();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.center = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.neighbors && message.neighbors.length))
                            message.neighbors = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.neighbors.push(reader.uint32());
                        } else
                            message.neighbors.push(reader.uint32());
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
         * Decodes a DataflowMeta message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.DataflowMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.DataflowMeta} DataflowMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataflowMeta.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataflowMeta message.
         * @function verify
         * @memberof common.DataflowMeta
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataflowMeta.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.center != null && message.hasOwnProperty("center"))
                if (!$util.isInteger(message.center))
                    return "center: integer expected";
            if (message.neighbors != null && message.hasOwnProperty("neighbors")) {
                if (!Array.isArray(message.neighbors))
                    return "neighbors: array expected";
                for (var i = 0; i < message.neighbors.length; ++i)
                    if (!$util.isInteger(message.neighbors[i]))
                        return "neighbors: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DataflowMeta message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.DataflowMeta
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.DataflowMeta} DataflowMeta
         */
        DataflowMeta.fromObject = function fromObject(object) {
            if (object instanceof $root.common.DataflowMeta)
                return object;
            var message = new $root.common.DataflowMeta();
            if (object.center != null)
                message.center = object.center >>> 0;
            if (object.neighbors) {
                if (!Array.isArray(object.neighbors))
                    throw TypeError(".common.DataflowMeta.neighbors: array expected");
                message.neighbors = [];
                for (var i = 0; i < object.neighbors.length; ++i)
                    message.neighbors[i] = object.neighbors[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DataflowMeta message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.DataflowMeta
         * @static
         * @param {common.DataflowMeta} message DataflowMeta
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataflowMeta.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.neighbors = [];
            if (options.defaults)
                object.center = 0;
            if (message.center != null && message.hasOwnProperty("center"))
                object.center = message.center;
            if (message.neighbors && message.neighbors.length) {
                object.neighbors = [];
                for (var j = 0; j < message.neighbors.length; ++j)
                    object.neighbors[j] = message.neighbors[j];
            }
            return object;
        };

        /**
         * Converts this DataflowMeta to JSON.
         * @function toJSON
         * @memberof common.DataflowMeta
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataflowMeta.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DataflowMeta
         * @function getTypeUrl
         * @memberof common.DataflowMeta
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataflowMeta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.DataflowMeta";
        };

        return DataflowMeta;
    })();

    common.OperatorInfo = (function() {

        /**
         * Properties of an OperatorInfo.
         * @memberof common
         * @interface IOperatorInfo
         * @property {number|null} [operatorId] OperatorInfo operatorId
         * @property {common.IHostAddr|null} [hostAddr] OperatorInfo hostAddr
         * @property {common.IStreamConfig|null} [config] OperatorInfo config
         * @property {Array.<number>|null} [upstreams] OperatorInfo upstreams
         * @property {common.ISource|null} [source] OperatorInfo source
         * @property {common.ISink|null} [sink] OperatorInfo sink
         * @property {common.IMapper|null} [mapper] OperatorInfo mapper
         * @property {common.IFilter|null} [filter] OperatorInfo filter
         * @property {common.IKeyBy|null} [keyBy] OperatorInfo keyBy
         * @property {common.IReducer|null} [reducer] OperatorInfo reducer
         * @property {common.IFlatMap|null} [flatMap] OperatorInfo flatMap
         */

        /**
         * Constructs a new OperatorInfo.
         * @memberof common
         * @classdesc OperatorInfo, stores detail information of an operator
         * @implements IOperatorInfo
         * @constructor
         * @param {common.IOperatorInfo=} [properties] Properties to set
         */
        function OperatorInfo(properties) {
            this.upstreams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperatorInfo operatorId.
         * @member {number} operatorId
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.operatorId = 0;

        /**
         * OperatorInfo hostAddr.
         * @member {common.IHostAddr|null|undefined} hostAddr
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.hostAddr = null;

        /**
         * OperatorInfo config.
         * @member {common.IStreamConfig|null|undefined} config
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.config = null;

        /**
         * OperatorInfo upstreams.
         * @member {Array.<number>} upstreams
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.upstreams = $util.emptyArray;

        /**
         * OperatorInfo source.
         * @member {common.ISource|null|undefined} source
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.source = null;

        /**
         * OperatorInfo sink.
         * @member {common.ISink|null|undefined} sink
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.sink = null;

        /**
         * OperatorInfo mapper.
         * @member {common.IMapper|null|undefined} mapper
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.mapper = null;

        /**
         * OperatorInfo filter.
         * @member {common.IFilter|null|undefined} filter
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.filter = null;

        /**
         * OperatorInfo keyBy.
         * @member {common.IKeyBy|null|undefined} keyBy
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.keyBy = null;

        /**
         * OperatorInfo reducer.
         * @member {common.IReducer|null|undefined} reducer
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.reducer = null;

        /**
         * OperatorInfo flatMap.
         * @member {common.IFlatMap|null|undefined} flatMap
         * @memberof common.OperatorInfo
         * @instance
         */
        OperatorInfo.prototype.flatMap = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * OperatorInfo details.
         * @member {"source"|"sink"|"mapper"|"filter"|"keyBy"|"reducer"|"flatMap"|undefined} details
         * @memberof common.OperatorInfo
         * @instance
         */
        Object.defineProperty(OperatorInfo.prototype, "details", {
            get: $util.oneOfGetter($oneOfFields = ["source", "sink", "mapper", "filter", "keyBy", "reducer", "flatMap"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new OperatorInfo instance using the specified properties.
         * @function create
         * @memberof common.OperatorInfo
         * @static
         * @param {common.IOperatorInfo=} [properties] Properties to set
         * @returns {common.OperatorInfo} OperatorInfo instance
         */
        OperatorInfo.create = function create(properties) {
            return new OperatorInfo(properties);
        };

        /**
         * Encodes the specified OperatorInfo message. Does not implicitly {@link common.OperatorInfo.verify|verify} messages.
         * @function encode
         * @memberof common.OperatorInfo
         * @static
         * @param {common.IOperatorInfo} message OperatorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperatorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.operatorId);
            if (message.hostAddr != null && Object.hasOwnProperty.call(message, "hostAddr"))
                $root.common.HostAddr.encode(message.hostAddr, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.common.StreamConfig.encode(message.config, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.upstreams != null && message.upstreams.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.upstreams.length; ++i)
                    writer.uint32(message.upstreams[i]);
                writer.ldelim();
            }
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.common.Source.encode(message.source, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.sink != null && Object.hasOwnProperty.call(message, "sink"))
                $root.common.Sink.encode(message.sink, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.mapper != null && Object.hasOwnProperty.call(message, "mapper"))
                $root.common.Mapper.encode(message.mapper, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                $root.common.Filter.encode(message.filter, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.keyBy != null && Object.hasOwnProperty.call(message, "keyBy"))
                $root.common.KeyBy.encode(message.keyBy, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.reducer != null && Object.hasOwnProperty.call(message, "reducer"))
                $root.common.Reducer.encode(message.reducer, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.flatMap != null && Object.hasOwnProperty.call(message, "flatMap"))
                $root.common.FlatMap.encode(message.flatMap, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperatorInfo message, length delimited. Does not implicitly {@link common.OperatorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.OperatorInfo
         * @static
         * @param {common.IOperatorInfo} message OperatorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperatorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperatorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.OperatorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.OperatorInfo} OperatorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperatorInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.OperatorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.operatorId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.hostAddr = $root.common.HostAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.config = $root.common.StreamConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.upstreams && message.upstreams.length))
                            message.upstreams = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.upstreams.push(reader.uint32());
                        } else
                            message.upstreams.push(reader.uint32());
                        break;
                    }
                case 5: {
                        message.source = $root.common.Source.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.sink = $root.common.Sink.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.mapper = $root.common.Mapper.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.filter = $root.common.Filter.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.keyBy = $root.common.KeyBy.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.reducer = $root.common.Reducer.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.flatMap = $root.common.FlatMap.decode(reader, reader.uint32());
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
         * Decodes an OperatorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.OperatorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.OperatorInfo} OperatorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperatorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperatorInfo message.
         * @function verify
         * @memberof common.OperatorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperatorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                if (!$util.isInteger(message.operatorId))
                    return "operatorId: integer expected";
            if (message.hostAddr != null && message.hasOwnProperty("hostAddr")) {
                var error = $root.common.HostAddr.verify(message.hostAddr);
                if (error)
                    return "hostAddr." + error;
            }
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.common.StreamConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.upstreams != null && message.hasOwnProperty("upstreams")) {
                if (!Array.isArray(message.upstreams))
                    return "upstreams: array expected";
                for (var i = 0; i < message.upstreams.length; ++i)
                    if (!$util.isInteger(message.upstreams[i]))
                        return "upstreams: integer[] expected";
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                properties.details = 1;
                {
                    var error = $root.common.Source.verify(message.source);
                    if (error)
                        return "source." + error;
                }
            }
            if (message.sink != null && message.hasOwnProperty("sink")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.Sink.verify(message.sink);
                    if (error)
                        return "sink." + error;
                }
            }
            if (message.mapper != null && message.hasOwnProperty("mapper")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.Mapper.verify(message.mapper);
                    if (error)
                        return "mapper." + error;
                }
            }
            if (message.filter != null && message.hasOwnProperty("filter")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.Filter.verify(message.filter);
                    if (error)
                        return "filter." + error;
                }
            }
            if (message.keyBy != null && message.hasOwnProperty("keyBy")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.KeyBy.verify(message.keyBy);
                    if (error)
                        return "keyBy." + error;
                }
            }
            if (message.reducer != null && message.hasOwnProperty("reducer")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.Reducer.verify(message.reducer);
                    if (error)
                        return "reducer." + error;
                }
            }
            if (message.flatMap != null && message.hasOwnProperty("flatMap")) {
                if (properties.details === 1)
                    return "details: multiple values";
                properties.details = 1;
                {
                    var error = $root.common.FlatMap.verify(message.flatMap);
                    if (error)
                        return "flatMap." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperatorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.OperatorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.OperatorInfo} OperatorInfo
         */
        OperatorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.OperatorInfo)
                return object;
            var message = new $root.common.OperatorInfo();
            if (object.operatorId != null)
                message.operatorId = object.operatorId >>> 0;
            if (object.hostAddr != null) {
                if (typeof object.hostAddr !== "object")
                    throw TypeError(".common.OperatorInfo.hostAddr: object expected");
                message.hostAddr = $root.common.HostAddr.fromObject(object.hostAddr);
            }
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".common.OperatorInfo.config: object expected");
                message.config = $root.common.StreamConfig.fromObject(object.config);
            }
            if (object.upstreams) {
                if (!Array.isArray(object.upstreams))
                    throw TypeError(".common.OperatorInfo.upstreams: array expected");
                message.upstreams = [];
                for (var i = 0; i < object.upstreams.length; ++i)
                    message.upstreams[i] = object.upstreams[i] >>> 0;
            }
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".common.OperatorInfo.source: object expected");
                message.source = $root.common.Source.fromObject(object.source);
            }
            if (object.sink != null) {
                if (typeof object.sink !== "object")
                    throw TypeError(".common.OperatorInfo.sink: object expected");
                message.sink = $root.common.Sink.fromObject(object.sink);
            }
            if (object.mapper != null) {
                if (typeof object.mapper !== "object")
                    throw TypeError(".common.OperatorInfo.mapper: object expected");
                message.mapper = $root.common.Mapper.fromObject(object.mapper);
            }
            if (object.filter != null) {
                if (typeof object.filter !== "object")
                    throw TypeError(".common.OperatorInfo.filter: object expected");
                message.filter = $root.common.Filter.fromObject(object.filter);
            }
            if (object.keyBy != null) {
                if (typeof object.keyBy !== "object")
                    throw TypeError(".common.OperatorInfo.keyBy: object expected");
                message.keyBy = $root.common.KeyBy.fromObject(object.keyBy);
            }
            if (object.reducer != null) {
                if (typeof object.reducer !== "object")
                    throw TypeError(".common.OperatorInfo.reducer: object expected");
                message.reducer = $root.common.Reducer.fromObject(object.reducer);
            }
            if (object.flatMap != null) {
                if (typeof object.flatMap !== "object")
                    throw TypeError(".common.OperatorInfo.flatMap: object expected");
                message.flatMap = $root.common.FlatMap.fromObject(object.flatMap);
            }
            return message;
        };

        /**
         * Creates a plain object from an OperatorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.OperatorInfo
         * @static
         * @param {common.OperatorInfo} message OperatorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperatorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.upstreams = [];
            if (options.defaults) {
                object.operatorId = 0;
                object.hostAddr = null;
                object.config = null;
            }
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                object.operatorId = message.operatorId;
            if (message.hostAddr != null && message.hasOwnProperty("hostAddr"))
                object.hostAddr = $root.common.HostAddr.toObject(message.hostAddr, options);
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.common.StreamConfig.toObject(message.config, options);
            if (message.upstreams && message.upstreams.length) {
                object.upstreams = [];
                for (var j = 0; j < message.upstreams.length; ++j)
                    object.upstreams[j] = message.upstreams[j];
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                object.source = $root.common.Source.toObject(message.source, options);
                if (options.oneofs)
                    object.details = "source";
            }
            if (message.sink != null && message.hasOwnProperty("sink")) {
                object.sink = $root.common.Sink.toObject(message.sink, options);
                if (options.oneofs)
                    object.details = "sink";
            }
            if (message.mapper != null && message.hasOwnProperty("mapper")) {
                object.mapper = $root.common.Mapper.toObject(message.mapper, options);
                if (options.oneofs)
                    object.details = "mapper";
            }
            if (message.filter != null && message.hasOwnProperty("filter")) {
                object.filter = $root.common.Filter.toObject(message.filter, options);
                if (options.oneofs)
                    object.details = "filter";
            }
            if (message.keyBy != null && message.hasOwnProperty("keyBy")) {
                object.keyBy = $root.common.KeyBy.toObject(message.keyBy, options);
                if (options.oneofs)
                    object.details = "keyBy";
            }
            if (message.reducer != null && message.hasOwnProperty("reducer")) {
                object.reducer = $root.common.Reducer.toObject(message.reducer, options);
                if (options.oneofs)
                    object.details = "reducer";
            }
            if (message.flatMap != null && message.hasOwnProperty("flatMap")) {
                object.flatMap = $root.common.FlatMap.toObject(message.flatMap, options);
                if (options.oneofs)
                    object.details = "flatMap";
            }
            return object;
        };

        /**
         * Converts this OperatorInfo to JSON.
         * @function toJSON
         * @memberof common.OperatorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperatorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperatorInfo
         * @function getTypeUrl
         * @memberof common.OperatorInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperatorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.OperatorInfo";
        };

        return OperatorInfo;
    })();

    common.Reducer = (function() {

        /**
         * Properties of a Reducer.
         * @memberof common
         * @interface IReducer
         * @property {common.IFunc|null} [func] Reducer func
         */

        /**
         * Constructs a new Reducer.
         * @memberof common
         * @classdesc Represents a Reducer.
         * @implements IReducer
         * @constructor
         * @param {common.IReducer=} [properties] Properties to set
         */
        function Reducer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reducer func.
         * @member {common.IFunc|null|undefined} func
         * @memberof common.Reducer
         * @instance
         */
        Reducer.prototype.func = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Reducer value.
         * @member {"func"|undefined} value
         * @memberof common.Reducer
         * @instance
         */
        Object.defineProperty(Reducer.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["func"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Reducer instance using the specified properties.
         * @function create
         * @memberof common.Reducer
         * @static
         * @param {common.IReducer=} [properties] Properties to set
         * @returns {common.Reducer} Reducer instance
         */
        Reducer.create = function create(properties) {
            return new Reducer(properties);
        };

        /**
         * Encodes the specified Reducer message. Does not implicitly {@link common.Reducer.verify|verify} messages.
         * @function encode
         * @memberof common.Reducer
         * @static
         * @param {common.IReducer} message Reducer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reducer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                $root.common.Func.encode(message.func, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Reducer message, length delimited. Does not implicitly {@link common.Reducer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Reducer
         * @static
         * @param {common.IReducer} message Reducer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reducer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reducer message from the specified reader or buffer.
         * @function decode
         * @memberof common.Reducer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Reducer} Reducer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reducer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Reducer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a Reducer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Reducer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Reducer} Reducer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reducer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reducer message.
         * @function verify
         * @memberof common.Reducer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reducer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                properties.value = 1;
                {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Reducer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Reducer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Reducer} Reducer
         */
        Reducer.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Reducer)
                return object;
            var message = new $root.common.Reducer();
            if (object.func != null) {
                if (typeof object.func !== "object")
                    throw TypeError(".common.Reducer.func: object expected");
                message.func = $root.common.Func.fromObject(object.func);
            }
            return message;
        };

        /**
         * Creates a plain object from a Reducer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Reducer
         * @static
         * @param {common.Reducer} message Reducer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reducer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                object.func = $root.common.Func.toObject(message.func, options);
                if (options.oneofs)
                    object.value = "func";
            }
            return object;
        };

        /**
         * Converts this Reducer to JSON.
         * @function toJSON
         * @memberof common.Reducer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reducer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Reducer
         * @function getTypeUrl
         * @memberof common.Reducer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Reducer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Reducer";
        };

        return Reducer;
    })();

    common.FlatMap = (function() {

        /**
         * Properties of a FlatMap.
         * @memberof common
         * @interface IFlatMap
         * @property {common.IFunc|null} [func] FlatMap func
         */

        /**
         * Constructs a new FlatMap.
         * @memberof common
         * @classdesc Represents a FlatMap.
         * @implements IFlatMap
         * @constructor
         * @param {common.IFlatMap=} [properties] Properties to set
         */
        function FlatMap(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlatMap func.
         * @member {common.IFunc|null|undefined} func
         * @memberof common.FlatMap
         * @instance
         */
        FlatMap.prototype.func = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * FlatMap value.
         * @member {"func"|undefined} value
         * @memberof common.FlatMap
         * @instance
         */
        Object.defineProperty(FlatMap.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["func"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new FlatMap instance using the specified properties.
         * @function create
         * @memberof common.FlatMap
         * @static
         * @param {common.IFlatMap=} [properties] Properties to set
         * @returns {common.FlatMap} FlatMap instance
         */
        FlatMap.create = function create(properties) {
            return new FlatMap(properties);
        };

        /**
         * Encodes the specified FlatMap message. Does not implicitly {@link common.FlatMap.verify|verify} messages.
         * @function encode
         * @memberof common.FlatMap
         * @static
         * @param {common.IFlatMap} message FlatMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlatMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                $root.common.Func.encode(message.func, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FlatMap message, length delimited. Does not implicitly {@link common.FlatMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.FlatMap
         * @static
         * @param {common.IFlatMap} message FlatMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlatMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FlatMap message from the specified reader or buffer.
         * @function decode
         * @memberof common.FlatMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.FlatMap} FlatMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlatMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.FlatMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a FlatMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.FlatMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.FlatMap} FlatMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlatMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FlatMap message.
         * @function verify
         * @memberof common.FlatMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FlatMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                properties.value = 1;
                {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FlatMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.FlatMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.FlatMap} FlatMap
         */
        FlatMap.fromObject = function fromObject(object) {
            if (object instanceof $root.common.FlatMap)
                return object;
            var message = new $root.common.FlatMap();
            if (object.func != null) {
                if (typeof object.func !== "object")
                    throw TypeError(".common.FlatMap.func: object expected");
                message.func = $root.common.Func.fromObject(object.func);
            }
            return message;
        };

        /**
         * Creates a plain object from a FlatMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.FlatMap
         * @static
         * @param {common.FlatMap} message FlatMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlatMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                object.func = $root.common.Func.toObject(message.func, options);
                if (options.oneofs)
                    object.value = "func";
            }
            return object;
        };

        /**
         * Converts this FlatMap to JSON.
         * @function toJSON
         * @memberof common.FlatMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlatMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FlatMap
         * @function getTypeUrl
         * @memberof common.FlatMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FlatMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.FlatMap";
        };

        return FlatMap;
    })();

    common.Join = (function() {

        /**
         * Properties of a Join.
         * @memberof common
         * @interface IJoin
         * @property {common.Join.IStreamJoin|null} [streamJoin] Join streamJoin
         */

        /**
         * Constructs a new Join.
         * @memberof common
         * @classdesc Represents a Join.
         * @implements IJoin
         * @constructor
         * @param {common.IJoin=} [properties] Properties to set
         */
        function Join(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Join streamJoin.
         * @member {common.Join.IStreamJoin|null|undefined} streamJoin
         * @memberof common.Join
         * @instance
         */
        Join.prototype.streamJoin = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Join value.
         * @member {"streamJoin"|undefined} value
         * @memberof common.Join
         * @instance
         */
        Object.defineProperty(Join.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["streamJoin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Join instance using the specified properties.
         * @function create
         * @memberof common.Join
         * @static
         * @param {common.IJoin=} [properties] Properties to set
         * @returns {common.Join} Join instance
         */
        Join.create = function create(properties) {
            return new Join(properties);
        };

        /**
         * Encodes the specified Join message. Does not implicitly {@link common.Join.verify|verify} messages.
         * @function encode
         * @memberof common.Join
         * @static
         * @param {common.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.streamJoin != null && Object.hasOwnProperty.call(message, "streamJoin"))
                $root.common.Join.StreamJoin.encode(message.streamJoin, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link common.Join.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Join
         * @static
         * @param {common.IJoin} message Join message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Join.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @function decode
         * @memberof common.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Join();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.streamJoin = $root.common.Join.StreamJoin.decode(reader, reader.uint32());
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
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Join
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Join} Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Join.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Join message.
         * @function verify
         * @memberof common.Join
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Join.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.streamJoin != null && message.hasOwnProperty("streamJoin")) {
                properties.value = 1;
                {
                    var error = $root.common.Join.StreamJoin.verify(message.streamJoin);
                    if (error)
                        return "streamJoin." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Join
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Join} Join
         */
        Join.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Join)
                return object;
            var message = new $root.common.Join();
            if (object.streamJoin != null) {
                if (typeof object.streamJoin !== "object")
                    throw TypeError(".common.Join.streamJoin: object expected");
                message.streamJoin = $root.common.Join.StreamJoin.fromObject(object.streamJoin);
            }
            return message;
        };

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Join
         * @static
         * @param {common.Join} message Join
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Join.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.streamJoin != null && message.hasOwnProperty("streamJoin")) {
                object.streamJoin = $root.common.Join.StreamJoin.toObject(message.streamJoin, options);
                if (options.oneofs)
                    object.value = "streamJoin";
            }
            return object;
        };

        /**
         * Converts this Join to JSON.
         * @function toJSON
         * @memberof common.Join
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Join.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Join
         * @function getTypeUrl
         * @memberof common.Join
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Join.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Join";
        };

        Join.StreamJoin = (function() {

            /**
             * Properties of a StreamJoin.
             * @memberof common.Join
             * @interface IStreamJoin
             * @property {number|null} [operatorId] StreamJoin operatorId
             * @property {common.IFunc|null} [func] StreamJoin func
             */

            /**
             * Constructs a new StreamJoin.
             * @memberof common.Join
             * @classdesc Represents a StreamJoin.
             * @implements IStreamJoin
             * @constructor
             * @param {common.Join.IStreamJoin=} [properties] Properties to set
             */
            function StreamJoin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StreamJoin operatorId.
             * @member {number} operatorId
             * @memberof common.Join.StreamJoin
             * @instance
             */
            StreamJoin.prototype.operatorId = 0;

            /**
             * StreamJoin func.
             * @member {common.IFunc|null|undefined} func
             * @memberof common.Join.StreamJoin
             * @instance
             */
            StreamJoin.prototype.func = null;

            /**
             * Creates a new StreamJoin instance using the specified properties.
             * @function create
             * @memberof common.Join.StreamJoin
             * @static
             * @param {common.Join.IStreamJoin=} [properties] Properties to set
             * @returns {common.Join.StreamJoin} StreamJoin instance
             */
            StreamJoin.create = function create(properties) {
                return new StreamJoin(properties);
            };

            /**
             * Encodes the specified StreamJoin message. Does not implicitly {@link common.Join.StreamJoin.verify|verify} messages.
             * @function encode
             * @memberof common.Join.StreamJoin
             * @static
             * @param {common.Join.IStreamJoin} message StreamJoin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamJoin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.operatorId);
                if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                    $root.common.Func.encode(message.func, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StreamJoin message, length delimited. Does not implicitly {@link common.Join.StreamJoin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.Join.StreamJoin
             * @static
             * @param {common.Join.IStreamJoin} message StreamJoin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StreamJoin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StreamJoin message from the specified reader or buffer.
             * @function decode
             * @memberof common.Join.StreamJoin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.Join.StreamJoin} StreamJoin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamJoin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Join.StreamJoin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.operatorId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.func = $root.common.Func.decode(reader, reader.uint32());
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
             * Decodes a StreamJoin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.Join.StreamJoin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.Join.StreamJoin} StreamJoin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamJoin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StreamJoin message.
             * @function verify
             * @memberof common.Join.StreamJoin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StreamJoin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                    if (!$util.isInteger(message.operatorId))
                        return "operatorId: integer expected";
                if (message.func != null && message.hasOwnProperty("func")) {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
                return null;
            };

            /**
             * Creates a StreamJoin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.Join.StreamJoin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.Join.StreamJoin} StreamJoin
             */
            StreamJoin.fromObject = function fromObject(object) {
                if (object instanceof $root.common.Join.StreamJoin)
                    return object;
                var message = new $root.common.Join.StreamJoin();
                if (object.operatorId != null)
                    message.operatorId = object.operatorId >>> 0;
                if (object.func != null) {
                    if (typeof object.func !== "object")
                        throw TypeError(".common.Join.StreamJoin.func: object expected");
                    message.func = $root.common.Func.fromObject(object.func);
                }
                return message;
            };

            /**
             * Creates a plain object from a StreamJoin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.Join.StreamJoin
             * @static
             * @param {common.Join.StreamJoin} message StreamJoin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamJoin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.operatorId = 0;
                    object.func = null;
                }
                if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                    object.operatorId = message.operatorId;
                if (message.func != null && message.hasOwnProperty("func"))
                    object.func = $root.common.Func.toObject(message.func, options);
                return object;
            };

            /**
             * Converts this StreamJoin to JSON.
             * @function toJSON
             * @memberof common.Join.StreamJoin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamJoin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StreamJoin
             * @function getTypeUrl
             * @memberof common.Join.StreamJoin
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StreamJoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.Join.StreamJoin";
            };

            return StreamJoin;
        })();

        return Join;
    })();

    common.Mapper = (function() {

        /**
         * Properties of a Mapper.
         * @memberof common
         * @interface IMapper
         * @property {common.IFunc|null} [func] Mapper func
         */

        /**
         * Constructs a new Mapper.
         * @memberof common
         * @classdesc Represents a Mapper.
         * @implements IMapper
         * @constructor
         * @param {common.IMapper=} [properties] Properties to set
         */
        function Mapper(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mapper func.
         * @member {common.IFunc|null|undefined} func
         * @memberof common.Mapper
         * @instance
         */
        Mapper.prototype.func = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Mapper value.
         * @member {"func"|undefined} value
         * @memberof common.Mapper
         * @instance
         */
        Object.defineProperty(Mapper.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["func"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Mapper instance using the specified properties.
         * @function create
         * @memberof common.Mapper
         * @static
         * @param {common.IMapper=} [properties] Properties to set
         * @returns {common.Mapper} Mapper instance
         */
        Mapper.create = function create(properties) {
            return new Mapper(properties);
        };

        /**
         * Encodes the specified Mapper message. Does not implicitly {@link common.Mapper.verify|verify} messages.
         * @function encode
         * @memberof common.Mapper
         * @static
         * @param {common.IMapper} message Mapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                $root.common.Func.encode(message.func, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Mapper message, length delimited. Does not implicitly {@link common.Mapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Mapper
         * @static
         * @param {common.IMapper} message Mapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mapper message from the specified reader or buffer.
         * @function decode
         * @memberof common.Mapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Mapper} Mapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Mapper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a Mapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Mapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Mapper} Mapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mapper message.
         * @function verify
         * @memberof common.Mapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                properties.value = 1;
                {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Mapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Mapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Mapper} Mapper
         */
        Mapper.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Mapper)
                return object;
            var message = new $root.common.Mapper();
            if (object.func != null) {
                if (typeof object.func !== "object")
                    throw TypeError(".common.Mapper.func: object expected");
                message.func = $root.common.Func.fromObject(object.func);
            }
            return message;
        };

        /**
         * Creates a plain object from a Mapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Mapper
         * @static
         * @param {common.Mapper} message Mapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                object.func = $root.common.Func.toObject(message.func, options);
                if (options.oneofs)
                    object.value = "func";
            }
            return object;
        };

        /**
         * Converts this Mapper to JSON.
         * @function toJSON
         * @memberof common.Mapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mapper.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Mapper
         * @function getTypeUrl
         * @memberof common.Mapper
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Mapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Mapper";
        };

        return Mapper;
    })();

    common.Func = (function() {

        /**
         * Properties of a Func.
         * @memberof common
         * @interface IFunc
         * @property {string|null} ["function"] Func function
         */

        /**
         * Constructs a new Func.
         * @memberof common
         * @classdesc Represents a Func.
         * @implements IFunc
         * @constructor
         * @param {common.IFunc=} [properties] Properties to set
         */
        function Func(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Func function.
         * @member {string} function
         * @memberof common.Func
         * @instance
         */
        Func.prototype["function"] = "";

        /**
         * Creates a new Func instance using the specified properties.
         * @function create
         * @memberof common.Func
         * @static
         * @param {common.IFunc=} [properties] Properties to set
         * @returns {common.Func} Func instance
         */
        Func.create = function create(properties) {
            return new Func(properties);
        };

        /**
         * Encodes the specified Func message. Does not implicitly {@link common.Func.verify|verify} messages.
         * @function encode
         * @memberof common.Func
         * @static
         * @param {common.IFunc} message Func message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Func.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message["function"] != null && Object.hasOwnProperty.call(message, "function"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message["function"]);
            return writer;
        };

        /**
         * Encodes the specified Func message, length delimited. Does not implicitly {@link common.Func.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Func
         * @static
         * @param {common.IFunc} message Func message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Func.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Func message from the specified reader or buffer.
         * @function decode
         * @memberof common.Func
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Func} Func
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Func.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Func();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message["function"] = reader.string();
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
         * Decodes a Func message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Func
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Func} Func
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Func.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Func message.
         * @function verify
         * @memberof common.Func
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Func.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message["function"] != null && message.hasOwnProperty("function"))
                if (!$util.isString(message["function"]))
                    return "function: string expected";
            return null;
        };

        /**
         * Creates a Func message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Func
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Func} Func
         */
        Func.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Func)
                return object;
            var message = new $root.common.Func();
            if (object["function"] != null)
                message["function"] = String(object["function"]);
            return message;
        };

        /**
         * Creates a plain object from a Func message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Func
         * @static
         * @param {common.Func} message Func
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Func.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object["function"] = "";
            if (message["function"] != null && message.hasOwnProperty("function"))
                object["function"] = message["function"];
            return object;
        };

        /**
         * Converts this Func to JSON.
         * @function toJSON
         * @memberof common.Func
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Func.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Func
         * @function getTypeUrl
         * @memberof common.Func
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Func.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Func";
        };

        return Func;
    })();

    common.Filter = (function() {

        /**
         * Properties of a Filter.
         * @memberof common
         * @interface IFilter
         * @property {common.IFunc|null} [func] Filter func
         */

        /**
         * Constructs a new Filter.
         * @memberof common
         * @classdesc Represents a Filter.
         * @implements IFilter
         * @constructor
         * @param {common.IFilter=} [properties] Properties to set
         */
        function Filter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Filter func.
         * @member {common.IFunc|null|undefined} func
         * @memberof common.Filter
         * @instance
         */
        Filter.prototype.func = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Filter value.
         * @member {"func"|undefined} value
         * @memberof common.Filter
         * @instance
         */
        Object.defineProperty(Filter.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["func"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Filter instance using the specified properties.
         * @function create
         * @memberof common.Filter
         * @static
         * @param {common.IFilter=} [properties] Properties to set
         * @returns {common.Filter} Filter instance
         */
        Filter.create = function create(properties) {
            return new Filter(properties);
        };

        /**
         * Encodes the specified Filter message. Does not implicitly {@link common.Filter.verify|verify} messages.
         * @function encode
         * @memberof common.Filter
         * @static
         * @param {common.IFilter} message Filter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Filter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                $root.common.Func.encode(message.func, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Filter message, length delimited. Does not implicitly {@link common.Filter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Filter
         * @static
         * @param {common.IFilter} message Filter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Filter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Filter message from the specified reader or buffer.
         * @function decode
         * @memberof common.Filter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Filter} Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Filter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Filter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a Filter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Filter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Filter} Filter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Filter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Filter message.
         * @function verify
         * @memberof common.Filter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Filter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                properties.value = 1;
                {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Filter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Filter} Filter
         */
        Filter.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Filter)
                return object;
            var message = new $root.common.Filter();
            if (object.func != null) {
                if (typeof object.func !== "object")
                    throw TypeError(".common.Filter.func: object expected");
                message.func = $root.common.Func.fromObject(object.func);
            }
            return message;
        };

        /**
         * Creates a plain object from a Filter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Filter
         * @static
         * @param {common.Filter} message Filter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Filter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                object.func = $root.common.Func.toObject(message.func, options);
                if (options.oneofs)
                    object.value = "func";
            }
            return object;
        };

        /**
         * Converts this Filter to JSON.
         * @function toJSON
         * @memberof common.Filter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Filter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Filter
         * @function getTypeUrl
         * @memberof common.Filter
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Filter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Filter";
        };

        return Filter;
    })();

    common.KeyBy = (function() {

        /**
         * Properties of a KeyBy.
         * @memberof common
         * @interface IKeyBy
         * @property {common.IFunc|null} [func] KeyBy func
         */

        /**
         * Constructs a new KeyBy.
         * @memberof common
         * @classdesc Represents a KeyBy.
         * @implements IKeyBy
         * @constructor
         * @param {common.IKeyBy=} [properties] Properties to set
         */
        function KeyBy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyBy func.
         * @member {common.IFunc|null|undefined} func
         * @memberof common.KeyBy
         * @instance
         */
        KeyBy.prototype.func = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * KeyBy value.
         * @member {"func"|undefined} value
         * @memberof common.KeyBy
         * @instance
         */
        Object.defineProperty(KeyBy.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["func"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KeyBy instance using the specified properties.
         * @function create
         * @memberof common.KeyBy
         * @static
         * @param {common.IKeyBy=} [properties] Properties to set
         * @returns {common.KeyBy} KeyBy instance
         */
        KeyBy.create = function create(properties) {
            return new KeyBy(properties);
        };

        /**
         * Encodes the specified KeyBy message. Does not implicitly {@link common.KeyBy.verify|verify} messages.
         * @function encode
         * @memberof common.KeyBy
         * @static
         * @param {common.IKeyBy} message KeyBy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyBy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                $root.common.Func.encode(message.func, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KeyBy message, length delimited. Does not implicitly {@link common.KeyBy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.KeyBy
         * @static
         * @param {common.IKeyBy} message KeyBy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyBy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyBy message from the specified reader or buffer.
         * @function decode
         * @memberof common.KeyBy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.KeyBy} KeyBy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyBy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.KeyBy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a KeyBy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.KeyBy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.KeyBy} KeyBy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyBy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyBy message.
         * @function verify
         * @memberof common.KeyBy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyBy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                properties.value = 1;
                {
                    var error = $root.common.Func.verify(message.func);
                    if (error)
                        return "func." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KeyBy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.KeyBy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.KeyBy} KeyBy
         */
        KeyBy.fromObject = function fromObject(object) {
            if (object instanceof $root.common.KeyBy)
                return object;
            var message = new $root.common.KeyBy();
            if (object.func != null) {
                if (typeof object.func !== "object")
                    throw TypeError(".common.KeyBy.func: object expected");
                message.func = $root.common.Func.fromObject(object.func);
            }
            return message;
        };

        /**
         * Creates a plain object from a KeyBy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.KeyBy
         * @static
         * @param {common.KeyBy} message KeyBy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyBy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.func != null && message.hasOwnProperty("func")) {
                object.func = $root.common.Func.toObject(message.func, options);
                if (options.oneofs)
                    object.value = "func";
            }
            return object;
        };

        /**
         * Converts this KeyBy to JSON.
         * @function toJSON
         * @memberof common.KeyBy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyBy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyBy
         * @function getTypeUrl
         * @memberof common.KeyBy
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyBy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.KeyBy";
        };

        return KeyBy;
    })();

    common.Sink = (function() {

        /**
         * Properties of a Sink.
         * @memberof common
         * @interface ISink
         * @property {common.IKafkaDesc|null} [kafka] Sink kafka
         * @property {common.IMysqlDesc|null} [mysql] Sink mysql
         * @property {common.IRedisDesc|null} [redis] Sink redis
         */

        /**
         * Constructs a new Sink.
         * @memberof common
         * @classdesc Represents a Sink.
         * @implements ISink
         * @constructor
         * @param {common.ISink=} [properties] Properties to set
         */
        function Sink(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sink kafka.
         * @member {common.IKafkaDesc|null|undefined} kafka
         * @memberof common.Sink
         * @instance
         */
        Sink.prototype.kafka = null;

        /**
         * Sink mysql.
         * @member {common.IMysqlDesc|null|undefined} mysql
         * @memberof common.Sink
         * @instance
         */
        Sink.prototype.mysql = null;

        /**
         * Sink redis.
         * @member {common.IRedisDesc|null|undefined} redis
         * @memberof common.Sink
         * @instance
         */
        Sink.prototype.redis = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Sink desc.
         * @member {"kafka"|"mysql"|"redis"|undefined} desc
         * @memberof common.Sink
         * @instance
         */
        Object.defineProperty(Sink.prototype, "desc", {
            get: $util.oneOfGetter($oneOfFields = ["kafka", "mysql", "redis"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Sink instance using the specified properties.
         * @function create
         * @memberof common.Sink
         * @static
         * @param {common.ISink=} [properties] Properties to set
         * @returns {common.Sink} Sink instance
         */
        Sink.create = function create(properties) {
            return new Sink(properties);
        };

        /**
         * Encodes the specified Sink message. Does not implicitly {@link common.Sink.verify|verify} messages.
         * @function encode
         * @memberof common.Sink
         * @static
         * @param {common.ISink} message Sink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sink.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kafka != null && Object.hasOwnProperty.call(message, "kafka"))
                $root.common.KafkaDesc.encode(message.kafka, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mysql != null && Object.hasOwnProperty.call(message, "mysql"))
                $root.common.MysqlDesc.encode(message.mysql, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.redis != null && Object.hasOwnProperty.call(message, "redis"))
                $root.common.RedisDesc.encode(message.redis, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Sink message, length delimited. Does not implicitly {@link common.Sink.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Sink
         * @static
         * @param {common.ISink} message Sink message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sink.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sink message from the specified reader or buffer.
         * @function decode
         * @memberof common.Sink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Sink} Sink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sink.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Sink();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.kafka = $root.common.KafkaDesc.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.mysql = $root.common.MysqlDesc.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.redis = $root.common.RedisDesc.decode(reader, reader.uint32());
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
         * Decodes a Sink message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Sink
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Sink} Sink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sink.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sink message.
         * @function verify
         * @memberof common.Sink
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sink.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.kafka != null && message.hasOwnProperty("kafka")) {
                properties.desc = 1;
                {
                    var error = $root.common.KafkaDesc.verify(message.kafka);
                    if (error)
                        return "kafka." + error;
                }
            }
            if (message.mysql != null && message.hasOwnProperty("mysql")) {
                if (properties.desc === 1)
                    return "desc: multiple values";
                properties.desc = 1;
                {
                    var error = $root.common.MysqlDesc.verify(message.mysql);
                    if (error)
                        return "mysql." + error;
                }
            }
            if (message.redis != null && message.hasOwnProperty("redis")) {
                if (properties.desc === 1)
                    return "desc: multiple values";
                properties.desc = 1;
                {
                    var error = $root.common.RedisDesc.verify(message.redis);
                    if (error)
                        return "redis." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Sink message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Sink
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Sink} Sink
         */
        Sink.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Sink)
                return object;
            var message = new $root.common.Sink();
            if (object.kafka != null) {
                if (typeof object.kafka !== "object")
                    throw TypeError(".common.Sink.kafka: object expected");
                message.kafka = $root.common.KafkaDesc.fromObject(object.kafka);
            }
            if (object.mysql != null) {
                if (typeof object.mysql !== "object")
                    throw TypeError(".common.Sink.mysql: object expected");
                message.mysql = $root.common.MysqlDesc.fromObject(object.mysql);
            }
            if (object.redis != null) {
                if (typeof object.redis !== "object")
                    throw TypeError(".common.Sink.redis: object expected");
                message.redis = $root.common.RedisDesc.fromObject(object.redis);
            }
            return message;
        };

        /**
         * Creates a plain object from a Sink message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Sink
         * @static
         * @param {common.Sink} message Sink
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sink.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.kafka != null && message.hasOwnProperty("kafka")) {
                object.kafka = $root.common.KafkaDesc.toObject(message.kafka, options);
                if (options.oneofs)
                    object.desc = "kafka";
            }
            if (message.mysql != null && message.hasOwnProperty("mysql")) {
                object.mysql = $root.common.MysqlDesc.toObject(message.mysql, options);
                if (options.oneofs)
                    object.desc = "mysql";
            }
            if (message.redis != null && message.hasOwnProperty("redis")) {
                object.redis = $root.common.RedisDesc.toObject(message.redis, options);
                if (options.oneofs)
                    object.desc = "redis";
            }
            return object;
        };

        /**
         * Converts this Sink to JSON.
         * @function toJSON
         * @memberof common.Sink
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sink.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sink
         * @function getTypeUrl
         * @memberof common.Sink
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sink.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Sink";
        };

        return Sink;
    })();

    common.ConstOp = (function() {

        /**
         * Properties of a ConstOp.
         * @memberof common
         * @interface IConstOp
         * @property {Uint8Array|null} [value] ConstOp value
         * @property {number|null} [operatorId] ConstOp operatorId
         */

        /**
         * Constructs a new ConstOp.
         * @memberof common
         * @classdesc Constant operator
         * @implements IConstOp
         * @constructor
         * @param {common.IConstOp=} [properties] Properties to set
         */
        function ConstOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConstOp value.
         * @member {Uint8Array} value
         * @memberof common.ConstOp
         * @instance
         */
        ConstOp.prototype.value = $util.newBuffer([]);

        /**
         * ConstOp operatorId.
         * @member {number} operatorId
         * @memberof common.ConstOp
         * @instance
         */
        ConstOp.prototype.operatorId = 0;

        /**
         * Creates a new ConstOp instance using the specified properties.
         * @function create
         * @memberof common.ConstOp
         * @static
         * @param {common.IConstOp=} [properties] Properties to set
         * @returns {common.ConstOp} ConstOp instance
         */
        ConstOp.create = function create(properties) {
            return new ConstOp(properties);
        };

        /**
         * Encodes the specified ConstOp message. Does not implicitly {@link common.ConstOp.verify|verify} messages.
         * @function encode
         * @memberof common.ConstOp
         * @static
         * @param {common.IConstOp} message ConstOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConstOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
            if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.operatorId);
            return writer;
        };

        /**
         * Encodes the specified ConstOp message, length delimited. Does not implicitly {@link common.ConstOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ConstOp
         * @static
         * @param {common.IConstOp} message ConstOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConstOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConstOp message from the specified reader or buffer.
         * @function decode
         * @memberof common.ConstOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ConstOp} ConstOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConstOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ConstOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.bytes();
                        break;
                    }
                case 2: {
                        message.operatorId = reader.uint32();
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
         * Decodes a ConstOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ConstOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ConstOp} ConstOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConstOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConstOp message.
         * @function verify
         * @memberof common.ConstOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConstOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                if (!$util.isInteger(message.operatorId))
                    return "operatorId: integer expected";
            return null;
        };

        /**
         * Creates a ConstOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ConstOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ConstOp} ConstOp
         */
        ConstOp.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ConstOp)
                return object;
            var message = new $root.common.ConstOp();
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            if (object.operatorId != null)
                message.operatorId = object.operatorId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ConstOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ConstOp
         * @static
         * @param {common.ConstOp} message ConstOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConstOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.operatorId = 0;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                object.operatorId = message.operatorId;
            return object;
        };

        /**
         * Converts this ConstOp to JSON.
         * @function toJSON
         * @memberof common.ConstOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConstOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConstOp
         * @function getTypeUrl
         * @memberof common.ConstOp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConstOp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ConstOp";
        };

        return ConstOp;
    })();

    common.Source = (function() {

        /**
         * Properties of a Source.
         * @memberof common
         * @interface ISource
         * @property {common.IKafkaDesc|null} [kafka] Source kafka
         */

        /**
         * Constructs a new Source.
         * @memberof common
         * @classdesc Represents a Source.
         * @implements ISource
         * @constructor
         * @param {common.ISource=} [properties] Properties to set
         */
        function Source(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Source kafka.
         * @member {common.IKafkaDesc|null|undefined} kafka
         * @memberof common.Source
         * @instance
         */
        Source.prototype.kafka = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Source desc.
         * @member {"kafka"|undefined} desc
         * @memberof common.Source
         * @instance
         */
        Object.defineProperty(Source.prototype, "desc", {
            get: $util.oneOfGetter($oneOfFields = ["kafka"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Source instance using the specified properties.
         * @function create
         * @memberof common.Source
         * @static
         * @param {common.ISource=} [properties] Properties to set
         * @returns {common.Source} Source instance
         */
        Source.create = function create(properties) {
            return new Source(properties);
        };

        /**
         * Encodes the specified Source message. Does not implicitly {@link common.Source.verify|verify} messages.
         * @function encode
         * @memberof common.Source
         * @static
         * @param {common.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kafka != null && Object.hasOwnProperty.call(message, "kafka"))
                $root.common.KafkaDesc.encode(message.kafka, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link common.Source.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Source
         * @static
         * @param {common.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Source message from the specified reader or buffer.
         * @function decode
         * @memberof common.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Source();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.kafka = $root.common.KafkaDesc.decode(reader, reader.uint32());
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
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Source message.
         * @function verify
         * @memberof common.Source
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Source.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.kafka != null && message.hasOwnProperty("kafka")) {
                properties.desc = 1;
                {
                    var error = $root.common.KafkaDesc.verify(message.kafka);
                    if (error)
                        return "kafka." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Source
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Source} Source
         */
        Source.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Source)
                return object;
            var message = new $root.common.Source();
            if (object.kafka != null) {
                if (typeof object.kafka !== "object")
                    throw TypeError(".common.Source.kafka: object expected");
                message.kafka = $root.common.KafkaDesc.fromObject(object.kafka);
            }
            return message;
        };

        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Source
         * @static
         * @param {common.Source} message Source
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Source.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.kafka != null && message.hasOwnProperty("kafka")) {
                object.kafka = $root.common.KafkaDesc.toObject(message.kafka, options);
                if (options.oneofs)
                    object.desc = "kafka";
            }
            return object;
        };

        /**
         * Converts this Source to JSON.
         * @function toJSON
         * @memberof common.Source
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Source.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Source
         * @function getTypeUrl
         * @memberof common.Source
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Source.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Source";
        };

        return Source;
    })();

    common.KafkaDesc = (function() {

        /**
         * Properties of a KafkaDesc.
         * @memberof common
         * @interface IKafkaDesc
         * @property {Array.<string>|null} [brokers] KafkaDesc brokers
         * @property {string|null} [topic] KafkaDesc topic
         * @property {common.KafkaDesc.IKafkaOptions|null} [opts] KafkaDesc opts
         * @property {common.DataTypeEnum|null} [dataType] KafkaDesc dataType
         */

        /**
         * Constructs a new KafkaDesc.
         * @memberof common
         * @classdesc Represents a KafkaDesc.
         * @implements IKafkaDesc
         * @constructor
         * @param {common.IKafkaDesc=} [properties] Properties to set
         */
        function KafkaDesc(properties) {
            this.brokers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KafkaDesc brokers.
         * @member {Array.<string>} brokers
         * @memberof common.KafkaDesc
         * @instance
         */
        KafkaDesc.prototype.brokers = $util.emptyArray;

        /**
         * KafkaDesc topic.
         * @member {string} topic
         * @memberof common.KafkaDesc
         * @instance
         */
        KafkaDesc.prototype.topic = "";

        /**
         * KafkaDesc opts.
         * @member {common.KafkaDesc.IKafkaOptions|null|undefined} opts
         * @memberof common.KafkaDesc
         * @instance
         */
        KafkaDesc.prototype.opts = null;

        /**
         * KafkaDesc dataType.
         * @member {common.DataTypeEnum} dataType
         * @memberof common.KafkaDesc
         * @instance
         */
        KafkaDesc.prototype.dataType = 0;

        /**
         * Creates a new KafkaDesc instance using the specified properties.
         * @function create
         * @memberof common.KafkaDesc
         * @static
         * @param {common.IKafkaDesc=} [properties] Properties to set
         * @returns {common.KafkaDesc} KafkaDesc instance
         */
        KafkaDesc.create = function create(properties) {
            return new KafkaDesc(properties);
        };

        /**
         * Encodes the specified KafkaDesc message. Does not implicitly {@link common.KafkaDesc.verify|verify} messages.
         * @function encode
         * @memberof common.KafkaDesc
         * @static
         * @param {common.IKafkaDesc} message KafkaDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KafkaDesc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.brokers != null && message.brokers.length)
                for (var i = 0; i < message.brokers.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.brokers[i]);
            if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
            if (message.opts != null && Object.hasOwnProperty.call(message, "opts"))
                $root.common.KafkaDesc.KafkaOptions.encode(message.opts, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dataType);
            return writer;
        };

        /**
         * Encodes the specified KafkaDesc message, length delimited. Does not implicitly {@link common.KafkaDesc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.KafkaDesc
         * @static
         * @param {common.IKafkaDesc} message KafkaDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KafkaDesc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KafkaDesc message from the specified reader or buffer.
         * @function decode
         * @memberof common.KafkaDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.KafkaDesc} KafkaDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KafkaDesc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.KafkaDesc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.brokers && message.brokers.length))
                            message.brokers = [];
                        message.brokers.push(reader.string());
                        break;
                    }
                case 2: {
                        message.topic = reader.string();
                        break;
                    }
                case 3: {
                        message.opts = $root.common.KafkaDesc.KafkaOptions.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.dataType = reader.int32();
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
         * Decodes a KafkaDesc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.KafkaDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.KafkaDesc} KafkaDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KafkaDesc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KafkaDesc message.
         * @function verify
         * @memberof common.KafkaDesc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KafkaDesc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.brokers != null && message.hasOwnProperty("brokers")) {
                if (!Array.isArray(message.brokers))
                    return "brokers: array expected";
                for (var i = 0; i < message.brokers.length; ++i)
                    if (!$util.isString(message.brokers[i]))
                        return "brokers: string[] expected";
            }
            if (message.topic != null && message.hasOwnProperty("topic"))
                if (!$util.isString(message.topic))
                    return "topic: string expected";
            if (message.opts != null && message.hasOwnProperty("opts")) {
                var error = $root.common.KafkaDesc.KafkaOptions.verify(message.opts);
                if (error)
                    return "opts." + error;
            }
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
            return null;
        };

        /**
         * Creates a KafkaDesc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.KafkaDesc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.KafkaDesc} KafkaDesc
         */
        KafkaDesc.fromObject = function fromObject(object) {
            if (object instanceof $root.common.KafkaDesc)
                return object;
            var message = new $root.common.KafkaDesc();
            if (object.brokers) {
                if (!Array.isArray(object.brokers))
                    throw TypeError(".common.KafkaDesc.brokers: array expected");
                message.brokers = [];
                for (var i = 0; i < object.brokers.length; ++i)
                    message.brokers[i] = String(object.brokers[i]);
            }
            if (object.topic != null)
                message.topic = String(object.topic);
            if (object.opts != null) {
                if (typeof object.opts !== "object")
                    throw TypeError(".common.KafkaDesc.opts: object expected");
                message.opts = $root.common.KafkaDesc.KafkaOptions.fromObject(object.opts);
            }
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
            return message;
        };

        /**
         * Creates a plain object from a KafkaDesc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.KafkaDesc
         * @static
         * @param {common.KafkaDesc} message KafkaDesc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KafkaDesc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.brokers = [];
            if (options.defaults) {
                object.topic = "";
                object.opts = null;
                object.dataType = options.enums === String ? "DATA_TYPE_ENUM_UNSPECIFIED" : 0;
            }
            if (message.brokers && message.brokers.length) {
                object.brokers = [];
                for (var j = 0; j < message.brokers.length; ++j)
                    object.brokers[j] = message.brokers[j];
            }
            if (message.topic != null && message.hasOwnProperty("topic"))
                object.topic = message.topic;
            if (message.opts != null && message.hasOwnProperty("opts"))
                object.opts = $root.common.KafkaDesc.KafkaOptions.toObject(message.opts, options);
            if (message.dataType != null && message.hasOwnProperty("dataType"))
                object.dataType = options.enums === String ? $root.common.DataTypeEnum[message.dataType] === undefined ? message.dataType : $root.common.DataTypeEnum[message.dataType] : message.dataType;
            return object;
        };

        /**
         * Converts this KafkaDesc to JSON.
         * @function toJSON
         * @memberof common.KafkaDesc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KafkaDesc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KafkaDesc
         * @function getTypeUrl
         * @memberof common.KafkaDesc
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KafkaDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.KafkaDesc";
        };

        KafkaDesc.KafkaOptions = (function() {

            /**
             * Properties of a KafkaOptions.
             * @memberof common.KafkaDesc
             * @interface IKafkaOptions
             * @property {string|null} [group] KafkaOptions group
             * @property {number|null} [partition] KafkaOptions partition
             */

            /**
             * Constructs a new KafkaOptions.
             * @memberof common.KafkaDesc
             * @classdesc Represents a KafkaOptions.
             * @implements IKafkaOptions
             * @constructor
             * @param {common.KafkaDesc.IKafkaOptions=} [properties] Properties to set
             */
            function KafkaOptions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KafkaOptions group.
             * @member {string|null|undefined} group
             * @memberof common.KafkaDesc.KafkaOptions
             * @instance
             */
            KafkaOptions.prototype.group = null;

            /**
             * KafkaOptions partition.
             * @member {number|null|undefined} partition
             * @memberof common.KafkaDesc.KafkaOptions
             * @instance
             */
            KafkaOptions.prototype.partition = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * KafkaOptions opt.
             * @member {"group"|"partition"|undefined} opt
             * @memberof common.KafkaDesc.KafkaOptions
             * @instance
             */
            Object.defineProperty(KafkaOptions.prototype, "opt", {
                get: $util.oneOfGetter($oneOfFields = ["group", "partition"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new KafkaOptions instance using the specified properties.
             * @function create
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {common.KafkaDesc.IKafkaOptions=} [properties] Properties to set
             * @returns {common.KafkaDesc.KafkaOptions} KafkaOptions instance
             */
            KafkaOptions.create = function create(properties) {
                return new KafkaOptions(properties);
            };

            /**
             * Encodes the specified KafkaOptions message. Does not implicitly {@link common.KafkaDesc.KafkaOptions.verify|verify} messages.
             * @function encode
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {common.KafkaDesc.IKafkaOptions} message KafkaOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KafkaOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
                if (message.partition != null && Object.hasOwnProperty.call(message, "partition"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.partition);
                return writer;
            };

            /**
             * Encodes the specified KafkaOptions message, length delimited. Does not implicitly {@link common.KafkaDesc.KafkaOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {common.KafkaDesc.IKafkaOptions} message KafkaOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KafkaOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a KafkaOptions message from the specified reader or buffer.
             * @function decode
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.KafkaDesc.KafkaOptions} KafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KafkaOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.KafkaDesc.KafkaOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.group = reader.string();
                            break;
                        }
                    case 2: {
                            message.partition = reader.uint32();
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
             * Decodes a KafkaOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.KafkaDesc.KafkaOptions} KafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KafkaOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KafkaOptions message.
             * @function verify
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KafkaOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.group != null && message.hasOwnProperty("group")) {
                    properties.opt = 1;
                    if (!$util.isString(message.group))
                        return "group: string expected";
                }
                if (message.partition != null && message.hasOwnProperty("partition")) {
                    if (properties.opt === 1)
                        return "opt: multiple values";
                    properties.opt = 1;
                    if (!$util.isInteger(message.partition))
                        return "partition: integer expected";
                }
                return null;
            };

            /**
             * Creates a KafkaOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.KafkaDesc.KafkaOptions} KafkaOptions
             */
            KafkaOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.common.KafkaDesc.KafkaOptions)
                    return object;
                var message = new $root.common.KafkaDesc.KafkaOptions();
                if (object.group != null)
                    message.group = String(object.group);
                if (object.partition != null)
                    message.partition = object.partition >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a KafkaOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {common.KafkaDesc.KafkaOptions} message KafkaOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KafkaOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.group != null && message.hasOwnProperty("group")) {
                    object.group = message.group;
                    if (options.oneofs)
                        object.opt = "group";
                }
                if (message.partition != null && message.hasOwnProperty("partition")) {
                    object.partition = message.partition;
                    if (options.oneofs)
                        object.opt = "partition";
                }
                return object;
            };

            /**
             * Converts this KafkaOptions to JSON.
             * @function toJSON
             * @memberof common.KafkaDesc.KafkaOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KafkaOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for KafkaOptions
             * @function getTypeUrl
             * @memberof common.KafkaDesc.KafkaOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            KafkaOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.KafkaDesc.KafkaOptions";
            };

            return KafkaOptions;
        })();

        return KafkaDesc;
    })();

    common.MysqlDesc = (function() {

        /**
         * Properties of a MysqlDesc.
         * @memberof common
         * @interface IMysqlDesc
         * @property {common.MysqlDesc.IConnectionOpts|null} [connectionOpts] MysqlDesc connectionOpts
         * @property {common.MysqlDesc.IStatement|null} [statement] MysqlDesc statement
         */

        /**
         * Constructs a new MysqlDesc.
         * @memberof common
         * @classdesc Represents a MysqlDesc.
         * @implements IMysqlDesc
         * @constructor
         * @param {common.IMysqlDesc=} [properties] Properties to set
         */
        function MysqlDesc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MysqlDesc connectionOpts.
         * @member {common.MysqlDesc.IConnectionOpts|null|undefined} connectionOpts
         * @memberof common.MysqlDesc
         * @instance
         */
        MysqlDesc.prototype.connectionOpts = null;

        /**
         * MysqlDesc statement.
         * @member {common.MysqlDesc.IStatement|null|undefined} statement
         * @memberof common.MysqlDesc
         * @instance
         */
        MysqlDesc.prototype.statement = null;

        /**
         * Creates a new MysqlDesc instance using the specified properties.
         * @function create
         * @memberof common.MysqlDesc
         * @static
         * @param {common.IMysqlDesc=} [properties] Properties to set
         * @returns {common.MysqlDesc} MysqlDesc instance
         */
        MysqlDesc.create = function create(properties) {
            return new MysqlDesc(properties);
        };

        /**
         * Encodes the specified MysqlDesc message. Does not implicitly {@link common.MysqlDesc.verify|verify} messages.
         * @function encode
         * @memberof common.MysqlDesc
         * @static
         * @param {common.IMysqlDesc} message MysqlDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MysqlDesc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionOpts != null && Object.hasOwnProperty.call(message, "connectionOpts"))
                $root.common.MysqlDesc.ConnectionOpts.encode(message.connectionOpts, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.statement != null && Object.hasOwnProperty.call(message, "statement"))
                $root.common.MysqlDesc.Statement.encode(message.statement, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MysqlDesc message, length delimited. Does not implicitly {@link common.MysqlDesc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.MysqlDesc
         * @static
         * @param {common.IMysqlDesc} message MysqlDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MysqlDesc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MysqlDesc message from the specified reader or buffer.
         * @function decode
         * @memberof common.MysqlDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.MysqlDesc} MysqlDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MysqlDesc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MysqlDesc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.connectionOpts = $root.common.MysqlDesc.ConnectionOpts.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.statement = $root.common.MysqlDesc.Statement.decode(reader, reader.uint32());
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
         * Decodes a MysqlDesc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.MysqlDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.MysqlDesc} MysqlDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MysqlDesc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MysqlDesc message.
         * @function verify
         * @memberof common.MysqlDesc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MysqlDesc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionOpts != null && message.hasOwnProperty("connectionOpts")) {
                var error = $root.common.MysqlDesc.ConnectionOpts.verify(message.connectionOpts);
                if (error)
                    return "connectionOpts." + error;
            }
            if (message.statement != null && message.hasOwnProperty("statement")) {
                var error = $root.common.MysqlDesc.Statement.verify(message.statement);
                if (error)
                    return "statement." + error;
            }
            return null;
        };

        /**
         * Creates a MysqlDesc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.MysqlDesc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.MysqlDesc} MysqlDesc
         */
        MysqlDesc.fromObject = function fromObject(object) {
            if (object instanceof $root.common.MysqlDesc)
                return object;
            var message = new $root.common.MysqlDesc();
            if (object.connectionOpts != null) {
                if (typeof object.connectionOpts !== "object")
                    throw TypeError(".common.MysqlDesc.connectionOpts: object expected");
                message.connectionOpts = $root.common.MysqlDesc.ConnectionOpts.fromObject(object.connectionOpts);
            }
            if (object.statement != null) {
                if (typeof object.statement !== "object")
                    throw TypeError(".common.MysqlDesc.statement: object expected");
                message.statement = $root.common.MysqlDesc.Statement.fromObject(object.statement);
            }
            return message;
        };

        /**
         * Creates a plain object from a MysqlDesc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.MysqlDesc
         * @static
         * @param {common.MysqlDesc} message MysqlDesc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MysqlDesc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.connectionOpts = null;
                object.statement = null;
            }
            if (message.connectionOpts != null && message.hasOwnProperty("connectionOpts"))
                object.connectionOpts = $root.common.MysqlDesc.ConnectionOpts.toObject(message.connectionOpts, options);
            if (message.statement != null && message.hasOwnProperty("statement"))
                object.statement = $root.common.MysqlDesc.Statement.toObject(message.statement, options);
            return object;
        };

        /**
         * Converts this MysqlDesc to JSON.
         * @function toJSON
         * @memberof common.MysqlDesc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MysqlDesc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MysqlDesc
         * @function getTypeUrl
         * @memberof common.MysqlDesc
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MysqlDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.MysqlDesc";
        };

        MysqlDesc.ConnectionOpts = (function() {

            /**
             * Properties of a ConnectionOpts.
             * @memberof common.MysqlDesc
             * @interface IConnectionOpts
             * @property {string|null} [host] ConnectionOpts host
             * @property {string|null} [username] ConnectionOpts username
             * @property {string|null} [password] ConnectionOpts password
             * @property {string|null} [database] ConnectionOpts database
             */

            /**
             * Constructs a new ConnectionOpts.
             * @memberof common.MysqlDesc
             * @classdesc Represents a ConnectionOpts.
             * @implements IConnectionOpts
             * @constructor
             * @param {common.MysqlDesc.IConnectionOpts=} [properties] Properties to set
             */
            function ConnectionOpts(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectionOpts host.
             * @member {string} host
             * @memberof common.MysqlDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.host = "";

            /**
             * ConnectionOpts username.
             * @member {string} username
             * @memberof common.MysqlDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.username = "";

            /**
             * ConnectionOpts password.
             * @member {string} password
             * @memberof common.MysqlDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.password = "";

            /**
             * ConnectionOpts database.
             * @member {string} database
             * @memberof common.MysqlDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.database = "";

            /**
             * Creates a new ConnectionOpts instance using the specified properties.
             * @function create
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {common.MysqlDesc.IConnectionOpts=} [properties] Properties to set
             * @returns {common.MysqlDesc.ConnectionOpts} ConnectionOpts instance
             */
            ConnectionOpts.create = function create(properties) {
                return new ConnectionOpts(properties);
            };

            /**
             * Encodes the specified ConnectionOpts message. Does not implicitly {@link common.MysqlDesc.ConnectionOpts.verify|verify} messages.
             * @function encode
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {common.MysqlDesc.IConnectionOpts} message ConnectionOpts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionOpts.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                if (message.database != null && Object.hasOwnProperty.call(message, "database"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.database);
                return writer;
            };

            /**
             * Encodes the specified ConnectionOpts message, length delimited. Does not implicitly {@link common.MysqlDesc.ConnectionOpts.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {common.MysqlDesc.IConnectionOpts} message ConnectionOpts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionOpts.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectionOpts message from the specified reader or buffer.
             * @function decode
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.MysqlDesc.ConnectionOpts} ConnectionOpts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionOpts.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MysqlDesc.ConnectionOpts();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.host = reader.string();
                            break;
                        }
                    case 2: {
                            message.username = reader.string();
                            break;
                        }
                    case 3: {
                            message.password = reader.string();
                            break;
                        }
                    case 4: {
                            message.database = reader.string();
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
             * Decodes a ConnectionOpts message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.MysqlDesc.ConnectionOpts} ConnectionOpts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionOpts.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectionOpts message.
             * @function verify
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectionOpts.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.host != null && message.hasOwnProperty("host"))
                    if (!$util.isString(message.host))
                        return "host: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.database != null && message.hasOwnProperty("database"))
                    if (!$util.isString(message.database))
                        return "database: string expected";
                return null;
            };

            /**
             * Creates a ConnectionOpts message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.MysqlDesc.ConnectionOpts} ConnectionOpts
             */
            ConnectionOpts.fromObject = function fromObject(object) {
                if (object instanceof $root.common.MysqlDesc.ConnectionOpts)
                    return object;
                var message = new $root.common.MysqlDesc.ConnectionOpts();
                if (object.host != null)
                    message.host = String(object.host);
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.database != null)
                    message.database = String(object.database);
                return message;
            };

            /**
             * Creates a plain object from a ConnectionOpts message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {common.MysqlDesc.ConnectionOpts} message ConnectionOpts
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectionOpts.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.host = "";
                    object.username = "";
                    object.password = "";
                    object.database = "";
                }
                if (message.host != null && message.hasOwnProperty("host"))
                    object.host = message.host;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.database != null && message.hasOwnProperty("database"))
                    object.database = message.database;
                return object;
            };

            /**
             * Converts this ConnectionOpts to JSON.
             * @function toJSON
             * @memberof common.MysqlDesc.ConnectionOpts
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectionOpts.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectionOpts
             * @function getTypeUrl
             * @memberof common.MysqlDesc.ConnectionOpts
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectionOpts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.MysqlDesc.ConnectionOpts";
            };

            return ConnectionOpts;
        })();

        MysqlDesc.Statement = (function() {

            /**
             * Properties of a Statement.
             * @memberof common.MysqlDesc
             * @interface IStatement
             * @property {string|null} [statement] Statement statement
             * @property {Array.<common.MysqlDesc.Statement.IExtractor>|null} [extractors] Statement extractors
             */

            /**
             * Constructs a new Statement.
             * @memberof common.MysqlDesc
             * @classdesc Represents a Statement.
             * @implements IStatement
             * @constructor
             * @param {common.MysqlDesc.IStatement=} [properties] Properties to set
             */
            function Statement(properties) {
                this.extractors = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Statement statement.
             * @member {string} statement
             * @memberof common.MysqlDesc.Statement
             * @instance
             */
            Statement.prototype.statement = "";

            /**
             * Statement extractors.
             * @member {Array.<common.MysqlDesc.Statement.IExtractor>} extractors
             * @memberof common.MysqlDesc.Statement
             * @instance
             */
            Statement.prototype.extractors = $util.emptyArray;

            /**
             * Creates a new Statement instance using the specified properties.
             * @function create
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {common.MysqlDesc.IStatement=} [properties] Properties to set
             * @returns {common.MysqlDesc.Statement} Statement instance
             */
            Statement.create = function create(properties) {
                return new Statement(properties);
            };

            /**
             * Encodes the specified Statement message. Does not implicitly {@link common.MysqlDesc.Statement.verify|verify} messages.
             * @function encode
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {common.MysqlDesc.IStatement} message Statement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Statement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.statement != null && Object.hasOwnProperty.call(message, "statement"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.statement);
                if (message.extractors != null && message.extractors.length)
                    for (var i = 0; i < message.extractors.length; ++i)
                        $root.common.MysqlDesc.Statement.Extractor.encode(message.extractors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Statement message, length delimited. Does not implicitly {@link common.MysqlDesc.Statement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {common.MysqlDesc.IStatement} message Statement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Statement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Statement message from the specified reader or buffer.
             * @function decode
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.MysqlDesc.Statement} Statement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Statement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MysqlDesc.Statement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.statement = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.extractors && message.extractors.length))
                                message.extractors = [];
                            message.extractors.push($root.common.MysqlDesc.Statement.Extractor.decode(reader, reader.uint32()));
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
             * Decodes a Statement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.MysqlDesc.Statement} Statement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Statement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Statement message.
             * @function verify
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Statement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.statement != null && message.hasOwnProperty("statement"))
                    if (!$util.isString(message.statement))
                        return "statement: string expected";
                if (message.extractors != null && message.hasOwnProperty("extractors")) {
                    if (!Array.isArray(message.extractors))
                        return "extractors: array expected";
                    for (var i = 0; i < message.extractors.length; ++i) {
                        var error = $root.common.MysqlDesc.Statement.Extractor.verify(message.extractors[i]);
                        if (error)
                            return "extractors." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Statement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.MysqlDesc.Statement} Statement
             */
            Statement.fromObject = function fromObject(object) {
                if (object instanceof $root.common.MysqlDesc.Statement)
                    return object;
                var message = new $root.common.MysqlDesc.Statement();
                if (object.statement != null)
                    message.statement = String(object.statement);
                if (object.extractors) {
                    if (!Array.isArray(object.extractors))
                        throw TypeError(".common.MysqlDesc.Statement.extractors: array expected");
                    message.extractors = [];
                    for (var i = 0; i < object.extractors.length; ++i) {
                        if (typeof object.extractors[i] !== "object")
                            throw TypeError(".common.MysqlDesc.Statement.extractors: object expected");
                        message.extractors[i] = $root.common.MysqlDesc.Statement.Extractor.fromObject(object.extractors[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Statement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {common.MysqlDesc.Statement} message Statement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Statement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.extractors = [];
                if (options.defaults)
                    object.statement = "";
                if (message.statement != null && message.hasOwnProperty("statement"))
                    object.statement = message.statement;
                if (message.extractors && message.extractors.length) {
                    object.extractors = [];
                    for (var j = 0; j < message.extractors.length; ++j)
                        object.extractors[j] = $root.common.MysqlDesc.Statement.Extractor.toObject(message.extractors[j], options);
                }
                return object;
            };

            /**
             * Converts this Statement to JSON.
             * @function toJSON
             * @memberof common.MysqlDesc.Statement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Statement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Statement
             * @function getTypeUrl
             * @memberof common.MysqlDesc.Statement
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Statement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.MysqlDesc.Statement";
            };

            Statement.Extractor = (function() {

                /**
                 * Properties of an Extractor.
                 * @memberof common.MysqlDesc.Statement
                 * @interface IExtractor
                 * @property {number|null} [index] Extractor index
                 * @property {string|null} [extractor] Extractor extractor
                 */

                /**
                 * Constructs a new Extractor.
                 * @memberof common.MysqlDesc.Statement
                 * @classdesc Represents an Extractor.
                 * @implements IExtractor
                 * @constructor
                 * @param {common.MysqlDesc.Statement.IExtractor=} [properties] Properties to set
                 */
                function Extractor(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Extractor index.
                 * @member {number} index
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @instance
                 */
                Extractor.prototype.index = 0;

                /**
                 * Extractor extractor.
                 * @member {string} extractor
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @instance
                 */
                Extractor.prototype.extractor = "";

                /**
                 * Creates a new Extractor instance using the specified properties.
                 * @function create
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {common.MysqlDesc.Statement.IExtractor=} [properties] Properties to set
                 * @returns {common.MysqlDesc.Statement.Extractor} Extractor instance
                 */
                Extractor.create = function create(properties) {
                    return new Extractor(properties);
                };

                /**
                 * Encodes the specified Extractor message. Does not implicitly {@link common.MysqlDesc.Statement.Extractor.verify|verify} messages.
                 * @function encode
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {common.MysqlDesc.Statement.IExtractor} message Extractor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Extractor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.extractor != null && Object.hasOwnProperty.call(message, "extractor"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extractor);
                    return writer;
                };

                /**
                 * Encodes the specified Extractor message, length delimited. Does not implicitly {@link common.MysqlDesc.Statement.Extractor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {common.MysqlDesc.Statement.IExtractor} message Extractor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Extractor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Extractor message from the specified reader or buffer.
                 * @function decode
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {common.MysqlDesc.Statement.Extractor} Extractor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Extractor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MysqlDesc.Statement.Extractor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.index = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.extractor = reader.string();
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
                 * Decodes an Extractor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {common.MysqlDesc.Statement.Extractor} Extractor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Extractor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Extractor message.
                 * @function verify
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Extractor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.index != null && message.hasOwnProperty("index"))
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    if (message.extractor != null && message.hasOwnProperty("extractor"))
                        if (!$util.isString(message.extractor))
                            return "extractor: string expected";
                    return null;
                };

                /**
                 * Creates an Extractor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {common.MysqlDesc.Statement.Extractor} Extractor
                 */
                Extractor.fromObject = function fromObject(object) {
                    if (object instanceof $root.common.MysqlDesc.Statement.Extractor)
                        return object;
                    var message = new $root.common.MysqlDesc.Statement.Extractor();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.extractor != null)
                        message.extractor = String(object.extractor);
                    return message;
                };

                /**
                 * Creates a plain object from an Extractor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {common.MysqlDesc.Statement.Extractor} message Extractor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Extractor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.index = 0;
                        object.extractor = "";
                    }
                    if (message.index != null && message.hasOwnProperty("index"))
                        object.index = message.index;
                    if (message.extractor != null && message.hasOwnProperty("extractor"))
                        object.extractor = message.extractor;
                    return object;
                };

                /**
                 * Converts this Extractor to JSON.
                 * @function toJSON
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Extractor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Extractor
                 * @function getTypeUrl
                 * @memberof common.MysqlDesc.Statement.Extractor
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Extractor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/common.MysqlDesc.Statement.Extractor";
                };

                return Extractor;
            })();

            return Statement;
        })();

        return MysqlDesc;
    })();

    common.RedisDesc = (function() {

        /**
         * Properties of a RedisDesc.
         * @memberof common
         * @interface IRedisDesc
         * @property {common.RedisDesc.IConnectionOpts|null} [connectionOpts] RedisDesc connectionOpts
         * @property {common.IFunc|null} [keyExtractor] RedisDesc keyExtractor
         * @property {common.IFunc|null} [valueExtractor] RedisDesc valueExtractor
         */

        /**
         * Constructs a new RedisDesc.
         * @memberof common
         * @classdesc Represents a RedisDesc.
         * @implements IRedisDesc
         * @constructor
         * @param {common.IRedisDesc=} [properties] Properties to set
         */
        function RedisDesc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedisDesc connectionOpts.
         * @member {common.RedisDesc.IConnectionOpts|null|undefined} connectionOpts
         * @memberof common.RedisDesc
         * @instance
         */
        RedisDesc.prototype.connectionOpts = null;

        /**
         * RedisDesc keyExtractor.
         * @member {common.IFunc|null|undefined} keyExtractor
         * @memberof common.RedisDesc
         * @instance
         */
        RedisDesc.prototype.keyExtractor = null;

        /**
         * RedisDesc valueExtractor.
         * @member {common.IFunc|null|undefined} valueExtractor
         * @memberof common.RedisDesc
         * @instance
         */
        RedisDesc.prototype.valueExtractor = null;

        /**
         * Creates a new RedisDesc instance using the specified properties.
         * @function create
         * @memberof common.RedisDesc
         * @static
         * @param {common.IRedisDesc=} [properties] Properties to set
         * @returns {common.RedisDesc} RedisDesc instance
         */
        RedisDesc.create = function create(properties) {
            return new RedisDesc(properties);
        };

        /**
         * Encodes the specified RedisDesc message. Does not implicitly {@link common.RedisDesc.verify|verify} messages.
         * @function encode
         * @memberof common.RedisDesc
         * @static
         * @param {common.IRedisDesc} message RedisDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedisDesc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectionOpts != null && Object.hasOwnProperty.call(message, "connectionOpts"))
                $root.common.RedisDesc.ConnectionOpts.encode(message.connectionOpts, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.keyExtractor != null && Object.hasOwnProperty.call(message, "keyExtractor"))
                $root.common.Func.encode(message.keyExtractor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.valueExtractor != null && Object.hasOwnProperty.call(message, "valueExtractor"))
                $root.common.Func.encode(message.valueExtractor, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RedisDesc message, length delimited. Does not implicitly {@link common.RedisDesc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RedisDesc
         * @static
         * @param {common.IRedisDesc} message RedisDesc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedisDesc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedisDesc message from the specified reader or buffer.
         * @function decode
         * @memberof common.RedisDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RedisDesc} RedisDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedisDesc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RedisDesc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.connectionOpts = $root.common.RedisDesc.ConnectionOpts.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.keyExtractor = $root.common.Func.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.valueExtractor = $root.common.Func.decode(reader, reader.uint32());
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
         * Decodes a RedisDesc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RedisDesc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RedisDesc} RedisDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedisDesc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedisDesc message.
         * @function verify
         * @memberof common.RedisDesc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedisDesc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectionOpts != null && message.hasOwnProperty("connectionOpts")) {
                var error = $root.common.RedisDesc.ConnectionOpts.verify(message.connectionOpts);
                if (error)
                    return "connectionOpts." + error;
            }
            if (message.keyExtractor != null && message.hasOwnProperty("keyExtractor")) {
                var error = $root.common.Func.verify(message.keyExtractor);
                if (error)
                    return "keyExtractor." + error;
            }
            if (message.valueExtractor != null && message.hasOwnProperty("valueExtractor")) {
                var error = $root.common.Func.verify(message.valueExtractor);
                if (error)
                    return "valueExtractor." + error;
            }
            return null;
        };

        /**
         * Creates a RedisDesc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RedisDesc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RedisDesc} RedisDesc
         */
        RedisDesc.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RedisDesc)
                return object;
            var message = new $root.common.RedisDesc();
            if (object.connectionOpts != null) {
                if (typeof object.connectionOpts !== "object")
                    throw TypeError(".common.RedisDesc.connectionOpts: object expected");
                message.connectionOpts = $root.common.RedisDesc.ConnectionOpts.fromObject(object.connectionOpts);
            }
            if (object.keyExtractor != null) {
                if (typeof object.keyExtractor !== "object")
                    throw TypeError(".common.RedisDesc.keyExtractor: object expected");
                message.keyExtractor = $root.common.Func.fromObject(object.keyExtractor);
            }
            if (object.valueExtractor != null) {
                if (typeof object.valueExtractor !== "object")
                    throw TypeError(".common.RedisDesc.valueExtractor: object expected");
                message.valueExtractor = $root.common.Func.fromObject(object.valueExtractor);
            }
            return message;
        };

        /**
         * Creates a plain object from a RedisDesc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RedisDesc
         * @static
         * @param {common.RedisDesc} message RedisDesc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedisDesc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.connectionOpts = null;
                object.keyExtractor = null;
                object.valueExtractor = null;
            }
            if (message.connectionOpts != null && message.hasOwnProperty("connectionOpts"))
                object.connectionOpts = $root.common.RedisDesc.ConnectionOpts.toObject(message.connectionOpts, options);
            if (message.keyExtractor != null && message.hasOwnProperty("keyExtractor"))
                object.keyExtractor = $root.common.Func.toObject(message.keyExtractor, options);
            if (message.valueExtractor != null && message.hasOwnProperty("valueExtractor"))
                object.valueExtractor = $root.common.Func.toObject(message.valueExtractor, options);
            return object;
        };

        /**
         * Converts this RedisDesc to JSON.
         * @function toJSON
         * @memberof common.RedisDesc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedisDesc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RedisDesc
         * @function getTypeUrl
         * @memberof common.RedisDesc
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RedisDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RedisDesc";
        };

        RedisDesc.ConnectionOpts = (function() {

            /**
             * Properties of a ConnectionOpts.
             * @memberof common.RedisDesc
             * @interface IConnectionOpts
             * @property {string|null} [host] ConnectionOpts host
             * @property {string|null} [password] ConnectionOpts password
             * @property {string|null} [database] ConnectionOpts database
             * @property {boolean|null} [tls] ConnectionOpts tls
             */

            /**
             * Constructs a new ConnectionOpts.
             * @memberof common.RedisDesc
             * @classdesc Represents a ConnectionOpts.
             * @implements IConnectionOpts
             * @constructor
             * @param {common.RedisDesc.IConnectionOpts=} [properties] Properties to set
             */
            function ConnectionOpts(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConnectionOpts host.
             * @member {string} host
             * @memberof common.RedisDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.host = "";

            /**
             * ConnectionOpts password.
             * @member {string} password
             * @memberof common.RedisDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.password = "";

            /**
             * ConnectionOpts database.
             * @member {string} database
             * @memberof common.RedisDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.database = "";

            /**
             * ConnectionOpts tls.
             * @member {boolean} tls
             * @memberof common.RedisDesc.ConnectionOpts
             * @instance
             */
            ConnectionOpts.prototype.tls = false;

            /**
             * Creates a new ConnectionOpts instance using the specified properties.
             * @function create
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {common.RedisDesc.IConnectionOpts=} [properties] Properties to set
             * @returns {common.RedisDesc.ConnectionOpts} ConnectionOpts instance
             */
            ConnectionOpts.create = function create(properties) {
                return new ConnectionOpts(properties);
            };

            /**
             * Encodes the specified ConnectionOpts message. Does not implicitly {@link common.RedisDesc.ConnectionOpts.verify|verify} messages.
             * @function encode
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {common.RedisDesc.IConnectionOpts} message ConnectionOpts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionOpts.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                if (message.database != null && Object.hasOwnProperty.call(message, "database"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.database);
                if (message.tls != null && Object.hasOwnProperty.call(message, "tls"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.tls);
                return writer;
            };

            /**
             * Encodes the specified ConnectionOpts message, length delimited. Does not implicitly {@link common.RedisDesc.ConnectionOpts.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {common.RedisDesc.IConnectionOpts} message ConnectionOpts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectionOpts.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConnectionOpts message from the specified reader or buffer.
             * @function decode
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.RedisDesc.ConnectionOpts} ConnectionOpts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionOpts.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RedisDesc.ConnectionOpts();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.host = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    case 3: {
                            message.database = reader.string();
                            break;
                        }
                    case 4: {
                            message.tls = reader.bool();
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
             * Decodes a ConnectionOpts message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.RedisDesc.ConnectionOpts} ConnectionOpts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectionOpts.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConnectionOpts message.
             * @function verify
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectionOpts.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.host != null && message.hasOwnProperty("host"))
                    if (!$util.isString(message.host))
                        return "host: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.database != null && message.hasOwnProperty("database"))
                    if (!$util.isString(message.database))
                        return "database: string expected";
                if (message.tls != null && message.hasOwnProperty("tls"))
                    if (typeof message.tls !== "boolean")
                        return "tls: boolean expected";
                return null;
            };

            /**
             * Creates a ConnectionOpts message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.RedisDesc.ConnectionOpts} ConnectionOpts
             */
            ConnectionOpts.fromObject = function fromObject(object) {
                if (object instanceof $root.common.RedisDesc.ConnectionOpts)
                    return object;
                var message = new $root.common.RedisDesc.ConnectionOpts();
                if (object.host != null)
                    message.host = String(object.host);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.database != null)
                    message.database = String(object.database);
                if (object.tls != null)
                    message.tls = Boolean(object.tls);
                return message;
            };

            /**
             * Creates a plain object from a ConnectionOpts message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {common.RedisDesc.ConnectionOpts} message ConnectionOpts
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectionOpts.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.host = "";
                    object.password = "";
                    object.database = "";
                    object.tls = false;
                }
                if (message.host != null && message.hasOwnProperty("host"))
                    object.host = message.host;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.database != null && message.hasOwnProperty("database"))
                    object.database = message.database;
                if (message.tls != null && message.hasOwnProperty("tls"))
                    object.tls = message.tls;
                return object;
            };

            /**
             * Converts this ConnectionOpts to JSON.
             * @function toJSON
             * @memberof common.RedisDesc.ConnectionOpts
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectionOpts.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConnectionOpts
             * @function getTypeUrl
             * @memberof common.RedisDesc.ConnectionOpts
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConnectionOpts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.RedisDesc.ConnectionOpts";
            };

            return ConnectionOpts;
        })();

        return RedisDesc;
    })();

    /**
     * Stream Graph Status. It shows which status a stream job is now.
     * @name common.DataflowStatus
     * @enum {number}
     * @property {number} INITIALIZED=0 INITIALIZED value
     * @property {number} RUNNING=1 RUNNING value
     * @property {number} CLOSING=2 CLOSING value
     * @property {number} CLOSED=3 CLOSED value
     */
    common.DataflowStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INITIALIZED"] = 0;
        values[valuesById[1] = "RUNNING"] = 1;
        values[valuesById[2] = "CLOSING"] = 2;
        values[valuesById[3] = "CLOSED"] = 3;
        return values;
    })();

    common.Dataflow = (function() {

        /**
         * Properties of a Dataflow.
         * @memberof common
         * @interface IDataflow
         * @property {common.IJobId|null} [jobId] Dataflow jobId
         * @property {Array.<common.IDataflowMeta>|null} [meta] Dataflow meta
         * @property {Object.<string,common.IOperatorInfo>|null} [nodes] Dataflow nodes
         */

        /**
         * Constructs a new Dataflow.
         * @memberof common
         * @classdesc Represents a Dataflow.
         * @implements IDataflow
         * @constructor
         * @param {common.IDataflow=} [properties] Properties to set
         */
        function Dataflow(properties) {
            this.meta = [];
            this.nodes = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Dataflow jobId.
         * @member {common.IJobId|null|undefined} jobId
         * @memberof common.Dataflow
         * @instance
         */
        Dataflow.prototype.jobId = null;

        /**
         * Dataflow meta.
         * @member {Array.<common.IDataflowMeta>} meta
         * @memberof common.Dataflow
         * @instance
         */
        Dataflow.prototype.meta = $util.emptyArray;

        /**
         * Dataflow nodes.
         * @member {Object.<string,common.IOperatorInfo>} nodes
         * @memberof common.Dataflow
         * @instance
         */
        Dataflow.prototype.nodes = $util.emptyObject;

        /**
         * Creates a new Dataflow instance using the specified properties.
         * @function create
         * @memberof common.Dataflow
         * @static
         * @param {common.IDataflow=} [properties] Properties to set
         * @returns {common.Dataflow} Dataflow instance
         */
        Dataflow.create = function create(properties) {
            return new Dataflow(properties);
        };

        /**
         * Encodes the specified Dataflow message. Does not implicitly {@link common.Dataflow.verify|verify} messages.
         * @function encode
         * @memberof common.Dataflow
         * @static
         * @param {common.IDataflow} message Dataflow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dataflow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.jobId != null && Object.hasOwnProperty.call(message, "jobId"))
                $root.common.JobId.encode(message.jobId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.meta != null && message.meta.length)
                for (var i = 0; i < message.meta.length; ++i)
                    $root.common.DataflowMeta.encode(message.meta[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nodes != null && Object.hasOwnProperty.call(message, "nodes"))
                for (var keys = Object.keys(message.nodes), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.common.OperatorInfo.encode(message.nodes[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Dataflow message, length delimited. Does not implicitly {@link common.Dataflow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Dataflow
         * @static
         * @param {common.IDataflow} message Dataflow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dataflow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dataflow message from the specified reader or buffer.
         * @function decode
         * @memberof common.Dataflow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Dataflow} Dataflow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dataflow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Dataflow(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.jobId = $root.common.JobId.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.meta && message.meta.length))
                            message.meta = [];
                        message.meta.push($root.common.DataflowMeta.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (message.nodes === $util.emptyObject)
                            message.nodes = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.common.OperatorInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.nodes[key] = value;
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
         * Decodes a Dataflow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Dataflow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Dataflow} Dataflow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dataflow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dataflow message.
         * @function verify
         * @memberof common.Dataflow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dataflow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.jobId != null && message.hasOwnProperty("jobId")) {
                var error = $root.common.JobId.verify(message.jobId);
                if (error)
                    return "jobId." + error;
            }
            if (message.meta != null && message.hasOwnProperty("meta")) {
                if (!Array.isArray(message.meta))
                    return "meta: array expected";
                for (var i = 0; i < message.meta.length; ++i) {
                    var error = $root.common.DataflowMeta.verify(message.meta[i]);
                    if (error)
                        return "meta." + error;
                }
            }
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!$util.isObject(message.nodes))
                    return "nodes: object expected";
                var key = Object.keys(message.nodes);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "nodes: integer key{k:uint32} expected";
                    {
                        var error = $root.common.OperatorInfo.verify(message.nodes[key[i]]);
                        if (error)
                            return "nodes." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a Dataflow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Dataflow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Dataflow} Dataflow
         */
        Dataflow.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Dataflow)
                return object;
            var message = new $root.common.Dataflow();
            if (object.jobId != null) {
                if (typeof object.jobId !== "object")
                    throw TypeError(".common.Dataflow.jobId: object expected");
                message.jobId = $root.common.JobId.fromObject(object.jobId);
            }
            if (object.meta) {
                if (!Array.isArray(object.meta))
                    throw TypeError(".common.Dataflow.meta: array expected");
                message.meta = [];
                for (var i = 0; i < object.meta.length; ++i) {
                    if (typeof object.meta[i] !== "object")
                        throw TypeError(".common.Dataflow.meta: object expected");
                    message.meta[i] = $root.common.DataflowMeta.fromObject(object.meta[i]);
                }
            }
            if (object.nodes) {
                if (typeof object.nodes !== "object")
                    throw TypeError(".common.Dataflow.nodes: object expected");
                message.nodes = {};
                for (var keys = Object.keys(object.nodes), i = 0; i < keys.length; ++i) {
                    if (typeof object.nodes[keys[i]] !== "object")
                        throw TypeError(".common.Dataflow.nodes: object expected");
                    message.nodes[keys[i]] = $root.common.OperatorInfo.fromObject(object.nodes[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Dataflow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Dataflow
         * @static
         * @param {common.Dataflow} message Dataflow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dataflow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.meta = [];
            if (options.objects || options.defaults)
                object.nodes = {};
            if (options.defaults)
                object.jobId = null;
            if (message.jobId != null && message.hasOwnProperty("jobId"))
                object.jobId = $root.common.JobId.toObject(message.jobId, options);
            if (message.meta && message.meta.length) {
                object.meta = [];
                for (var j = 0; j < message.meta.length; ++j)
                    object.meta[j] = $root.common.DataflowMeta.toObject(message.meta[j], options);
            }
            var keys2;
            if (message.nodes && (keys2 = Object.keys(message.nodes)).length) {
                object.nodes = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.nodes[keys2[j]] = $root.common.OperatorInfo.toObject(message.nodes[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this Dataflow to JSON.
         * @function toJSON
         * @memberof common.Dataflow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dataflow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Dataflow
         * @function getTypeUrl
         * @memberof common.Dataflow
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dataflow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Dataflow";
        };

        return Dataflow;
    })();

    common.StreamConfig = (function() {

        /**
         * Properties of a StreamConfig.
         * @memberof common
         * @interface IStreamConfig
         * @property {common.IWindow|null} [window] StreamConfig window
         * @property {common.ITrigger|null} [trigger] StreamConfig trigger
         */

        /**
         * Constructs a new StreamConfig.
         * @memberof common
         * @classdesc Represents a StreamConfig.
         * @implements IStreamConfig
         * @constructor
         * @param {common.IStreamConfig=} [properties] Properties to set
         */
        function StreamConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamConfig window.
         * @member {common.IWindow|null|undefined} window
         * @memberof common.StreamConfig
         * @instance
         */
        StreamConfig.prototype.window = null;

        /**
         * StreamConfig trigger.
         * @member {common.ITrigger|null|undefined} trigger
         * @memberof common.StreamConfig
         * @instance
         */
        StreamConfig.prototype.trigger = null;

        /**
         * Creates a new StreamConfig instance using the specified properties.
         * @function create
         * @memberof common.StreamConfig
         * @static
         * @param {common.IStreamConfig=} [properties] Properties to set
         * @returns {common.StreamConfig} StreamConfig instance
         */
        StreamConfig.create = function create(properties) {
            return new StreamConfig(properties);
        };

        /**
         * Encodes the specified StreamConfig message. Does not implicitly {@link common.StreamConfig.verify|verify} messages.
         * @function encode
         * @memberof common.StreamConfig
         * @static
         * @param {common.IStreamConfig} message StreamConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.window != null && Object.hasOwnProperty.call(message, "window"))
                $root.common.Window.encode(message.window, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.trigger != null && Object.hasOwnProperty.call(message, "trigger"))
                $root.common.Trigger.encode(message.trigger, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StreamConfig message, length delimited. Does not implicitly {@link common.StreamConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.StreamConfig
         * @static
         * @param {common.IStreamConfig} message StreamConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamConfig message from the specified reader or buffer.
         * @function decode
         * @memberof common.StreamConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.StreamConfig} StreamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.StreamConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.window = $root.common.Window.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.trigger = $root.common.Trigger.decode(reader, reader.uint32());
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
         * Decodes a StreamConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.StreamConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.StreamConfig} StreamConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamConfig message.
         * @function verify
         * @memberof common.StreamConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.window != null && message.hasOwnProperty("window")) {
                var error = $root.common.Window.verify(message.window);
                if (error)
                    return "window." + error;
            }
            if (message.trigger != null && message.hasOwnProperty("trigger")) {
                var error = $root.common.Trigger.verify(message.trigger);
                if (error)
                    return "trigger." + error;
            }
            return null;
        };

        /**
         * Creates a StreamConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.StreamConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.StreamConfig} StreamConfig
         */
        StreamConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.common.StreamConfig)
                return object;
            var message = new $root.common.StreamConfig();
            if (object.window != null) {
                if (typeof object.window !== "object")
                    throw TypeError(".common.StreamConfig.window: object expected");
                message.window = $root.common.Window.fromObject(object.window);
            }
            if (object.trigger != null) {
                if (typeof object.trigger !== "object")
                    throw TypeError(".common.StreamConfig.trigger: object expected");
                message.trigger = $root.common.Trigger.fromObject(object.trigger);
            }
            return message;
        };

        /**
         * Creates a plain object from a StreamConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.StreamConfig
         * @static
         * @param {common.StreamConfig} message StreamConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.window = null;
                object.trigger = null;
            }
            if (message.window != null && message.hasOwnProperty("window"))
                object.window = $root.common.Window.toObject(message.window, options);
            if (message.trigger != null && message.hasOwnProperty("trigger"))
                object.trigger = $root.common.Trigger.toObject(message.trigger, options);
            return object;
        };

        /**
         * Converts this StreamConfig to JSON.
         * @function toJSON
         * @memberof common.StreamConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StreamConfig
         * @function getTypeUrl
         * @memberof common.StreamConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StreamConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.StreamConfig";
        };

        return StreamConfig;
    })();

    common.Window = (function() {

        /**
         * Properties of a Window.
         * @memberof common
         * @interface IWindow
         * @property {common.Window.IFixedWindow|null} [fixed] Window fixed
         * @property {common.Window.ISlidingWindow|null} [slide] Window slide
         * @property {common.Window.ISessionWindow|null} [session] Window session
         */

        /**
         * Constructs a new Window.
         * @memberof common
         * @classdesc Represents a Window.
         * @implements IWindow
         * @constructor
         * @param {common.IWindow=} [properties] Properties to set
         */
        function Window(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Window fixed.
         * @member {common.Window.IFixedWindow|null|undefined} fixed
         * @memberof common.Window
         * @instance
         */
        Window.prototype.fixed = null;

        /**
         * Window slide.
         * @member {common.Window.ISlidingWindow|null|undefined} slide
         * @memberof common.Window
         * @instance
         */
        Window.prototype.slide = null;

        /**
         * Window session.
         * @member {common.Window.ISessionWindow|null|undefined} session
         * @memberof common.Window
         * @instance
         */
        Window.prototype.session = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Window value.
         * @member {"fixed"|"slide"|"session"|undefined} value
         * @memberof common.Window
         * @instance
         */
        Object.defineProperty(Window.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["fixed", "slide", "session"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Window instance using the specified properties.
         * @function create
         * @memberof common.Window
         * @static
         * @param {common.IWindow=} [properties] Properties to set
         * @returns {common.Window} Window instance
         */
        Window.create = function create(properties) {
            return new Window(properties);
        };

        /**
         * Encodes the specified Window message. Does not implicitly {@link common.Window.verify|verify} messages.
         * @function encode
         * @memberof common.Window
         * @static
         * @param {common.IWindow} message Window message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Window.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fixed != null && Object.hasOwnProperty.call(message, "fixed"))
                $root.common.Window.FixedWindow.encode(message.fixed, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.slide != null && Object.hasOwnProperty.call(message, "slide"))
                $root.common.Window.SlidingWindow.encode(message.slide, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                $root.common.Window.SessionWindow.encode(message.session, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Window message, length delimited. Does not implicitly {@link common.Window.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Window
         * @static
         * @param {common.IWindow} message Window message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Window.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Window message from the specified reader or buffer.
         * @function decode
         * @memberof common.Window
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Window} Window
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Window.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Window();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fixed = $root.common.Window.FixedWindow.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.slide = $root.common.Window.SlidingWindow.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.session = $root.common.Window.SessionWindow.decode(reader, reader.uint32());
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
         * Decodes a Window message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Window
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Window} Window
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Window.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Window message.
         * @function verify
         * @memberof common.Window
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Window.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.fixed != null && message.hasOwnProperty("fixed")) {
                properties.value = 1;
                {
                    var error = $root.common.Window.FixedWindow.verify(message.fixed);
                    if (error)
                        return "fixed." + error;
                }
            }
            if (message.slide != null && message.hasOwnProperty("slide")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    var error = $root.common.Window.SlidingWindow.verify(message.slide);
                    if (error)
                        return "slide." + error;
                }
            }
            if (message.session != null && message.hasOwnProperty("session")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                {
                    var error = $root.common.Window.SessionWindow.verify(message.session);
                    if (error)
                        return "session." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Window message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Window
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Window} Window
         */
        Window.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Window)
                return object;
            var message = new $root.common.Window();
            if (object.fixed != null) {
                if (typeof object.fixed !== "object")
                    throw TypeError(".common.Window.fixed: object expected");
                message.fixed = $root.common.Window.FixedWindow.fromObject(object.fixed);
            }
            if (object.slide != null) {
                if (typeof object.slide !== "object")
                    throw TypeError(".common.Window.slide: object expected");
                message.slide = $root.common.Window.SlidingWindow.fromObject(object.slide);
            }
            if (object.session != null) {
                if (typeof object.session !== "object")
                    throw TypeError(".common.Window.session: object expected");
                message.session = $root.common.Window.SessionWindow.fromObject(object.session);
            }
            return message;
        };

        /**
         * Creates a plain object from a Window message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Window
         * @static
         * @param {common.Window} message Window
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Window.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.fixed != null && message.hasOwnProperty("fixed")) {
                object.fixed = $root.common.Window.FixedWindow.toObject(message.fixed, options);
                if (options.oneofs)
                    object.value = "fixed";
            }
            if (message.slide != null && message.hasOwnProperty("slide")) {
                object.slide = $root.common.Window.SlidingWindow.toObject(message.slide, options);
                if (options.oneofs)
                    object.value = "slide";
            }
            if (message.session != null && message.hasOwnProperty("session")) {
                object.session = $root.common.Window.SessionWindow.toObject(message.session, options);
                if (options.oneofs)
                    object.value = "session";
            }
            return object;
        };

        /**
         * Converts this Window to JSON.
         * @function toJSON
         * @memberof common.Window
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Window.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Window
         * @function getTypeUrl
         * @memberof common.Window
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Window.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Window";
        };

        Window.FixedWindow = (function() {

            /**
             * Properties of a FixedWindow.
             * @memberof common.Window
             * @interface IFixedWindow
             * @property {common.ITime|null} [size] FixedWindow size
             */

            /**
             * Constructs a new FixedWindow.
             * @memberof common.Window
             * @classdesc Represents a FixedWindow.
             * @implements IFixedWindow
             * @constructor
             * @param {common.Window.IFixedWindow=} [properties] Properties to set
             */
            function FixedWindow(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FixedWindow size.
             * @member {common.ITime|null|undefined} size
             * @memberof common.Window.FixedWindow
             * @instance
             */
            FixedWindow.prototype.size = null;

            /**
             * Creates a new FixedWindow instance using the specified properties.
             * @function create
             * @memberof common.Window.FixedWindow
             * @static
             * @param {common.Window.IFixedWindow=} [properties] Properties to set
             * @returns {common.Window.FixedWindow} FixedWindow instance
             */
            FixedWindow.create = function create(properties) {
                return new FixedWindow(properties);
            };

            /**
             * Encodes the specified FixedWindow message. Does not implicitly {@link common.Window.FixedWindow.verify|verify} messages.
             * @function encode
             * @memberof common.Window.FixedWindow
             * @static
             * @param {common.Window.IFixedWindow} message FixedWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FixedWindow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    $root.common.Time.encode(message.size, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FixedWindow message, length delimited. Does not implicitly {@link common.Window.FixedWindow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.Window.FixedWindow
             * @static
             * @param {common.Window.IFixedWindow} message FixedWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FixedWindow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FixedWindow message from the specified reader or buffer.
             * @function decode
             * @memberof common.Window.FixedWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.Window.FixedWindow} FixedWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FixedWindow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Window.FixedWindow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.size = $root.common.Time.decode(reader, reader.uint32());
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
             * Decodes a FixedWindow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.Window.FixedWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.Window.FixedWindow} FixedWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FixedWindow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FixedWindow message.
             * @function verify
             * @memberof common.Window.FixedWindow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FixedWindow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.size != null && message.hasOwnProperty("size")) {
                    var error = $root.common.Time.verify(message.size);
                    if (error)
                        return "size." + error;
                }
                return null;
            };

            /**
             * Creates a FixedWindow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.Window.FixedWindow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.Window.FixedWindow} FixedWindow
             */
            FixedWindow.fromObject = function fromObject(object) {
                if (object instanceof $root.common.Window.FixedWindow)
                    return object;
                var message = new $root.common.Window.FixedWindow();
                if (object.size != null) {
                    if (typeof object.size !== "object")
                        throw TypeError(".common.Window.FixedWindow.size: object expected");
                    message.size = $root.common.Time.fromObject(object.size);
                }
                return message;
            };

            /**
             * Creates a plain object from a FixedWindow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.Window.FixedWindow
             * @static
             * @param {common.Window.FixedWindow} message FixedWindow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FixedWindow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.size = null;
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = $root.common.Time.toObject(message.size, options);
                return object;
            };

            /**
             * Converts this FixedWindow to JSON.
             * @function toJSON
             * @memberof common.Window.FixedWindow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FixedWindow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FixedWindow
             * @function getTypeUrl
             * @memberof common.Window.FixedWindow
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FixedWindow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.Window.FixedWindow";
            };

            return FixedWindow;
        })();

        Window.SlidingWindow = (function() {

            /**
             * Properties of a SlidingWindow.
             * @memberof common.Window
             * @interface ISlidingWindow
             * @property {common.ITime|null} [size] SlidingWindow size
             * @property {common.ITime|null} [period] SlidingWindow period
             */

            /**
             * Constructs a new SlidingWindow.
             * @memberof common.Window
             * @classdesc Represents a SlidingWindow.
             * @implements ISlidingWindow
             * @constructor
             * @param {common.Window.ISlidingWindow=} [properties] Properties to set
             */
            function SlidingWindow(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SlidingWindow size.
             * @member {common.ITime|null|undefined} size
             * @memberof common.Window.SlidingWindow
             * @instance
             */
            SlidingWindow.prototype.size = null;

            /**
             * SlidingWindow period.
             * @member {common.ITime|null|undefined} period
             * @memberof common.Window.SlidingWindow
             * @instance
             */
            SlidingWindow.prototype.period = null;

            /**
             * Creates a new SlidingWindow instance using the specified properties.
             * @function create
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {common.Window.ISlidingWindow=} [properties] Properties to set
             * @returns {common.Window.SlidingWindow} SlidingWindow instance
             */
            SlidingWindow.create = function create(properties) {
                return new SlidingWindow(properties);
            };

            /**
             * Encodes the specified SlidingWindow message. Does not implicitly {@link common.Window.SlidingWindow.verify|verify} messages.
             * @function encode
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {common.Window.ISlidingWindow} message SlidingWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SlidingWindow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    $root.common.Time.encode(message.size, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                    $root.common.Time.encode(message.period, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SlidingWindow message, length delimited. Does not implicitly {@link common.Window.SlidingWindow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {common.Window.ISlidingWindow} message SlidingWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SlidingWindow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SlidingWindow message from the specified reader or buffer.
             * @function decode
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.Window.SlidingWindow} SlidingWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SlidingWindow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Window.SlidingWindow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.size = $root.common.Time.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.period = $root.common.Time.decode(reader, reader.uint32());
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
             * Decodes a SlidingWindow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.Window.SlidingWindow} SlidingWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SlidingWindow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SlidingWindow message.
             * @function verify
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SlidingWindow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.size != null && message.hasOwnProperty("size")) {
                    var error = $root.common.Time.verify(message.size);
                    if (error)
                        return "size." + error;
                }
                if (message.period != null && message.hasOwnProperty("period")) {
                    var error = $root.common.Time.verify(message.period);
                    if (error)
                        return "period." + error;
                }
                return null;
            };

            /**
             * Creates a SlidingWindow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.Window.SlidingWindow} SlidingWindow
             */
            SlidingWindow.fromObject = function fromObject(object) {
                if (object instanceof $root.common.Window.SlidingWindow)
                    return object;
                var message = new $root.common.Window.SlidingWindow();
                if (object.size != null) {
                    if (typeof object.size !== "object")
                        throw TypeError(".common.Window.SlidingWindow.size: object expected");
                    message.size = $root.common.Time.fromObject(object.size);
                }
                if (object.period != null) {
                    if (typeof object.period !== "object")
                        throw TypeError(".common.Window.SlidingWindow.period: object expected");
                    message.period = $root.common.Time.fromObject(object.period);
                }
                return message;
            };

            /**
             * Creates a plain object from a SlidingWindow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {common.Window.SlidingWindow} message SlidingWindow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SlidingWindow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.size = null;
                    object.period = null;
                }
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = $root.common.Time.toObject(message.size, options);
                if (message.period != null && message.hasOwnProperty("period"))
                    object.period = $root.common.Time.toObject(message.period, options);
                return object;
            };

            /**
             * Converts this SlidingWindow to JSON.
             * @function toJSON
             * @memberof common.Window.SlidingWindow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SlidingWindow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SlidingWindow
             * @function getTypeUrl
             * @memberof common.Window.SlidingWindow
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SlidingWindow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.Window.SlidingWindow";
            };

            return SlidingWindow;
        })();

        Window.SessionWindow = (function() {

            /**
             * Properties of a SessionWindow.
             * @memberof common.Window
             * @interface ISessionWindow
             * @property {common.ITime|null} [timeout] SessionWindow timeout
             */

            /**
             * Constructs a new SessionWindow.
             * @memberof common.Window
             * @classdesc Represents a SessionWindow.
             * @implements ISessionWindow
             * @constructor
             * @param {common.Window.ISessionWindow=} [properties] Properties to set
             */
            function SessionWindow(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SessionWindow timeout.
             * @member {common.ITime|null|undefined} timeout
             * @memberof common.Window.SessionWindow
             * @instance
             */
            SessionWindow.prototype.timeout = null;

            /**
             * Creates a new SessionWindow instance using the specified properties.
             * @function create
             * @memberof common.Window.SessionWindow
             * @static
             * @param {common.Window.ISessionWindow=} [properties] Properties to set
             * @returns {common.Window.SessionWindow} SessionWindow instance
             */
            SessionWindow.create = function create(properties) {
                return new SessionWindow(properties);
            };

            /**
             * Encodes the specified SessionWindow message. Does not implicitly {@link common.Window.SessionWindow.verify|verify} messages.
             * @function encode
             * @memberof common.Window.SessionWindow
             * @static
             * @param {common.Window.ISessionWindow} message SessionWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionWindow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                    $root.common.Time.encode(message.timeout, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SessionWindow message, length delimited. Does not implicitly {@link common.Window.SessionWindow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.Window.SessionWindow
             * @static
             * @param {common.Window.ISessionWindow} message SessionWindow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionWindow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SessionWindow message from the specified reader or buffer.
             * @function decode
             * @memberof common.Window.SessionWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.Window.SessionWindow} SessionWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionWindow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Window.SessionWindow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timeout = $root.common.Time.decode(reader, reader.uint32());
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
             * Decodes a SessionWindow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.Window.SessionWindow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.Window.SessionWindow} SessionWindow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionWindow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionWindow message.
             * @function verify
             * @memberof common.Window.SessionWindow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionWindow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timeout != null && message.hasOwnProperty("timeout")) {
                    var error = $root.common.Time.verify(message.timeout);
                    if (error)
                        return "timeout." + error;
                }
                return null;
            };

            /**
             * Creates a SessionWindow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.Window.SessionWindow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.Window.SessionWindow} SessionWindow
             */
            SessionWindow.fromObject = function fromObject(object) {
                if (object instanceof $root.common.Window.SessionWindow)
                    return object;
                var message = new $root.common.Window.SessionWindow();
                if (object.timeout != null) {
                    if (typeof object.timeout !== "object")
                        throw TypeError(".common.Window.SessionWindow.timeout: object expected");
                    message.timeout = $root.common.Time.fromObject(object.timeout);
                }
                return message;
            };

            /**
             * Creates a plain object from a SessionWindow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.Window.SessionWindow
             * @static
             * @param {common.Window.SessionWindow} message SessionWindow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionWindow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.timeout = null;
                if (message.timeout != null && message.hasOwnProperty("timeout"))
                    object.timeout = $root.common.Time.toObject(message.timeout, options);
                return object;
            };

            /**
             * Converts this SessionWindow to JSON.
             * @function toJSON
             * @memberof common.Window.SessionWindow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionWindow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SessionWindow
             * @function getTypeUrl
             * @memberof common.Window.SessionWindow
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SessionWindow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.Window.SessionWindow";
            };

            return SessionWindow;
        })();

        return Window;
    })();

    common.Trigger = (function() {

        /**
         * Properties of a Trigger.
         * @memberof common
         * @interface ITrigger
         * @property {common.Trigger.IWatermark|null} [watermark] Trigger watermark
         */

        /**
         * Constructs a new Trigger.
         * @memberof common
         * @classdesc Represents a Trigger.
         * @implements ITrigger
         * @constructor
         * @param {common.ITrigger=} [properties] Properties to set
         */
        function Trigger(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trigger watermark.
         * @member {common.Trigger.IWatermark|null|undefined} watermark
         * @memberof common.Trigger
         * @instance
         */
        Trigger.prototype.watermark = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Trigger value.
         * @member {"watermark"|undefined} value
         * @memberof common.Trigger
         * @instance
         */
        Object.defineProperty(Trigger.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["watermark"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Trigger instance using the specified properties.
         * @function create
         * @memberof common.Trigger
         * @static
         * @param {common.ITrigger=} [properties] Properties to set
         * @returns {common.Trigger} Trigger instance
         */
        Trigger.create = function create(properties) {
            return new Trigger(properties);
        };

        /**
         * Encodes the specified Trigger message. Does not implicitly {@link common.Trigger.verify|verify} messages.
         * @function encode
         * @memberof common.Trigger
         * @static
         * @param {common.ITrigger} message Trigger message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trigger.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.watermark != null && Object.hasOwnProperty.call(message, "watermark"))
                $root.common.Trigger.Watermark.encode(message.watermark, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Trigger message, length delimited. Does not implicitly {@link common.Trigger.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Trigger
         * @static
         * @param {common.ITrigger} message Trigger message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trigger.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trigger message from the specified reader or buffer.
         * @function decode
         * @memberof common.Trigger
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Trigger} Trigger
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trigger.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Trigger();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.watermark = $root.common.Trigger.Watermark.decode(reader, reader.uint32());
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
         * Decodes a Trigger message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Trigger
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Trigger} Trigger
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trigger.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trigger message.
         * @function verify
         * @memberof common.Trigger
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trigger.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.watermark != null && message.hasOwnProperty("watermark")) {
                properties.value = 1;
                {
                    var error = $root.common.Trigger.Watermark.verify(message.watermark);
                    if (error)
                        return "watermark." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Trigger message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Trigger
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Trigger} Trigger
         */
        Trigger.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Trigger)
                return object;
            var message = new $root.common.Trigger();
            if (object.watermark != null) {
                if (typeof object.watermark !== "object")
                    throw TypeError(".common.Trigger.watermark: object expected");
                message.watermark = $root.common.Trigger.Watermark.fromObject(object.watermark);
            }
            return message;
        };

        /**
         * Creates a plain object from a Trigger message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Trigger
         * @static
         * @param {common.Trigger} message Trigger
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trigger.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.watermark != null && message.hasOwnProperty("watermark")) {
                object.watermark = $root.common.Trigger.Watermark.toObject(message.watermark, options);
                if (options.oneofs)
                    object.value = "watermark";
            }
            return object;
        };

        /**
         * Converts this Trigger to JSON.
         * @function toJSON
         * @memberof common.Trigger
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trigger.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Trigger
         * @function getTypeUrl
         * @memberof common.Trigger
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Trigger.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Trigger";
        };

        Trigger.Watermark = (function() {

            /**
             * Properties of a Watermark.
             * @memberof common.Trigger
             * @interface IWatermark
             * @property {common.ITime|null} [markTime] Watermark markTime
             */

            /**
             * Constructs a new Watermark.
             * @memberof common.Trigger
             * @classdesc Represents a Watermark.
             * @implements IWatermark
             * @constructor
             * @param {common.Trigger.IWatermark=} [properties] Properties to set
             */
            function Watermark(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Watermark markTime.
             * @member {common.ITime|null|undefined} markTime
             * @memberof common.Trigger.Watermark
             * @instance
             */
            Watermark.prototype.markTime = null;

            /**
             * Creates a new Watermark instance using the specified properties.
             * @function create
             * @memberof common.Trigger.Watermark
             * @static
             * @param {common.Trigger.IWatermark=} [properties] Properties to set
             * @returns {common.Trigger.Watermark} Watermark instance
             */
            Watermark.create = function create(properties) {
                return new Watermark(properties);
            };

            /**
             * Encodes the specified Watermark message. Does not implicitly {@link common.Trigger.Watermark.verify|verify} messages.
             * @function encode
             * @memberof common.Trigger.Watermark
             * @static
             * @param {common.Trigger.IWatermark} message Watermark message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Watermark.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.markTime != null && Object.hasOwnProperty.call(message, "markTime"))
                    $root.common.Time.encode(message.markTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Watermark message, length delimited. Does not implicitly {@link common.Trigger.Watermark.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.Trigger.Watermark
             * @static
             * @param {common.Trigger.IWatermark} message Watermark message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Watermark.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Watermark message from the specified reader or buffer.
             * @function decode
             * @memberof common.Trigger.Watermark
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.Trigger.Watermark} Watermark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Watermark.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Trigger.Watermark();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.markTime = $root.common.Time.decode(reader, reader.uint32());
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
             * Decodes a Watermark message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.Trigger.Watermark
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.Trigger.Watermark} Watermark
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Watermark.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Watermark message.
             * @function verify
             * @memberof common.Trigger.Watermark
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Watermark.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.markTime != null && message.hasOwnProperty("markTime")) {
                    var error = $root.common.Time.verify(message.markTime);
                    if (error)
                        return "markTime." + error;
                }
                return null;
            };

            /**
             * Creates a Watermark message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.Trigger.Watermark
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.Trigger.Watermark} Watermark
             */
            Watermark.fromObject = function fromObject(object) {
                if (object instanceof $root.common.Trigger.Watermark)
                    return object;
                var message = new $root.common.Trigger.Watermark();
                if (object.markTime != null) {
                    if (typeof object.markTime !== "object")
                        throw TypeError(".common.Trigger.Watermark.markTime: object expected");
                    message.markTime = $root.common.Time.fromObject(object.markTime);
                }
                return message;
            };

            /**
             * Creates a plain object from a Watermark message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.Trigger.Watermark
             * @static
             * @param {common.Trigger.Watermark} message Watermark
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Watermark.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.markTime = null;
                if (message.markTime != null && message.hasOwnProperty("markTime"))
                    object.markTime = $root.common.Time.toObject(message.markTime, options);
                return object;
            };

            /**
             * Converts this Watermark to JSON.
             * @function toJSON
             * @memberof common.Trigger.Watermark
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Watermark.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Watermark
             * @function getTypeUrl
             * @memberof common.Trigger.Watermark
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Watermark.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/common.Trigger.Watermark";
            };

            return Watermark;
        })();

        return Trigger;
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

    common.Time = (function() {

        /**
         * Properties of a Time.
         * @memberof common
         * @interface ITime
         * @property {number|Long|null} [millis] Time millis
         * @property {number|Long|null} [seconds] Time seconds
         * @property {number|null} [minutes] Time minutes
         * @property {number|null} [hours] Time hours
         */

        /**
         * Constructs a new Time.
         * @memberof common
         * @classdesc Represents a Time.
         * @implements ITime
         * @constructor
         * @param {common.ITime=} [properties] Properties to set
         */
        function Time(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Time millis.
         * @member {number|Long} millis
         * @memberof common.Time
         * @instance
         */
        Time.prototype.millis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Time seconds.
         * @member {number|Long} seconds
         * @memberof common.Time
         * @instance
         */
        Time.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Time minutes.
         * @member {number} minutes
         * @memberof common.Time
         * @instance
         */
        Time.prototype.minutes = 0;

        /**
         * Time hours.
         * @member {number} hours
         * @memberof common.Time
         * @instance
         */
        Time.prototype.hours = 0;

        /**
         * Creates a new Time instance using the specified properties.
         * @function create
         * @memberof common.Time
         * @static
         * @param {common.ITime=} [properties] Properties to set
         * @returns {common.Time} Time instance
         */
        Time.create = function create(properties) {
            return new Time(properties);
        };

        /**
         * Encodes the specified Time message. Does not implicitly {@link common.Time.verify|verify} messages.
         * @function encode
         * @memberof common.Time
         * @static
         * @param {common.ITime} message Time message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Time.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.millis != null && Object.hasOwnProperty.call(message, "millis"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.millis);
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.seconds);
            if (message.minutes != null && Object.hasOwnProperty.call(message, "minutes"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.minutes);
            if (message.hours != null && Object.hasOwnProperty.call(message, "hours"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.hours);
            return writer;
        };

        /**
         * Encodes the specified Time message, length delimited. Does not implicitly {@link common.Time.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Time
         * @static
         * @param {common.ITime} message Time message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Time.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Time message from the specified reader or buffer.
         * @function decode
         * @memberof common.Time
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Time} Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Time.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Time();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.millis = reader.uint64();
                        break;
                    }
                case 2: {
                        message.seconds = reader.uint64();
                        break;
                    }
                case 3: {
                        message.minutes = reader.uint32();
                        break;
                    }
                case 4: {
                        message.hours = reader.uint32();
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
         * Decodes a Time message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Time
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Time} Time
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Time.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Time message.
         * @function verify
         * @memberof common.Time
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Time.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.millis != null && message.hasOwnProperty("millis"))
                if (!$util.isInteger(message.millis) && !(message.millis && $util.isInteger(message.millis.low) && $util.isInteger(message.millis.high)))
                    return "millis: integer|Long expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                    return "seconds: integer|Long expected";
            if (message.minutes != null && message.hasOwnProperty("minutes"))
                if (!$util.isInteger(message.minutes))
                    return "minutes: integer expected";
            if (message.hours != null && message.hasOwnProperty("hours"))
                if (!$util.isInteger(message.hours))
                    return "hours: integer expected";
            return null;
        };

        /**
         * Creates a Time message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Time
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Time} Time
         */
        Time.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Time)
                return object;
            var message = new $root.common.Time();
            if (object.millis != null)
                if ($util.Long)
                    (message.millis = $util.Long.fromValue(object.millis)).unsigned = true;
                else if (typeof object.millis === "string")
                    message.millis = parseInt(object.millis, 10);
                else if (typeof object.millis === "number")
                    message.millis = object.millis;
                else if (typeof object.millis === "object")
                    message.millis = new $util.LongBits(object.millis.low >>> 0, object.millis.high >>> 0).toNumber(true);
            if (object.seconds != null)
                if ($util.Long)
                    (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = true;
                else if (typeof object.seconds === "string")
                    message.seconds = parseInt(object.seconds, 10);
                else if (typeof object.seconds === "number")
                    message.seconds = object.seconds;
                else if (typeof object.seconds === "object")
                    message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber(true);
            if (object.minutes != null)
                message.minutes = object.minutes >>> 0;
            if (object.hours != null)
                message.hours = object.hours >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Time message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Time
         * @static
         * @param {common.Time} message Time
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Time.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.millis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.millis = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seconds = options.longs === String ? "0" : 0;
                object.minutes = 0;
                object.hours = 0;
            }
            if (message.millis != null && message.hasOwnProperty("millis"))
                if (typeof message.millis === "number")
                    object.millis = options.longs === String ? String(message.millis) : message.millis;
                else
                    object.millis = options.longs === String ? $util.Long.prototype.toString.call(message.millis) : options.longs === Number ? new $util.LongBits(message.millis.low >>> 0, message.millis.high >>> 0).toNumber(true) : message.millis;
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (typeof message.seconds === "number")
                    object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                else
                    object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber(true) : message.seconds;
            if (message.minutes != null && message.hasOwnProperty("minutes"))
                object.minutes = message.minutes;
            if (message.hours != null && message.hasOwnProperty("hours"))
                object.hours = message.hours;
            return object;
        };

        /**
         * Converts this Time to JSON.
         * @function toJSON
         * @memberof common.Time
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Time.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Time
         * @function getTypeUrl
         * @memberof common.Time
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Time.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Time";
        };

        return Time;
    })();

    return common;
})();

module.exports = $root;
