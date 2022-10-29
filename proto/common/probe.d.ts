import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

    /** Properties of a ProbeRequest. */
    interface IProbeRequest {

        /** ProbeRequest nodeType */
        nodeType?: (common.ProbeRequest.NodeType|null);

        /** ProbeRequest probeType */
        probeType?: (common.ProbeRequest.ProbeType|null);
    }

    /** Represents a ProbeRequest. */
    class ProbeRequest implements IProbeRequest {

        /**
         * Constructs a new ProbeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IProbeRequest);

        /** ProbeRequest nodeType. */
        public nodeType: common.ProbeRequest.NodeType;

        /** ProbeRequest probeType. */
        public probeType: common.ProbeRequest.ProbeType;

        /**
         * Creates a new ProbeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProbeRequest instance
         */
        public static create(properties?: common.IProbeRequest): common.ProbeRequest;

        /**
         * Encodes the specified ProbeRequest message. Does not implicitly {@link common.ProbeRequest.verify|verify} messages.
         * @param message ProbeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IProbeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProbeRequest message, length delimited. Does not implicitly {@link common.ProbeRequest.verify|verify} messages.
         * @param message ProbeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IProbeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProbeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProbeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ProbeRequest;

        /**
         * Decodes a ProbeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProbeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ProbeRequest;

        /**
         * Verifies a ProbeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProbeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProbeRequest
         */
        public static fromObject(object: { [k: string]: any }): common.ProbeRequest;

        /**
         * Creates a plain object from a ProbeRequest message. Also converts values to other types if specified.
         * @param message ProbeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ProbeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProbeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProbeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ProbeRequest {

        /** NodeType enum. */
        enum NodeType {
            Coordinator = 0,
            TaskWorker = 1,
            Connector = 2
        }

        /** ProbeType enum. */
        enum ProbeType {
            Liveness = 0,
            Readiness = 1
        }
    }

    /** Properties of a ProbeResponse. */
    interface IProbeResponse {

        /** ProbeResponse memory */
        memory?: (number|null);

        /** ProbeResponse cpu */
        cpu?: (number|null);

        /** ProbeResponse available */
        available?: (boolean|null);
    }

    /** Represents a ProbeResponse. */
    class ProbeResponse implements IProbeResponse {

        /**
         * Constructs a new ProbeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IProbeResponse);

        /** ProbeResponse memory. */
        public memory: number;

        /** ProbeResponse cpu. */
        public cpu: number;

        /** ProbeResponse available. */
        public available: boolean;

        /**
         * Creates a new ProbeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProbeResponse instance
         */
        public static create(properties?: common.IProbeResponse): common.ProbeResponse;

        /**
         * Encodes the specified ProbeResponse message. Does not implicitly {@link common.ProbeResponse.verify|verify} messages.
         * @param message ProbeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IProbeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProbeResponse message, length delimited. Does not implicitly {@link common.ProbeResponse.verify|verify} messages.
         * @param message ProbeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IProbeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProbeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProbeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.ProbeResponse;

        /**
         * Decodes a ProbeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProbeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.ProbeResponse;

        /**
         * Verifies a ProbeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProbeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProbeResponse
         */
        public static fromObject(object: { [k: string]: any }): common.ProbeResponse;

        /**
         * Creates a plain object from a ProbeResponse message. Also converts values to other types if specified.
         * @param message ProbeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.ProbeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProbeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProbeResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventRequest. */
    interface IEventRequest {

        /** EventRequest data */
        data?: (Uint8Array|null);
    }

    /** Represents an EventRequest. */
    class EventRequest implements IEventRequest {

        /**
         * Constructs a new EventRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEventRequest);

        /** EventRequest data. */
        public data: Uint8Array;

        /**
         * Creates a new EventRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventRequest instance
         */
        public static create(properties?: common.IEventRequest): common.EventRequest;

        /**
         * Encodes the specified EventRequest message. Does not implicitly {@link common.EventRequest.verify|verify} messages.
         * @param message EventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventRequest message, length delimited. Does not implicitly {@link common.EventRequest.verify|verify} messages.
         * @param message EventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EventRequest;

        /**
         * Decodes an EventRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EventRequest;

        /**
         * Verifies an EventRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventRequest
         */
        public static fromObject(object: { [k: string]: any }): common.EventRequest;

        /**
         * Creates a plain object from an EventRequest message. Also converts values to other types if specified.
         * @param message EventRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EventResponse. */
    interface IEventResponse {

        /** EventResponse code */
        code?: (number|null);

        /** EventResponse msg */
        msg?: (string|null);
    }

    /** Represents an EventResponse. */
    class EventResponse implements IEventResponse {

        /**
         * Constructs a new EventResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEventResponse);

        /** EventResponse code. */
        public code: number;

        /** EventResponse msg. */
        public msg: string;

        /**
         * Creates a new EventResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventResponse instance
         */
        public static create(properties?: common.IEventResponse): common.EventResponse;

        /**
         * Encodes the specified EventResponse message. Does not implicitly {@link common.EventResponse.verify|verify} messages.
         * @param message EventResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventResponse message, length delimited. Does not implicitly {@link common.EventResponse.verify|verify} messages.
         * @param message EventResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.EventResponse;

        /**
         * Decodes an EventResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.EventResponse;

        /**
         * Verifies an EventResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventResponse
         */
        public static fromObject(object: { [k: string]: any }): common.EventResponse;

        /**
         * Creates a plain object from an EventResponse message. Also converts values to other types if specified.
         * @param message EventResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.EventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EventResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
