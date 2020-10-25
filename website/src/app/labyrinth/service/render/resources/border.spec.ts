import {TestBed} from '@angular/core/testing';
import {asciiStringToGridObject} from "./border";


describe('border ', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should compute grid', () => {
    let template = "123\n" +
      "456\n"+
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


  it('should compute complexegrid', () => {
    let template = "" +
      "122333\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n";
    let actual = asciiStringToGridObject(template, 1, 2, 1, 5)
    expect(actual.topLeftTemplate).toBe("1")
    expect(actual.topTemplate).toBe("22")
    expect(actual.topRightTemplate).toBe("333")
    expect(actual.leftTemplate).toBe("4\n4\n4\n4\n4")
    expect(actual.rightTemplate).toBe("666\n666\n666\n666")
    expect(actual.bottomLeftTemplate).toBe("7")
    expect(actual.bottomTemplate).toBe("8")
    expect(actual.bottomRightTemplate).toBe("9")

    expect(actual.topPartHeight).toBe(1)
    expect(actual.leftPartWidth).toBe(1)
    expect(actual.topSideWidth).toBe(2)
    expect(actual.rightPartWidth).toBe(3)
    expect(actual.leftSideHeight).toBe(4)
    expect(actual.bottomPartHeight).toBe(5)

  });

  it('should compute complexegrid MultiGridTop', () => {
    let template = "" +
      "122333\n" +
      "122333\n" +
      "122333\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "455666\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n" +
      "788999\n";
    let actual = asciiStringToGridObject(template, 1, 2, 3, 5)



    expect(actual.topPartHeight).toBe(3)
    expect(actual.leftPartWidth).toBe(1)
    expect(actual.topSideWidth).toBe(2)
    expect(actual.rightPartWidth).toBe(3)
    expect(actual.leftSideHeight).toBe(5)
    expect(actual.bottomPartHeight).toBe(6)
    expect(actual.topLeftTemplate).toBe("1\n1\n1")
    expect(actual.topTemplate).toBe("22\n22\n22")
    expect(actual.topRightTemplate).toBe("333\n333\n333")


  });
});
