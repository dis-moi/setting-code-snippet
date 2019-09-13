export default function pushSettings(sendMessage, timeout, debug = false) {
  function recursive(options, callback) {
    sendMessage(options, (err) => {
      if (err) {
        if (debug) console.error(err);
        setTimeout(() => recursive(options, callback), timeout);
      } else {
        if (debug) console.log('Successful Setup!');
        if (typeof callback === 'function') callback();
      }
    });
  }

  return recursive;
}
