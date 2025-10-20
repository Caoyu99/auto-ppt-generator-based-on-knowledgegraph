import PptxGenJS from 'pptxgenjs'

interface PPTPresentation {
  title: string
  slides: Slide[]
}

type Slide = {
  title: string
  type: '主标题' | '目录' | '内容页' | '结束页'
  content: string
}

const usePptx = () => {
  const writeFileByWhu = (content: string) => {
    //defaultLayout:10 * 5.625
    //创建ppt教案文件对象
    const pptx = new PptxGenJS()
    // 定义一个幻灯片背景模板
    pptx.defineSlideMaster({
      title: 'whu',
      background: { fill: 'ffffff' },
      margin: [0.5, 0.5, 0.5, 0.5],
      slideNumber: { x: '95%', y: '95%', color: '1D6295', fontFace: 'Microsoft YaHei UI', fontSize: 12 },
    })
    let sections : string[] = []
    if(content.indexOf('\n=====\n') !== -1) {
        sections = content.split('\n=====\n')
    }else {
      sections = content.split('=====')
    }
    // 创建PPT的主标题页
    const titleSlide = pptx.addSlide({ masterName: 'whu' })
    titleSlide.addShape(pptx.ShapeType.roundRect, {
      x: 1.8,
      y: 1.65,
      w: 10,
      h: 3,
      rectRadius: 9,
      fill: { color: '1D6295' },
    })
    titleSlide.addText(sections[0], {
      x: '40%',
      y: '50%',
      fontFace: 'Microsoft YaHei UI',
      fontSize: 48,
      color: 'ffffff',
      bold: true,
    })
    titleSlide.addShape(pptx.ShapeType.ellipse, {
      x: 1,
      y: 1,
      w: 2,
      h: 2,
    })
    titleSlide.addImage({ x: 1, y: 1, w: 1.67, h: 1.67, path: '../assets/whu.png' })

    // 创建目录页
    const tocSlide = pptx.addSlide({ masterName: 'whu' })
    tocSlide.addImage({ x: 3, y: 0.8125, w: 4, h: 4, path: '../assets/whu.png' })
    tocSlide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: '100%',
      h: '100%',
      fill: { color: 'ffffff', transparency: 10 },
    })
    tocSlide.addShape(pptx.ShapeType.roundRect, {
      x: -1.5,
      y: 1.85,
      w: 4,
      h: 2,
      rectRadius: 9,
      fill: { color: '1D6295' },
    })
    tocSlide.addText('目 录', {
      x: 0.25,
      y: 2.5125,
      fontFace: 'Microsoft YaHei UI',
      fontSize: 32,
      color: 'FFFFFF',
      bold: true,
    })
    tocSlide.addText('CONTENT', {
      x: 0,
      y: 3.1125,
      fontFace: 'Microsoft YaHei UI',
      fontSize: 32,
      color: 'FFFFFF',
      bold: true,
    })
    const tocContent = sections[1].split('\n')
    for (let i = 0; i < tocContent.length; i++) {
      tocSlide.addShape(pptx.ShapeType.rect, {
        x: 5.5,
        y: 2.1 - ((tocContent.length / 2 - i) * 2) / 7.5 + 0.5 * i,
        w: 4.5,
        h: 0.5,
        fill: { color: '1D6295' },
      })
      tocSlide.addText(tocContent[i], {
        x: 5.7,
        y: 2.3 - ((tocContent.length / 2 - i) * 2) / 7.5 + 0.5 * i,
        fontFace: 'Microsoft YaHei UI',
        fontSize: 18,
        color: 'FFFFFF',
        bold: true,
      })
    }
    // 创建内容页
    if(sections.length >= 3) {
      sections.slice(2, sections.length).forEach((section, i) => {
        const contentSlide = pptx.addSlide({ masterName: 'whu' })
        contentSlide.addShape(pptx.ShapeType.rect, {
          x: 0,
          y: 0,
          w: '100%',
          h: '12%',
          fill: { color: '1D6295' },
        })
        contentSlide.addText(tocContent[i], {
          x: 0.5,
          y: 0.3375,
          fontFace: 'Microsoft YaHei UI',
          fontSize: 24,
          color: 'FFFFFF',
        })
        contentSlide.addText(section, {
          x: 1,
          y: 2.5,
          fontFace: 'Microsoft YaHei UI',
          fontSize: 16,
          color: '000000',
        })
      })
    }

    // 创建结束页
    const endSlide = pptx.addSlide({ masterName: 'whu' })
    endSlide.addShape(pptx.ShapeType.roundRect, {
      x: 1.8,
      y: 1.65,
      w: 10,
      h: 3,
      rectRadius: 9,
      fill: { color: '1D6295' },
    })
    endSlide.addText('谢谢你的聆听', {
      x: '40%',
      y: '50%',
      fontFace: 'Microsoft YaHei UI',
      fontSize: 48,
      color: 'ffffff',
      bold: true,
    })
    endSlide.addShape(pptx.ShapeType.ellipse, {
      x: 1,
      y: 1,
      w: 2,
      h: 2,
    })
    endSlide.addImage({ x: 1, y: 1, w: 1.67, h: 1.67, path: '../assets/whu.png' })

    // 将PPT文档输出为文件
    pptx.writeFile()
  }

  const writeFileBySunny = () => {}

  const writeFileByRainbow = () => {}


  return {
    writeFileByWhu,
    writeFileBySunny,
    writeFileByRainbow
  }
}

export default usePptx
