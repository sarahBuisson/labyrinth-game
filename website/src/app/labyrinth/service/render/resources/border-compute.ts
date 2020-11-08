export class BorderTemplate {
  topTemplate = "";
  bottomTemplate = "";
  leftTemplate = "";
  rightTemplate = "";
  topLeftTemplate = "";
  topRightTemplate = "";
  bottomLeftTemplate = "";
  bottomRightTemplate = "";
  leftPartWidth = 1;
  topSideWidth = 1;
  topPartHeight = 1;
  leftSideHeight = 1;
  rightPartWidth = 1;
  bottomPartHeight = 1;
}


export function asciiStringToGridObject(str, leftCornerWidth, topSideWidth,
                                        leftCornerHeight, leftSideHeight): BorderTemplate {
  try {
    let templates = new BorderTemplate();

    let strR = str.split("\n")

    for (let y = 0; y < leftCornerHeight; y++) {
      for (let x = 0; x < leftCornerWidth; x++) {
        templates.topLeftTemplate += strR[y][x]
      }
      templates.topLeftTemplate += "\n"
      for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
        templates.topTemplate += strR[y][x]
      }
      templates.topTemplate += "\n"
      for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
        templates.topRightTemplate += strR[y][x]
      }
      templates.topRightTemplate += "\n"
    }

    for (let y = leftCornerHeight; y < leftCornerHeight + leftSideHeight; y++) {
      for (let x = 0; x < leftCornerWidth; x++) {
        templates.leftTemplate += strR[y][x]
      }
      templates.leftTemplate += "\n"
      for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
        templates.rightTemplate += strR[y][x]
      }
      templates.rightTemplate += "\n"
    }

    for (let y = leftCornerHeight + leftSideHeight; y < strR.length; y++) {
      for (let x = 0; x < leftCornerWidth; x++) {
        templates.bottomLeftTemplate += strR[y][x]
      }
      templates.bottomLeftTemplate += "\n"
      for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
        templates.bottomTemplate += strR[y][x]
      }

      templates.bottomTemplate += "\n"
      for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
        templates.bottomRightTemplate += strR[y][x]
      }
      templates.bottomRightTemplate += "\n"
    }
    Object.keys(templates).forEach((k) => {
        if (templates[k].slice) {
          if(templates[k].endsWith("\n"))
            templates[k] = templates[k].slice(0, -1);
          //add a space at the end so the template with \n have the same length than the other
          if ((k != 'bottomTemplate' && k != 'topTemplate')) {
            templates[k] += " "
          }
        }
      }
    )
    let topRightFirstLine = templates.topRightTemplate.split("\n")[0];
    let borderTemplate = {
      ...templates,
      leftPartWidth: leftCornerWidth,
      topSideWidth,
      leftSideHeight,
      rightPartWidth: topRightFirstLine.length + ( templates.topRightTemplate.includes('\n') ? 1 : 0),
      topPartHeight: leftCornerHeight,
      bottomPartHeight: templates.bottomLeftTemplate.split("\n").length,
    } as BorderTemplate;



    return borderTemplate;
  } catch (e) {
    console.error(e)
  }
}
