import makeSendMessage from './sendMessage';
import makeOnInstall from './onInstall';
import makePushInstall from './pushSettings';

const extId = process.env.EXTENSION_ID;
const timeout = process.env.REATTEMPT_TIMEOUT;

const sendMessage = makeSendMessage(extId);

export function onInstall(callback) {
  makeOnInstall(sendMessage, timeout)(callback);
}

export function pushSettings(options, callback) {
  makePushInstall(sendMessage, timeout)(options, callback);
}