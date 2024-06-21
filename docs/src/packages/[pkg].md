## package name: {{ $params.pkg }}
<script setup>
import { useData } from 'vitepress'

// params 是一个 Vue ref
const { params } = useData()

console.log(params.value.pkg)
</script>