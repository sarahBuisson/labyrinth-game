import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// @ts-ignore
import gameRules from 'gameRules';
import {getFromKotlin, getJsViewFromKotlin, kotlinProxyToJsView} from './kotlinUtils'
let labeatGeneration:any = kotlinProxyToJsView(gameRules.fr.perso.labyrinth.labeat.generation);
describe('test kotlin to JsView', () => {

  it("should parse methods of package", () => {


    expect(labeatGeneration.LevelBoard).toBeDefined();
    expect(labeatGeneration.generateCompositeFunction).toBeDefined();
  });

  it('should parse array, method and map ', () => {

    let level = labeatGeneration.generateEmptyBoardFunction(5);
    let board = labeatGeneration.connectAllZoneOfBoardFunction(level)

    let boardView = kotlinProxyToJsView(board, 4, true)
    expect(boardView.contentArray).toBeDefined();
    expect(boardView.contentArray[0][0].connectionsMap).toBeDefined();
    expect(boardView.contentArray[0][0].connectionsMap.BOTTOM).toBeDefined();
  });

  it('should parse array, method and map of partie', () => {
    let partie = labeatGeneration.initPartieCompositeFunction(3);
    let partieView = kotlinProxyToJsView(partie, 7, true);

    expect(partieView.level.contentArray[0][0].connectionsMap).toBeDefined();
  });

  it('should get array, method and map of partie', () => {
    let partie = labeatGeneration.initPartieCompositeFunction(3);

    let zone =getFromKotlin(partie,"level","content",0,0)
    expect(zone).toBeDefined()
    expect(zone.connectionsMap).not.toBeDefined()



   });


  it('should get proxyarray, method and map of partie', () => {
    let partie = labeatGeneration.initPartieCompositeFunction(3);


    let zone2 =getJsViewFromKotlin(partie,"level","content",0,0)
    expect(zone2).toBeDefined()
    expect(zone2.connectionsMap).toBeDefined()

   });


  it('call without proxy', () => {
    // @ts-ignore
    let method: string = Object.getOwnPropertyNames(labeatGeneration).filter(it => it.startsWith("initPartieComposite"))
    let r = labeatGeneration[method].call(5)
    //  expect(partie.level.contentArray[0][0].connectionsMap).toBeDefined();
  });
});
