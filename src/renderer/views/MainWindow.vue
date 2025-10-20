<template>
  <div class="main-window">
    <n-button text class="help-link" @click="$router.push({ name: 'Help' })">使用说明</n-button>
    <div class="input-container">
      <n-input
        :disabled="loading||!showKg"
        maxlength="1024"
        show-count
        clearable
        v-model:value="originText"
        type="textarea"
        placeholder="请输入文本"
        :autosize="{ minRows: 5, maxRows: 7 }"
        class="default-content"
        @change="handleInputChange"
      >
      </n-input>
      <n-button v-if="showKg" :loading="loading" class="generator-button kg" type="primary" @click="handleText">{{ buttonLabel }}</n-button>
      <n-button v-if="!showKg" class="generator-button ppt" type="primary" @click="handleChatGPT">生成PPT</n-button>
      <n-button text class="theme-select-button" @click="showThemeModal">选择主题</n-button>
      <n-button :disabled="loading" class="reset-button" type="primary" secondary circle @click="handleReset">
        <template #icon>
        <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M6.03 2.47a.75.75 0 0 1 0 1.06L4.81 4.75H11A6.25 6.25 0 1 1 4.75 11a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 0 11 6.25H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0z" fill="currentColor"></path></g></svg></n-icon>
      </template>
      </n-button>
      <n-modal v-model:show="themeModalVisible">
        <n-card
          class="theme-modal-container"
          title="选择主题"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <n-select v-model:value="currentTheme" :options="themeOptions"  clearable></n-select>
          <div class="preview-container">
            <n-image :src="currentTheme ? imageSrcs[currentTheme] : ''" width="300" />
          </div>
        </n-card>
      </n-modal>
    </div>
  </div>
  <div class="kg-contaner">
    <KnowledgeGraphByEcharts></KnowledgeGraphByEcharts>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import useData from '../hooks/useData'
import usePptx from '../hooks/usePptx'
import KnowledgeGraphByEcharts from '../components/KnowledgeGraphByEcharts.vue'
import { useStore } from '../store'
//default处理
const { getPPTData,pptPrompt,kgPrompt,getKgData } = useData()
const { writeFileByWhu } = usePptx()
const store = useStore()
const originText = ref('')
const showKg = ref(true)
const loading = ref(false)
const buttonLabel = ref('获取知识图谱')
const themeOptions = [
  {
    label: 'Theme 1',
    value: 'Theme 1',
  },
  {
    label: 'Theme 2',
    value: 'Theme 2',
  },
  {
    label: 'Theme 3',
    value: 'Theme 3',
  },
]
const currentTheme = ref(null)
const imageSrcs = ref({
  'Theme 1': '../assets/Theme1.png',
  'Theme 2': '../assets/Theme2.png',
  'Theme 3': '../assets/Theme3.png',
})
const themeModalVisible = ref(false)

const showThemeModal = () => {
  themeModalVisible.value = true
}

const handleReset = () => {
  console.log(currentTheme.value)
  originText.value = '';
  showKg.value = true;
  loading.value = false;
  currentTheme.value = null;
  themeModalVisible.value = false;
  buttonLabel.value = '获取知识图谱'
  store.setMessage('');
  store.setPptData('');
  store.setKgData({ nodes: [], links: [] });
}

const handleText = async () => {
  loading.value = true
  const requestPptPrompt = pptPrompt + originText.value
  const requestKgPrompt = kgPrompt + originText.value
  const kgData = await getKgData(requestKgPrompt)
  store.setKgData(kgData)
  buttonLabel.value = '获取PPT数据中'
  const pptData = await getPPTData(requestPptPrompt)
  store.setPptData(pptData)
  loading.value = false
  showKg.value = false
}

const handleInputChange = (text: string) => {
  store.setMessage(text)
}

const handleChatGPT = () => {
  store.setMessage('');
  buttonLabel.value = '获取知识图谱'
  showKg.value = true
  writeFileByWhu(store.pptData)
}
</script>
<style scoped>
.main-window {
  height: 35%;
  display: flex;
  margin: 0 12px;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
}

.input-container {
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.default-content {
  margin: 20px;
  width: 40%;
  max-width: 500px;
}

.theme-select-button {
  margin: 10px;
}

.theme-modal-container {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: #fff;
}
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.kg-contaner {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  margin: 6px 12px 0;
  flex: 1;
}
.help-link {
  position: absolute;
  right: 16px;
  top: 10px;
}
</style>
