module.exports = (Franz) => {
  function getMessages() {
    let count = 0
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
