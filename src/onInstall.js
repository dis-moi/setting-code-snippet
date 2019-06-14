export default function onInstall(sendMessage, timeout) {
  function recursive(callback) {
    sendMessage(null, (err) => {
      if (err) {
        setTimeout(() => recursive(callback), timeout);
      }
      else {
        console.log('Successful Installation!');
        callback();
      }
    });
  }

  return recursive;
}
