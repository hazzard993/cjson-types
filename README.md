# CJSON Types

TypeScript definitions for the [CJSON lua library](https://www.kyne.com.au/~mark/software/lua-cjson.php).

How to add the definitions via yarn:

```sh
yarn add hazzard993/cjson-types
```

```ts
import * as cjson from "cjson";
const cjson2 = cjson.new();

text = cjson.encode(value);
value = cjson.decode(text);

setting = cjson.decode_invalid_numbers(setting);
setting = cjson.encode_invalid_numbers(setting);

keep = cjson.encode_keep_buffer(keep);

depth = cjson.encode_max_depth(depth);
depth = cjson.decode_max_depth(depth);
[convert, ratio, safe] = cjson.encode_sparse_array(convert, ratio, safe);
```
