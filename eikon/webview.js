module.exports = (Franz) => {
  function getMessages() {
    const elements = document.querySelectorAll('.unread-count')
    let count = 0
    for (let i = 0; i < elements.length; i++) {
      count += parseInt(elements[i].firstChild.nodeValue, 10)
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
