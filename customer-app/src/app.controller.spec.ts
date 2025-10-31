import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(() => {
    const service = new AppService();
    controller = new AppController(service);
  });

  it('should return "Hello World!"', () => {
    expect(controller.getHello()).toBe('Hello World!');
  });
});
