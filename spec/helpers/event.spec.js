import * as event from '../../src/helpers/event';

describe('event', () => {
  describe('handlerValue', () => {
    it('returns an event handler function, invoked with the event target\'s value', () => {
      const func = jest.fn();
      const handler = event.handlerValue(func);
      const mockEvent = { target: { value: 1 }};
      handler(mockEvent);
      expect(func).toBeCalledWith(1);
    });
  });

  describe('preventDefault', () => {
    it('calls events prevent default', () => {
      const preventDefault = jest.fn();
      const mockEvent = { preventDefault };
      event.preventDefault(mockEvent);
      expect(preventDefault).toBeCalled();
    });
  });
});
