(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/6Df":
    /*!**************************************!*\
      !*** ./src/app/utils/kotlinUtils.ts ***!
      \**************************************/

    /*! exports provided: parseKotlinToJsView, printProxyModel, parseKotlinPathToJsView, getFromKotlin */

    /***/
    function Df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseKotlinToJsView", function () {
        return parseKotlinToJsView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "printProxyModel", function () {
        return printProxyModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseKotlinPathToJsView", function () {
        return parseKotlinPathToJsView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFromKotlin", function () {
        return getFromKotlin;
      });

      function standardizeName(oldName) {
        return oldName.replace(/^\_*/, "").replace(/\_\S*\$/, "").replace(/\_\d/, "");
      }

      function instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod) {
        var newkotlinInstance = {};
        Object.getOwnPropertyNames(kotlinInstance).forEach(function (oldName) {
          newkotlinInstance[oldName] = kotlinInstance[oldName];
          var propertyclassName = !!kotlinInstance[oldName] && !!kotlinInstance[oldName].__proto__ && !!kotlinInstance[oldName].__proto__.constructor && kotlinInstance[oldName].__proto__.constructor.name;
          var newName;

          if (!isNaN(parseInt(oldName))) {
            newName = oldName;
          } else {
            newName = standardizeName(oldName);

            if (propertyclassName === 'ArrayList' && !Array.isArray(kotlinInstance[oldName])) {
              newName += "Array";
            }

            if (propertyclassName === "HashMap" || propertyclassName == "LinkedHashMap") {
              newName += "Map";
            }

            if (propertyclassName === 'Function') {
              newName += "Function";
            }
          }

          var isNewNameAlreadyUsed = Object.getOwnPropertyDescriptor(newkotlinInstance, newName);

          if (!kotlinInstance.__proto__) {
            //TODO : most of the time it's inner object of stdlib class
            newkotlinInstance[newName] = kotlinInstance[oldName];
          }

          if (!kotlinInstance.__proto__[newName]) {
            try {
              if (maxDeep >= 0) {
                newkotlinInstance[newName] = parseKotlinToJsView(kotlinInstance[oldName], maxDeep - 1, autoProxyMethod);
              } else {
                newkotlinInstance[newName] = kotlinInstance[oldName];
              }
            } catch (e) {
              console.error(e);
            }
          }
        });
        return newkotlinInstance;
      }

      function parseKotlinToJsView(kotlinInstance) {
        var maxDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
        var autoProxyMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (!!maxDeep && maxDeep < 0) {
          return kotlinInstance;
        } else if (kotlinInstance === undefined || kotlinInstance === null) {
          return kotlinInstance;
        } else if (typeof kotlinInstance !== 'object') {
          return kotlinInstance;
        } else if (Array.isArray(kotlinInstance)) {
          return kotlinInstance.map(function (item) {
            return parseKotlinToJsView(item, maxDeep, autoProxyMethod);
          });
        } else {
          var className = kotlinInstance.__proto__.constructor.name;

          if (className === "Function") {
            return function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var retourMethod = kotlinInstance.apply(null, args);

              if (autoProxyMethod) {
                return parseKotlinToJsView(retourMethod, maxDeep - 1, autoProxyMethod);
              } else {
                return retourMethod;
              }
            };
          } else if (className === 'ArrayList' || className === 'HashSet') {
            return kotlinInstance.toArray().map(function (item) {
              if (maxDeep >= 0) {
                return parseKotlinToJsView(item, maxDeep - 1, autoProxyMethod);
              } else {
                return item;
              }
            });
          } else if (className === "HashMap" || className == "LinkedHashMap") {
            var newkotlinInstance = {};
            var protoMap = instanceWithSimplifiedField(kotlinInstance, 0, false);

            if (protoMap.internalMap) {
              protoMap = instanceWithSimplifiedField(protoMap.internalMap, 0, false);

              if (protoMap.backingMap) {
                Object.values(protoMap.backingMap).forEach(function (protoEntry) {
                  var protoEntryProxy = instanceWithSimplifiedField(protoEntry, 0, false); //keep the $

                  var key = protoEntryProxy.key.name$ ? protoEntryProxy.key.name$ : protoEntryProxy.key;
                  newkotlinInstance[key] = parseKotlinToJsView(protoEntryProxy.value, maxDeep - 1, false);
                });
              }
            }

            return newkotlinInstance;
          } else {
            var _newkotlinInstance = instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod);

            _newkotlinInstance.className = className;
            return _newkotlinInstance;
          }
        }

        return kotlinInstance;
      }

      function printProxyModel(obj) {
        var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return Object.keys(obj).map(function (key) {
          if (key.endsWith("Array")) {
            return printProxyModel(obj[key][0]);
          }

          return key;
        });
      }

      function parseKotlinPathToJsView(instance) {
        for (var _len2 = arguments.length, path = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          path[_key2 - 1] = arguments[_key2];
        }

        return parseKotlinToJsView(getFromKotlin.apply(void 0, [instance].concat(path)), 0, false);
      }

      function getFromKotlin(instance) {
        for (var _len3 = arguments.length, path = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          path[_key3 - 1] = arguments[_key3];
        }

        if (path.length == 0 || !instance) {
          return instance;
        } else {
          var propertyclassName = instance.__proto__.constructor.name;

          if (instance.toArray) {
            return getFromKotlin.apply(void 0, [instance.toArray()[path[0]]].concat(_toConsumableArray(path.slice(1))));
          } else if (propertyclassName === "HashMap" || propertyclassName == "LinkedHashMap") {
            return getFromKotlin.apply(void 0, [parseKotlinToJsView(instance, 0, false)[path[0]]].concat(_toConsumableArray(path.slice(1))));
          } else {
            var field = Object.keys(instance).find(function (fieldName) {
              return standardizeName(fieldName) == path[0]; //don't use ===, here
            });

            if (instance[field]) {
              return getFromKotlin.apply(void 0, [instance[field]].concat(_toConsumableArray(path.slice(1))));
            } else {
              return instance[field];
            }
          }
        }
      }
      /***/

    },

    /***/
    "/IdM":
    /*!********************************************!*\
      !*** ./src/app/music-view/music.module.ts ***!
      \********************************************/

    /*! exports provided: MusicModule */

    /***/
    function IdM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MusicModule", function () {
        return MusicModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _music_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./music-view.component */
      "3tw5");
      /* harmony import */


      var _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./partition-view/partition-view.component */
      "lCfX");
      /* harmony import */


      var _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./partition-view/temp-view/temp-view.component */
      "0kx2");
      /* harmony import */


      var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/ascii/ascii.module */
      "O1Wb");

      var MusicModule =
      /** @class */
      function () {
        var MusicModule = function MusicModule() {
          _classCallCheck(this, MusicModule);
        };

        MusicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: MusicModule
        });
        MusicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function MusicModule_Factory(t) {
            return new (t || MusicModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]]]
        });
        return MusicModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MusicModule, {
          declarations: [_music_view_component__WEBPACK_IMPORTED_MODULE_2__["MusicViewComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"], _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__["TempViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]],
          exports: [_partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_music_view_component__WEBPACK_IMPORTED_MODULE_2__["MusicViewComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"], _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__["TempViewComponent"]],
            exports: [_partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "/SE3":
    /*!**********************************************************!*\
      !*** ./src/app/labyrinth/service/sound/sound.service.ts ***!
      \**********************************************************/

    /*! exports provided: SoundService, createLoop, play */

    /***/
    function SE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoundService", function () {
        return SoundService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createLoop", function () {
        return createLoop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "play", function () {
        return play;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var tone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tone */
      "XlTo");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! music-generator */
      "fIap");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _game_musique_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-musique.service */
      "wRYn");
      /* harmony import */


      var _tone_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tone.service */
      "Fey8");

      var SoundService =
      /** @class */
      function () {
        var SoundService = /*#__PURE__*/function () {
          function SoundService(gameMusiqueService, toneService) {
            var _this = this;

            _classCallCheck(this, SoundService);

            // document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})
            this.gameMusiqueService = gameMusiqueService;
            this.toneService = toneService;
            this.soundOnSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.soundOn$ = this.soundOnSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (previousValue, forcedValue) {
              var soundOn = forcedValue ? forcedValue : !previousValue;

              if (!soundOn) {
                console.warn("mute");
                tone__WEBPACK_IMPORTED_MODULE_3__["Destination"].mute = true;
              } else {
                console.warn("unmute");
                tone__WEBPACK_IMPORTED_MODULE_3__["Destination"].mute = false;
              }

              _this.soundOn = soundOn;
              return soundOn;
            }));
            this.toneHaveBeenInitialized = false;
            document.querySelector('body') && document.querySelector('body').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (tone__WEBPACK_IMPORTED_MODULE_3__ && !_this.toneHaveBeenInitialized) {
                        _this.toneService.start(); //this.currentAmbiance.volume-=10


                        console.log('audio is ready');

                        _this.forceSoundOn();

                        _this.toneHaveBeenInitialized = true;
                        tone__WEBPACK_IMPORTED_MODULE_3__["Transport"].start();
                      } else if (_this.toneHaveBeenInitialized) {
                        console.log("audio already ready");
                      } else {
                        console.error('audio not ready');
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));
            this.menuInstrument = toneService.Synth();
            this.gameInstrument = toneService.Synth();
            this.soundInstrument = toneService.Synth();
            this.gameInstrument.toDestination();
            this.menuInstrument.toDestination();
            this.soundInstrument.toDestination();
            this.soundInstrument.volume.value -= 35;
            this.moveSound = this.gameMusiqueService.moveMusic();
            this.takeSound = this.gameMusiqueService.takeMusic();
            this.noSound = this.gameMusiqueService.noMusic();
          }

          _createClass(SoundService, [{
            key: "subscribeSoundOn",
            value: function subscribeSoundOn(observer) {
              return this.soundOn$.subscribe(observer);
            }
          }, {
            key: "generateMenuMusic",
            value: function generateMenuMusic() {
              var _this2 = this;

              this.tryNTimes(5, function () {
                if (!_this2.menuMusic) _this2.menuMusic = createLoop(_this2.menuInstrument, _this2.gameMusiqueService.menuMusicRandom(), 1.3);
              });
            }
          }, {
            key: "generateGameMusic",
            value: function generateGameMusic() {
              var _this3 = this;

              this.tryNTimes(5, function () {
                if (!_this3.gameMusic) _this3.gameMusic = createLoop(_this3.gameInstrument, _this3.gameMusiqueService.gameMusicRandom(), 0.8);
              });
            }
          }, {
            key: "tryNTimes",
            value: function tryNTimes(numberOfTry, callback) {
              while (numberOfTry > 0) {
                console.log("try generate menu music");

                try {
                  numberOfTry--;
                  callback();
                } catch (e) {
                  console.error(e);
                }
              }
            }
          }, {
            key: "playMove",
            value: function playMove() {
              play(this.soundInstrument, this.moveSound, 0.5);
            }
          }, {
            key: "playTake",
            value: function playTake() {
              play(this.soundInstrument, this.takeSound, 0.5);
            }
          }, {
            key: "playNo",
            value: function playNo() {
              play(this.soundInstrument, this.noSound, 0.5);
            }
          }, {
            key: "playMenuMusic",
            value: function () {
              var _playMenuMusic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", this.playAmbiantMusic(this.menuMusic, this.menuInstrument));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              function playMenuMusic() {
                return _playMenuMusic.apply(this, arguments);
              }

              return playMenuMusic;
            }()
          }, {
            key: "playAmbiantMusic",
            value: function () {
              var _playAmbiantMusic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(newMusic, instrument) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log("new music to play");

                        if (!this.currentAmbiance) {
                          _context3.next = 7;
                          break;
                        }

                        this.currentAmbiance.loop = false;
                        this.currentAmbiance.mute = true;
                        _context3.next = 6;
                        return this.currentAmbiance.stop(tone__WEBPACK_IMPORTED_MODULE_3__["now"]());

                      case 6:
                        this.ambiantInstrument.volume.value -= 100;

                      case 7:
                        newMusic.loop = true;
                        this.currentAmbiance = newMusic;
                        this.ambiantInstrument = instrument;
                        this.ambiantInstrument.volume.value = -45;
                        return _context3.abrupt("return", newMusic.start());

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              function playAmbiantMusic(_x, _x2) {
                return _playAmbiantMusic.apply(this, arguments);
              }

              return playAmbiantMusic;
            }()
          }, {
            key: "playBruitageSound",
            value: function () {
              var _playBruitageSound = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(music) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              function playBruitageSound(_x3) {
                return _playBruitageSound.apply(this, arguments);
              }

              return playBruitageSound;
            }()
          }, {
            key: "playGameMusic",
            value: function () {
              var _playGameMusic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", this.playAmbiantMusic(this.gameMusic, this.gameInstrument));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));

              function playGameMusic() {
                return _playGameMusic.apply(this, arguments);
              }

              return playGameMusic;
            }()
          }, {
            key: "toogleSound",
            value: function toogleSound() {
              this.soundOnSubject$.next();
            }
          }, {
            key: "forceSoundOn",
            value: function forceSoundOn() {
              this.soundOnSubject$.next(true);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.menuMusic) {
                this.menuMusic.dispose();
              }

              if (this.gameMusic) {
                this.gameMusic.dispose();
              }

              this.noSound.dispose();
              this.takeSound.dispose();
              this.moveSound.dispose();
              this.ambiantInstrument.dispose();
            }
          }, {
            key: "createInstrument",
            value: function createInstrument() {
              return new tone__WEBPACK_IMPORTED_MODULE_3__["Synth"]().toDestination();
            }
          }]);

          return SoundService;
        }();

        SoundService.ɵfac = function SoundService_Factory(t) {
          return new (t || SoundService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_musique_service__WEBPACK_IMPORTED_MODULE_5__["GameMusiqueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tone_service__WEBPACK_IMPORTED_MODULE_6__["ToneService"]));
        };

        SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: SoundService,
          factory: SoundService.ɵfac,
          providedIn: 'root'
        });
        return SoundService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _game_musique_service__WEBPACK_IMPORTED_MODULE_5__["GameMusiqueService"]
          }, {
            type: _tone_service__WEBPACK_IMPORTED_MODULE_6__["ToneService"]
          }];
        }, null);
      })();

      function createLoop(instrument, partition) {
        var tempo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var flatpartition = music_generator__WEBPACK_IMPORTED_MODULE_4__["compositionUtils"].flatPartition(partition);
        var timeC = 0;
        var part = new tone__WEBPACK_IMPORTED_MODULE_3__["Part"](function (time, note) {
          var decalage = music_generator__WEBPACK_IMPORTED_MODULE_4__["rhythmUtils"].duration(note.value) * tempo;
          instrument.triggerAttackRelease(note.tune, note.value, "+" + timeC);
          timeC += decalage; //time = InstrumentUtils.playNote(instrument, n, time, 1.2)
        }, flatpartition.map(function (note) {
          return [0, note];
        }));
        part.loop = true;
        return part;
      }

      function play(instrument, partition) {
        var tempo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var flatpartition = music_generator__WEBPACK_IMPORTED_MODULE_4__["compositionUtils"].flatPartition(partition);
        var now = tone__WEBPACK_IMPORTED_MODULE_3__["now"]();
        instrument.toDestination();

        for (var i = 0; i < 1; i++) {
          flatpartition.forEach(function (n) {
            now = music_generator__WEBPACK_IMPORTED_MODULE_4__["instrumentUtils"].playNote(instrument, n, now, tempo);
          });
        }
      }
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/labyrinth-game/labyrinth-game/website/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0T/z":
    /*!**************************************************!*\
      !*** ./src/app/labyrinth/menu/menu.component.ts ***!
      \**************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function TZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_highscores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/highscores.service */
      "RNzt");
      /* harmony import */


      var _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/sound/sound.service */
      "/SE3");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-modal/ascii-modal.component */
      "K43I");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../new-form/new-labyrinth-form.component */
      "SpuM");
      /* harmony import */


      var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../characterEditor/character-form/character-form.component */
      "DbXV");

      var _c0 = ["highScoreModal"];
      var _c1 = ["loadingModal"];
      var _c2 = ["newFormModal"];
      var _c3 = ["characterFormModal"];

      function MenuComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var score_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", score_r6.player.name, " : ", score_r6.score, "");
        }
      }

      var MenuComponent =
      /** @class */
      function () {
        var MenuComponent = /*#__PURE__*/function () {
          function MenuComponent(router, highscoresService, soundService) {
            _classCallCheck(this, MenuComponent);

            this.router = router;
            this.highscoresService = highscoresService;
            this.soundService = soundService;
          }

          _createClass(MenuComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this4 = this;

              this.subscriptionHighscores = this.highscoresService.getScores().subscribe(function (scores) {
                _this4.highscores = scores;
              });
              this.soundService.generateMenuMusic();
            }
          }, {
            key: "clickNew",
            value: function clickNew() {
              this.soundService.playMove();
              this.newFormModal.show();
            }
          }, {
            key: "clickMusic",
            value: function clickMusic() {
              this.router.navigateByUrl('/music');
            }
          }, {
            key: "clickCharacter",
            value: function clickCharacter() {
              this.soundService.playMove();
              this.characterFormModal.show();
            }
          }, {
            key: "saveHighScore",
            value: function saveHighScore() {
              this.subs = this.highscoresService.saveScore({
                name: 'test'
              }, Math.random() * 100);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscriptionHighscores && this.subscriptionHighscores.unsubscribe();
              this.subs && this.subs.unsubscribe();
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.soundService.playMenuMusic();
            }
          }]);

          return MenuComponent;
        }();

        MenuComponent.ɵfac = function MenuComponent_Factory(t) {
          return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_highscores_service__WEBPACK_IMPORTED_MODULE_3__["HighscoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"]));
        };

        MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MenuComponent,
          selectors: [["app-menu"]],
          viewQuery: function MenuComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.highScoreModal = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newFormModal = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.characterFormModal = _t.first);
            }
          },
          decls: 36,
          vars: 3,
          consts: [[1, "title"], [1, "container", "text"], ["ascii-render", "", 3, "click"], [3, "click"], ["highScoreModal", ""], ["ascii-render", "", "borderTemplateName", "paper", 1, "container", "text", "decor-ui"], ["ascii-border", "", "hoverClass", "asciiHighlight"], ["ascii-border", ""], [4, "ngFor", "ngForOf"], [3, "closable"], ["newFormModal", ""], ["loadingModal", ""], ["characterFormModal", ""], ["player", ""], ["ascii-border", "", "xRepeat", "30"]],
          template: function MenuComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n\n   _           _        _____                           _\n  | |         | |      / ____|                         | |\n  | |     __ _| |__   | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ __\n  | |    / _` | '_ \\  | | |_ |/ _ \\ '_ \\ / _ \\ '__/ _` | __/ _ \\| '__|\n  | |___| (_| | |_) | | |__| |  __/ | | |  __/ | | (_| | || (_) | |\n  |______\\__,_|_.__/   \\_____|\\___|_| |_|\\___|_|  \\__,_|\\__\\___/|_|\n    ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_5_listener() {
                return ctx.clickNew();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NEW LABYRINTH ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_7_listener() {
                return ctx.clickCharacter();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CHANGE CHARACTER LOOK ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

                var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

                ctx.saveHighScore();
                return _r0.show();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HIGHSCORE ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_11_listener() {
                return ctx.clickMusic();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT THE MUSIC... ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ascii-modal", 3, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_app_ascii_modal_click_13_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

                var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

                return _r0.hide();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Highscore");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Your best score ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ever! ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MenuComponent_div_23_Template, 3, 2, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-ascii-modal", 9, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-labyrinth-form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-ascii-modal", 3, 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_app_ascii_modal_click_27_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

                var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

                return _r3.hide();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Loading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-ascii-modal", 9, 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-character-form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "audio", null, 13);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscores);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closable", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closable", true);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__["AsciiBorderComponent"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_6__["AsciiModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_8__["NewLabyrinthFormComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_9__["CharacterFormComponent"]],
          styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n\n  .title[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    width: 540px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0 36px;\n  }"]
        });
        return MenuComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styles: [".container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n\n  .title pre {\n    margin-left: auto;\n    margin-right: auto;\n    width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 60, "px;\n  }\n\n  button {\n    text-align: center;\n    padding: 0 ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 4, "px;\n  }\n  ")]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _service_highscores_service__WEBPACK_IMPORTED_MODULE_3__["HighscoresService"]
          }, {
            type: _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"]
          }];
        }, {
          highScoreModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['highScoreModal']
          }],
          loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
          }],
          newFormModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newFormModal']
          }],
          characterFormModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['characterFormModal']
          }]
        });
      })();
      /***/

    },

    /***/
    "0XYs":
    /*!**************************************************************!*\
      !*** ./src/app/labyrinth/game-view/labyrinth-game.module.ts ***!
      \**************************************************************/

    /*! exports provided: LabyrinthGameModule */

    /***/
    function XYs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabyrinthGameModule", function () {
        return LabyrinthGameModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./labyrinth-game.component */
      "tdOx");
      /* harmony import */


      var _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/ui/atom/sliding/sliding.component */
      "Bds/");
      /* harmony import */


      var _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./keypad-form/keypad-form.component */
      "jVA7");
      /* harmony import */


      var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/ascii/ascii.module */
      "O1Wb");
      /* harmony import */


      var _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./level-view/level-view.component */
      "hZio");
      /* harmony import */


      var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./map-view/map-view.component */
      "UJlK");
      /* harmony import */


      var _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./inventory-view/inventory-view.component */
      "JoyB");
      /* harmony import */


      var _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./level-view/zone-view/zone-view.component */
      "BDe6");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../loading/loading.module */
      "z4sO");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../app-routing.module */
      "vY5A");

      var LabyrinthGameModule =
      /** @class */
      function () {
        var LabyrinthGameModule = function LabyrinthGameModule() {
          _classCallCheck(this, LabyrinthGameModule);
        };

        LabyrinthGameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LabyrinthGameModule
        });
        LabyrinthGameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LabyrinthGameModule_Factory(t) {
            return new (t || LabyrinthGameModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]]]
        });
        return LabyrinthGameModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LabyrinthGameModule, {
          declarations: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"], _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]],
          exports: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"], _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabyrinthGameModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"], _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]],
            exports: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"], _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "0kx2":
    /*!****************************************************************************!*\
      !*** ./src/app/music-view/partition-view/temp-view/temp-view.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TempViewComponent */

    /***/
    function kx2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TempViewComponent", function () {
        return TempViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! music-generator */
      "fIap");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TempViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tune_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.noteStyle(tune_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tune_r1, "");
        }
      }

      var TempViewComponent =
      /** @class */
      function () {
        var TempViewComponent = /*#__PURE__*/function () {
          function TempViewComponent() {
            _classCallCheck(this, TempViewComponent);

            this.scale = [];
          }

          _createClass(TempViewComponent, [{
            key: "style",
            value: function style() {
              return this.temp ? {
                minWidth: "" + music_generator__WEBPACK_IMPORTED_MODULE_1__["rhythmUtils"].duration(this.temp.value) * 50 + " px",
                width: "" + music_generator__WEBPACK_IMPORTED_MODULE_1__["rhythmUtils"].duration(this.temp.value) * 50 + " px",
                display: "inline-block"
              } : {};
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "noteStyle",
            value: function noteStyle(note) {
              if (note == this.temp.tune) {
                return {};
              } else {
                return {
                  color: 'lightgrey'
                };
              }
            }
          }]);

          return TempViewComponent;
        }();

        TempViewComponent.ɵfac = function TempViewComponent_Factory(t) {
          return new (t || TempViewComponent)();
        };

        TempViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TempViewComponent,
          selectors: [["app-temp-view"]],
          inputs: {
            temp: "temp",
            scale: "scale"
          },
          decls: 4,
          vars: 4,
          consts: [[3, "style", 4, "ngFor", "ngForOf"]],
          template: function TempViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TempViewComponent_div_3_Template, 2, 3, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style());

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.temp == null ? null : ctx.temp.value);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scale);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
          styles: ["[_nghost-%COMP%]{display: inline-block;\nborder-left: gray 1px solid}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXAtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0scUJBQXFCO0FBQzNCLDJCQUEyQiIsImZpbGUiOiJ0ZW1wLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbmJvcmRlci1sZWZ0OiBncmF5IDFweCBzb2xpZH1cbiJdfQ== */"]
        });
        return TempViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-temp-view',
            templateUrl: './temp-view.component.html',
            styleUrls: ['./temp-view.component.css']
          }]
        }], function () {
          return [];
        }, {
          temp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "3tw5":
    /*!****************************************************!*\
      !*** ./src/app/music-view/music-view.component.ts ***!
      \****************************************************/

    /*! exports provided: MusicViewComponent */

    /***/
    function tw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MusicViewComponent", function () {
        return MusicViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../labyrinth/service/sound/sound.service */
      "/SE3");
      /* harmony import */


      var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tone */
      "XlTo");
      /* harmony import */


      var _labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../labyrinth/service/sound/game-musique.service */
      "wRYn");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./partition-view/partition-view.component */
      "lCfX");

      var MusicViewComponent =
      /** @class */
      function () {
        var MusicViewComponent = /*#__PURE__*/function () {
          function MusicViewComponent(musiqueService, soundService) {
            _classCallCheck(this, MusicViewComponent);

            this.musiqueService = musiqueService;
            this.soundService = soundService;
          }

          _createClass(MusicViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "generateMenuMusic",
            value: function generateMenuMusic() {
              this.changeMusic(this.musiqueService.menuMusicRandom());
            }
          }, {
            key: "generateGameMusic",
            value: function generateGameMusic() {
              this.changeMusic(this.musiqueService.gameMusicRandom());
            }
          }, {
            key: "pause",
            value: function pause() {
              this.currentPart.stop(tone__WEBPACK_IMPORTED_MODULE_2__["now"]());
              this.currentInstrument.volume.value = -100;
            }
          }, {
            key: "play",
            value: function play() {
              this.currentPart.start();
            }
          }, {
            key: "clear",
            value: function clear() {
              if (this.currentPart) {
                this.currentPart.stop();
              }
            }
          }, {
            key: "changeMusic",
            value: function changeMusic(newPartition) {
              console.log("changeMusic");
              if (this.currentInstrument) this.currentInstrument.clear();
              this.currentInstrument = this.soundService.createInstrument();
              this.currentMusicPartition = newPartition;
              this.clear();
              this.currentPart = Object(_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["createLoop"])(this.currentInstrument, this.currentMusicPartition);
              this.currentInstrument.volume = -40;
              this.soundService.playAmbiantMusic(this.currentPart, this.currentInstrument);
            }
          }]);

          return MusicViewComponent;
        }();

        MusicViewComponent.ɵfac = function MusicViewComponent_Factory(t) {
          return new (t || MusicViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__["GameMusiqueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"]));
        };

        MusicViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MusicViewComponent,
          selectors: [["app-music-view"]],
          decls: 24,
          vars: 1,
          consts: [["ascii-border", "", "contentClass", "text"], ["ascii-border", "", "contentClass", "text", 3, "click"], ["ascii-border", "", 3, "click"], [3, "partitionForms"]],
          template: function MusicViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About the music...");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A new music is randomly generated at each new level. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Only the music's menu is generated with a fix seed.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Try-it !");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_12_listener() {
                return ctx.generateMenuMusic();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Music menu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_14_listener() {
                return ctx.generateGameMusic();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Random Level Music");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_17_listener() {
                return ctx.pause();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pause");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_19_listener() {
                return ctx.play();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Play");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " partition of the current musique: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-partition-view", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("partitionForms", ctx.currentMusicPartition);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_5__["PartitionViewComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return MusicViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-music-view',
            templateUrl: './music-view.component.html',
            styleUrls: ['./music-view.component.css']
          }]
        }], function () {
          return [{
            type: _labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__["GameMusiqueService"]
          }, {
            type: _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5SNw":
    /*!******************************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-inside-grid.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AsciiInsideGridDivComponent */

    /***/
    function SNw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiInsideGridDivComponent", function () {
        return AsciiInsideGridDivComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AsciiInsideGridDivComponent =
      /** @class */
      function () {
        var AsciiInsideGridDivComponent = /*#__PURE__*/function () {
          function AsciiInsideGridDivComponent() {
            _classCallCheck(this, AsciiInsideGridDivComponent);
          }

          _createClass(AsciiInsideGridDivComponent, [{
            key: "hostStyle",
            get: function get() {
              var contentSplited = (this.content ? this.content : this.child ? this.child.textContent : 'x').split('\n');
              console.log("contentSplited");
              console.log(contentSplited);
              return {
                gridColumn: 'span ' + contentSplited[0].length,
                gridRow: 'span ' + contentSplited.length
              };
            }
          }]);

          return AsciiInsideGridDivComponent;
        }();

        AsciiInsideGridDivComponent.ɵfac = function AsciiInsideGridDivComponent_Factory(t) {
          return new (t || AsciiInsideGridDivComponent)();
        };

        AsciiInsideGridDivComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: AsciiInsideGridDivComponent,
          selectors: [["", "app-ascii-on-grid-div", ""]],
          contentQueries: function AsciiInsideGridDivComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HTMLElement, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function AsciiInsideGridDivComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
            }
          },
          inputs: {
            content: "content"
          }
        });
        return AsciiInsideGridDivComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiInsideGridDivComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[app-ascii-on-grid-div] '
          }]
        }], null, {
          child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [HTMLElement]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style"]
          }]
        });
      })();
      /***/

    },

    /***/
    "639w":
    /*!****************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-line/ascii-line.component.ts ***!
      \****************************************************************/

    /*! exports provided: AsciiLineComponent */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiLineComponent", function () {
        return AsciiLineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AsciiLineComponent =
      /** @class */
      function () {
        var AsciiLineComponent = /*#__PURE__*/function () {
          function AsciiLineComponent() {
            _classCallCheck(this, AsciiLineComponent);

            this.size = 1;
            this["char"] = ".";
          }

          _createClass(AsciiLineComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.line = "";

              for (var i = 0; i < this.size; i++) {
                this.line += this["char"];
              }
            }
          }]);

          return AsciiLineComponent;
        }();

        AsciiLineComponent.ɵfac = function AsciiLineComponent_Factory(t) {
          return new (t || AsciiLineComponent)();
        };

        AsciiLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiLineComponent,
          selectors: [["ascii-line"]],
          inputs: {
            size: "size"
          },
          decls: 1,
          vars: 1,
          template: function AsciiLineComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.line, " ");
            }
          },
          styles: [".asciiArt[_ngcontent-%COMP%]{\n  display: block;\n  font-family: monospace;\n  white-space: pre;\n  margin: 1em 0;\n}\n.container[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: -webkit-min-content -webkit-min-content -webkit-min-content;\n  grid-template-columns: min-content min-content min-content;\n  grid-template-rows: 1em -webkit-min-content 1em;\n  grid-template-rows: 1em min-content 1em;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtGQUEwRDtFQUExRCwwREFBMEQ7RUFDMUQsK0NBQXVDO0VBQXZDLHVDQUF1QztFQUN2QywwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXNjaWktbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzY2lpQXJ0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtIG1pbi1jb250ZW50IDFlbTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
        });
        return AsciiLineComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiLineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ascii-line',
            templateUrl: './ascii-line.component.html',
            styleUrls: ['./ascii-line.component.css']
          }]
        }], function () {
          return [];
        }, {
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "6uqV":
    /*!********************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-button/ascii-button.component.ts ***!
      \********************************************************************/

    /*! exports provided: AsciiButtonComponent */

    /***/
    function uqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiButtonComponent", function () {
        return AsciiButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../labyrinth/service/render/resources/border */
      "7yLV");
      /* harmony import */


      var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ascii-border/ascii-border.component */
      "XxEr");

      var _c0 = ["*"];

      var AsciiButtonComponent =
      /** @class */
      function () {
        var AsciiButtonComponent = /*#__PURE__*/function () {
          function AsciiButtonComponent() {
            _classCallCheck(this, AsciiButtonComponent);

            this.defaultButtonBorderTemplate = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultButtonBorderTemplate"];
          }

          _createClass(AsciiButtonComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return AsciiButtonComponent;
        }();

        AsciiButtonComponent.ɵfac = function AsciiButtonComponent_Factory(t) {
          return new (t || AsciiButtonComponent)();
        };

        AsciiButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiButtonComponent,
          selectors: [["app-ascii-button"]],
          ngContentSelectors: _c0,
          decls: 2,
          vars: 2,
          consts: [["ascii-border", "", "contentClass", "text interact-ui", 1, "ihm-ui", 3, "computeRenderEachTime", "borderTemplate"]],
          template: function AsciiButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("computeRenderEachTime", false)("borderTemplate", ctx.defaultButtonBorderTemplate);
            }
          },
          directives: [_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2NpaS1idXR0b24uY29tcG9uZW50LmNzcyJ9 */"]
        });
        return AsciiButtonComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ascii-button',
            template: '<span ascii-border class="ihm-ui" contentClass="text interact-ui" [computeRenderEachTime]="false" [borderTemplate]="defaultButtonBorderTemplate" ><ng-content></ng-content></span>',
            styleUrls: ['./ascii-button.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "7yLV":
    /*!**************************************************************!*\
      !*** ./src/app/labyrinth/service/render/resources/border.ts ***!
      \**************************************************************/

    /*! exports provided: paperGridTemplate, paperExitGridTemplate, mapGridTemplate, abcGridTemplate, defaultGridTemplate, doubleGridTemplate, defaultButtonBorderTemplate, defaultTitleBorderTemplate, loadingBorderGridTemplate, viewCloseDoorGridTemplate, viewEmptyZoneGridTemplate, viewEmptyZones, viewEmptyZoneGridTemplates, viewOpenDoorGridTemplate, viewWallGridTemplate, exitTemplate, startTemplate, bagGridTemplate, inventoryBoxGridTemplate */

    /***/
    function yLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "paperGridTemplate", function () {
        return paperGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "paperExitGridTemplate", function () {
        return paperExitGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapGridTemplate", function () {
        return mapGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "abcGridTemplate", function () {
        return abcGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultGridTemplate", function () {
        return defaultGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doubleGridTemplate", function () {
        return doubleGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultButtonBorderTemplate", function () {
        return defaultButtonBorderTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultTitleBorderTemplate", function () {
        return defaultTitleBorderTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadingBorderGridTemplate", function () {
        return loadingBorderGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewCloseDoorGridTemplate", function () {
        return viewCloseDoorGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewEmptyZoneGridTemplate", function () {
        return viewEmptyZoneGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewEmptyZones", function () {
        return viewEmptyZones;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewEmptyZoneGridTemplates", function () {
        return viewEmptyZoneGridTemplates;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewOpenDoorGridTemplate", function () {
        return viewOpenDoorGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "viewWallGridTemplate", function () {
        return viewWallGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "exitTemplate", function () {
        return exitTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startTemplate", function () {
        return startTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bagGridTemplate", function () {
        return bagGridTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "inventoryBoxGridTemplate", function () {
        return inventoryBoxGridTemplate;
      });
      /* harmony import */


      var _border_compute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./border-compute */
      "cJNv");

      var paperRaw = "" + "  ________   \n" + " / \\      \\  \n" + "(  )|      | \n" + " \\_/|      |  \n" + "    |      |  \n" + "    |  ,___|_ \n" + "    \\_/_____/ ";
      var paperGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(paperRaw, 8, 1, 4, 1);
      var paperExitRaw = "" + "____  \n" + "\\   \\ \n" + "|   | \n" + " \\__| ";
      var paperExitGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(paperExitRaw, 2, 1, 2, 1);
      var mapZoneRaw = "" + " | \n" + "- -\n" + " | ";
      var mapGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(mapZoneRaw, 1, 1, 1, 1);
      var abcRaw = "" + "abc\n" + "d e\n" + "fgh";
      var abcGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(abcRaw, 1, 1, 1, 1);
      var defaultBorderRaw = "" + "+-+\n" + "| |\n" + "+-+";
      var defaultGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(defaultBorderRaw, 1, 1, 1, 1);
      var doubleBorderRaw = "" + "#=#\n" + "H H\n" + "#=#";
      var doubleGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(doubleBorderRaw, 1, 1, 1, 1);
      var buttonBorderRaw = "" + ",-.\n" + "| |\n" + "'-'";
      var defaultButtonBorderTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(buttonBorderRaw, 1, 1, 1, 1);
      var titleBorderRaw = "" + ".¨.\n" + ": :\n" + " ¨ ";
      var defaultTitleBorderTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(titleBorderRaw, 1, 1, 1, 1);
      var loadingBorderRaw = "" + " _.-._. \n" + "(      )\n" + " )    (\n" + "(      )\n" + " '.-._. ";
      var loadingBorderGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(loadingBorderRaw, 2, 4, 1, 2);
      var viewCloseDoorZoneRaw = "" + " .-----------------------.\n" + " |\\    \\¨¨¨¨¨¨¨¨¨¨¨/    /|\n" + " | \\    \\    1    /    / |\n" + " |  \\    \\       /    /  |\n" + " |   \\____\\-----/____/   |\n" + " |:\\ |               | /:|\n" + " |: \\|               |/ :|\n" + " |:  '               '  :|\n" + " |: 1|               |1 :|\n" + " |'--,               ,--'|\n" + " |   /¨¨¨¨/-----\\¨¨¨¨\\   |\n" + " |  /    /   1   \\    \\  |\n" + " | /    /_ _ _ _ _\\    \\ |\n" + " `-----------------------'";
      var viewOpenDoorZoneRaw = "" + " .-----------------------.\n" + " |\\    \\¨¨|¨¨¨¨¨|¨¨/    /|\n" + " | \\    \\ |     | /    / |\n" + " |  \\    \\|     |/    /  |\n" + " |   \\____\\     /____/   |\n" + " |:\\ |               | /:|\n" + " |: \\|               |/ :|\n" + " |:--'               '--:|\n" + " |:                     :|\n" + " |'--,               ,--'|\n" + " |   /¨¨¨¨/     \\¨¨¨¨\\   |\n" + " |  /    /|     |\\    \\  |\n" + " | /    /_|_ _ _|_\\    \\ |\n" + " `-----------------------'";
      var viewWallZoneRaw = "" + " .----------------------.\n" + " |\\                     /|\n" + " | \\                   / |\n" + " |  \\                 /  |\n" + " |   \\_______________/   |\n" + " |   |               |   |\n" + " |   |               |   |\n" + " |   |               |   |\n" + " |   |               |   |\n" + " |   |               |   |\n" + " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" + " |  /                 \\  |\n" + " | /                   \\ |\n" + " `----------------------'";
      var defaultZoneCornerWidth = 6;
      var defaultZoneSideWidth = 15;
      var defaultZoneCornerHeight = 5;
      var defaultZoneSideHeight = 5;
      var viewCloseDoorGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewCloseDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
      var viewEmptyZoneRawOld = "" + " .---------------------------.\n" + " |\\##########################/|\n" + " |#\\########################/#|\n" + " |##\\######################/##|\n" + " |###\\####################/###|\n" + " |###|####################|###|\n" + " |###|####################|###|\n" + " |###|####################|###|\n" + " |###|####################|###|\n" + " |###|####################|###|\n" + " |###|####################|###|\n" + " |###/####################\\###|\n" + " |##/######################\\##|\n" + " |#/########################\\#|\n" + " `---------------------------'";
      var viewEmptyZoneRawOld2 = "" + " .---- ---   --- --------.\n" + " |\\         .             /|\n" + " | \\                       |\n" + " |                      /  |\n" + "     \\__ ___ _____  ___:   |\n" + " |   |                 |    \n" + "  .  |                 |    \n" + " |                       ¨ |\n" + " |   |                 |   |\n" + "     |                 |    \n" + " |                          \n" + "     /    ¨¨  ¨  ¨¨¨  ¨\\   |\n" + " |                      \\  |\n" + "   /           .         \\ |\n" + " `---- --   - -- -  - ---'";
      var viewEmptyZoneRaw3 = "" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               ";
      var viewEmptyZoneRaw4 = "" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "        /                       \n" + "       /                        \n" + "      /                         \n" + "     /                          \n" + "    /                           \n" + "   /                            \n" + "  /                             \n" + " /                              \n" + "/                               ";
      var viewWallZoneRaw2 = "" + " .---------------------------.\n" + " |             /              /|\n" + " |            /              / |\n" + " |           /              /  |\n" + " |          /              /   |\n" + " |         /              /   |\n" + " |        /              /    |\n" + " |       /              /  |   |\n" + " |      /              /   |   |\n" + " |     /              /    |   |\n" + " |    /              /     |   |\n" + " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨/¨¨¨¨¨\\   |\n" + " |  /              /        \\  |\n" + " | /              /          \\ |\n" + " `---------------+-----------'";
      var viewEmptyDeepZoneRaw = "" + " .---------------------------.\n" + " |\\                          /|\n" + " | \\                /       / |\n" + " |  \\      \\               /  |\n" + " |   \\                    /   |\n" + " |    \\           /      /    |\n" + " |     \\                /     |\n" + " |      ################      |\n" + " |      ################      |\n" + " |     /                \\     |\n" + " |    /                  \\    |\n" + " |   /     /              \\   |\n" + " |  /  /                   \\  |\n" + " | /                        \\ |\n" + " `---------------------------'";
      var viewEmptyDeepOmbreZoneRaw = "" + " .----.--  .----,----,---.\n" + " |\\                      /|\n" + " | \\            /       / |\n" + " |  \\      \            / /\n" + " \\   \\                /    \n" + " |    \\       /      /    |\n" + "    -  \\\\ |  /    ///  _  |\n" + "      ¨=############=¨    |\n" + " |    _=############=_  - |\n" + "      /////   \\   \\\\\\     |\n" + " |  /  /        \\      \\  |\n" + " | /                    \\ |\n" + " `-- --'--'------`---`---'";
      var viewEmptyDeepWaterZoneRaw = "" + " .----.--  .---,----,---.\n" + " |\\                     /|\n" + " | \\           /       / |\n" + " |  \\      \\           / /\n" + " \\   \\               /    \n" + " |    \\__-__-_--__  /    |\n" + " |  - ¨(  _-____   )¨ _  |\n" + "      ¨ )_-__  _  (¨    |\n" + " |    _(  -   -__  )_  - |\n" + "      /'--__--__---'\\    |\n" + " /   /     /          \\   \\\n" + " |  /  /       \\      \\  |\n" + " | /                   \\ |\n" + " `-- --'--'-----`---`---'";
      var viewEmptySpikeZoneRaw = "" + " .----.--  .---,----,---.\n" + " |\\                     /|\n" + " | \\           /       / |\n" + " |  \\      \\          / /\n" + "     \\_______________/   |\n" + " |   |   A  /\\  /\\   |    \n" + " |   |  / \\  /\\      |   |\n" + "     |           ^   |   |\n" + "     |   ^           |   |\n" + " |   |     /\\    / \\ |   |\n" + " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" + "  / /  /       \\      \\  \\\n" + " | /                   \\ |\n" + " `-- --'--'-----`---`---'";
      var viewEmptyObstructedZoneRaw = "" + " .                ---    \n" + "                         \n" + " |                       \n" + "                        |\n" + "                         \n" + " |                      |\n" + "                         \n" + "                         \n" + " |                      |\n" + "                         \n" + "                        |\n" + "                         \n" + " |                      \n" + "     --          ---  ";
      var viewObstructed2lZoneRaw = "" + " .----------------------.\n" + " |\\                     /|\n" + " | _-_---_-___-__-____-, |\n" + " |  |                  | |\n" + " | |     °            |  |\n" + " |  |            °     | |\n" + " | |      O            | |\n" + " | |                   | |\n" + " |  |             0   |  |\n" + " | |      °            | |\n" + " | |   o       °       | |\n" + " | '-_---_-___-__-_____- |\n" + " | /                   \\ |\n" + " `----------------------'";
      var viewObstructed3lZoneRaw = "" + " .-  ---- - ---    --- -.\n" + " |\\                     /|\n" + " | _-_---_-___-__-____-,  \n" + "    |                  | |\n" + "   |     °            |  |\n" + "    |            °     |  \n" + " | |      O            |  \n" + "   |                   | |\n" + "   |           O       | |\n" + " |  |                 |   \n" + "   |   o       °       |  \n" + " | '-_---_-___-__-_____- |\n" + " | /                   \\ |\n" + " `------    ----  --  --'";
      var viewEmptyZoneRaw5 = "" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "        ( @   @ )                  \n" + "         \\ A /                   \n" + "          uUuu                      \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               \n" + "                               ";
      var viewEmptyZoneGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewObstructed3lZoneRaw, 6, 0, 5, 0);
      var viewEmptyZones = [viewObstructed3lZoneRaw, viewObstructed2lZoneRaw, viewEmptySpikeZoneRaw, viewEmptyObstructedZoneRaw, viewEmptyDeepWaterZoneRaw];
      var viewEmptyZoneGridTemplates = viewEmptyZones.map(function (z) {
        return Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(z, 6, 0, 5, 0);
      });
      var viewOpenDoorGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewOpenDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
      var viewWallGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewWallZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
      var exitTemplate = "" + "  |--|  \n" + "  |--|  \n" + ":¨|--|¨:\n" + "'¨¨¨¨¨¨'\n" + "  exit ";
      var startTemplate = "" + "+______\n" + "|start<\n" + "+¨¨¨¨¨¨\n" + "|      \n" + "|      ";
      var bagRaw = "" + "(@=======(@   \n" + "||       ||   \n" + " \\\\ '' '//    \n" + "  \\\\   //     \n" + "   \\===/      ";
      var handRaw = "" + "       /EN\\         \n" + "   /NV||..||TO\\     \n" + "   |..||  ||..|     \n" + "/I||..||''||..|     \n" + "|.||..\\/..\\/..| / RY|\n" + "|.|          \\/\\  /\n" + "|              \\|  \\/ \n" + "\\                /   \n" + " \\              /    ";
      var bigHandRaw = "" + "         /EN\\         \n" + "    / NV||...||TO \\     \n" + "    |...||   ||...|     \n" + "/I ||...||'''||...|     \n" + "|..||...\\/...\\/...| / RY |\n" + "|..|            \\/\\   /\n" + "|                \\|   \\/ \n" + "\\                    /   \n" + " \\                  /    ";
      var otherHandRaw = "" + "     (IN) (VEN)(TOR)    \n" + "     |¨¨| |¨¨¨||¨¨¨|(Y) \n" + "\\\"-_ |¨¨| |¨¨¨||¨¨¨||¨| \n" + " \\  \\|¨¨¨  ¨¨¨  ¨¨¨ ¨¨/ \n" + "  \\  :               ¨| \n" + "   \\_               /   \n" + "     \\              /    ";
      var bagGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(otherHandRaw, 6, 15, 4, 1);
      var inventoryBox = "" + ".=====.\n" + "|\\   /|\n" + "| \\=/ |\n" + "| | | |\n" + "| /=\\ |\n" + "|/   \\|\n" + "`====='";
      var inventoryBoxGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(inventoryBox, 3, 1, 3, 1);
      console.log(bagGridTemplate);
      /***/
    },

    /***/
    "9YXO":
    /*!***********************************************************!*\
      !*** ./src/app/labyrinth/service/generate-lab.service.ts ***!
      \***********************************************************/

    /*! exports provided: GenerateLabService */

    /***/
    function YXO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenerateLabService", function () {
        return GenerateLabService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! gameRules */
      "B5sm");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-storage.service */
      "Pmye");
      /* harmony import */


      var _sound_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sound/sound.service */
      "/SE3");

      var labeatGeneration = gameRules__WEBPACK_IMPORTED_MODULE_1__["fr"].perso.labyrinth.labeat.generation;

      var GenerateLabService =
      /** @class */
      function () {
        var GenerateLabService = /*#__PURE__*/function () {
          function GenerateLabService(router, dataStorageService, soundService) {
            _classCallCheck(this, GenerateLabService);

            this.router = router;
            this.dataStorageService = dataStorageService;
            this.soundService = soundService;
            this.generateSpirale();
          }

          _createClass(GenerateLabService, [{
            key: "generate",
            value: function generate(size, playerName) {
              var party = labeatGeneration.initPartieMapLabWithKey(size, playerName); //labeatGeneration.initPartieCompositeLabWithKeyFunction(size)

              this.dataStorageService.saveParty(party);
              this.soundService.generateGameMusic();
            }
          }, {
            key: "generateEmpty",
            value: function generateEmpty(size) {
              var party = {
                level: labeatGeneration.connectAllZoneOfBoard(labeatGeneration.generateEmptyBoard(size))
              };
              this.dataStorageService.saveParty(party);
              this.router.navigateByUrl('/game');
            }
          }, {
            key: "generateSpirale",
            value: function generateSpirale() {
              var party = labeatGeneration.initPartieSpiral();
              this.dataStorageService.saveParty(party);
            }
          }]);

          return GenerateLabService;
        }();

        GenerateLabService.ɵfac = function GenerateLabService_Factory(t) {
          return new (t || GenerateLabService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"]));
        };

        GenerateLabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: GenerateLabService,
          factory: GenerateLabService.ɵfac,
          providedIn: 'root'
        });
        return GenerateLabService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateLabService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
          }, {
            type: _sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BDe6":
    /*!*********************************************************************************!*\
      !*** ./src/app/labyrinth/game-view/level-view/zone-view/zone-view.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ZoneViewComponent */

    /***/
    function BDe6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoneViewComponent", function () {
        return ZoneViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../service/render/resources/border */
      "7yLV");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! music-generator */
      "fIap");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../utils/kotlinUtils */
      "/6Df");
      /* harmony import */


      var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../service/gameplay-lab.service */
      "ty5H");
      /* harmony import */


      var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../service/render/fullsize-ascii-render.service */
      "qOzd");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../utils/ascii/component/ascii.component */
      "LuAq");

      function ZoneViewComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoneViewComponent_span_5_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var obj_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.takeObj(obj_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var obj_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx_r0.computeTooltip(obj_r1))("content", ctx_r0.renderObj(obj_r1));
        }
      }

      var backgroundTemplate = music_generator__WEBPACK_IMPORTED_MODULE_2__["utils"].shuffle([' ¨    \n  °', ' -      \n       -   \n    -', "", //'__/___/____\\_\\_\n_/_/_______\\___\n_____/____\\____\n___/____\\______\n_/_______\\___\\_\n',
      ' _/  _/____\\_\\_\n_/_/___    \\___\n_____/  __\\____\n___/____\\__    \n_/   ___\\__ \\_\n', //' _/___ /_ \\_\\_\n_/_/_ __  _\\___\n____ /__ _\\_ __\n_ _/_ _ \\__ ___\n_/__ __ _\\__\\__\n',
      //' _/_/__ \\__ \\_\n___/ / __\\__  \\\n __/ /__ \\_\\\\_\n_ __/  __\\_\\ \\\n/ __/_/_\\__  \\_',
      ' ,`    ,  \'  \n ,\'    \'  ,  ,,  \n       ,  \n    \'\'  , ` ,     ', ' .    .  \n    .   .   \n    .', ' .       .  \n       .    .   \n       .', ' °       o  \n       °    .   \n  o   °       .', ' ..    ..... .. \n. . .... ..... .\n.. ... ..   ....\n....     .... . \n. .      ...   .\n']);

      var ZoneViewComponent =
      /** @class */
      function () {
        var ZoneViewComponent = /*#__PURE__*/function () {
          function ZoneViewComponent(gameplayLabService, renderService) {
            var _this5 = this;

            _classCallCheck(this, ZoneViewComponent);

            this.gameplayLabService = gameplayLabService;
            this.renderService = renderService;

            this.clickOnBorder = function (direction, event) {
              if (_this5.gameplayLabService.hasPlayer(_this5.zone)) {
                if (_this5.gameplayLabService.move(direction)) {
                  event.preventDefault();
                }
              } else {
                _this5.clickOnZone(event);
              }
            };

            this.takeObj = function (obj) {
              _this5.gameplayLabService.take(obj);
            };

            this.clickOnZone = function (e) {
              if (_this5.gameplayLabService.moveAtCase(_this5.zone)) {
                e.preventDefault();
              }
            };
          }

          _createClass(ZoneViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              if (!this.zone) this.zone = {};
              this.proxy = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_4__["parseKotlinToJsView"])(this.zone, 7);
            }
          }, {
            key: "borderRendered",
            value: function borderRendered() {
              var _this6 = this;

              var borderRendered = _objectSpread({}, _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewWallGridTemplate"]);

              var directions = ['left', "right", 'top', 'bottom']; //should stay lowcase

              directions.forEach(function (direction) {
                var door = _this6.gameplayLabService.doorAt(_this6.proxy, direction.toUpperCase());

                borderRendered[direction + "BorderClass"] = 'decor-ui';

                if (door) {
                  borderRendered[direction + "BorderClass"] = 'interact-ui';

                  if (door.key) {
                    borderRendered[direction + "Template"] = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewCloseDoorGridTemplate"][direction + "Template"].replace("1", door.name); //TODO : use template instead of replace
                  } else {
                    borderRendered[direction + "Template"] = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewOpenDoorGridTemplate"][direction + "Template"];
                  }

                  borderRendered[direction + "Tooltip"] = _this6.computeTooltip(door);
                }
              });
              return borderRendered;
            }
          }, {
            key: "backgroundRender",
            value: function backgroundRender() {
              return backgroundTemplate[(this.proxy.x + this.proxy.y * 3) % backgroundTemplate.length];
            }
          }, {
            key: "renderObj",
            value: function renderObj(obj) {
              return this.renderService.renderObj(obj);
            }
          }, {
            key: "computeTooltip",
            value: function computeTooltip(obj) {
              if (obj.name == 'start') return 'start flag';
              if (obj.name == 'exit') return 'the exit';
              if (obj.key) return 'closed door ' + obj.name;
              if (obj.destination) return 'door';
              if (obj.inventory) return 'You';
              return 'key ' + obj.name;
            }
          }, {
            key: "getLevelContent",
            value: function getLevelContent() {
              return this.gameplayLabService.levelContent(this.proxy);
            }
          }]);

          return ZoneViewComponent;
        }();

        ZoneViewComponent.ɵfac = function ZoneViewComponent_Factory(t) {
          return new (t || ZoneViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["FullsizeAsciiRenderService"]));
        };

        ZoneViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ZoneViewComponent,
          selectors: [["app-zone-view"]],
          inputs: {
            zone: "zone"
          },
          decls: 6,
          vars: 7,
          consts: [["ascii-border", "", 1, "zone", "asciiArt", "decor-ui", 3, "borderTemplate", "borderClick", "xRepeat", "yRepeat", "name"], [1, "zoneContent", 3, "click"], [1, "background-ui", "zoneBackground"], ["app-ascii-on-grid-div", ""], ["app-ascii", "", "class", "zoneObject asciiArt interact-ui", 3, "tooltip", "content", "click", 4, "ngFor", "ngForOf"], ["app-ascii", "", 1, "zoneObject", "asciiArt", "interact-ui", 3, "tooltip", "content", "click"]],
          template: function ZoneViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoneViewComponent_Template_div_click_1_listener($event) {
                return ctx.clickOnZone($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ZoneViewComponent_span_5_Template, 1, 2, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx.borderRendered())("borderClick", ctx.clickOnBorder)("xRepeat", 1)("yRepeat", 1)("name", "zone");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.backgroundRender());

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getLevelContent());
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_9__["AsciiComponent"]],
          styles: [".zoneBackground[_ngcontent-%COMP%] {\n  position:absolute;\n  right: 0;\n  bottom: 0;\n  display: inline-block;\n  z-index: -100;\n}\n.zoneObject[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbmUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7QUFDQSIsImZpbGUiOiJ6b25lLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uem9uZUJhY2tncm91bmQge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB6LWluZGV4OiAtMTAwO1xufVxuLnpvbmVPYmplY3Qge1xufVxuIl19 */", ".zoneContent[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 70px;\n  }"]
        });
        return ZoneViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoneViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-zone-view',
            templateUrl: './zone-view.component.html',
            styleUrls: ['./zone-view.component.css'],
            styles: [".zoneContent {\n    position: relative;\n    min-height: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_3__["LINE_HEIGHT"] * 5, "px;\n  }")]
          }]
        }], function () {
          return [{
            type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__["GameplayLabService"]
          }, {
            type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["FullsizeAsciiRenderService"]
          }];
        }, {
          zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Bds/":
    /*!************************************************************!*\
      !*** ./src/app/utils/ui/atom/sliding/sliding.component.ts ***!
      \************************************************************/

    /*! exports provided: SlidingComponent */

    /***/
    function Bds(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidingComponent", function () {
        return SlidingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var _c0 = function _c0(a0, a1) {
        return {
          value: a0,
          params: a1
        };
      };

      var _c1 = ["*"];
      var defaultData = {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'initial',
        position: 'initial',
        transform: 'initial'
      };

      function generateStyle(dataName) {
        var tokenStyle = {};

        for (var key in defaultData) {
          tokenStyle[key] = '{{ ' + dataName + '' + key + ' }}';
        }

        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(tokenStyle);
      }

      function generateDefaultParams(dataName) {
        var tokenStyle = {};

        for (var key in defaultData) {
          tokenStyle['' + dataName + '' + key] = defaultData[key];
        }

        return tokenStyle;
      }

      var SlidingComponent =
      /** @class */
      function () {
        var SlidingComponent = /*#__PURE__*/function () {
          function SlidingComponent() {
            _classCallCheck(this, SlidingComponent);

            this.openData = {};
            this.closeData = {};
            this.slideOnlyOnClick = false;
            this.isOpen = false;
          }

          _createClass(SlidingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.ngOnChanges();
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {}
          }, {
            key: "open",
            value: function open() {
              this.isOpen = true;
            }
          }, {
            key: "close",
            value: function close() {
              this.isOpen = false;
            }
          }, {
            key: "onAnimationEvent",
            value: function onAnimationEvent($event) {}
          }, {
            key: "generateParams",
            value: function generateParams() {
              var params = {};

              for (var key in defaultData) {
                params['_openData' + key] = this.openData[key] ? this.openData[key] : defaultData[key];
                params['_closeData' + key] = this.closeData[key] ? this.closeData[key] : defaultData[key];
              }

              return params;
            }
          }, {
            key: "toggle",
            value: function toggle() {
              this.isOpen = !this.isOpen;
            }
          }, {
            key: "mouseOver",
            value: function mouseOver() {
              !this.slideOnlyOnClick && this.open();
            }
          }, {
            key: "mouseLeave",
            value: function mouseLeave() {
              !this.slideOnlyOnClick && this.close();
            }
          }, {
            key: "click",
            value: function click() {
              if (this.slideOnlyOnClick) {
                this.toggle();
              } else {
                this.close();
              }
            }
          }]);

          return SlidingComponent;
        }();

        SlidingComponent.ɵfac = function SlidingComponent_Factory(t) {
          return new (t || SlidingComponent)();
        };

        SlidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SlidingComponent,
          selectors: [["app-sliding"]],
          inputs: {
            openData: "openData",
            closeData: "closeData",
            slideOnlyOnClick: "slideOnlyOnClick"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          ngContentSelectors: _c1,
          decls: 2,
          vars: 4,
          consts: [[1, "slideContainer", 3, "mouseover", "mouseout", "mouseleave", "mousedown"]],
          template: function SlidingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SlidingComponent_Template_div_mouseover_0_listener() {
                return ctx.mouseOver();
              })("mouseout", function SlidingComponent_Template_div_mouseout_0_listener() {
                return ctx.mouseLeave();
              })("mouseleave", function SlidingComponent_Template_div_mouseleave_0_listener() {
                return ctx.mouseLeave();
              })("mousedown", function SlidingComponent_Template_div_mousedown_0_listener() {
                return ctx.click();
              })("@openClose.start", function SlidingComponent_Template_div_animation_openClose_start_0_listener($event) {
                return ctx.onAnimationEvent($event);
              })("@openClose.done", function SlidingComponent_Template_div_animation_openClose_done_0_listener($event) {
                return ctx.onAnimationEvent($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.isOpen ? "open" : "close", ctx.generateParams()));
            }
          },
          styles: [".slideContainer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic2xpZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"],
          data: {
            animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', generateStyle('_openData'), {
              params: generateDefaultParams('_openData')
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', generateStyle('_closeData'), {
              params: generateDefaultParams('_closeData')
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => close', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')])])]
          }
        });
        return SlidingComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sliding',
            templateUrl: './sliding.component.html',
            styleUrls: ['./sliding.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', generateStyle('_openData'), {
              params: generateDefaultParams('_openData')
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', generateStyle('_closeData'), {
              params: generateDefaultParams('_closeData')
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => close', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')])])]
          }]
        }], function () {
          return [];
        }, {
          openData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          slideOnlyOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "DbXV":
    /*!****************************************************************************!*\
      !*** ./src/app/characterEditor/character-form/character-form.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CharacterFormComponent */

    /***/
    function DbXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterFormComponent", function () {
        return CharacterFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../labyrinth/service/render/character-render.service */
      "mks4");
      /* harmony import */


      var _labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../labyrinth/service/data-storage.service */
      "Pmye");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CharacterFormComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterFormComponent_div_3_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var bodyPart_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.data[bodyPart_r1] = $event;
          })("change", function CharacterFormComponent_div_3_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bodyPart_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bodyPart_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data[bodyPart_r1])("maxLength", bodyPart_r1 === "hat" ? 6 : 1);
        }
      }

      var CharacterFormComponent =
      /** @class */
      function () {
        var CharacterFormComponent = /*#__PURE__*/function () {
          function CharacterFormComponent(renderService, dataStorage, ngZone) {
            _classCallCheck(this, CharacterFormComponent);

            this.renderService = renderService;
            this.dataStorage = dataStorage;
            this.ngZone = ngZone;
            this.data = new _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderData"]();
            this.render = "";
          }

          _createClass(CharacterFormComponent, [{
            key: "update",
            value: function update() {
              this.dataStorage.saveCharacter(this.data);
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.update();
              this.initCharacterRotation();
            }
          }, {
            key: "initCharacterRotation",
            value: function initCharacterRotation() {
              var _this7 = this;

              var time = 0;
              this.ngZone.runOutsideAngular(function () {
                _this7.interval = setInterval(_this7.rotate(time), 1000);
              });
            }
          }, {
            key: "rotate",
            value: function rotate(time) {
              var _this8 = this;

              return function () {
                time = (time + 1) % 4;
                var direction;

                switch (time) {
                  case 0:
                    direction = 'LEFT';
                    break;

                  case 1:
                    direction = 'BOTTOM';
                    break;

                  case 2:
                    direction = 'RIGHT';
                    break;

                  case 3:
                    direction = 'TOP';
                    break;

                  default:
                    direction = 'LEFT';
                }

                _this8.render = _this8.renderService.render(_this8.data, direction);
              };
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              clearInterval(this.interval);
            }
          }]);

          return CharacterFormComponent;
        }();

        CharacterFormComponent.ɵfac = function CharacterFormComponent_Factory(t) {
          return new (t || CharacterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        };

        CharacterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CharacterFormComponent,
          selectors: [["app-character-form"]],
          decls: 10,
          vars: 4,
          consts: [["ascii-render", "", 1, "text", "ihm-ui"], [1, "layout"], [4, "ngFor", "ngForOf"], ["ascii-render", "", 1, "text"], ["ascii-render", "", "borderTemplateName", "double", 1, "character-render", "asciiArt", 3, "xRepeat", "yRepeat"], [1, "important-ui"], ["ascii-render", "", 1, "input--border"], [1, "interact-ui", 3, "ngModel", "maxLength", "ngModelChange", "change"]],
          template: function CharacterFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aspect of your character");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterFormComponent_div_3_Template, 5, 3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.renderService.bodyPartsKey);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 6)("yRepeat", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.render);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
          styles: ["input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nspan.label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: flex;\n}\n\n.layout[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: -webkit-min-content -webkit-min-content -webkit-min-content;\n  grid-template-columns: min-content min-content min-content;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.character-render[_ngcontent-%COMP%]{\n}\n\n.column[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n\n.input--border[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7RUFDYixrRkFBMEQ7RUFBMUQsMERBQTBEO0VBQzFELG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUNBO0FBQ0E7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY2hhcmFjdGVyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ubGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxheW91dHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY2hhcmFjdGVyLXJlbmRlcntcbn1cblxuLmNvbHVtbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmlucHV0LS1ib3JkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */", "input[_ngcontent-%COMP%] {\n    width: 54px;\n    padding: 0;\n  }"]
        });
        return CharacterFormComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-character-form',
            templateUrl: './character-form.component.html',
            styleUrls: ['./character-form.component.css'],
            styles: ["input {\n    width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 6, "px;\n    padding: 0;\n  }\n  ")]
          }]
        }], function () {
          return [{
            type: _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderService"]
          }, {
            type: _labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Fey8":
    /*!*********************************************************!*\
      !*** ./src/app/labyrinth/service/sound/tone.service.ts ***!
      \*********************************************************/

    /*! exports provided: ToneService */

    /***/
    function Fey8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToneService", function () {
        return ToneService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tone */
      "XlTo");

      var ToneService =
      /** @class */
      function () {
        var ToneService = /*#__PURE__*/function () {
          function ToneService() {
            _classCallCheck(this, ToneService);
          }

          _createClass(ToneService, [{
            key: "Synth",
            value: function Synth() {
              return new tone__WEBPACK_IMPORTED_MODULE_1__["Synth"]();
            }
          }, {
            key: "start",
            value: function start() {
              tone__WEBPACK_IMPORTED_MODULE_1__["start"]();
            }
          }]);

          return ToneService;
        }();

        ToneService.ɵfac = function ToneService_Factory(t) {
          return new (t || ToneService)();
        };

        ToneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ToneService,
          factory: ToneService.ɵfac,
          providedIn: 'root'
        });
        return ToneService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToneService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JoyB":
    /*!********************************************************************************!*\
      !*** ./src/app/labyrinth/game-view/inventory-view/inventory-view.component.ts ***!
      \********************************************************************************/

    /*! exports provided: InventoryViewComponent */

    /***/
    function JoyB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryViewComponent", function () {
        return InventoryViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/render/resources/border */
      "7yLV");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/render/fullsize-ascii-render.service */
      "qOzd");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../utils/ascii/component/ascii.component */
      "LuAq");

      function InventoryViewComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function InventoryViewComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx_r1.computeTooltip(item_r2))("content", ctx_r1.render(item_r2));
        }
      }

      var InventoryViewComponent =
      /** @class */
      function () {
        var InventoryViewComponent = /*#__PURE__*/function () {
          function InventoryViewComponent(_renderService) {
            _classCallCheck(this, InventoryViewComponent);

            this._renderService = _renderService;
            this.borderDatas = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["bagGridTemplate"];
          }

          _createClass(InventoryViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "render",
            value: function render(obj) {
              return this._renderService.renderObj(obj);
            }
          }, {
            key: "computeTooltip",
            value: function computeTooltip(obj) {
              if (obj.name == 'start') return 'start flag';
              if (obj.name == 'exit') return 'the exit';
              if (obj.key) return 'closed door ' + obj.name;
              if (obj.destination) return 'door';
              if (obj.inventory) return 'You';
              return 'key ' + obj.name;
            }
          }]);

          return InventoryViewComponent;
        }();

        InventoryViewComponent.ɵfac = function InventoryViewComponent_Factory(t) {
          return new (t || InventoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__["FullsizeAsciiRenderService"]));
        };

        InventoryViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: InventoryViewComponent,
          selectors: [["inventory-view"]],
          inputs: {
            player: "player"
          },
          decls: 6,
          vars: 3,
          consts: [["ascii-border", "", "borderTemplateName", "inventoryBoxGridTemplate", 1, "inventory", "container", "decor-ui", 3, "xRepeat"], [1, "title"], ["app-ascii-on-grid-div", "", 1, "content"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["app-ascii", "", 1, "important-ui", 3, "tooltip", "content"]],
          template: function InventoryViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I N V E N T O R Y");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryViewComponent_ng_container_4_Template, 2, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryViewComponent_ng_container_5_Template, 2, 2, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.player && !!ctx.player.inventoryArray && ctx.player.inventoryArray.length == 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.inventoryArray);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_6__["AsciiComponent"]],
          styles: ["[_nghost-%COMP%] {\n    background: white;\n    display: inline-block;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    width: 9px;\n    margin-left: -18px;\n    margin-right: 9px;\n    display: inline-block;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 117px;\n  }"]
        });
        return InventoryViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'inventory-view',
            templateUrl: './inventory-view.component.html',
            styles: [":host {\n    background: white;\n    display: inline-block;\n  }\n\n  .title {\n    width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"], "px;\n    margin-left: -").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 2, "px;\n    margin-right: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"], "px;\n    display: inline-block;\n  }\n\n  .content {\n    display: inline-block;\n    width: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * (6 * 2 + 1), "px;\n  }\n  ")]
          }]
        }], function () {
          return [{
            type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__["FullsizeAsciiRenderService"]
          }];
        }, {
          player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "K43I":
    /*!******************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-modal/ascii-modal.component.ts ***!
      \******************************************************************/

    /*! exports provided: AsciiModalComponent */

    /***/
    function K43I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiModalComponent", function () {
        return AsciiModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ascii-border/ascii-border.component */
      "XxEr");

      function AsciiModalComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_div_6_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r2.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplateName", "paperExitGridTemplate");
        }
      }

      function AsciiModalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsciiModalComponent_div_0_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.closable);
        }
      }

      var _c0 = ["*"];

      var AsciiModalComponent =
      /** @class */
      function () {
        var AsciiModalComponent = /*#__PURE__*/function () {
          function AsciiModalComponent() {
            _classCallCheck(this, AsciiModalComponent);

            this._show = false;
            this.closable = false;
          }

          _createClass(AsciiModalComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "show",
            value: function show() {
              this._show = true;
            }
          }, {
            key: "hide",
            value: function hide() {
              this._show = false;
            }
          }]);

          return AsciiModalComponent;
        }();

        AsciiModalComponent.ɵfac = function AsciiModalComponent_Factory(t) {
          return new (t || AsciiModalComponent)();
        };

        AsciiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiModalComponent,
          selectors: [["app-ascii-modal"]],
          inputs: {
            _show: "_show",
            closable: "closable"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 1,
          consts: [["class", "modalScreen", 4, "ngIf"], [1, "modalScreen"], [1, "behindModal", 3, "click"], [1, "backgroundModal"], ["ascii-border", "", "class", "cross asciiArt ihm-ui", 3, "borderTemplateName", "click", 4, "ngIf"], ["ascii-border", "", 1, "cross", "asciiArt", "ihm-ui", 3, "borderTemplateName", "click"]],
          template: function AsciiModalComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsciiModalComponent_div_0_Template, 12, 1, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._show === true);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"]],
          styles: [".modalScreen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr -webkit-min-content 1fr;\n  grid-template-columns: 1fr min-content 1fr;\n  grid-template-rows: 1fr -webkit-min-content 1fr;\n  grid-template-rows: 1fr min-content 1fr;\n  z-index: 100;\n}\n\n.behindModal[_ngcontent-%COMP%] {\n  background: white;\n  opacity: 0.8;\n  z-index: 10;\n}\n\n.backgroundModal[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  z-index: 99;\n  position: relative;\n}\n\n.cross[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 0;\n  top: 0;\nbackground: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrREFBMEM7RUFBMUMsMENBQTBDO0VBQzFDLCtDQUF1QztFQUF2Qyx1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBQ1IsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6ImFzY2lpLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxTY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCAxZnI7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmJlaGluZE1vZGFsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogMTA7XG59XG5cblxuLmJhY2tncm91bmRNb2RhbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcm9zcyB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuYmFja2dyb3VuZDogd2hpdGU7XG59XG4iXX0= */"]
        });
        return AsciiModalComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ascii-modal',
            templateUrl: './ascii-modal.component.html',
            styleUrls: ['./ascii-modal.component.css']
          }]
        }], function () {
          return [];
        }, {
          _show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "LIiV":
    /*!********************************************************!*\
      !*** ./src/app/utils/ascii/ascii-generator.service.ts ***!
      \********************************************************/

    /*! exports provided: AsciiGeneratorService */

    /***/
    function LIiV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiGeneratorService", function () {
        return AsciiGeneratorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AsciiGeneratorService =
      /** @class */
      function () {
        var AsciiGeneratorService = /*#__PURE__*/function () {
          function AsciiGeneratorService() {
            _classCallCheck(this, AsciiGeneratorService);

            this.reverseChar = {
              'd': 'b',
              '/': '\\',
              'q': 'p',
              '(': ')'
            };

            for (var key in _objectSpread({}, this.reverseChar)) {
              this.reverseChar[this.reverseChar[key]] = key;
            }
          }

          _createClass(AsciiGeneratorService, [{
            key: "reverseString",
            value: function reverseString(str) {
              return this.reverseChar[str] ? this.reverseChar[str] : str;
            }
          }, {
            key: "reverseTemplate",
            value: function reverseTemplate(template, partsKey) {
              var _this9 = this;

              return template.split("\n").map(function (row) {
                var reversedRow = row.split(/\$\{(\w+)\}/g).filter(function (s) {
                  return s != "";
                }).map(function (word) {
                  if (!partsKey.includes(word) && !partsKey.includes(word.replace("Reversed", ""))) {
                    return word.split("").map(function (e) {
                      return _this9.reverseChar[e] ? _this9.reverseChar[e] : e;
                    }).reverse().join("");
                  } else if (word.endsWith("Reversed")) {
                    return "${".concat(word.replace("Reversed", ""), "}");
                  } else {
                    return "${".concat(word, "Reversed}");
                  }
                }).reverse().join("");
                return reversedRow;
              }).join("\n");
            }
          }, {
            key: "reverseData",
            value: function reverseData(data) {
              var ret = {};

              for (var key in data) {
                ret[key + "Reversed"] = this.reverseString(data[key]);
              }

              return ret;
            }
          }, {
            key: "templateString",
            value: function templateString(template, data) {
              return template.replace(/\$\{(\w+)\}/g, function (_, name) {
                return data[name] || "?";
              });
            }
          }]);

          return AsciiGeneratorService;
        }();

        AsciiGeneratorService.ɵfac = function AsciiGeneratorService_Factory(t) {
          return new (t || AsciiGeneratorService)();
        };

        AsciiGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AsciiGeneratorService,
          factory: AsciiGeneratorService.ɵfac,
          providedIn: 'root'
        });
        return AsciiGeneratorService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGeneratorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LuAq":
    /*!**********************************************************!*\
      !*** ./src/app/utils/ascii/component/ascii.component.ts ***!
      \**********************************************************/

    /*! exports provided: AsciiComponent */

    /***/
    function LuAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiComponent", function () {
        return AsciiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["app-ascii", ""];

      function AsciiComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.tooltip, "]");
        }
      }

      var _c1 = function _c1(a0) {
        return [a0, "asciiArt"];
      };

      var _c2 = ["*"];

      var AsciiComponent =
      /** @class */
      function () {
        var AsciiComponent = /*#__PURE__*/function () {
          function AsciiComponent() {
            _classCallCheck(this, AsciiComponent);

            this.asciiClass = '';
          }

          _createClass(AsciiComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return AsciiComponent;
        }();

        AsciiComponent.ɵfac = function AsciiComponent_Factory(t) {
          return new (t || AsciiComponent)();
        };

        AsciiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiComponent,
          selectors: [["", "app-ascii", ""]],
          inputs: {
            content: "content",
            tooltip: "tooltip",
            asciiClass: "asciiClass"
          },
          attrs: _c0,
          ngContentSelectors: _c2,
          decls: 5,
          vars: 5,
          consts: [[1, "withtooltip", 3, "ngClass"], ["class", "tooltiptext text", 4, "ngIf"], [1, "tooltiptext", "text"]],
          template: function AsciiComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsciiComponent_div_3_Template, 2, 1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.asciiClass));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tooltip);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
          styles: ["pre[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: inline-block;\n  background: white;\n}\n\n\n\n.withtooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: white;\n  text-align: center;\n  background: white;\n  border: thin;\n  \n  position: absolute;\n  z-index: 1;\n}\n\n\n\n.withtooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFzY2lpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogVG9vbHRpcCB0ZXh0ICovXG4ud2l0aHRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiB0aGluO1xuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xuLndpdGh0b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iXX0= */"]
        });
        return AsciiComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-ascii]',
            templateUrl: './ascii.component.html',
            styleUrls: ['./ascii.component.css']
          }]
        }], function () {
          return [];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          asciiClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "O+Zk":
    /*!**********************************************************************!*\
      !*** ./src/app/labyrinth/service/render/map-ascii-render.service.ts ***!
      \**********************************************************************/

    /*! exports provided: MapAsciiRenderService */

    /***/
    function OZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapAsciiRenderService", function () {
        return MapAsciiRenderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ascii-render.service */
      "ZLBt");
      /* harmony import */


      var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-generator.service */
      "LIiV");

      var MapAsciiRenderService =
      /** @class */
      function () {
        var MapAsciiRenderService = /*#__PURE__*/function (_ascii_render_service) {
          _inherits(MapAsciiRenderService, _ascii_render_service);

          var _super = _createSuper(MapAsciiRenderService);

          function MapAsciiRenderService(asciiGeneratorService) {
            var _this10;

            _classCallCheck(this, MapAsciiRenderService);

            var directions = ["top", "bottom", "left", "right"];
            _this10 = _super.call(this, asciiGeneratorService);
            directions.forEach(function (dir) {
              _this10[dir + "DoorTemplate"] = "${name}";
              _this10[dir + "WallTemplate"] = " ";
            });
            _this10.leftBottomCornerTemplate = " ";
            _this10.rightBottomCornerTemplate = " ";
            _this10.leftTopCornerTemplate = " ";
            _this10.rightTopCornerTemplate = " ";
            return _this10;
          }

          _createClass(MapAsciiRenderService, [{
            key: "renderPlayer",
            value: function renderPlayer(characterData) {
              return "@";
            }
          }, {
            key: "renderCenter",
            value: function renderCenter(zone, party) {
              var content = zone.content.toArray().filter(function (it) {
                return !it.destination;
              });
              if (party.player.location.x === zone.x && party.player.location.y === zone.y) return "@";else if (zone.x === party.level.exit.x && zone.y === party.level.exit.y) {
                return "€";
              } else if (content.length > 0) {
                if (content.toArray().filter(function (it) {
                  return it.name === "start";
                }).length > 0) return "$";else return content.toArray()[0].name;
              } else return "+";
            }
          }, {
            key: "renderSide",
            value: function renderSide(direction, door) {
              var templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";
              var doorName;
              if (!door) doorName = " ";else if (door.name != "door") {
                doorName = door.name;
              } else {
                if (direction == 'TOP' || direction == "BOTTOM") doorName = "|";else doorName = "-";
              }

              var data = _objectSpread(_objectSpread({}, this.defaultData), {}, {
                name: doorName
              });

              data.nameReversed = data.name;
              data.closedLeftReversed = data.closedLeft;

              if (door && door.name == "door") {
                data.closedTop = data.closedTop.replace(/./g, " ");
                data.closedBottom = data.closedBottom.replace(/./g, " ");
                data.closedLeft = data.closedLeft.replace(/./g, " ");
                data.closedLeftReversed = data.closedLeft;
              }

              return this.asciiGeneratorService.templateString(this[templateName], data);
            }
          }, {
            key: "renderObj",
            value: function renderObj(obj, characterRenderData) {
              if (obj.classname === "KeyObjectZone") {
                return obj.name;
              } else if (obj.name === "player") {
                return "¤";
              } else if (obj.name === "exit") {
                return "€";
              } else if (obj.name === "start") {
                return "$";
              } else if (obj.name === "compass") {
                return "%";
              } else if (obj.name === "boussole") {
                return "@";
              } else if (obj.name === "radar") {
                return "®";
              } else if (obj.name === "map") {
                return "#";
              } else {
                return obj.name;
              }
            }
          }]);

          return MapAsciiRenderService;
        }(_ascii_render_service__WEBPACK_IMPORTED_MODULE_1__["AsciiRenderService"]);

        MapAsciiRenderService.ɵfac = function MapAsciiRenderService_Factory(t) {
          return new (t || MapAsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_2__["AsciiGeneratorService"]));
        };

        MapAsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: MapAsciiRenderService,
          factory: MapAsciiRenderService.ɵfac,
          providedIn: 'root'
        });
        return MapAsciiRenderService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapAsciiRenderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_2__["AsciiGeneratorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "O1Wb":
    /*!*********************************************!*\
      !*** ./src/app/utils/ascii/ascii.module.ts ***!
      \*********************************************/

    /*! exports provided: AsciiModule */

    /***/
    function O1Wb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiModule", function () {
        return AsciiModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ascii-character/ascii-character.component */
      "sAm1");
      /* harmony import */


      var _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./component/ascii.component */
      "LuAq");
      /* harmony import */


      var _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ascii-line/ascii-line.component */
      "639w");
      /* harmony import */


      var _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ascii-modal/ascii-modal.component */
      "K43I");
      /* harmony import */


      var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ascii-button/ascii-button.component */
      "6uqV");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ascii-on-grid-div/ascii-grid.module */
      "Vt3m");

      var AsciiModule =
      /** @class */
      function () {
        var AsciiModule = function AsciiModule() {
          _classCallCheck(this, AsciiModule);
        };

        AsciiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AsciiModule
        });
        AsciiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AsciiModule_Factory(t) {
            return new (t || AsciiModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]]]
        });
        return AsciiModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsciiModule, {
          declarations: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"], _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"], _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"], _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"], _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]],
          exports: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"], _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"], _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"], _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"], _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"], _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"], _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"], _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"], _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"]],
            exports: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"], _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"], _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"], _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"], _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Pmye":
    /*!***********************************************************!*\
      !*** ./src/app/labyrinth/service/data-storage.service.ts ***!
      \***********************************************************/

    /*! exports provided: DataStorageService */

    /***/
    function Pmye(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
        return DataStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _render_character_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./render/character-render.service */
      "mks4");

      var DataStorageService =
      /** @class */
      function () {
        var DataStorageService = /*#__PURE__*/function () {
          function DataStorageService() {
            _classCallCheck(this, DataStorageService);

            this.currentParty$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.lastMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.characterDirection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.currentCharaRenderData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.characterDirection$.next('LEFT');
            this.currentCharaRenderData$.next(new _render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderData"]());
          }

          _createClass(DataStorageService, [{
            key: "saveParty",
            value: function saveParty(party) {
              this.currentParty$.next(party);
            }
          }, {
            key: "saveLastMessages",
            value: function saveLastMessages() {
              var _ref2;

              this.lastMessage$.next((_ref2 = arguments.length - 1, _ref2 < 0 || arguments.length <= _ref2 ? undefined : arguments[_ref2]));
            }
          }, {
            key: "getCurrentParty",
            value: function getCurrentParty() {
              return this.currentParty$;
            }
          }, {
            key: "saveCharacter",
            value: function saveCharacter(chardata) {
              this.currentCharaRenderData$.next(chardata);
            }
          }, {
            key: "saveCharacterDirection",
            value: function saveCharacterDirection(direction) {
              this.characterDirection$.next(direction);
            }
          }, {
            key: "getCurrentCharaRenderData",
            value: function getCurrentCharaRenderData() {
              return this.currentCharaRenderData$;
            }
          }, {
            key: "getPlayerDirection",
            value: function getPlayerDirection() {
              return this.characterDirection$;
            }
          }]);

          return DataStorageService;
        }();

        DataStorageService.ɵfac = function DataStorageService_Factory(t) {
          return new (t || DataStorageService)();
        };

        DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: DataStorageService,
          factory: DataStorageService.ɵfac,
          providedIn: 'root'
        });
        return DataStorageService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RNzt":
    /*!*********************************************************!*\
      !*** ./src/app/labyrinth/service/highscores.service.ts ***!
      \*********************************************************/

    /*! exports provided: HighscoresService */

    /***/
    function RNzt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighscoresService", function () {
        return HighscoresService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HighscoresService =
      /** @class */
      function () {
        var HighscoresService = /*#__PURE__*/function () {
          function HighscoresService(http) {
            _classCallCheck(this, HighscoresService);

            this.http = http;
          }

          _createClass(HighscoresService, [{
            key: "saveScore",
            value: function saveScore(player, score) {
              var objectObservable = this.http.post("http://sarahbuisson-server-sample.herokuapp.com/score", {
                player: player,
                score: score
              }, {
                headers: {
                  'Access-Control-Allow-Origin': '*'
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (data) {
                return console.log('success', data);
              }, function (error) {
                return console.log('oops', error);
              });
              return objectObservable;
            }
          }, {
            key: "getScores",
            value: function getScores() {
              return this.http.get("http://sarahbuisson-server-sample.herokuapp.com/scores");
            }
          }]);

          return HighscoresService;
        }();

        HighscoresService.ɵfac = function HighscoresService_Factory(t) {
          return new (t || HighscoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };

        HighscoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: HighscoresService,
          factory: HighscoresService.ɵfac,
          providedIn: 'root'
        });
        return HighscoresService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighscoresService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SpuM":
    /*!********************************************************************!*\
      !*** ./src/app/labyrinth/new-form/new-labyrinth-form.component.ts ***!
      \********************************************************************/

    /*! exports provided: NewLabyrinthFormComponent */

    /***/
    function SpuM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewLabyrinthFormComponent", function () {
        return NewLabyrinthFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/generate-lab.service */
      "9YXO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../characterEditor/character-form/character-form.component */
      "DbXV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-modal/ascii-modal.component */
      "K43I");
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../loading/loading.component */
      "dyXb");

      var _c0 = ["loadingModal"];

      var NewLabyrinthFormComponent =
      /** @class */
      function () {
        var NewLabyrinthFormComponent = /*#__PURE__*/function () {
          function NewLabyrinthFormComponent(labService, router, route) {
            _classCallCheck(this, NewLabyrinthFormComponent);

            this.labService = labService;
            this.router = router;
            this.route = route;
            this.size = 5;
          }

          _createClass(NewLabyrinthFormComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this11 = this;

              this.subscriptions = this.route.queryParams.subscribe(function (params) {
                _this11.size = params['size'] ? params['size'] : 5;
              });
            }
          }, {
            key: "play",
            value: function play() {
              var _this12 = this;

              this.loadingModal.show();
              var timer = new Promise(function (resolve) {
                // after 1 second signal that the job is finished with an error
                setTimeout(function () {
                  return resolve('done');
                }, 5000);
              });
              var generation = new Promise(function (resolve) {
                // not taking our time to do the job
                _this12.labService.generate(_this12.size, _this12.playerName);

                resolve({}); // immediately give the result: 123
              });
              Promise.all([timer, generation]).then(function () {
                _this12.loadingModal.hide();

                _this12.router.navigateByUrl('/game');
              });
            }
          }, {
            key: "emptyBoard",
            value: function emptyBoard() {
              this.labService.generateEmpty(this.size);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscriptions.unsubscribe();
            }
          }]);

          return NewLabyrinthFormComponent;
        }();

        NewLabyrinthFormComponent.ɵfac = function NewLabyrinthFormComponent_Factory(t) {
          return new (t || NewLabyrinthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
        };

        NewLabyrinthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: NewLabyrinthFormComponent,
          selectors: [["app-labyrinth-form"]],
          viewQuery: function NewLabyrinthFormComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
            }
          },
          decls: 15,
          vars: 1,
          consts: [["ascii-render", "", "borderTemplateName", "paper", 1, "container", "text", "background-ui"], ["ascii-render", "", 1, "text", "ihm-ui"], [1, "grid"], ["ascii-render", "", 1, "input--border"], [1, "text", 3, "ngModel", "ngModelChange"], ["ascii-render", "", 1, "text", "important-ui", 3, "click"], ["loadingModal", ""]],
          template: function NewLabyrinthFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-character-form");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Level creation");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Labyrinth Size: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLabyrinthFormComponent_Template_input_ngModelChange_8_listener($event) {
                return ctx.size = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewLabyrinthFormComponent_Template_button_click_10_listener() {
                return ctx.play();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "play ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-ascii-modal", null, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-loading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_5__["CharacterFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_7__["AsciiModalComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"]],
          styles: ["input[_ngcontent-%COMP%] {\n      width: 72px\n    }\n\n\n    .grid[_ngcontent-%COMP%] {\n      max-width: 270px;\n      display: grid;\n      grid-template-columns: 2fr 81px;\n      align-items: center;\n      text-align: center;\n    }"]
        });
        return NewLabyrinthFormComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewLabyrinthFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-labyrinth-form',
            templateUrl: './new-labyrinth-form.component.html',
            styles: ["\n    input {\n      width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 8, "px\n    }\n\n\n    .grid {\n      max-width: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 30, "px;\n      display: grid;\n      grid-template-columns: 2fr ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 9, "px;\n      align-items: center;\n      text-align: center;\n    }\n  ")]
          }]
        }], function () {
          return [{
            type: _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utils/ui/atom/sound/sound.component */
      "dxnq");

      var AppComponent =
      /** @class */
      function () {
        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'website-angular';
        };

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 4,
          vars: 0,
          consts: [["href", "https://github.com/sarahBuisson/labyrinth-game/actions", 1, "text", "repository"]],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ui-sound");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "repository github");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_2__["SoundComponent"]],
          styles: [".menuBar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n}\n\n.repository[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZW51QmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5yZXBvc2l0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbiJdfQ== */"]
        });
        return AppComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UJlK":
    /*!********************************************************************!*\
      !*** ./src/app/labyrinth/game-view/map-view/map-view.component.ts ***!
      \********************************************************************/

    /*! exports provided: MapViewComponent */

    /***/
    function UJlK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapViewComponent", function () {
        return MapViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/render/resources/border */
      "7yLV");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../utils/kotlinUtils */
      "/6Df");
      /* harmony import */


      var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/gameplay-lab.service */
      "ty5H");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MapViewComponent_div_1_div_9_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var levelCaseInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r7.borderRendered(levelCaseInput_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.computeClass(levelCaseInput_r5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.contentRendered(levelCaseInput_r5));
        }
      }

      function MapViewComponent_div_1_div_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_div_9_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var levelCaseInput_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isCaseShowable(levelCaseInput_r5));
        }
      }

      function MapViewComponent_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_div_9_ng_container_1_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "grid-template-columns": a0
        };
      };

      function MapViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapViewComponent_div_1_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "repeat(auto-fill, " + ctx_r0.currentLevelProxy.contentArray[0].length + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentLevelProxy.contentArray);
        }
      }

      var mapBorderData = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["paperGridTemplate"];

      var MapViewComponent =
      /** @class */
      function () {
        var MapViewComponent = /*#__PURE__*/function () {
          function MapViewComponent(gameplayLabService) {
            _classCallCheck(this, MapViewComponent);

            this.gameplayLabService = gameplayLabService;
            this.rangeArroundPlayer = -1;
            this.borderData = mapBorderData;
          }

          _createClass(MapViewComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              console.log("update");
              console.log(this.currentParty);
              this.updateFieldOfView();
              console.log(this.currentLevelProxy);
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.updateFieldOfView();
            }
          }, {
            key: "updateFieldOfView",
            value: function updateFieldOfView() {
              this.currentLevelProxy = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_3__["parseKotlinToJsView"])(this.currentParty.level, 4);
            }
          }, {
            key: "isStart",
            value: function isStart(levelCase) {
              var start = this.currentParty.level.start;
              return start.x === levelCase.x && start.y === levelCase.y;
            }
          }, {
            key: "isExit",
            value: function isExit(levelCase) {
              var exit = this.currentParty.level.exit;
              return exit.x === levelCase.x && exit.y === levelCase.y;
            }
          }, {
            key: "hasPlayer",
            value: function hasPlayer(levelCase) {
              var location = this.currentParty.player.location;
              return location.x === levelCase.x && location.y === levelCase.y;
            }
          }, {
            key: "isCaseShowable",
            value: function isCaseShowable(levelCase) {
              if (this.rangeArroundPlayer < 0) return true;
              var location = this.currentParty.player.location;
              return Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer;
            }
          }, {
            key: "borderRendered",
            value: function borderRendered(levelCase) {
              var _this13 = this;

              var borderRendered = _objectSpread({}, _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["mapGridTemplate"]);

              var directions = ['left', 'right', 'top', 'bottom'];
              directions.forEach(function (direction) {
                var door = _this13.gameplayLabService.doorAt(levelCase, direction.toUpperCase());

                borderRendered[direction + "Class"] = "decor-ui";

                if (!!door) {
                  if (door.key) {
                    borderRendered[direction + "Template"] = door.name;
                    borderRendered[direction + "Class"] = "interact-ui";
                  } else {}
                } else {
                  console.log("nothing");
                  borderRendered[direction + "Template"] = ' ';
                }
              });
              return borderRendered;
            }
          }, {
            key: "contentRendered",
            value: function contentRendered(levelCaseInput) {
              var content = this.gameplayLabService.levelContent(levelCaseInput);

              if (content[0]) {
                return this.renderService.renderObj(content[0]);
              } else {
                var nbrOfConnections = levelCaseInput.connectedArray.length;

                if (nbrOfConnections == 1) {
                  return " ";
                }

                if (nbrOfConnections == 2) {
                  return ".";
                } else {
                  return "+";
                }
              }
            }
          }, {
            key: "computeClass",
            value: function computeClass(levelCaseInput) {
              var content = this.gameplayLabService.levelContent(Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_3__["parseKotlinToJsView"])(levelCaseInput, 3));

              if (content[0]) {
                if (content[0].name === "player" || content[0].name === "exit") {
                  return "important-ui";
                }
              }

              return "ihm-ui";
            }
          }]);

          return MapViewComponent;
        }();

        MapViewComponent.ɵfac = function MapViewComponent_Factory(t) {
          return new (t || MapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"]));
        };

        MapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MapViewComponent,
          selectors: [["map-view"]],
          inputs: {
            currentParty: "currentParty",
            renderService: "renderService",
            rangeArroundPlayer: "rangeArroundPlayer"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 20,
          vars: 2,
          consts: [["ascii-render", "", 1, "container", "decor-ui", 3, "borderTemplate"], ["class", "row1", 4, "ngIf"], ["ascii-border", "", 1, "legend", "text", "decor-ui"], [1, "important-ui"], [1, "row1"], [1, "title", "text", "decor-ui"], [1, "main", "asciiArt", "ihm-ui", 3, "ngStyle"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["ascii-border", "", "xRepeat", "1", "yRepeat", "1", 1, "mapzone", 3, "borderTemplate"], [3, "ngClass"]],
          template: function MapViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_Template, 10, 4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "legend:");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA4 = You are here");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u20AC = Exit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A-Z = Locked door");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " a-z = keys");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " | ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".+- = open path");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx.borderData);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLevelProxy);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
          styles: ["[_nghost-%COMP%] {\n  background: white;\n  text-align: left;\n}\n\n.levelRowRender[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 1.5em);\n}\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.row1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.mapzone[_ngcontent-%COMP%] {\n  display: inline-block\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6Im1hcC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGV2ZWxSb3dSZW5kZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEuNWVtKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnJvdzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGFpbmVyID4gZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIgPiBzcGFuIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuLm1haW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXB6b25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbiJdfQ== */", ".title[_ngcontent-%COMP%] {\n      display: inline-flex;\n      flex-direction: column;\n      width: 27px;\n      padding:14px 9px;\n    }\n\n    .legend[_ngcontent-%COMP%] {\n        min-width: 90px;\n    }"]
        });
        return MapViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'map-view',
            templateUrl: './map-view.component.html',
            styleUrls: ['./map-view.component.css'],
            styles: ["\n    .title {\n      display: inline-flex;\n      flex-direction: column;\n      width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 3, "px;\n      padding:").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 1, "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 1, "px;\n    }\n\n    .legend {\n        min-width: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 10, "px;\n    }")]
          }]
        }], function () {
          return [{
            type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"]
          }];
        }, {
          currentParty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          renderService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rangeArroundPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Vt3m":
    /*!********************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-grid.module.ts ***!
      \********************************************************************/

    /*! exports provided: AsciiGridModule */

    /***/
    function Vt3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiGridModule", function () {
        return AsciiGridModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ascii-on-grid-div.component */
      "knP+");
      /* harmony import */


      var _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ascii-inside-grid.component */
      "5SNw");

      var AsciiGridModule =
      /** @class */
      function () {
        var AsciiGridModule = function AsciiGridModule() {
          _classCallCheck(this, AsciiGridModule);
        };

        AsciiGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AsciiGridModule
        });
        AsciiGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AsciiGridModule_Factory(t) {
            return new (t || AsciiGridModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
        });
        return AsciiGridModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsciiGridModule, {
          declarations: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"], _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"], _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGridModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"], _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]],
            exports: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"], _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XxEr":
    /*!********************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-border/ascii-border.component.ts ***!
      \********************************************************************/

    /*! exports provided: AsciiBorderComponent */

    /***/
    function XxEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiBorderComponent", function () {
        return AsciiBorderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../labyrinth/service/render/resources/border */
      "7yLV");
      /* harmony import */


      var _AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../AsciiConst */
      "fMyw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AsciiBorderComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["left"];
      };

      function AsciiBorderComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_div_10_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.borderClick("LEFT", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.borderClasses.left || ctx_r1.borderClasses["default"])("ngStyle", ctx_r1.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.renders.left);
        }
      }

      var _c1 = function _c1() {
        return ["bottom"];
      };

      function AsciiBorderComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_div_14_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.borderClick("BOTTOM", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.borderClasses.bottom || ctx_r2.borderClasses["default"])("ngStyle", ctx_r2.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.renders.bottom);
        }
      }

      var _c2 = function _c2() {
        return ["top", "left"];
      };

      var _c3 = function _c3() {
        return ["top"];
      };

      var _c4 = function _c4() {
        return ["top", "right"];
      };

      var _c5 = function _c5() {
        return ["right"];
      };

      var _c6 = function _c6() {
        return ["bottom", "left"];
      };

      var _c7 = function _c7() {
        return ["bottom", "right"];
      };

      var _c8 = ["*"];

      var AsciiBorderComponent =
      /** @class */
      function () {
        var AsciiBorderComponent = /*#__PURE__*/function () {
          function AsciiBorderComponent(_changeDetectorRef, hostRef, renderer, ngZone) {
            _classCallCheck(this, AsciiBorderComponent);

            this._changeDetectorRef = _changeDetectorRef;
            this.hostRef = hostRef;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.computeRenderEachTime = undefined;
            this.haveAlreadyBeComputed = false;
            this.xComputedRepeat = 0;
            this.yComputedRepeat = 0;
            this.renders = {};
            this.borderClasses = {};
            this.computedData = {
              borderSizePx: {},
              computed: 'none'
            };
            this.toClear = [];

            this.borderClick = function () {};

            this.debug = false;
          }

          _createClass(AsciiBorderComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              try {
                this.borderTemplateName = this.borderTemplateName || this.hostRef.nativeElement.nodeName;
                this.borderTemplate = this.borderTemplate || this.getAsciiBorderForName(this.borderTemplateName);
                this.computeData();

                if (this.computeRenderEachTime == undefined) {
                  this.computeRenderEachTime = true; // this.hostRef.nativeElement.clientWidth ? false : true
                }

                if (this.xRepeat && this.yRepeat) {
                  this.computeBorderDimension();
                }
              } catch (e) {
                console.error(e);
              }
            }
          }, {
            key: "computeData",
            value: function computeData() {
              if (this.borderTemplate) {
                this.computedData = _objectSpread(_objectSpread({}, this.computedData), {}, {
                  borderSizePx: {
                    top: this.borderTemplate.topPartHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"],
                    bottom: this.borderTemplate.bottomPartHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"],
                    right: this.borderTemplate.rightPartWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"],
                    left: this.borderTemplate.leftPartWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]
                  }
                });
              }
            }
          }, {
            key: "counter",

            /**
             * return an array of counter
             * @param size
             */
            value: function counter(size) {
              var array = new Array();

              for (var i = 0; i < size; i++) {
                array.push(i);
              }

              return array; //TODO check why dont work for modal: [...Array(size).keys()]
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              this.computeAndUpdateDimension();
            }
          }, {
            key: "computeAndUpdateDimension",
            value: function computeAndUpdateDimension() {
              var _this14 = this;

              try {
                if (this.computeBorderDimension()) {
                  this.ngZone.runOutsideAngular(function () {
                    var timeout = setTimeout(function () {
                      _this14._changeDetectorRef.detectChanges();

                      clearTimeout(timeout);
                    }, 100);

                    _this14.toClear.push(timeout);
                  });
                }
              } catch (e) {
                console.error(e);
              }
            }
          }, {
            key: "computeBorderDimension",
            value: function computeBorderDimension() {
              var _this15 = this;

              if (!this.computedData.borderSizePx.top) this.computeData();
              var mainElement = this.hostRef.nativeElement;
              var height, width;

              if (mainElement.clientWidth) {
                height = mainElement.clientHeight; // - this.computedData.borderTopSizePx - this.computedData.borderBottomSizePx

                width = mainElement.clientWidth;
                this.computedData.computed = 'client';
              } else if (mainElement.offsetWidth) {
                this.computedData.computed = 'offset' + mainElement.offsetWidth;
                height = mainElement.offsetHeight - this.computedData.borderSizePx.top - this.computedData.borderSizePx.bottom;
                width = mainElement.offsetWidth - this.computedData.borderSizePx.left - this.computedData.borderSizePx.right;
              } else {
                this.computedData.computed = 'none';
                return false;
              }

              if (isNaN(height) || isNaN(width)) {
                console.warn("no dimension " + height + " " + width);
                return false;
              }

              var hostHaveChanged = this.computedData.widthPx != width || this.computedData.heightPx != height;
              var shouldCompute = (width || this.xRepeat) && (height || this.yRepeat) && hostHaveChanged && (this.computeRenderEachTime || !this.haveAlreadyBeComputed);

              if (shouldCompute) {
                this.computedData.widthPx = width;
                this.computedData.heightPx = height;
                var oldX = this.xComputedRepeat;
                var oldY = this.yComputedRepeat;

                if (this.yRepeat != undefined) {
                  this.yComputedRepeat = this.yRepeat;
                } else {
                  this.yComputedRepeat = Math.floor(height / (_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * this.borderTemplate.leftSideHeight));
                }

                if (this.xRepeat != undefined) {
                  this.xComputedRepeat = this.xRepeat;
                } else {
                  this.xComputedRepeat = Math.floor(width / (_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * this.borderTemplate.topSideWidth));
                }

                var allDataPresent = this.xComputedRepeat && this.yComputedRepeat;
                var computedDataHaveChange = oldX != this.xComputedRepeat || oldY != this.yComputedRepeat;

                if (allDataPresent && computedDataHaveChange) {
                  try {
                    var splitTop = this.borderTemplate.topTemplate.split("\n");
                    var splitBottom = this.borderTemplate.bottomTemplate.split("\n");
                    var counterX = this.counter(this.xComputedRepeat);
                    var counterY = this.counter(this.yComputedRepeat);
                    this.renders = {
                      top: splitTop.map(function (l) {
                        return counterX.map(function (i) {
                          return l;
                        }).join('');
                      }).join('\n'),
                      bottom: splitBottom.map(function (l) {
                        return counterX.map(function (i) {
                          return l;
                        }).join('');
                      }).join('\n'),
                      left: counterY.map(function (i) {
                        return _this15.borderTemplate.leftTemplate;
                      }).join('\n'),
                      right: counterY.map(function (i) {
                        return _this15.borderTemplate.rightTemplate;
                      }).join('\n')
                    };
                    this.haveAlreadyBeComputed = true;
                    return true;
                  } catch (e) {
                    console.error(e);
                    return true;
                  }
                }
              }
            }
          }, {
            key: "ngAfterContentChecked",
            value: function ngAfterContentChecked() {
              var _this16 = this;

              if (this.computeRenderEachTime || this.haveAlreadyBeComputed) this.ngZone.runOutsideAngular(function () {
                var timeout = setTimeout(function () {
                  try {
                    _this16.computeAndUpdateDimension();

                    clearTimeout(timeout);
                  } catch (e) {
                    console.error(e);
                  }
                }, 100);

                _this16.toClear.push(timeout);
              });
            }
          }, {
            key: "getAsciiBorderForName",
            value: function getAsciiBorderForName(name) {
              if (Object.keys(_labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__).includes(name + 'GridTemplate')) return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__[name + 'GridTemplate']; //TODO : we need to test the include otherwise it bug

              if (Object.keys(_labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__).includes(name)) return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__[name]; //TODO : we need to test the include otherwise it bug

              if (name === 'BUTTON') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultButtonBorderTemplate"];
              }

              if (name === 'DIV') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultGridTemplate"];
              }

              if (name === 'H1') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultTitleBorderTemplate"];
              }

              return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultGridTemplate"];
            }
          }, {
            key: "styleOfPart",
            value: function styleOfPart(directions) {
              var _this17 = this;

              var style = {
                position: 'absolute',
                top: 0,
                left: 0
              };
              directions.forEach(function (dir) {
                if (dir === 'left') {
                  style.left = -_this17.computedData.borderSizePx.left + 'px';
                  style.width = _this17.computedData.borderSizePx.left + 'px';
                }

                if (dir === 'right') {
                  style.width = _this17.computedData.borderSizePx.right + 'px';
                  style.right = -_this17.computedData.borderSizePx.right + 'px';
                  style.left = undefined; //style.marginRight = -this.computedData.borderSizePx.right + 'px';
                  //style.top = '0px';

                  /* if (directions.length === 1) {
                     style.top = this.computedData.borderSizePx.top + 'px';
                   }*/
                }

                if (dir === 'top') {
                  style.top = -_this17.computedData.borderSizePx.top + 'px';
                  if (directions.length != 1) style.width = _this17.xComputedRepeat * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] + 'px';
                }

                if (dir === 'bottom') {
                  style.bottom = -_this17.computedData.borderSizePx.bottom + 'px';
                  if (directions.length != 1) style.width = _this17.xComputedRepeat * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] + 'px';
                  style.top = undefined;
                }
              });
              return style;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.toClear.forEach(function (timeout) {
                clearTimeout(timeout);
              });
            }
          }, {
            key: "hostStyle",
            get: function get() {
              var hostStyle = {
                border: 'solid transparent',
                borderTopWidth: this.computedData.borderSizePx.top + 'px',
                borderBottomWidth: this.computedData.borderSizePx.bottom + 'px',
                borderRightWidth: this.computedData.borderSizePx.right + 'px',
                borderLeftWidth: this.computedData.borderSizePx.left + 'px',
                height: this.yRepeat ? this.yRepeat * this.borderTemplate.leftSideHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] + 'px' : undefined,
                width: this.xRepeat ? this.xRepeat * this.borderTemplate.topSideWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] + 'px' : undefined
              };
              return hostStyle;
            }
          }, {
            key: "compJson",
            get: function get() {
              return JSON.stringify(this.computedData);
            }
          }]);

          return AsciiBorderComponent;
        }();

        AsciiBorderComponent.ɵfac = function AsciiBorderComponent_Factory(t) {
          return new (t || AsciiBorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        };

        AsciiBorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiBorderComponent,
          selectors: [["ascii-border"], ["", "ascii-border", ""], ["div", "ascii-render", ""], ["span", "ascii-render", ""], ["button", "ascii-render", ""], ["p", "ascii-render", ""], ["h1", "ascii-render", ""]],
          hostVars: 3,
          hostBindings: function AsciiBorderComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dataComputed", ctx.compJson);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
            }
          },
          inputs: {
            name: "name",
            computeRenderEachTime: "computeRenderEachTime",
            contentClass: "contentClass",
            xRepeat: "xRepeat",
            yRepeat: "yRepeat",
            borderTemplateName: "borderTemplateName",
            borderTemplate: "borderTemplate",
            borderClick: "borderClick",
            debug: "debug"
          },
          ngContentSelectors: _c8,
          decls: 17,
          vars: 27,
          consts: [[4, "ngIf"], [1, "asciiArt", "border-part", "top", "left", 2, "display", "inline-block", "position", "absolute", 3, "ngStyle", "ngClass"], [1, "asciiArt", "border-part", "top", 3, "ngClass", "ngStyle", "click"], [1, "asciiArt", "border-part", "top", "right", 3, "ngClass", "ngStyle"], [1, "asciiArt", "rightSide", 3, "ngClass", "ngStyle", "click"], ["class", "asciiArt border-part leftSide", "style", "position: absolute;", 3, "ngClass", "ngStyle", "click", 4, "ngIf"], [1, "borderBottom"], [1, "asciiArt", "border-part", "bottom", "left", 3, "ngStyle", "ngClass"], ["class", "asciiArt border-part bottom", 3, "ngClass", "ngStyle", "click", 4, "ngIf"], [1, "asciiArt", "border-part", "bottom", "right", 3, "ngClass", "ngStyle"], [1, "debug", "top", "left"], [1, "debug", "top", "right"], [1, "debug", "bottom", "left"], [1, "debug", "bottom", "right"], [1, "asciiArt", "border-part", "leftSide", 2, "position", "absolute", 3, "ngClass", "ngStyle", "click"], [1, "asciiArt", "border-part", "bottom", 3, "ngClass", "ngStyle", "click"]],
          template: function AsciiBorderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsciiBorderComponent_ng_container_1_Template, 6, 0, "ng-container", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_Template_div_click_4_listener($event) {
                return ctx.borderClick("TOP", $event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_Template_div_click_8_listener($event) {
                return ctx.borderClick("RIGHT", $event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AsciiBorderComponent_div_10_Template, 2, 4, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AsciiBorderComponent_div_14_Template, 2, 4, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debug);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2)))("ngClass", ctx.borderClasses.topLeft || ctx.borderClasses["default"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.topLeftTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.top || ctx.borderClasses["default"])("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3)));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.renders.top);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.topRight || ctx.borderClasses["default"])("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4)));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.topRightTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.right || ctx.borderClasses["default"])("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5)));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.renders.right);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yComputedRepeat > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6)))("ngClass", ctx.borderClasses.bottomLeft || ctx.borderClasses["default"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.bottomLeftTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.xComputedRepeat > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.bottomRight || ctx.borderClasses["default"])("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c7)));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.bottomRightTemplate);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
          styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.border-part[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow-x: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWJvcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhc2NpaS1ib3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9yZGVyLXBhcnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG59XG4iXX0= */"],
          changeDetection: 0
        });
        return AsciiBorderComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiBorderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ascii-border , [ascii-border] , div [ascii-render], span [ascii-render], button [ascii-render], p [ascii-render], h1 [ascii-render]',
            templateUrl: './ascii-border.component.html',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styleUrls: ['./ascii-border.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          computeRenderEachTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          xRepeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          yRepeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          borderTemplateName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          borderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          borderClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compJson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.dataComputed']
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./characterEditor/character-form/character-form.component */
      "DbXV");
      /* harmony import */


      var _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./labyrinth/new-form/new-labyrinth-form.component */
      "SpuM");
      /* harmony import */


      var _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./labyrinth/menu/menu.component */
      "0T/z");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./utils/ascii/ascii.module */
      "O1Wb");
      /* harmony import */


      var _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./labyrinth/game-view/labyrinth-game.module */
      "0XYs");
      /* harmony import */


      var _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./utils/ui/atom/sound/sound.component */
      "dxnq");
      /* harmony import */


      var _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./music-view/music.module */
      "/IdM");
      /* harmony import */


      var _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./ascii-gallery/ascii-gallery.component */
      "uyBj");
      /* harmony import */


      var _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./labyrinth/loading/loading.module */
      "z4sO");

      var AppModule =
      /** @class */
      function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"], _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"], _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__["CharacterFormComponent"], _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__["NewLabyrinthFormComponent"], _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__["SoundComponent"], _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__["AsciiGalleryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"], _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"], _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__["CharacterFormComponent"], _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__["NewLabyrinthFormComponent"], _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__["SoundComponent"], _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__["AsciiGalleryComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"], _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"], _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZLBt":
    /*!******************************************************************!*\
      !*** ./src/app/labyrinth/service/render/ascii-render.service.ts ***!
      \******************************************************************/

    /*! exports provided: AsciiRenderService */

    /***/
    function ZLBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiRenderService", function () {
        return AsciiRenderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-generator.service */
      "LIiV");

      var AsciiRenderService =
      /** @class */
      function () {
        var AsciiRenderService = /*#__PURE__*/function () {
          function AsciiRenderService(asciiGeneratorService) {
            _classCallCheck(this, AsciiRenderService);

            this.asciiGeneratorService = asciiGeneratorService;
            this.defaultData = {
              name: "#",
              closedBottom: "-----",
              closedTop: "-----",
              closedLeft: "|"
            };
            this.partsKeys = [];
            this.topDoorTemplate = "TODO";
            this.bottomDoorTemplate = "TODO";
            this.leftDoorTemplate = "TODO";
            this.rightDoorTemplate = "TODO";
            this.leftWallTemplate = "TODO";
            this.rightWallTemplate = "TODO";
            this.topWallTemplate = "TODO";
            this.bottomWallTemplate = "TODO";
            this.leftBottomCornerTemplate = "TODO";
            this.rightBottomCornerTemplate = "TODO";
            this.leftTopCornerTemplate = "TODO";
            this.rightTopCornerTemplate = "TODO";
            this.partsKeys = Object.keys(this.defaultData);
            this.rightDoorTemplate = this.asciiGeneratorService.reverseTemplate(this.leftDoorTemplate, this.partsKeys);
            this.rightWallTemplate = this.asciiGeneratorService.reverseTemplate(this.leftWallTemplate, this.partsKeys);
          }

          _createClass(AsciiRenderService, [{
            key: "renderSide",
            value: function renderSide(direction, door) {
              var templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";

              var data = _objectSpread(_objectSpread({}, this.defaultData), {}, {
                name: door && door.name != "door" ? door.name : " "
              });

              data.nameReversed = data.name;
              data.closedLeftReversed = data.closedLeft;

              if (door && door.name == "door") {
                data.closedTop = data.closedTop.replace(/./g, " ");
                data.closedBottom = data.closedBottom.replace(/./g, " ");
                data.closedLeft = data.closedLeft.replace(/./g, " ");
                data.closedLeftReversed = data.closedLeft;
              }

              return this.asciiGeneratorService.templateString(this[templateName], data);
            }
          }, {
            key: "renderCorner",
            value: function renderCorner(dir1, dir2) {
              var templateName = dir2.toLowerCase() + this.capitalize(dir1.toLowerCase()) + "CornerTemplate";
              var data = this.defaultData;
              return this.asciiGeneratorService.templateString(this[templateName], data);
            }
          }, {
            key: "capitalize",
            value: function capitalize(s) {
              if (typeof s !== 'string') return '';
              return s.charAt(0).toUpperCase() + s.slice(1);
            }
          }]);

          return AsciiRenderService;
        }();

        AsciiRenderService.ɵfac = function AsciiRenderService_Factory(t) {
          return new (t || AsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"]));
        };

        AsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: AsciiRenderService,
          factory: AsciiRenderService.ɵfac,
          providedIn: 'root'
        });
        return AsciiRenderService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiRenderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cJNv":
    /*!**********************************************************************!*\
      !*** ./src/app/labyrinth/service/render/resources/border-compute.ts ***!
      \**********************************************************************/

    /*! exports provided: BorderTemplate, asciiStringToGridObject */

    /***/
    function cJNv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BorderTemplate", function () {
        return BorderTemplate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "asciiStringToGridObject", function () {
        return asciiStringToGridObject;
      });

      var BorderTemplate = function BorderTemplate() {
        _classCallCheck(this, BorderTemplate);

        this.topTemplate = "";
        this.bottomTemplate = "";
        this.leftTemplate = "";
        this.rightTemplate = "";
        this.topLeftTemplate = "";
        this.topRightTemplate = "";
        this.bottomLeftTemplate = "";
        this.bottomRightTemplate = "";
        this.leftPartWidth = 1;
        this.topSideWidth = 1;
        this.topPartHeight = 1;
        this.leftSideHeight = 1;
        this.rightPartWidth = 1;
        this.bottomPartHeight = 1;
      };

      function asciiStringToGridObject(str, leftCornerWidth, topSideWidth, leftCornerHeight, leftSideHeight) {
        try {
          var templates = new BorderTemplate();
          var strR = str.split("\n");

          for (var y = 0; y < leftCornerHeight; y++) {
            for (var x = 0; x < leftCornerWidth; x++) {
              templates.topLeftTemplate += strR[y][x];
            }

            templates.topLeftTemplate += "\n";

            for (var _x4 = leftCornerWidth; _x4 < leftCornerWidth + topSideWidth; _x4++) {
              templates.topTemplate += strR[y][_x4];
            }

            templates.topTemplate += "\n";

            for (var _x5 = leftCornerWidth + topSideWidth; _x5 < strR[y].length; _x5++) {
              templates.topRightTemplate += strR[y][_x5];
            }

            templates.topRightTemplate += "\n";
          }

          for (var _y = leftCornerHeight; _y < leftCornerHeight + leftSideHeight; _y++) {
            for (var _x6 = 0; _x6 < leftCornerWidth; _x6++) {
              templates.leftTemplate += strR[_y][_x6];
            }

            templates.leftTemplate += "\n";

            for (var _x7 = leftCornerWidth + topSideWidth; _x7 < strR[_y].length; _x7++) {
              templates.rightTemplate += strR[_y][_x7];
            }

            templates.rightTemplate += "\n";
          }

          for (var _y2 = leftCornerHeight + leftSideHeight; _y2 < strR.length; _y2++) {
            for (var _x8 = 0; _x8 < leftCornerWidth; _x8++) {
              templates.bottomLeftTemplate += strR[_y2][_x8];
            }

            templates.bottomLeftTemplate += "\n";

            for (var _x9 = leftCornerWidth; _x9 < leftCornerWidth + topSideWidth; _x9++) {
              templates.bottomTemplate += strR[_y2][_x9];
            }

            templates.bottomTemplate += "\n";

            for (var _x10 = leftCornerWidth + topSideWidth; _x10 < strR[_y2].length; _x10++) {
              templates.bottomRightTemplate += strR[_y2][_x10];
            }

            templates.bottomRightTemplate += "\n";
          }

          Object.keys(templates).forEach(function (k) {
            if (templates[k].slice) {
              if (templates[k].endsWith("\n")) templates[k] = templates[k].slice(0, -1); //add a space at the end so the template with \n have the same length than the other

              if (k != 'bottomTemplate' && k != 'topTemplate') {
                templates[k] += " ";
              }
            }
          });
          var topRightFirstLine = templates.topRightTemplate.split("\n")[0];

          var borderTemplate = _objectSpread(_objectSpread({}, templates), {}, {
            leftPartWidth: leftCornerWidth,
            topSideWidth: topSideWidth,
            leftSideHeight: leftSideHeight,
            rightPartWidth: topRightFirstLine.length + (templates.topRightTemplate.includes('\n') ? 1 : 0),
            topPartHeight: leftCornerHeight,
            bottomPartHeight: templates.bottomLeftTemplate.split("\n").length
          });

          return borderTemplate;
        } catch (e) {
          console.error(e);
        }
      }
      /***/

    },

    /***/
    "dxnq":
    /*!********************************************************!*\
      !*** ./src/app/utils/ui/atom/sound/sound.component.ts ***!
      \********************************************************/

    /*! exports provided: SoundComponent */

    /***/
    function dxnq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoundComponent", function () {
        return SoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../labyrinth/service/sound/sound.service */
      "/SE3");
      /* harmony import */


      var _ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../ascii/component/ascii.component */
      "LuAq");

      function SoundComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.on);
        }
      }

      function SoundComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.off);
        }
      }

      var SoundComponent =
      /** @class */
      function () {
        var SoundComponent = /*#__PURE__*/function () {
          function SoundComponent(soundService) {
            var _this18 = this;

            _classCallCheck(this, SoundComponent);

            this.soundService = soundService;
            this.on = '' + '           __ \n' + ' ((\'c\') < d d \n'; //≮

            this.off = '' + '            _ \n' + ' ((\'x\') ° (d) \n';
            this.subscription = this.soundService.subscribeSoundOn(function (data) {
              _this18.soundOn = data;
            });
          }

          _createClass(SoundComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }, {
            key: "toogle",
            value: function toogle() {
              this.soundService.toogleSound();
            }
          }]);

          return SoundComponent;
        }();

        SoundComponent.ɵfac = function SoundComponent_Factory(t) {
          return new (t || SoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"]));
        };

        SoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SoundComponent,
          selectors: [["ui-sound"]],
          decls: 3,
          vars: 2,
          consts: [["ascii-border", "", 1, "asciiArt", 3, "click"], ["app-ascii", "", "tooltip", "mute", 3, "content", 4, "ngIf"], ["app-ascii", "", "tooltip", "music", 3, "content", 4, "ngIf"], ["app-ascii", "", "tooltip", "mute", 3, "content"], ["app-ascii", "", "tooltip", "music", 3, "content"]],
          template: function SoundComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoundComponent_Template_div_click_0_listener() {
                return ctx.toogle();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SoundComponent_div_1_Template, 1, 1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SoundComponent_div_2_Template, 1, 1, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soundOn);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.soundOn);
            }
          },
          directives: [_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_4__["AsciiComponent"]],
          styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"]
        });
        return SoundComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ui-sound',
            templateUrl: './sound.component.html',
            styleUrls: ['./sound.component.css']
          }]
        }], function () {
          return [{
            type: _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dyXb":
    /*!********************************************************!*\
      !*** ./src/app/labyrinth/loading/loading.component.ts ***!
      \********************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function dyXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/render/fullsize-ascii-render.service */
      "qOzd");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return {
          name: "exit"
        };
      };

      function LoadingComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Find the ladder to the exit to win. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fullViewRenderService.renderObj(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
        }
      }

      function LoadingComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can move by : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clicking on the room you want to go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clicking on the door you want to use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "using directional key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "using the pad at the bottom of the screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoadingComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " some door are closed and need a key to be open ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoadingComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have a map ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoadingComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The lab didn't really take that much time to generate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The dev just wanted a way to give tips to player.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function LoadingComponent_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All labyrinths always have a solution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var LoadingComponent =
      /** @class */
      function () {
        var LoadingComponent = /*#__PURE__*/function () {
          function LoadingComponent(fullViewRenderService) {
            _classCallCheck(this, LoadingComponent);

            this.fullViewRenderService = fullViewRenderService;
            this.currentLoadingMessage = 0;
            this.maxNumberOfMessage = 6;
          }

          _createClass(LoadingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "clickDuringLoading",
            value: function clickDuringLoading() {
              this.currentLoadingMessage = Math.floor(this.maxNumberOfMessage * Math.random());
              console.log(this.currentLoadingMessage);
            }
          }]);

          return LoadingComponent;
        }();

        LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
          return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__["FullsizeAsciiRenderService"]));
        };

        LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LoadingComponent,
          selectors: [["app-loading"]],
          decls: 18,
          vars: 8,
          consts: [["ascii-render", "", "borderTemplateName", "loadingBorderGridTemplate", 1, "container", "text", "background-ui"], ["ascii-render", "", 1, "ihm-ui"], ["ascii-border", "", 1, "content", "ihm-ui"], [4, "ngIf"], ["ascii-render", "", 3, "click"], ["app-render", "", 1, "asciiArt"]],
          template: function LoadingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Labyrinth generating ...");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoadingComponent_ng_container_8_Template, 4, 2, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoadingComponent_ng_container_9_Template, 11, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoadingComponent_ng_container_10_Template, 2, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoadingComponent_ng_container_11_Template, 2, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoadingComponent_ng_container_12_Template, 5, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoadingComponent_ng_container_13_Template, 2, 0, "ng-container", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingComponent_Template_button_click_16_listener() {
                return ctx.clickDuringLoading();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "next advice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Do you know it ? (", ctx.currentLoadingMessage, "/", ctx.maxNumberOfMessage, ")");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 5);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_3__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          styles: [".container[_ngcontent-%COMP%] {\n        max-width: 576px;\n        min-width: 360px;\n        min-height: 336px;\n        text-align: center;\n        padding: 14px 9px;\n    }\n\n    .content[_ngcontent-%COMP%] {\n\n    }\n    ul[_ngcontent-%COMP%] {\n        text-align: left;\n    }"]
        });
        return LoadingComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loading',
            templateUrl: './loading.component.html',
            styles: ["\n    .container {\n        max-width: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 16 * 4, "px;\n        min-width: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 10 * 4, "px;\n        min-height: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 6 * 4, "px;\n        text-align: center;\n        padding: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"], "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"], "px;\n    }\n\n    .content {\n\n    }\n    ul {\n        text-align: left;\n    }\n\n  ")]
          }]
        }], function () {
          return [{
            type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__["FullsizeAsciiRenderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fMyw":
    /*!*******************************************!*\
      !*** ./src/app/utils/ascii/AsciiConst.ts ***!
      \*******************************************/

    /*! exports provided: CHARACTER_FONT_SIZE, LINE_HEIGHT, CHARACTER_HEIGHT, CHARACTER_SPACING */

    /***/
    function fMyw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CHARACTER_FONT_SIZE", function () {
        return CHARACTER_FONT_SIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LINE_HEIGHT", function () {
        return LINE_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CHARACTER_HEIGHT", function () {
        return CHARACTER_HEIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CHARACTER_SPACING", function () {
        return CHARACTER_SPACING;
      });

      var CHARACTER_FONT_SIZE = 12;
      var LINE_HEIGHT = 14;
      var CHARACTER_HEIGHT = 8;
      var CHARACTER_SPACING = 9;
      /***/
    },

    /***/
    "hZio":
    /*!************************************************************************!*\
      !*** ./src/app/labyrinth/game-view/level-view/level-view.component.ts ***!
      \************************************************************************/

    /*! exports provided: LevelViewComponent */

    /***/
    function hZio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelViewComponent", function () {
        return LevelViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/render/resources/border */
      "7yLV");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/gameplay-lab.service */
      "ty5H");
      /* harmony import */


      var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/render/fullsize-ascii-render.service */
      "qOzd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./zone-view/zone-view.component */
      "BDe6");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../utils/ascii/component/ascii.component */
      "LuAq");

      function LevelViewComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-zone-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var levelCaseInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", levelCaseInput_r4);
        }
      }

      function LevelViewComponent_div_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var y_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r8.emptyRendered(x_r2, y_r5));
        }
      }

      function LevelViewComponent_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LevelViewComponent_div_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var levelCaseInput_r4 = ctx.$implicit;

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!levelCaseInput_r4 && levelCaseInput_r4.content.toArray().length > 0)("ngIfElse", _r7);
        }
      }

      function LevelViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_ng_container_1_Template, 4, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
        }
      }

      var LevelViewComponent =
      /** @class */
      function () {
        var LevelViewComponent = /*#__PURE__*/function () {
          function LevelViewComponent(gameplayLabService, renderService) {
            _classCallCheck(this, LevelViewComponent);

            this.gameplayLabService = gameplayLabService;
            this.renderService = renderService;
            this.rangeArroundPlayer = -1;
          }

          _createClass(LevelViewComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              this.updateFieldOfView();
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.updateFieldOfView();
            }
          }, {
            key: "updateFieldOfView",
            value: function updateFieldOfView() {
              if (this.rangeArroundPlayer === -1) {
                this.fieldOfView = this.currentParty.level.content;
              } else {
                this.fieldOfView = new Array();
                var location = this.currentParty.player.location;

                for (var dy = -this.rangeArroundPlayer; dy <= this.rangeArroundPlayer; dy++) {
                  this.fieldOfView[this.rangeArroundPlayer + dy] = new Array();

                  for (var dx = -this.rangeArroundPlayer; dx <= this.rangeArroundPlayer; dx++) {
                    var x = 0 + location.x + dx;
                    var y = 0 + location.y + dy;
                    var ix = 0 + this.rangeArroundPlayer + dx;
                    var iy = 0 + this.rangeArroundPlayer + dy;
                    var zone = this.currentParty.level.getXY(x, y);
                    this.fieldOfView[iy][ix] = zone;
                  }
                }
              }
            }
          }, {
            key: "emptyRendered",
            value: function emptyRendered(x, y) {
              var dx = x + this.currentParty.player.location.x;
              var dy = y + this.currentParty.player.location.y;
              var index = (dx + dy) % _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZones"].length;
              var borderTemplate = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZones"][index];
              return borderTemplate;
            }
          }]);

          return LevelViewComponent;
        }();

        LevelViewComponent.ɵfac = function LevelViewComponent_Factory(t) {
          return new (t || LevelViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__["FullsizeAsciiRenderService"]));
        };

        LevelViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LevelViewComponent,
          selectors: [["level-view"]],
          inputs: {
            currentParty: "currentParty",
            rangeArroundPlayer: "rangeArroundPlayer"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 2,
          vars: 1,
          consts: [[1, "levelRender"], ["class", "levelRowRender", 4, "ngFor", "ngForOf"], [1, "levelRowRender"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["backgroundZone", ""], [3, "zone"], ["app-ascii", "", 1, "zone", "outside", "background-ui", 3, "content"]],
          template: function LevelViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_Template, 2, 1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldOfView);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_6__["ZoneViewComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_7__["AsciiComponent"]],
          styles: [".levelRowRender[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 270px);\n    grid-template-rows: repeat(auto-fit, 210px);\n  }"]
        });
        return LevelViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'level-view',
            templateUrl: './level-view.component.html',
            styles: ["\n    .levelRowRender {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 30, "px);\n    grid-template-rows: repeat(auto-fit, ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 15, "px);\n  }\n  ")]
          }]
        }], function () {
          return [{
            type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"]
          }, {
            type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__["FullsizeAsciiRenderService"]
          }];
        }, {
          currentParty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rangeArroundPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jVA7":
    /*!**************************************************************************!*\
      !*** ./src/app/labyrinth/game-view/keypad-form/keypad-form.component.ts ***!
      \**************************************************************************/

    /*! exports provided: KeypadFormComponent */

    /***/
    function jVA7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeypadFormComponent", function () {
        return KeypadFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/gameplay-lab.service */
      "ty5H");
      /* harmony import */


      var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/data-storage.service */
      "Pmye");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../utils/ascii/component/ascii.component */
      "LuAq");

      var KeypadFormComponent =
      /** @class */
      function () {
        var KeypadFormComponent = /*#__PURE__*/function () {
          function KeypadFormComponent(gameplayLabService, dataService) {
            _classCallCheck(this, KeypadFormComponent);

            this.gameplayLabService = gameplayLabService;
            this.dataService = dataService;
            this.message = "use keyword to move or click on destination, use enter or click to grab object\n";
          }

          _createClass(KeypadFormComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this19 = this;

              this.subscription = this.dataService.lastMessage$.subscribe(function (m) {
                _this19.message = m;
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscription.unsubscribe();
            }
          }, {
            key: "move",
            value: function move(direction) {
              this.gameplayLabService.move(direction);
            }
          }, {
            key: "handleKey",
            value: function handleKey(event) {
              if (event.key === 'Enter') {
                this.gameplayLabService.takeAll();
              }

              if (event.key === 'ArrowUp') {
                this.gameplayLabService.move('TOP');
              }

              if (event.key === 'ArrowDown') {
                this.gameplayLabService.move('BOTTOM');
              }

              if (event.key === 'ArrowLeft') {
                this.gameplayLabService.move('LEFT');
              }

              if (event.key === 'ArrowRight') {
                this.gameplayLabService.move('RIGHT');
              }
            }
          }, {
            key: "take",
            value: function take() {
              this.gameplayLabService.takeAll();
            }
          }]);

          return KeypadFormComponent;
        }();

        KeypadFormComponent.ɵfac = function KeypadFormComponent_Factory(t) {
          return new (t || KeypadFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]));
        };

        KeypadFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: KeypadFormComponent,
          selectors: [["keypad-form"]],
          hostBindings: function KeypadFormComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeypadFormComponent_keydown_HostBindingHandler($event) {
                return ctx.handleKey($event);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
            }
          },
          decls: 35,
          vars: 1,
          consts: [["app-ascii", ""], [1, "key", 3, "click"]],
          template: function KeypadFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0\xA0\xA0\xA0+---+ ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA0\xA0\xA0\xA0|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_6_listener() {
                return ctx.move("TOP");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/^\\");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "| ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+---+---+---+-------+");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_15_listener() {
                return ctx.move("LEFT");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<<-");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_19_listener() {
                return ctx.move("BOTTOM");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\\V/");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_23_listener() {
                return ctx.move("RIGHT");
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "->>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_27_listener() {
                return ctx.take();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Prendre");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "|");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+---+---+---+-------+");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "");
            }
          },
          directives: [_utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"]],
          styles: [".key[_ngcontent-%COMP%]{\n  color: black;\n}\n\n[_nghost-%COMP%] {\n  color: lightgray\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXBhZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImtleXBhZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5e1xuICBjb2xvcjogYmxhY2s7XG59XG5cbjpob3N0IHtcbiAgY29sb3I6IGxpZ2h0Z3JheVxufVxuIl19 */"]
        });
        return KeypadFormComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeypadFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'keypad-form',
            templateUrl: './keypad-form.component.html',
            styleUrls: ['./keypad-form.component.css']
          }]
        }], function () {
          return [{
            type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__["GameplayLabService"]
          }, {
            type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"]
          }];
        }, {
          handleKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "knP+":
    /*!******************************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-on-grid-div.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AsciiOnGridDivComponent */

    /***/
    function knP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiOnGridDivComponent", function () {
        return AsciiOnGridDivComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../AsciiConst */
      "fMyw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["app-ascii-on-grid-div", ""];

      var _c1 = function _c1(a0, a1) {
        return {
          gridTemplateRows: a0,
          gridTemplateColumns: a1
        };
      };

      var _c2 = ["*"];

      var AsciiOnGridDivComponent =
      /** @class */
      function () {
        var AsciiOnGridDivComponent = /*#__PURE__*/function () {
          function AsciiOnGridDivComponent() {
            _classCallCheck(this, AsciiOnGridDivComponent);

            this.width = 'auto-fit';
          }

          _createClass(AsciiOnGridDivComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.gridColumn = 'repeat(' + this.width + ', ' + _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] + ')';
              if (this.height) this.gridRow = 'repeat(' + this.width + ', ' + _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_HEIGHT"] + ')';
            }
          }]);

          return AsciiOnGridDivComponent;
        }();

        AsciiOnGridDivComponent.ɵfac = function AsciiOnGridDivComponent_Factory(t) {
          return new (t || AsciiOnGridDivComponent)();
        };

        AsciiOnGridDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiOnGridDivComponent,
          selectors: [["", "app-ascii-on-grid-div", ""]],
          inputs: {
            width: "width",
            height: "height"
          },
          attrs: _c0,
          ngContentSelectors: _c2,
          decls: 2,
          vars: 4,
          consts: [[1, "grid-content", 3, "ngStyle"]],
          template: function AsciiOnGridDivComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx.gridRow, ctx.gridColumn));
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
          styles: [".grid-content[_ngcontent-%COMP%] {\n         display: inline-grid;\n         grid-auto-flow: row dense;\n         grid-template-rows: repeat(auto-fill, 14px);\n         grid-template-columns: repeat(15, 9px);\n    }"]
        });
        return AsciiOnGridDivComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiOnGridDivComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-ascii-on-grid-div]',
            template: "\n    <div class=\"grid-content\"\n         [ngStyle]=\"{gridTemplateRows: gridRow, gridTemplateColumns: gridColumn}\">\n      <ng-content></ng-content>\n    </div>",
            styles: [" .grid-content {\n         display: inline-grid;\n         grid-auto-flow: row dense;\n         grid-template-rows: repeat(auto-fill, ".concat(_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"], "px);\n         grid-template-columns: repeat(15, ").concat(_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"], "px);\n    }")]
          }]
        }], function () {
          return [];
        }, {
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "lCfX":
    /*!***********************************************************************!*\
      !*** ./src/app/music-view/partition-view/partition-view.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PartitionViewComponent */

    /***/
    function lCfX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartitionViewComponent", function () {
        return PartitionViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! music-generator */
      "fIap");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./temp-view/temp-view.component */
      "0kx2");

      function PartitionViewComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no partition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartitionViewComponent_div_1_ng_container_1_app_temp_view_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-temp-view", 6);
        }

        if (rf & 2) {
          var note_r7 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temp", note_r7)("scale", ctx_r6.scale);
        }
      }

      function PartitionViewComponent_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_ng_container_1_app_temp_view_1_Template, 1, 2, "app-temp-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", form_r2);
        }
      }

      function PartitionViewComponent_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-temp-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temp", form_r2)("scale", ctx_r4.scale);
        }
      }

      function PartitionViewComponent_div_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-partition-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("partitionForms", form_r2)("initscale", ctx_r5.scale);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          borderColor: a0
        };
      };

      function PartitionViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PartitionViewComponent_div_1_ng_container_2_Template, 2, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartitionViewComponent_div_1_ng_container_3_Template, 2, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var form_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.borderColor));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPattern(form_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isNote(form_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isNote(form_r2) && !ctx_r1.isPattern(form_r2));
        }
      }

      var PartitionViewComponent =
      /** @class */
      function () {
        var PartitionViewComponent = /*#__PURE__*/function () {
          function PartitionViewComponent() {
            _classCallCheck(this, PartitionViewComponent);
          }

          _createClass(PartitionViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.borderColor = '#' + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {
              if (this.initscale) this.scale = this.initscale;else if (this.partitionForms) {
                var tunes = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(this.partitionForms).map(function (n) {
                  return n.tune;
                });
                this.scale = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(tunes).sort(function (a, b) {
                  return music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(b) - music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(a);
                });
              }
            }
          }, {
            key: "isPattern",
            value: function isPattern(form) {
              return Array.isArray(form) && !Array.isArray(form[0]);
            }
          }, {
            key: "isNote",
            value: function isNote(form) {
              return !Array.isArray(form);
            }
          }]);

          return PartitionViewComponent;
        }();

        PartitionViewComponent.ɵfac = function PartitionViewComponent_Factory(t) {
          return new (t || PartitionViewComponent)();
        };

        PartitionViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: PartitionViewComponent,
          selectors: [["app-partition-view"]],
          inputs: {
            partitionForms: "partitionForms",
            initscale: "initscale"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
          decls: 2,
          vars: 2,
          consts: [["class", "text", 4, "ngIf"], ["class", "vertical musicForm", 3, "style", 4, "ngFor", "ngForOf"], [1, "text"], [1, "vertical", "musicForm"], [4, "ngIf"], [3, "temp", "scale", 4, "ngFor", "ngForOf"], [3, "temp", "scale"], [3, "partitionForms", "initscale"]],
          template: function PartitionViewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PartitionViewComponent_span_0_Template, 2, 0, "span", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_Template, 4, 7, "div", 1);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.partitionForms);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partitionForms);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_3__["TempViewComponent"], PartitionViewComponent],
          styles: [".vertical[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: auto;\n  height: auto;\n}\n.musicForm[_ngcontent-%COMP%]{\n  border-left: 1px black solid;\n  border-bottom: 1px black solid;\n\n}\n.note[_ngcontent-%COMP%] {\n  display: block;\n}\n.note[_ngcontent-%COMP%]:nth-child(even) {\n  background: aliceblue;\n}\n.temp[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 18px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpdGlvbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0YiLCJmaWxlIjoicGFydGl0aW9uLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubXVzaWNGb3Jte1xuICBib3JkZXItbGVmdDogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG5cbn1cbi5ub3RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ub3RlOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbn1cblxuLnRlbXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMThweFxufVxuIl19 */"]
        });
        return PartitionViewComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartitionViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-partition-view',
            template: "<span *ngIf=\"!partitionForms\" class=\"text\">no partition</span>\n  <div class=\"vertical musicForm\" *ngFor=\"let form of partitionForms\" [style]=\"{borderColor:borderColor}\">\n    <ng-container *ngIf=\"isPattern(form) \">\n      <app-temp-view *ngFor=\"let note of form\" [temp]=\"note\" [scale]=\"scale\"></app-temp-view>\n    </ng-container>\n    <ng-container *ngIf=\"isNote(form) \">\n      <app-temp-view [temp]=\"form\" [scale]=\"scale\"></app-temp-view>\n    </ng-container>\n    <ng-container *ngIf=\"!isNote(form)&&!isPattern(form) \">\n      <app-partition-view [partitionForms]=\"form\" [initscale]=\"scale\"></app-partition-view>\n    </ng-container>\n  </div> ",
            styleUrls: ['./partition-view.component.css']
          }]
        }], function () {
          return [];
        }, {
          partitionForms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initscale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mks4":
    /*!**********************************************************************!*\
      !*** ./src/app/labyrinth/service/render/character-render.service.ts ***!
      \**********************************************************************/

    /*! exports provided: CharacterRenderData, TemplateAnimation, CharacterRenderService */

    /***/
    function mks4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterRenderData", function () {
        return CharacterRenderData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateAnimation", function () {
        return TemplateAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterRenderService", function () {
        return CharacterRenderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-generator.service */
      "LIiV");

      var CharacterRenderData = function CharacterRenderData() {
        _classCallCheck(this, CharacterRenderData);

        this.eye = "'";
        this.hair = "(";
        this.torso = "M";
        this.hat = "_--_";
        this.leg = "d";
      };

      var TemplateAnimation = function TemplateAnimation() {
        _classCallCheck(this, TemplateAnimation);
      };

      var CharacterRenderService =
      /** @class */
      function () {
        var CharacterRenderService = /*#__PURE__*/function () {
          function CharacterRenderService(asciiGeneratorService) {
            _classCallCheck(this, CharacterRenderService);

            this.asciiGeneratorService = asciiGeneratorService;
            this.templateLeft = "${hat}\n" + "${hair}${eye}${eye} ${hairReversed}${hairReversed}\n" + " /${torso} \\ \n" + "  ${leg}${leg}  \n";
            this.templateFront = "${hat}\n" + "${hair} ${eye}${eye} ${hairReversed}\n" + " / ${torso}\\ \n" + "  ${leg}${legReversed}  \n";
            this.templateBack = "${hat}\n" + "${hair}${hair}${hair}${hairReversed}${hairReversed}${hairReversed}\n" + " /  \\ \n" + "  ${leg}${legReversed}  \n";
            this.defaultData = Object.assign(new CharacterRenderData(), {
              eye: "'",
              hair: "(",
              torso: "M",
              hat: " _--_ ",
              leg: "d"
            });
            this.bodyPartsKey = Object.keys(this.defaultData);
            this.templateRight = this.asciiGeneratorService.reverseTemplate(this.templateLeft, this.bodyPartsKey);
          }

          _createClass(CharacterRenderService, [{
            key: "render",
            value: function render(data) {
              var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'LEFT';
              var template;

              switch (direction) {
                case 'LEFT':
                  template = this.templateLeft;
                  break;

                case 'RIGHT':
                  template = this.templateRight;
                  break;

                case 'TOP':
                  template = this.templateBack;
                  break;

                case 'BOTTOM':
                  template = this.templateFront;
                  break;

                default:
                  template = this.templateLeft;
                  break;
              }

              return this.asciiGeneratorService.templateString(template, _objectSpread(_objectSpread({}, data), this.asciiGeneratorService.reverseData(data)));
            }
          }]);

          return CharacterRenderService;
        }();

        CharacterRenderService.ɵfac = function CharacterRenderService_Factory(t) {
          return new (t || CharacterRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"]));
        };

        CharacterRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: CharacterRenderService,
          factory: CharacterRenderService.ɵfac,
          providedIn: 'root'
        });
        return CharacterRenderService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterRenderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qOzd":
    /*!***************************************************************************!*\
      !*** ./src/app/labyrinth/service/render/fullsize-ascii-render.service.ts ***!
      \***************************************************************************/

    /*! exports provided: FullsizeAsciiRenderService */

    /***/
    function qOzd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullsizeAsciiRenderService", function () {
        return FullsizeAsciiRenderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ascii-render.service */
      "ZLBt");
      /* harmony import */


      var _resources_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resources/border */
      "7yLV");
      /* harmony import */


      var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../utils/ascii/ascii-generator.service */
      "LIiV");
      /* harmony import */


      var _data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../data-storage.service */
      "Pmye");
      /* harmony import */


      var _character_render_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./character-render.service */
      "mks4");

      var FullsizeAsciiRenderService =
      /** @class */
      function () {
        var FullsizeAsciiRenderService = /*#__PURE__*/function (_ascii_render_service2) {
          _inherits(FullsizeAsciiRenderService, _ascii_render_service2);

          var _super2 = _createSuper(FullsizeAsciiRenderService);

          function FullsizeAsciiRenderService(asciiGeneratorService, dataStorageService, characterRenderService) {
            var _this20;

            _classCallCheck(this, FullsizeAsciiRenderService);

            _this20 = _super2.call(this, asciiGeneratorService);
            _this20.asciiGeneratorService = asciiGeneratorService;
            _this20.dataStorageService = dataStorageService;
            _this20.characterRenderService = characterRenderService;
            _this20.defaultData = {
              name: "#",
              closedBottom: "-----",
              closedTop: "-----",
              closedLeft: "|"
            };
            _this20.partsKeys = [];
            _this20.topDoorTemplate = "-------------------\n" + "\n" + "    \\¨¨¨¨¨¨¨¨¨/\n" + "     \\   ${name}   /\n" + "______\\${closedTop}/______";
            _this20.bottomDoorTemplate = "¨¨¨¨¨¨/${closedBottom}\\¨¨¨¨¨¨\n" + "     /   ${name}   \\\n" + "    /_________\\\n" + "\n" + "-------------------";
            _this20.leftDoorTemplate = " |   |\n" + " ||\\ |\n" + " || \\|\n" + " ||  \\\n" + " || ${name}${closedLeft}\n" + " ||  ${closedLeft}\n" + " |'---\n" + " |   |";
            _this20.leftWallTemplate = " |   |\n" + " |   |\n" + " |   |\n" + " |   |\n" + " |   |\n" + " |   |\n" + " |   |\n" + " |   |";
            _this20.topWallTemplate = "-------------------\n" + " \n" + " \n" + " \n" + "___________________";
            _this20.bottomWallTemplate = "¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n" + "\n" + "\n" + "\n" + "-------------------";
            _this20.leftBottomCornerTemplate = " |   /\n" + " |  / \n" + " | /  \n" + " |/   \n" + " '----";
            _this20.rightBottomCornerTemplate = _this20.asciiGeneratorService.reverseTemplate(_this20.leftBottomCornerTemplate, _this20.partsKeys);
            _this20.leftTopCornerTemplate = " +----\n" + " |\\   \n" + " | \\  \n" + " |  \\ \n" + " |   \\";
            _this20.rightTopCornerTemplate = _this20.asciiGeneratorService.reverseTemplate(_this20.leftTopCornerTemplate, _this20.partsKeys);
            _this20.partsKeys = Object.keys(_this20.defaultData);
            _this20.rightDoorTemplate = _this20.asciiGeneratorService.reverseTemplate(_this20.leftDoorTemplate, _this20.partsKeys);
            _this20.rightWallTemplate = _this20.asciiGeneratorService.reverseTemplate(_this20.leftWallTemplate, _this20.partsKeys);
            _this20.dirSub = _this20.dataStorageService.getPlayerDirection().subscribe(function (c) {
              return _this20.playerDirection = c;
            });
            _this20.playerRenderDataSub = _this20.dataStorageService.getCurrentCharaRenderData().subscribe(function (c) {
              return _this20.playerRenderData = c;
            });
            return _this20;
          }

          _createClass(FullsizeAsciiRenderService, [{
            key: "renderPlayer",
            value: function renderPlayer(characterData) {
              var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
              return this.characterRenderService.render(characterData, direction);
            }
          }, {
            key: "renderCenter",
            value: function renderCenter(zone, party) {
              return "\n\n" + zone.content.toArray().filter(function (it) {
                return it.className !== "DoorObjectZone";
              }).map(function (it) {
                return "[" + it.name + "]";
              });
            }
          }, {
            key: "renderObj",
            value: function renderObj(obj) {
              if (obj.name === 'exit') return _resources_border__WEBPACK_IMPORTED_MODULE_2__["exitTemplate"];
              if (obj.name === 'start') return _resources_border__WEBPACK_IMPORTED_MODULE_2__["startTemplate"];
              if (obj.name === 'player') return this.renderPlayer(this.playerRenderData, this.playerDirection);
              if (obj.type === "key") return "(".concat(obj.name, ")--\xB1");
              if (obj.name === "boussole") return "(;)";
              if (obj.name === "radar") return "(\xAE)";
              if (obj.name === "map") return "/#/";
              if (obj.name === "compas") return "%/";
              return "[".concat(obj.name, "]");
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.dirSub.unsubscribe();
              this.playerRenderDataSub.unsubscribe();
            }
          }]);

          return FullsizeAsciiRenderService;
        }(_ascii_render_service__WEBPACK_IMPORTED_MODULE_1__["AsciiRenderService"]);

        FullsizeAsciiRenderService.ɵfac = function FullsizeAsciiRenderService_Factory(t) {
          return new (t || FullsizeAsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__["AsciiGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_character_render_service__WEBPACK_IMPORTED_MODULE_5__["CharacterRenderService"]));
        };

        FullsizeAsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: FullsizeAsciiRenderService,
          factory: FullsizeAsciiRenderService.ɵfac,
          providedIn: 'root'
        });
        return FullsizeAsciiRenderService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullsizeAsciiRenderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__["AsciiGeneratorService"]
          }, {
            type: _data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
          }, {
            type: _character_render_service__WEBPACK_IMPORTED_MODULE_5__["CharacterRenderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sAm1":
    /*!**************************************************************************!*\
      !*** ./src/app/utils/ascii/ascii-character/ascii-character.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AsciiCharacterComponent */

    /***/
    function sAm1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiCharacterComponent", function () {
        return AsciiCharacterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../AsciiConst */
      "fMyw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../component/ascii.component */
      "LuAq");

      var _c0 = ["contentDiv"];

      var _c1 = function _c1(a0) {
        return {
          "column-span": a0
        };
      };

      var AsciiCharacterComponent =
      /** @class */
      function () {
        var AsciiCharacterComponent = /*#__PURE__*/function () {
          function AsciiCharacterComponent(_changeDetectorRef) {
            _classCallCheck(this, AsciiCharacterComponent);

            this._changeDetectorRef = _changeDetectorRef;
            this.xRepeat = 1;
          }

          _createClass(AsciiCharacterComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              if (this.contentDiv.nativeElement) this.xRepeat = Math.ceil(this.contentDiv.nativeElement.getBoundingClientRect().width / _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"]);

              this._changeDetectorRef.detectChanges();
            }
          }, {
            key: "ngAfterViewChecked",
            value: function ngAfterViewChecked() {
              this.ngAfterViewInit();
            }
          }]);

          return AsciiCharacterComponent;
        }();

        AsciiCharacterComponent.ɵfac = function AsciiCharacterComponent_Factory(t) {
          return new (t || AsciiCharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
        };

        AsciiCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiCharacterComponent,
          selectors: [["app-ascii-character"]],
          viewQuery: function AsciiCharacterComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentDiv = _t.first);
            }
          },
          inputs: {
            content: "content",
            tooltip: "tooltip"
          },
          decls: 3,
          vars: 5,
          consts: [[3, "ngStyle"], ["app-ascii", "", 1, "content", 3, "tooltip", "content"], ["contentDiv", ""]],
          template: function AsciiCharacterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.xRepeat));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx.tooltip)("content", ctx.content);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"]],
          styles: [".content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWNoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWCIsImZpbGUiOiJhc2NpaS1jaGFyYWN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4iXX0= */"],
          changeDetection: 0
        });
        return AsciiCharacterComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiCharacterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ascii-character',
            templateUrl: './ascii-character.component.html',
            styleUrls: ['./ascii-character.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentDiv']
          }]
        });
      })();
      /***/

    },

    /***/
    "tdOx":
    /*!*****************************************************************!*\
      !*** ./src/app/labyrinth/game-view/labyrinth-game.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LabyrinthGameComponent */

    /***/
    function tdOx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LabyrinthGameComponent", function () {
        return LabyrinthGameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/kotlinUtils */
      "/6Df");
      /* harmony import */


      var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/ascii/AsciiConst */
      "fMyw");
      /* harmony import */


      var _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/generate-lab.service */
      "9YXO");
      /* harmony import */


      var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/data-storage.service */
      "Pmye");
      /* harmony import */


      var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/gameplay-lab.service */
      "ty5H");
      /* harmony import */


      var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/render/fullsize-ascii-render.service */
      "qOzd");
      /* harmony import */


      var _service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/render/map-ascii-render.service */
      "O+Zk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../service/sound/sound.service */
      "/SE3");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./level-view/level-view.component */
      "hZio");
      /* harmony import */


      var _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../utils/ui/atom/sliding/sliding.component */
      "Bds/");
      /* harmony import */


      var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./map-view/map-view.component */
      "UJlK");
      /* harmony import */


      var _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./inventory-view/inventory-view.component */
      "JoyB");
      /* harmony import */


      var _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./keypad-form/keypad-form.component */
      "jVA7");
      /* harmony import */


      var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../utils/ascii/ascii-modal/ascii-modal.component */
      "K43I");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../utils/ascii/component/ascii.component */
      "LuAq");
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../loading/loading.component */
      "dyXb");

      var _c0 = ["level-view"];
      var _c1 = ["winModal"];
      var _c2 = ["loadingModal"];

      function LabyrinthGameComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "no game loaded for the moment, please wait or create a new game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "new game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3() {
        return {
          position: "absolute",
          transform: "translateX(-50%)",
          left: "-100%"
        };
      };

      var _c4 = function _c4() {
        return {
          position: "absolute",
          transform: "translateX(-81px)",
          left: "100%"
        };
      };

      var _c5 = function _c5() {
        return {
          position: "absolute",
          transform: "translateX(-50%)",
          left: "50%",
          bottom: "0"
        };
      };

      var _c6 = function _c6() {
        return {
          position: "absolute",
          transform: "translateX(-27px)",
          left: "-100%",
          bottom: "0"
        };
      };

      var _c7 = function _c7() {
        return {
          name: "exit"
        };
      };

      function LabyrinthGameComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "level-view", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sliding", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "map-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sliding", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "inventory-view", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "keypad-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ascii-modal", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " YOU WIN !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LabyrinthGameComponent_div_11_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.nextLevel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "next level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-ascii-modal", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentParty", ctx_r1.currentParty)("rangeArroundPlayer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("openData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("closeData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4))("slideOnlyOnClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentParty", ctx_r1.currentParty)("renderService", ctx_r1.mapRenderService);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("openData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5))("closeData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r1.currentPlayerProxy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.fullViewRenderService.renderObj(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c7)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fullViewRenderService.renderObj(ctx_r1.currentParty.player), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total size:", ctx_r1.score.size, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total number of room:", ctx_r1.score.numberOfRooms, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("minimum solution:", ctx_r1.score.solutionLength, " m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total number of wrong exit:", ctx_r1.score.numberOfCulDeSac, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total walked distance:", ctx_r1.score.numberOfSteps, " m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total score:", ctx_r1.score.score, "");
        }
      }

      var LabyrinthGameComponent =
      /** @class */
      function () {
        var LabyrinthGameComponent = /*#__PURE__*/function () {
          function LabyrinthGameComponent(labService, dataStorageService, gameplayLabService, fullViewRenderService, mapRenderService, router, soundService) {
            _classCallCheck(this, LabyrinthGameComponent);

            this.labService = labService;
            this.dataStorageService = dataStorageService;
            this.gameplayLabService = gameplayLabService;
            this.fullViewRenderService = fullViewRenderService;
            this.mapRenderService = mapRenderService;
            this.router = router;
            this.soundService = soundService;
          }

          _createClass(LabyrinthGameComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.subscribeCurrentParty();
              this.soundService.playGameMusic();
            }
          }, {
            key: "subscribeCurrentParty",
            value: function subscribeCurrentParty() {
              var _this21 = this;

              this.subscriptionCurrentParty = this.dataStorageService.getCurrentParty().subscribe(function (nextParty) {
                _this21.currentParty = _objectSpread({}, nextParty);

                if (nextParty) {
                  _this21.currentLevel = _this21.currentParty.level;
                  _this21.currentPlayerProxy = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinToJsView"])(_this21.currentParty.player, 3);
                  console.log(nextParty);
                  console.log("update");

                  if (_this21.currentParty.status.name$ == "WIN") {
                    _this21.winModal.show();
                  }

                  _this21.score = _this21.gameplayLabService.computePartieScore();
                }
              });
              return this.currentParty;
            }
          }, {
            key: "move",
            value: function move(direction) {
              this.gameplayLabService.move(direction);
            }
          }, {
            key: "take",
            value: function take() {
              this.gameplayLabService.takeAll();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscriptionCurrentParty.unsubscribe();
            }
          }, {
            key: "nextLevel",
            value: function nextLevel() {
              var _this22 = this;

              this.loadingModal.show();
              this.winModal.hide();
              var timer = new Promise(function (resolve) {
                // after 1 second signal that the job is finished with an error
                setTimeout(function () {
                  return resolve('done');
                }, 5000);
              });
              var generation = new Promise(function (resolve) {
                // not taking our time to do the job
                resolve(_this22.labService.generate(parseInt(_this22.score.size) + 1, _this22.currentParty.player.name)); // immediately give the result: 123
              });
              Promise.all([timer, generation]).then(function () {
                _this22.loadingModal.hide();

                _this22.router.navigateByUrl('/game');
              });
            }
          }]);

          return LabyrinthGameComponent;
        }();

        LabyrinthGameComponent.ɵfac = function LabyrinthGameComponent_Factory(t) {
          return new (t || LabyrinthGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_generate_lab_service__WEBPACK_IMPORTED_MODULE_3__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["FullsizeAsciiRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_7__["MapAsciiRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
        };

        LabyrinthGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LabyrinthGameComponent,
          selectors: [["app-labyrinth-game"]],
          viewQuery: function LabyrinthGameComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.levelView = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.winModal = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
            }
          },
          decls: 12,
          vars: 4,
          consts: [["ascii-border", "", "borderTemplateName", "doubleGridTemplate", 1, "menuBar", "text"], ["ascii-render", "", 1, "ihm-ui"], [1, "interact-ui", "text", 3, "routerLink"], ["class", "noPartyMessage", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "noPartyMessage"], ["ascii-border", "", 1, "text", "interact-ui"], ["ascii-border", "", 1, "ihm-ui"], ["href", "./new", 1, "text", "interact-ui"], [1, "container"], [1, "mainArea"], [3, "currentParty", "rangeArroundPlayer"], [1, "sidebar"], [2, "background-color", "red", "overflow", "hidden", 3, "openData", "closeData", "slideOnlyOnClick"], [3, "currentParty", "renderService"], ["slideOnlyOnClick", "true", 3, "openData", "closeData"], [1, "inventoryArea"], [3, "player"], [1, "toolbar"], [1, "gameplay"], [1, "text"], ["winModal", ""], ["ascii-border", "", 1, "background-ui"], ["ascii-border", "", 1, "text", "important-ui"], ["app-ascii", ""], ["ascii-border", "", "xRepeat", "40"], ["ascii-border", "", 1, "important-ui", 3, "click"], ["loadingModal", ""]],
          template: function LabyrinthGameComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LAB GENERATOR ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "new Labyrinth");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LabyrinthGameComponent_div_10_Template, 6, 0, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LabyrinthGameComponent_div_11_Template, 41, 23, "div", 4);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/menu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/new");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentParty);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentParty);
            }
          },
          directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_10__["AsciiBorderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_12__["LevelViewComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_13__["SlidingComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_14__["MapViewComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_15__["InventoryViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_16__["KeypadFormComponent"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_17__["AsciiModalComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_18__["AsciiComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"]],
          styles: [".mainArea[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.inventoryArea[_ngcontent-%COMP%]{\n   bottom: 0;\n}\n\n.mapArea[_ngcontent-%COMP%] {\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYnlyaW50aC1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLFNBQVM7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsYWJ5cmludGgtZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbkFyZWEge1xuICBncmlkLWFyZWE6IG1haW47XG59XG5cbi5zaWRlYmFyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnZlbnRvcnlBcmVhe1xuICAgYm90dG9tOiAwO1xufVxuXG4ubWFwQXJlYSB7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiJdfQ== */", ".container[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 900px 36px;\n      grid-template-rows: 630px 112px;\n      grid-template-areas:\n    \"main sidebar\"\n    \"toolbar toolbar\";\n      margin-left: auto;\n      margin-right: auto;\n      width: 990px;\n      overflow-x: hidden;\n    }\n    .menuBar[_ngcontent-%COMP%] {  display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        align-items: center;\n    }\n    .toolbar[_ngcontent-%COMP%] {\n      z-index: 100;\n      grid-area: toolbar;\n      display: grid;\n      grid-template-columns: 900px 54px 1fr;\n    }\n\n    .noPartyMessage[_ngcontent-%COMP%] {\n      padding: 14px 9px;\n    }"]
        });
        return LabyrinthGameComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabyrinthGameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-labyrinth-game',
            templateUrl: './labyrinth-game.component.html',
            styleUrls: ['./labyrinth-game.component.css'],
            styles: ["\n    .container {\n      display: grid;\n      grid-template-columns: ".concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 100, "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 4, "px;\n      grid-template-rows: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 45, "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 8, "px;\n      grid-template-areas:\n    \"main sidebar\"\n    \"toolbar toolbar\";\n      margin-left: auto;\n      margin-right: auto;\n      width: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 110, "px;\n      overflow-x: hidden;\n    }\n    .menuBar {  display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        align-items: center;\n    }\n    .toolbar {\n      z-index: 100;\n      grid-area: toolbar;\n      display: grid;\n      grid-template-columns: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 100, "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 6, "px 1fr;\n    }\n\n    .noPartyMessage {\n      padding: ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 1, "px ").concat(_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 1, "px;\n    }\n\n  ")]
          }]
        }], function () {
          return [{
            type: _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_3__["GenerateLabService"]
          }, {
            type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
          }, {
            type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_5__["GameplayLabService"]
          }, {
            type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["FullsizeAsciiRenderService"]
          }, {
            type: _service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_7__["MapAsciiRenderService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
          }];
        }, {
          levelView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['level-view']
          }],
          winModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['winModal']
          }],
          loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
          }]
        });
      })();
      /***/

    },

    /***/
    "ty5H":
    /*!***********************************************************!*\
      !*** ./src/app/labyrinth/service/gameplay-lab.service.ts ***!
      \***********************************************************/

    /*! exports provided: GameplayLabService */

    /***/
    function ty5H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameplayLabService", function () {
        return GameplayLabService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/kotlinUtils */
      "/6Df");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! gameRules */
      "B5sm");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var lodash_findKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash/findKey */
      "dMi0");
      /* harmony import */


      var lodash_findKey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_findKey__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _generate_lab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./generate-lab.service */
      "9YXO");
      /* harmony import */


      var _data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-storage.service */
      "Pmye");
      /* harmony import */


      var _sound_sound_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sound/sound.service */
      "/SE3"); // @ts-ignore


      var GameplayLabService =
      /** @class */
      function () {
        var GameplayLabService = /*#__PURE__*/function () {
          function GameplayLabService(serviceLabService, dataStorageService, soundService) {
            var _this23 = this;

            _classCallCheck(this, GameplayLabService);

            this.serviceLabService = serviceLabService;
            this.dataStorageService = dataStorageService;
            this.soundService = soundService;
            this.subscriptions = dataStorageService.getCurrentParty().subscribe(function (party) {
              _this23.currentParty = party;
              _this23.currentPartyProxy = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinToJsView"])(party, 7);
            });
            this.gameplay = gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.labeat;
          }

          _createClass(GameplayLabService, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.subscriptions.unsubscribe();
            }
          }, {
            key: "move",
            value: function move(direction) {
              this.dataStorageService.saveCharacterDirection(direction);
              var connectionsMap = this.currentPartyProxy.player.location.connectionsMap;
              var nextLocation = connectionsMap[direction];
              console.log(nextLocation);

              if (nextLocation) {
                console.log("next");
                var door = this.currentParty.player.location.content.toArray().find(function (it) {
                  var proxy = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinToJsView"])(it, 2);
                  return proxy.destination && it.destination.x === nextLocation.x && it.destination.y === nextLocation.y;
                });

                if (door) {
                  console.log("door");
                  var interaction = this.play(door);
                  console.log(interaction);

                  if (interaction.result == "Success") {
                    this.soundService.playMove();
                    return false;
                  } else {
                    this.soundService.playNo();
                    return true;
                  }
                }
              }
            }
          }, {
            key: "take",
            value: function take(objToTake) {
              var _this24 = this;

              this.dataStorageService.saveCharacterDirection('LEFT');
              this.currentParty.player.location.content.toArray() //getJsViewFromKotlin(this.currentParty, "player", "location", "content")
              .filter(function (it) {
                return it.name === objToTake.name;
              }).forEach(function (it) {
                if (_this24.play(it).result == "Success") {
                  _this24.soundService.playTake();
                }
              });
            }
          }, {
            key: "takeAll",
            value: function takeAll() {
              var _this25 = this;

              this.currentParty.player.location.content.toArray().filter(function (it) {
                return it.type != "door";
              }).forEach(function (it) {
                _this25.take(it);
              });
            }
          }, {
            key: "play",
            value: function play(obj) {
              var interactionResult = this.gameplay.playerInteractWith(this.currentParty, obj);
              this.dataStorageService.saveParty(this.currentParty);
              this.dataStorageService.saveLastMessages(Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(interactionResult, "messages"));
              return interactionResult;
            }
          }, {
            key: "levelContent",
            value: function levelContent(levelCase) {
              var _this26 = this;

              var content = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(levelCase, "content");
              return content.filter(function (it) {
                return !_this26.isDoor(it);
              });
            }
          }, {
            key: "isDoor",
            value: function isDoor(it) {
              return it.destination !== undefined;
            }
          }, {
            key: "doorAt",
            value: function doorAt(levelCase, direction) {
              var destination = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(levelCase, "connections")[direction];

              if (destination) {
                return Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(levelCase, "content").filter(function (obj) {
                  var doorDestination = Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(obj, 'destination');
                  return doorDestination && doorDestination.x === destination.x && doorDestination.y === destination.y;
                })[0];
              }
            }
          }, {
            key: "moveAtCase",
            value: function moveAtCase(levelCase) {
              var connectionsMap = this.currentPartyProxy.player.location.connectionsMap;
              var direction = lodash_findKey__WEBPACK_IMPORTED_MODULE_3___default()(connectionsMap, function (it) {
                return it && it.x === levelCase.x && it.y === levelCase.y;
              });

              if (direction) {
                return this.move(direction);
              }

              return false;
            }
          }, {
            key: "hasPlayer",
            value: function hasPlayer(levelCase) {
              return Object(_utils_kotlinUtils__WEBPACK_IMPORTED_MODULE_1__["parseKotlinPathToJsView"])(levelCase, "content").find(function (p) {
                return p.type === "player";
              });
            }
          }, {
            key: "computePartieScore",
            value: function computePartieScore() {
              return this.gameplay.computePartieScore(this.currentParty);
            }
          }]);

          return GameplayLabService;
        }();

        GameplayLabService.ɵfac = function GameplayLabService_Factory(t) {
          return new (t || GameplayLabService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generate_lab_service__WEBPACK_IMPORTED_MODULE_4__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sound_sound_service__WEBPACK_IMPORTED_MODULE_6__["SoundService"]));
        };

        GameplayLabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: GameplayLabService,
          factory: GameplayLabService.ɵfac,
          providedIn: 'root'
        });
        return GameplayLabService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameplayLabService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _generate_lab_service__WEBPACK_IMPORTED_MODULE_4__["GenerateLabService"]
          }, {
            type: _data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]
          }, {
            type: _sound_sound_service__WEBPACK_IMPORTED_MODULE_6__["SoundService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uyBj":
    /*!**********************************************************!*\
      !*** ./src/app/ascii-gallery/ascii-gallery.component.ts ***!
      \**********************************************************/

    /*! exports provided: AsciiGalleryComponent */

    /***/
    function uyBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsciiGalleryComponent", function () {
        return AsciiGalleryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../labyrinth/service/render/resources/border */
      "7yLV");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! gameRules */
      "B5sm");
      /* harmony import */


      var gameRules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _labyrinth_game_view_level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../labyrinth/game-view/level-view/zone-view/zone-view.component */
      "BDe6");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _labyrinth_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../labyrinth/loading/loading.component */
      "dyXb");
      /* harmony import */


      var _labyrinth_game_view_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../labyrinth/game-view/inventory-view/inventory-view.component */
      "JoyB");
      /* harmony import */


      var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils/ascii/ascii-border/ascii-border.component */
      "XxEr");
      /* harmony import */


      var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../utils/ascii/component/ascii.component */
      "LuAq");

      var _c0 = function _c0(a0) {
        return {
          inventoryArray: a0
        };
      };

      function AsciiGalleryComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "inventory-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "art");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "spon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "H1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SPA LABYRINTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "BTN LABYRINTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "text div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " another div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " some exemple of text lorelum ipsum blbkuuhiue hfue hfuezhfuhz efuhezfez hfizofhioezhfoz hiehfozehfnhoif zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " some exemple of text lorelum ipsum blbkuuhiue hfue hfuezhfuhz efuhezfez hfizofhioezhfoz hiehfozehfnhoif zz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r0.defaultZone.content.toArray()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r0.abc)("name", "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r0.abc)("name", "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "BTN \nLABYRINTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 0)("yRepeat", 0)("borderTemplate", ctx_r0.outsideZone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 0)("yRepeat", 0)("borderTemplate", ctx_r0.outsideZone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv")("borderTemplate", ctx_r0.parchemin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n with content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultValue", "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");
        }
      }

      var AsciiGalleryComponent =
      /** @class */
      function () {
        var AsciiGalleryComponent = /*#__PURE__*/function () {
          function AsciiGalleryComponent() {
            _classCallCheck(this, AsciiGalleryComponent);

            this.display = false;
            this.abc = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["abcGridTemplate"];
            this.outsideZone = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZoneGridTemplates"][0];
            this.parchemin = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["paperGridTemplate"];
          }

          _createClass(AsciiGalleryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              console.log("ngOnInit");

              try {
                var emptyParty = gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.labeat.generation.initPartieEmpty(3, "empty");
                this.emptyZone = emptyParty.level.content.toArray()[0].toArray()[0];
                this.defaultZone = emptyParty.level.content.toArray()[1].toArray()[1];
                this.defaultZone = gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.labeat.generation.initPartieMapLabWithKey(4, "key").level.content.toArray()[0].toArray()[1];
              } catch (e) {
                console.log(e);
              }

              console.log(this.emptyZone);
              console.log(this.defaultZone);
            }
          }, {
            key: "toggle",
            value: function toggle() {
              this.display = !this.display;
            }
          }]);

          return AsciiGalleryComponent;
        }();

        AsciiGalleryComponent.ɵfac = function AsciiGalleryComponent_Factory(t) {
          return new (t || AsciiGalleryComponent)();
        };

        AsciiGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AsciiGalleryComponent,
          selectors: [["app-ascii-gallery"]],
          decls: 5,
          vars: 3,
          consts: [[1, "text", 3, "click"], [3, "zone"], [4, "ngIf"], [3, "player"], ["ascii-border", ""], [1, "text"], [1, "asciiArt"], ["ascii-render", "", 1, "text", 3, "name"], ["ascii-render", "", 3, "borderTemplate", "name"], ["ascii-render", "", "value", "inputAlone"], ["ascii-render", "", 2, "display", "inline-block", 3, "borderTemplate", "name"], ["value", "inputDiv"], ["app-ascii", "", 3, "content"], ["ascii-border", "", 1, "zone", "outside", "background-ui", 3, "xRepeat", "yRepeat", "borderTemplate"], ["ascii-render", "", 1, "asciiArt"], ["ascii-render", "", 1, "text", 3, "name", "borderTemplate"], ["ascii-render", ""], ["ascii-render", "", 3, "defaultValue"], [2, "width", "300px"], ["ascii-render", "", "borderTemplateName", "paper", 1, "asciiArt", 3, "name"]],
          template: function AsciiGalleryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiGalleryComponent_Template_span_click_0_listener() {
                return ctx.toggle();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " toggle galery");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-zone-view", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-zone-view", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsciiGalleryComponent_div_4_Template, 75, 31, "div", 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx.defaultZone);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx.emptyZone);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
            }
          },
          directives: [_labyrinth_game_view_level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_3__["ZoneViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _labyrinth_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _labyrinth_game_view_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_6__["InventoryViewComponent"], _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__["AsciiBorderComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__["AsciiComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2NpaS1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"]
        });
        return AsciiGalleryComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ascii-gallery',
            templateUrl: './ascii-gallery.component.html',
            styleUrls: ['./ascii-gallery.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./characterEditor/character-form/character-form.component */
      "DbXV");
      /* harmony import */


      var _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./labyrinth/new-form/new-labyrinth-form.component */
      "SpuM");
      /* harmony import */


      var _labyrinth_game_view_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./labyrinth/game-view/labyrinth-game.component */
      "tdOx");
      /* harmony import */


      var _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./labyrinth/menu/menu.component */
      "0T/z");
      /* harmony import */


      var _music_view_music_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./music-view/music-view.component */
      "3tw5");
      /* harmony import */


      var _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ascii-gallery/ascii-gallery.component */
      "uyBj");

      var routes = [{
        path: 'character',
        component: _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_2__["CharacterFormComponent"]
      }, {
        path: 'new',
        component: _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_3__["NewLabyrinthFormComponent"]
      }, {
        path: 'menu',
        component: _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
      }, {
        path: 'game',
        component: _labyrinth_game_view_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_4__["LabyrinthGameComponent"]
      }, {
        path: 'music',
        component: _music_view_music_view_component__WEBPACK_IMPORTED_MODULE_6__["MusicViewComponent"]
      }, {
        path: 'ascii',
        component: _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_7__["AsciiGalleryComponent"]
      }, {
        path: '**',
        redirectTo: '/menu'
      }];

      var AppRoutingModule =
      /** @class */
      function () {
        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wRYn":
    /*!*****************************************************************!*\
      !*** ./src/app/labyrinth/service/sound/game-musique.service.ts ***!
      \*****************************************************************/

    /*! exports provided: GameMusiqueService */

    /***/
    function wRYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameMusiqueService", function () {
        return GameMusiqueService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! music-generator */
      "fIap");
      /* harmony import */


      var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);

      var GameMusiqueService =
      /** @class */
      function () {
        var GameMusiqueService = /*#__PURE__*/function () {
          function GameMusiqueService() {
            _classCallCheck(this, GameMusiqueService);
          }

          _createClass(GameMusiqueService, [{
            key: "gameDeprimanteMusicRandom",
            value: function gameDeprimanteMusicRandom() {
              function choseNoteFromRandomNWhoRespect(sizeOfChoice) {
                var _this27 = this;

                var chooseNoteWhoRespect = function chooseNoteWhoRespect(note, possibilites, filters) {
                  var values = possibilites.filter(function (newNote) {
                    return filters.every(function (f) {
                      return f.bind(_this27)(note, newNote);
                    });
                  });
                  return music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(values.slice(0, sizeOfChoice));
                };

                return chooseNoteWhoRespect;
              }

              var chooseNoteWhoRespect = choseNoteFromRandomNWhoRespect(3);
              return this.generateMusicDeprimante(chooseNoteWhoRespect);
            }
          }, {
            key: "menuDeprimanteMusicRandom",
            value: function menuDeprimanteMusicRandom() {
              var chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getFirstTuneWhoRespect;
              return this.generateMusicDeprimante(chooseNoteWhoRespect);
            }
          }, {
            key: "gameMusicRandom",
            value: function gameMusicRandom() {
              var chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getRandomFromBestsWhoRespect;
              return this.generateMusicAngoissante(chooseNoteWhoRespect);
            }
          }, {
            key: "menuMusicRandom",
            value: function menuMusicRandom() {
              var chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getFirstFromBestsWhoRespect;
              return this.generateMusicAngoissante(chooseNoteWhoRespect);
            }
          }, {
            key: "generateMusicDeprimante",
            value: function generateMusicDeprimante(chooseNoteWhoRespect) {
              var mainNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getNNextDescendante('B4', 24);
              var mainRhytme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n"], ["4n", "4n"], ["4n", "4n."]]);
              mainRhytme[0] = ["4n"].concat(mainRhytme[0]);
              mainRhytme[2] = mainRhytme[2].concat(["4n."]);
              var firstNoteTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 4));
              var mainTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(firstNoteTheme, mainRhytme, mainNotes, chooseNoteWhoRespect);
              var firstNoteIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 4).filter(function (n) {
                return firstNoteTheme != n;
              }));
              var intro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(firstNoteIntro, mainRhytme, mainNotes, chooseNoteWhoRespect);
              var beforeLastNoteIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro).reverse()[1].tune;
              var lastNoteIntro = chooseNoteWhoRespect(firstNoteTheme, mainNotes, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf, function (n, n2) {
                return music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf(n2, beforeLastNoteIntro);
              }]);
              music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro).reverse()[0].tune = lastNoteIntro;
              var variation1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(mainTheme[0][0].tune, mainRhytme, mainNotes.filter(function (n) {
                return n != mainTheme[0].tune;
              }), chooseNoteWhoRespect);
              var variation2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(mainTheme[0][0].tune, mainRhytme, mainNotes.filter(function (n) {
                return n != mainTheme[0].tune && n != variation1[0].tune;
              }), chooseNoteWhoRespect);
              var conclusion = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(mainNotes.filter(function (n) {
                return n != mainTheme.reverse()[0].tune && n != variation1.reverse()[0].tune && n != variation2.reverse()[0].tune;
              }), mainRhytme, mainTheme[0][0].tune, chooseNoteWhoRespect);
              var form = [intro, mainTheme, variation1, mainTheme, variation2, mainTheme, conclusion];
              var partition = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(form);
              return partition;
            }
          }, {
            key: "generateMusicAngoissante",
            value: function generateMusicAngoissante() {
              var chooseNoteWhoRespect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getRandomFromBestsWhoRespect;
              var mainNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getNNextDescendante('B4', 24);
              var mainRhytmePart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n", "8n", "8n"], ["8n", "8n", "4n", "4n"], ["4n", "4n", "4n"], ["4n", "4n", "4n"]]).slice(0, 2);
              var mainRhytmePart2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n", "8n", "8n"], ["8n", "8n", "4n", "4n"], ["4n", "4n", "4n"], ["8n", "8n", "8n", "8n", "4n"]]).slice(0, 2);
              ; //mainRhytmePart1[0] = ["4n"].concat(mainRhytmePart1[0])
              //mainRhytmePart1[2] = mainRhytmePart1[2].concat(["8n", "4n"])

              var mainRhytme = mainRhytmePart1.concat(mainRhytmePart2);
              var firstNoteTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 3));
              var lastNotePreviousPattern = firstNoteTheme;
              var mainThemePart1;

              try {
                var previousPattern = [null, new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"](firstNoteTheme, ""), null];
                mainThemePart1 = mainRhytmePart1.map(function (pattern, indexP) {
                  var firstNote = previousPattern.length > 2 ? music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(previousPattern.slice(1, -1)).tune : music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getTunesBeetween(previousPattern[0].tune, previousPattern[1].tune));
                  var maxNoteIndex = Math.round((indexP + pattern.length * 2) * mainNotes.length / (mainRhytmePart1.length + pattern.length * 2));
                  var firstNoteIndex = mainNotes.findIndex(function (n) {
                    return n === firstNote;
                  });
                  var currentNotes = mainNotes.slice(firstNoteIndex, maxNoteIndex);
                  var result = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting2(currentNotes, pattern, lastNotePreviousPattern, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDescendanceOf, music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDiffOf], chooseNoteWhoRespect);
                  music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertResolutionAtEndIfNeed(result, mainNotes, chooseNoteWhoRespect);
                  lastNotePreviousPattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getTuneAt(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(result[0].tune) - 1);
                  previousPattern = result;
                  return result;
                });
              } catch (e) {
                console.error(e);
                console.error("fail create main theme");
              } //  let mainThemePart1 = fillWithNotesRespecting(mainNotes, mainRhytmePart1, firstNoteTheme, [isInIntervalConsonnance(-1), isInIntervalDegres(6, 3), isDiffOf], chooseNoteWhoRespect);


              var flatMainThemePart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(mainThemePart1);
              var noteFromPart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(flatMainThemePart1.map(function (n) {
                return n.tune;
              }));
              var noteForPart2 = noteFromPart1.slice(noteFromPart1.length / 4, -noteFromPart1.length / 4); //noteForPart2 = mainNotes.concat(getSuroundingTunes(noteForPart2));

              if (noteForPart2.length < 2) {
                console.error("not enought note");
              }

              var mainThemePart2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(mainThemePart1).map(function (pattern) {
                var shufflePattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(pattern);
                var rythme = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(shufflePattern).map(function (n) {
                  return n.value;
                });
                var newPattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithRandomNote([rythme], noteForPart2);
                music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertDisconnanceAndResolutionAtEnd(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(newPattern), noteForPart2, chooseNoteWhoRespect);
                return newPattern;
              });
              var mainTheme = mainThemePart1.concat(mainThemePart2);
              var mainThemeNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(mainTheme).map(function (n) {
                return n.tune;
              });
              var intro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(mainThemePart1[0].map(function (n) {
                return n.tune;
              })), mainRhytmePart2, music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainThemeNotes), [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isInIntervalDegres(-3, 3)]);
              music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertDisconnanceAndResolutionAtEnd(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro), mainNotes, chooseNoteWhoRespect);
              var flatIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro);
              var noteForVariation = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].last(mainThemePart1).map(function (n) {
                return n.tune;
              }));
              var variation1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(mainThemePart2).map(function (pattern) {
                return music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithRandomNote(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(pattern).map(function (n) {
                  return n.value;
                }), noteForVariation);
              });
              var variation2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(variation1);
              var conclusion;

              try {
                conclusion = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(mainThemeNotes, mainRhytmePart2, music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].last(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(variation2)).tune, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf, music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDiffOf]);
              } catch (e) {
                console.log(e);
              }

              var form = [intro, mainThemePart1, mainThemePart2, mainThemePart1, variation1, mainThemePart1, variation2, mainThemePart1, mainThemePart2, conclusion];
              return form;
            }
          }, {
            key: "moveMusic",
            value: function moveMusic() {
              return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("D3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("D3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n")];
            }
          }, {
            key: "noMusic",
            value: function noMusic() {
              return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("C3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("B3", "8n")];
            }
          }, {
            key: "takeMusic",
            value: function takeMusic() {
              return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("C3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("G3", "8n")];
              ;
            }
          }]);

          return GameMusiqueService;
        }();

        GameMusiqueService.ɵfac = function GameMusiqueService_Factory(t) {
          return new (t || GameMusiqueService)();
        };

        GameMusiqueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: GameMusiqueService,
          factory: GameMusiqueService.ɵfac,
          providedIn: 'root'
        });
        return GameMusiqueService;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMusiqueService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "z4sO":
    /*!*****************************************************!*\
      !*** ./src/app/labyrinth/loading/loading.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoadingModule */

    /***/
    function z4sO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
        return LoadingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/ascii/ascii.module */
      "O1Wb");
      /* harmony import */


      var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../loading/loading.component */
      "dyXb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var LoadingModule =
      /** @class */
      function () {
        var LoadingModule = function LoadingModule() {
          _classCallCheck(this, LoadingModule);
        };

        LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LoadingModule
        });
        LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LoadingModule_Factory(t) {
            return new (t || LoadingModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"]]]
        });
        return LoadingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingModule, {
          declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"]],
          exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"]],
            exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var kotlin_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! kotlin-logging */
      "VS8f");
      /* harmony import */


      var kotlin_logging__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kotlin_logging__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      kotlin_logging__WEBPACK_IMPORTED_MODULE_2__["mu"].KotlinLoggingConfiguration.LOG_LEVEL = kotlin_logging__WEBPACK_IMPORTED_MODULE_2__["mu"].KotlinLoggingLevel.ERROR;

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map