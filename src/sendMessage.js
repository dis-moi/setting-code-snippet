export default function sendMessage(extId) {
  return (msg, callback) => {
    try {
      chrome.runtime.sendMessage(extId, msg, () => {
        callback(chrome.runtime.lastError || undefined);
      });
    }
    catch (e) {
      callback(e);
    }
  };
}