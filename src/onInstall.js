export default function onInstall(sendMessage, timeout, debug = false) {
  function recursive(callback) {
    sendMessage({ type: 'FETCH_INSTALLATION_DETAILS' }, (err, response) => {
      if (err) {
        if (debug) console.error(err);
        setTimeout(() => recursive(callback), timeout);
      }
      else {
        if (debug) console.log('Successful Installation!');
        if (typeof callback === 'function') callback(response);
      }
    });
  }

  return recursive;
}
