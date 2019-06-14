export default function pushSettings(sendMessage, timeout) {
  function recursive(options, callback) {
    sendMessage(options, (err) => {
      if (err) {
        setTimeout(() => recursive(options, callback), timeout);
      } else {
        console.log('Successful Setup!');
        if (typeof callback === 'function') callback();
      }
    });
  }

  return recursive;
}