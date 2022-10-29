import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace common. */
export namespace common {

    /** Properties of a KeyedDataEvent. */
    interface IKeyedDataEvent {

        /** KeyedDataEvent jobId */
        jobId?: (common.IJobId|null);

        /** KeyedDataEvent key */
        key?: (common.IEntry|null);

        /** KeyedDataEvent toOperatorId */
        toOperatorId?: (number|null);

        /** KeyedDataEvent data */
        data?: (common.IEntry[]|null);

        /** KeyedDataEvent eventTime */
        eventTime?: (google.protobuf.ITimestamp|null);

        /** KeyedDataEvent processTime */
        processTime?: (google.protobuf.ITimestamp|null);

        /** KeyedDataEvent fromOperatorId */
        fromOperatorId?: (number|null);
    }

    /** Represents a KeyedDataEvent. */
    class KeyedDataEvent implements IKeyedDataEvent {

        /**
         * Constructs a new KeyedDataEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IKeyedDataEvent);

        /** KeyedDataEvent jobId. */
        public jobId?: (common.IJobId|null);

        /** KeyedDataEvent key. */
        public key?: (common.IEntry|null);

        /** KeyedDataEvent toOperatorId. */
        public toOperatorId: number;

        /** KeyedDataEvent data. */
        public data: common.IEntry[];

        /** KeyedDataEvent eventTime. */
        public eventTime?: (google.protobuf.ITimestamp|null);

        /** KeyedDataEvent processTime. */
        public processTime?: (google.protobuf.ITimestamp|null);

        /** KeyedDataEvent fromOperatorId. */
        public fromOperatorId: number;

        /**
         * Creates a new KeyedDataEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyedDataEvent instance
         */
        public static create(properties?: common.IKeyedDataEvent): common.KeyedDataEvent;

        /**
         * Encodes the specified KeyedDataEvent message. Does not implicitly {@link common.KeyedDataEvent.verify|verify} messages.
         * @param message KeyedDataEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IKeyedDataEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyedDataEvent message, length delimited. Does not implicitly {@link common.KeyedDataEvent.verify|verify} messages.
         * @param message KeyedDataEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IKeyedDataEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyedDataEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyedDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.KeyedDataEvent;

        /**
         * Decodes a KeyedDataEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyedDataEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.KeyedDataEvent;

        /**
         * Verifies a KeyedDataEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyedDataEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyedDataEvent
         */
        public static fromObject(object: { [k: string]: any }): common.KeyedDataEvent;

        /**
         * Creates a plain object from a KeyedDataEvent message. Also converts values to other types if specified.
         * @param message KeyedDataEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.KeyedDataEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyedDataEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyedDataEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry dataType */
        dataType?: (common.DataTypeEnum|null);

        /** Entry value */
        value?: (Uint8Array|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEntry);

        /** Entry dataType. */
        public dataType: common.DataTypeEnum;

        /** Entry value. */
        public value: Uint8Array;

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: common.IEntry): common.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link common.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link common.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): common.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JobId. */
    interface IJobId {

        /** JobId streamId */
        streamId?: (number|null);
    }

    /** JobId, represents a stream job. */
    class JobId implements IJobId {

        /**
         * Constructs a new JobId.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IJobId);

        /** JobId streamId. */
        public streamId: number;

        /**
         * Creates a new JobId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JobId instance
         */
        public static create(properties?: common.IJobId): common.JobId;

        /**
         * Encodes the specified JobId message. Does not implicitly {@link common.JobId.verify|verify} messages.
         * @param message JobId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IJobId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JobId message, length delimited. Does not implicitly {@link common.JobId.verify|verify} messages.
         * @param message JobId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IJobId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JobId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JobId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.JobId;

        /**
         * Decodes a JobId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JobId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.JobId;

        /**
         * Verifies a JobId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JobId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JobId
         */
        public static fromObject(object: { [k: string]: any }): common.JobId;

        /**
         * Creates a plain object from a JobId message. Also converts values to other types if specified.
         * @param message JobId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.JobId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JobId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JobId
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response status */
        status?: (string|null);

        /** Response errMsg */
        errMsg?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IResponse);

        /** Response status. */
        public status: string;

        /** Response errMsg. */
        public errMsg: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: common.IResponse): common.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link common.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link common.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): common.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HostAddr. */
    interface IHostAddr {

        /** HostAddr host */
        host?: (string|null);

        /** HostAddr port */
        port?: (number|null);
    }

    /** Represents a HostAddr. */
    class HostAddr implements IHostAddr {

        /**
         * Constructs a new HostAddr.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IHostAddr);

        /** HostAddr host. */
        public host: string;

        /** HostAddr port. */
        public port: number;

        /**
         * Creates a new HostAddr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostAddr instance
         */
        public static create(properties?: common.IHostAddr): common.HostAddr;

        /**
         * Encodes the specified HostAddr message. Does not implicitly {@link common.HostAddr.verify|verify} messages.
         * @param message HostAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHostAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HostAddr message, length delimited. Does not implicitly {@link common.HostAddr.verify|verify} messages.
         * @param message HostAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IHostAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.HostAddr;

        /**
         * Decodes a HostAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HostAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.HostAddr;

        /**
         * Verifies a HostAddr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HostAddr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostAddr
         */
        public static fromObject(object: { [k: string]: any }): common.HostAddr;

        /**
         * Creates a plain object from a HostAddr message. Also converts values to other types if specified.
         * @param message HostAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.HostAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HostAddr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Sort. */
    interface ISort {

        /** Sort fieldName */
        fieldName?: (string|null);

        /** Sort type */
        type?: (common.Sort.SortType|null);
    }

    /** Represents a Sort. */
    class Sort implements ISort {

        /**
         * Constructs a new Sort.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISort);

        /** Sort fieldName. */
        public fieldName: string;

        /** Sort type. */
        public type: common.Sort.SortType;

        /**
         * Creates a new Sort instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sort instance
         */
        public static create(properties?: common.ISort): common.Sort;

        /**
         * Encodes the specified Sort message. Does not implicitly {@link common.Sort.verify|verify} messages.
         * @param message Sort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sort message, length delimited. Does not implicitly {@link common.Sort.verify|verify} messages.
         * @param message Sort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sort message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Sort;

        /**
         * Decodes a Sort message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Sort;

        /**
         * Verifies a Sort message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sort message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sort
         */
        public static fromObject(object: { [k: string]: any }): common.Sort;

        /**
         * Creates a plain object from a Sort message. Also converts values to other types if specified.
         * @param message Sort
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Sort, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sort to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sort
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Sort {

        /** SortType enum. */
        enum SortType {
            DESC = 0,
            ASC = 1
        }
    }

    /** DataTypeEnum enum. */
    enum DataTypeEnum {
        DATA_TYPE_ENUM_UNSPECIFIED = 0,
        DATA_TYPE_ENUM_BIGINT = 1,
        DATA_TYPE_ENUM_NUMBER = 2,
        DATA_TYPE_ENUM_NULL = 3,
        DATA_TYPE_ENUM_STRING = 4,
        DATA_TYPE_ENUM_BOOLEAN = 5,
        DATA_TYPE_ENUM_OBJECT = 6
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
