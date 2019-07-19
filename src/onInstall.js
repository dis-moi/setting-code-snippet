export default function onInstall(sendMessage, timeout, debug = false) {
  function recursive(callback) {
    sendMessage(null, (err) => {
      if (err) {
        if (debug) console.error(err);
        setTimeout(() => recursive(callback), timeout);
      }
      else {
        if (debug) console.log('Successful Installation!');
        if (typeof callback === 'function') callback();
      }
    });
  }

  return recursive;
}