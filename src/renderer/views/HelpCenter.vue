<template>
    <div class="help-center">
    <n-button text class="back-link" @click="$router.push({ name: 'MainWindow' })">返回主页</n-button>
      <div class="header">
        <n-h1>使用说明</n-h1>
      <n-p>欢迎使用本系统，本系统旨在帮助用户将纯文字转换为可视化的知识图谱，并生成对应的PPT教案。</n-p>
      </div>
      <div class="container">
        <n-h2>使用方法</n-h2>
      <n-text class="help-content">1. 在上方文本框中输入纯文字资料，点击获取知识图谱按钮。</n-text>
      <n-text class="help-content">2. 等待loading状态结束，下方知识图谱将实时更新。</n-text>
      <n-text class="help-content">3. 在生成PPT教案前，您可以选择不同的PPT模板主题。</n-text>
      <n-text class="help-content">4. 点击“生成PPT”按钮，等待PPT生成并下载到本地。</n-text>
      <n-text class="help-content">5. 点击“reset”按钮，将系统恢复初始状态。</n-text>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .help-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:12px;
    height: 100%;
    background-color: #fff;
  }
  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* .help-content{
    align-self:center;
  } */
  .back-link{
  position:absolute;
  right:22px;
  top:22px;
}
  </style>
  