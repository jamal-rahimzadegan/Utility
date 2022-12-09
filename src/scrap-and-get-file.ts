export default function scrapAndGetFile() {
  const URL = 'https://soft98.ir/multi-media/convert/15240-mkvtoolnix.html'

  fetch(URL)
    .then((response) => response.text())
    .then((html) => {
      // Convert the HTML string into a document object
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const fileUrl = doc.getElementsByClassName('download-list-link')[0].href

      downloadFile(fileUrl, 'FILE_NAME.zip')
    })
    .catch((err) => console.error('Something went wrong.', err))
}

function downloadFile(url: string, fileName: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  document.body.removeChild(link)
}
