const ns = typeof chrome === 'undefined' ? browser : chrome;

export default function sendMessage(extId) {
  return (msg, callback) => {
    try {
      ns.runtime.sendMessage(extId, !!msg && typeof(msg) === 'object' ? msg : {}, () => {
        callback(ns.runtime.lastError || undefined);
      });
    }
    catch (e) {
      callback(e);
    }
  };
}