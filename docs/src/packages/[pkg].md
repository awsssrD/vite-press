## package name: {{ $params.pkg }}

[home](/)

# 12121 {#my-anchor}

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

:tada: :100:

[[toc]]

::: info
1212
:::

::: details

```js ts:line-numbers {1}
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
      msg: "Removed", // [!code --]
      msg: "Added", // [!code ++]
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

:::

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

<!-- ![An image](/xiaoxin.jpg) -->

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'

// params 是一个 Vue ref
const { params,page } = useData()

console.log(params.value.pkg)
console.log(page.value)
</script>
