import makePushSettings from './pushSettings';

function make(mock) {
  return makePushSettings(mock, 5000);
}

test('should return a function', () => {
  const pushSettings = make();
  expect(typeof pushSettings).toBe('function');
});

describe('when installed', () => {
  test('should send a message', () => {
    const sendMsgMock = jest.fn();
    const pushSettings = make(sendMsgMock);
    const message = 'this is a message';

    pushSettings(message);

    const [[msg]] = sendMsgMock.mock.calls;

    expect(msg).toEqual(message);
  });

  test('should call the callback', () => {
    const sendMsgMock = jest.fn((_,__) => __());
    const onInstall = make(sendMsgMock);
    const cb = jest.fn();
    const msg = 'this is a message';

    onInstall(msg, cb);

    expect(cb).toHaveBeenCalled();
  });
});

describe('when not installed', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
  });

  test('should not call the callback', () => {
    const sendMsgMock = jest.fn((_,__) => __(new Error('not installed')));
    const pushSettings = make(sendMsgMock);
    const cb = jest.fn();
    const msg = 'this is a message';

    pushSettings(msg, cb);

    expect(cb).not.toBeCalled();
  });

  test('should follow up and try again', () => {
    const sendMsgMock = jest.fn((_,__) => __(new Error('not installed')));
    const pushSettings = make(sendMsgMock);
    const cb = jest.fn();
    const msg = 'this is a message';

    pushSettings(msg, cb);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(sendMsgMock).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(sendMsgMock).toHaveBeenCalledTimes(2);

    expect(cb).not.toBeCalled();
  });


  test('should eventually call the callback when finally installed', () => {
    const sendMsgMock = jest.fn((_,__) => __())
      .mockImplementationOnce((_,__) => __(new Error('not installed')))
      .mockImplementationOnce((_,__) => __(new Error('not yet installed')));
    const pushSettings = make(sendMsgMock);
    const cb = jest.fn();
    const msg = 'this is a message';

    pushSettings(msg, cb);

    expect(sendMsgMock).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(cb).not.toBeCalled();

    jest.runOnlyPendingTimers();

    expect(sendMsgMock).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(cb).not.toBeCalled();

    jest.runAllTimers();

    expect(sendMsgMock).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(cb).toHaveBeenCalledTimes(1);
  });

});
