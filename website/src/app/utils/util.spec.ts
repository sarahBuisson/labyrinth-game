import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// @ts-ignore
import gameRules from 'gameRules';
import {getFromKotlin, getJsViewFromKotlin, kotlinProxyToJsView} from '../utils/util.js'

describe('test kotlin to JsView', () => {

  it("should parse methods of package", () => {

    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite);
    console.log(composite)
    expect(composite.LevelBoard).toBeDefined();
    expect(composite.generateCompositeFunction).toBeDefined();
  });

  it('should parse array, method and map ', () => {

    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);

    let level = composite.generateEmptyBoardFunction(5);
    console.log(level)
    let board = composite.connectAllZoneOfBoardFunction(level)

    let boardView = kotlinProxyToJsView(board, 4, true)
    console.log(boardView.contentArray)
    expect(boardView.contentArray).toBeDefined();
    expect(boardView.contentArray[0][0].connectionsMap).toBeDefined();
    console.log(boardView.contentArray[0][0].connectionsMap)
    expect(boardView.contentArray[0][0].connectionsMap.BOTTOM).toBeDefined();
  });

  it('should parse array, method and map of partie', () => {
    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);
    let partie = composite.initPartieCompositeFunction(3);
    let partieView = kotlinProxyToJsView(partie, 7, true);

    expect(partieView.level.contentArray[0][0].connectionsMap).toBeDefined();
  });

  it('should get array, method and map of partie', () => {
    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);
    let partie = composite.initPartieCompositeFunction(3);

    let zone =getFromKotlin(partie,"level","content",0,0)
    expect(zone).toBeDefined()
    expect(zone.connectionsMap).not.toBeDefined()



   });


  it('should get proxyarray, method and map of partie', () => {
    let composite = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.board.algorithm.composite, 0, false);
    let partie = composite.initPartieCompositeFunction(3);


    let zone2 =getJsViewFromKotlin(partie,"level","content",0,0)
    expect(zone2).toBeDefined()
    expect(zone2.connectionsMap).toBeDefined()

   });


  it('call without proxy', () => {
    let composite = gameRules.fr.perso.labyrinth.board.algorithm.composite
    console.log(composite)
    // @ts-ignore
    // @ts-ignore
    console.log(Object.getOwnPropertyNames(composite))
    // @ts-ignore
    let method = Object.getOwnPropertyNames(composite).filter(it => it.startsWith("initPartieComposite"))
    let r = composite[method].call(5)
    console.log(r)
    //  expect(partie.level.contentArray[0][0].connectionsMap).toBeDefined();
  });
});
