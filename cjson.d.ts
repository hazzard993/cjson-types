/** @noSelfInFile */

export type CJSONInstance = typeof import("./cjson");

/**
 * Can be used to instantiate an independent copy of the Lua CJSON module.
 *
 * The new module has a separate persistent encoding buffer, and default settings.
 */
declare function create(): CJSONInstance;

export { create as new };

export function encode(value: any): string;

/**
 * Will deserialise any UTF-8 JSON string into a Lua value or table.
 *
 * @param json_text Text to deserialize
 */
export function decode(json_text: string): any;

export function decode_invalid_numbers(setting?: boolean): boolean;

export function decode_max_depth(depth?: number): number;

export function encode_invalid_numbers(setting?: boolean | "null"): boolean | "null";

export function encode_keep_buffer(keep?: boolean): boolean;

export function encode_max_depth(depth?: number): number;

export function encode_number_precision(precision?: number): number;

/**
 * @tupleReturn
 */
export function encode_sparse_array(convert?: boolean, ratio?: number, safe?: number): [boolean, number, number];

/**
 * The name of the Lua CJSON module.
 */
export const _NAME: string;

/**
 * The version number of the Lua CJSON module.
 */
export const _VERSION: string;

export type NullUserData = { readonly " __lightUserData": unique symbol };

/**
 * Lua CJSON decodes JSON `null` as a Lua lightuserdata NULL pointer.
 *
 * `cjson.null` is provided for comparison.
 */
declare const Null: NullUserData;
export { Null as null };
