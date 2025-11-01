import Giscus from '@giscus/react'

export default function Comments() {
  return (
    <div className="comments-section">
      <Giscus
        id="comments"
        repo="chrisyy2003/chrisyy2003.github.io" // 需要替换为实际的 GitHub 仓库
        repoId="R_kgDOISH-pg" // 需要替换为实际的仓库 ID
        category="评论"
        categoryId="DIC_kwDOISH-ps4CSepy" // 需要替换为实际的分类 ID
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}
