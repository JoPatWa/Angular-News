import { HeadlinesModule } from './headlines.module';

describe('HeadlinesModule', () => {
  let headlinesModule: HeadlinesModule;

  beforeEach(() => {
    headlinesModule = new HeadlinesModule();
  });

  it('should create an instance', () => {
    expect(headlinesModule).toBeTruthy();
  });
});
