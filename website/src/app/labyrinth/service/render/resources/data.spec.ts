import {TestBed} from '@angular/core/testing';
import {asciiStringToGridObject} from "./border";


describe('AsciiRenderService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should compute grid', () => {
    let template = "123\n" +
      "456\n"
    "789";
    let actual = asciiStringToGridObject(template, 1, 1, 1, 1)
    expect(actual.topLeftTemplate).toBe("1")
    expect(actual.topTemplate).toBe("2")
    expect(actual.topRightTemplate).toBe("3")
    expect(actual.leftTemplate).toBe("4")
    expect(actual.rightTemplate).toBe("6")
    expect(actual.bottomLeftTemplate).toBe("7")
    expect(actual.bottomTemplate).toBe("8")
    expect(actual.bottomRightTemplate).toBe("9")

  });
});
