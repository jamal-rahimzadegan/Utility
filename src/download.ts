  async function download(url: string, fileName: string) {
    const response = await fetch(url)
    const blob = await response.blob()

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = fileName
    link.click()
    link.remove()

    setTimeout(() => window.URL.revokeObjectURL(link.href), 100)
  }
