"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack2_0"]("main",{

/***/ "./src/components/home/displayCharacters.js":
/*!**************************************************!*\
  !*** ./src/components/home/displayCharacters.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/components/home/displayLikes.js\");\n/* harmony import */ var _passLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passLike.js */ \"./src/components/home/passLike.js\");\n/* harmony import */ var _retrieveCharacters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieveCharacters.js */ \"./src/components/home/retrieveCharacters.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar homepage = document.querySelector('.homepage');\n// const path = 'https://www.breakingbadapi.com/api/characters?limit=12&offset=0';\nvar appId = 'wHDqf2FyYMmzmK7MMxf9';\nvar idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/comments/\");\nvar displayCharacters = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n    var charactersInfo, close, container, btnComments, nameSpace, photo, contOne, contTwo, contThree, contFour, addComment, input1, input2, insideBtn, date, newComment, general, newParagraph, closeRes, containerRes, btnReserv, nameSpaceRes, photoRes, contOneRes, contTwoRes, contThreeRes, contFourRes, addCommentRes, input1Res, input2Res, input3Res, insideBtnRes, newCommentReser, generalRes, newParagraphReser, pathGet, idDinamic, retrieveComment;\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return (0,_retrieveCharacters_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n          case 2:\n            charactersInfo = _context4.sent;\n            charactersInfo.forEach(function (character) {\n              var characterDiv = document.createElement('div');\n              characterDiv.setAttribute('id', character.char_id);\n              characterDiv.classList.add('characterDiv');\n              var charactersName = document.createElement('h4');\n              charactersName.classList.add('charactersName');\n              var characterBday = document.createElement('p');\n              var charactersOccupation = document.createElement('ul');\n              charactersOccupation.classList.add('charactersOccupation');\n              var characterImg = document.createElement('img');\n              characterImg.classList.add('characterImg');\n              characterImg.src = character.img;\n              homepage.appendChild(characterDiv);\n              var characterText = document.createElement('div');\n              characterText.classList.add('characterText');\n              characterDiv.appendChild(characterImg);\n              characterDiv.appendChild(characterText);\n              charactersName.innerText = \"Name: \".concat(character.name);\n              characterText.appendChild(charactersName);\n              characterBday.innerText = \"Date of birth: \".concat(character.birthday);\n              characterText.appendChild(characterBday);\n              characterText.appendChild(charactersOccupation);\n              var commentsBtn = document.createElement('button');\n              commentsBtn.innerText = 'Comments';\n              commentsBtn.classList.add('commentsBtn');\n              commentsBtn.classList.add('btn');\n              var reservationsBtn = document.createElement('button');\n              reservationsBtn.classList.add('btn');\n              reservationsBtn.innerText = 'Reservations';\n              reservationsBtn.classList.add('reservationsBtn');\n              characterDiv.appendChild(commentsBtn);\n              characterDiv.appendChild(reservationsBtn);\n              character.occupation.forEach(function (occupation) {\n                var occupationList = document.createElement('li');\n                occupationList.classList.add('occupationList');\n                occupationList.innerText = \"Occupation: \".concat(occupation);\n                charactersOccupation.appendChild(occupationList);\n              });\n            });\n\n            //Comments Section\n            close = document.querySelector('.close');\n            container = document.querySelector('.general__container');\n            btnComments = document.querySelectorAll('.commentsBtn');\n            nameSpace = document.querySelector('.name__space');\n            photo = document.querySelector('.photo__breaking');\n            contOne = document.querySelector('.one');\n            contTwo = document.querySelector('.two');\n            contThree = document.querySelector('.three');\n            contFour = document.querySelector('.four');\n            addComment = document.querySelector('.name__add');\n            input1 = document.querySelector('.input__text');\n            input2 = document.querySelector('.input__mail');\n            insideBtn = document.createElement('button');\n            insideBtn.classList.add('inside__button');\n            date = new Date();\n            newComment = document.createElement('div');\n            newComment.classList.add('newComment');\n            general = document.querySelector('.general__container');\n            newParagraph = document.createElement('p');\n            newParagraph.classList.add('text__paragraph');\n            newComment.appendChild(newParagraph);\n            general.insertBefore(newComment, addComment);\n            btnComments.forEach(function (btn) {\n              btn.addEventListener('click', function () {\n                var inputMain = document.querySelector('.input__main');\n                var idDinamic = btn.parentElement.id; // id dinamico get\n                var idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/comments/\"); // id dinamico post\n                var pathGet = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/comments/?item_id=\").concat(idDinamic);\n                container.style.display = 'block';\n                fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0') // GET BREAKING BAD DATA\n                .then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  data.forEach(function (data) {\n                    if (JSON.stringify(data.char_id) === btn.parentElement.id) {\n                      nameSpace.innerText = data.name;\n                      console.log(nameSpace);\n                      photo.src = data.img;\n                      contOne.innerText = data.nickname;\n                      contTwo.innerText = data.status;\n                      contThree.innerText = data.portrayed;\n                      contFour.innerText = data.birthday;\n                    }\n                  });\n                });\n\n                // Post comment Button\n                addComment.innerText = 'Add a comment';\n                var insideBtn = document.createElement('button');\n                insideBtn.innerText = 'Comments';\n                inputMain.appendChild(insideBtn);\n\n                // GET COMMENTS\n\n                var retrieveComment = /*#__PURE__*/function () {\n                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n                    return _regeneratorRuntime().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.next = 2;\n                            return fetch(pathGet).then(function (response) {\n                              return response.json();\n                            }).then(function (json) {\n                              for (var i = 0; i < json.length; i += 1) {\n                                console.log('papitas');\n                                console.log(json[i]);\n                                //contenedor\n                                var comentNEW = document.createElement('p');\n                                comentNEW.innerText = json[i].username + ' ' + json[i].comment + ' ' + json[i].creation_date;\n                                newComment.appendChild(comentNEW);\n                              }\n                              //console.log(json.length +\"********************************************\")\n                            });\n                          case 2:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return function retrieveComment() {\n                    return _ref2.apply(this, arguments);\n                  };\n                }();\n                retrieveComment();\n\n                // postNewComment();\n                insideBtn.addEventListener('click', function () {\n                  while (newComment.hasChildNodes()) {\n                    newComment.removeChild(newComment.firstChild);\n                  }\n                  var updatePost = {\n                    //inputs para el post\n                    item_id: idDinamic,\n                    username: input1.value,\n                    comment: input2.value\n                  };\n                  var optionsPost = {\n                    // FETCH POST COMENTARIOS\n                    method: 'POST',\n                    headers: {\n                      'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(updatePost)\n                  };\n                  var postNewComment = /*#__PURE__*/function () {\n                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n                        while (1) {\n                          switch (_context2.prev = _context2.next) {\n                            case 0:\n                              _context2.next = 2;\n                              return fetch(idPath, optionsPost);\n                            case 2:\n                              return _context2.abrupt(\"return\", _context2.sent);\n                            case 3:\n                            case \"end\":\n                              return _context2.stop();\n                          }\n                        }\n                      }, _callee2);\n                    }));\n                    return function postNewComment() {\n                      return _ref3.apply(this, arguments);\n                    };\n                  }();\n                  postNewComment();\n                  setTimeout(retrieveComment, 1000);\n                });\n              });\n            });\n            close.addEventListener('click', function () {\n              location.reload();\n            });\n            _context4.next = 30;\n            return (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          case 30:\n            (0,_passLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n            //section reservations\n            closeRes = document.querySelector('.close');\n            containerRes = document.querySelector('.main__container');\n            btnReserv = document.querySelectorAll('.reservationsBtn');\n            nameSpaceRes = document.querySelector('.name__space__reserv ');\n            photoRes = document.querySelector('.photo__reserv');\n            contOneRes = document.querySelector('.one_one');\n            contTwoRes = document.querySelector('.two_two');\n            contThreeRes = document.querySelector('.three_three');\n            contFourRes = document.querySelector('.four_four');\n            addCommentRes = document.querySelector('.name__add_reserv');\n            input1Res = document.querySelector('.text__main');\n            input2Res = document.querySelector('.main__mail');\n            input3Res = document.querySelector('.end__name');\n            insideBtnRes = document.createElement('button');\n            insideBtnRes.classList.add('inside__button_reserv');\n            newCommentReser = document.createElement('div');\n            newCommentReser.classList.add('newCommentReser');\n            generalRes = document.querySelector('.main__container');\n            newParagraphReser = document.createElement('p');\n            newParagraphReser.classList.add('text__paragraph_reser');\n            newCommentReser.appendChild(newParagraphReser);\n            generalRes.insertBefore(newCommentReser, addCommentRes);\n            btnReserv.forEach(function (btn) {\n              btn.addEventListener('click', function () {\n                var inputMainRes = document.querySelector('.input__main_reserv');\n                var idDinamic = btn.parentElement.id; // id dinamico get\n                var idPath = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wHDqf2FyYMmzmK7MMxf9/reservations/\"; // id dinamico post\n                var pathGet = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/comments/?item_id=\").concat(idDinamic);\n                generalRes.style.display = 'block';\n                fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0') // GET BREAKING BAD DATA\n                .then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  data.forEach(function (data) {\n                    if (JSON.stringify(data.char_id) === btn.parentElement.id) {\n                      nameSpaceRes.innerText = data.name;\n                      console.log(nameSpace);\n                      photoRes.src = data.img;\n                      contOneRes.innerText = data.nickname;\n                      contTwoRes.innerText = data.status;\n                      contThreeRes.innerText = data.portrayed;\n                      contFourRes.innerText = data.birthday;\n                    }\n                  });\n                });\n                // Post comment Button\n                addCommentRes.innerText = 'Add a Reservation';\n                var insideBtnRes = document.createElement('button');\n                insideBtnRes.classList.add('but_inside_res');\n                insideBtnRes.innerText = 'Reservations';\n                inputMainRes.appendChild(insideBtnRes);\n              });\n            });\n\n            // GET COMMENTS\n            pathGet = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/\".concat(appId, \"/comments/?item_id=\").concat(idDinamic);\n            idDinamic = btn.parentElement.id;\n            retrieveComment = /*#__PURE__*/function () {\n              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n                return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n                  while (1) {\n                    switch (_context3.prev = _context3.next) {\n                      case 0:\n                        _context3.next = 2;\n                        return fetch(pathGet).then(function (response) {\n                          return response.json();\n                        }).then(function (json) {\n                          for (var i = 0; i < json.length; i += 1) {\n                            console.log('papitas');\n                            console.log(json[i]);\n                            //contenedor\n                            var comentNEWRes = document.createElement('p');\n                            comentNEWRes.innerText = json[i].username + ' ' + json[i].comment + ' ' + json[i].creation_date;\n                            newCommentReser.appendChild(comentNEWRes);\n                          }\n                          //console.log(json.length +\"********************************************\")\n                        });\n                      case 2:\n                      case \"end\":\n                        return _context3.stop();\n                    }\n                  }\n                }, _callee3);\n              }));\n              return function retrieveComment() {\n                return _ref4.apply(this, arguments);\n              };\n            }();\n            retrieveComment();\n            closeRes.addEventListener('click', function () {\n              location.reload();\n            });\n          case 59:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return function displayCharacters() {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCharacters);\n\n//# sourceURL=webpack://webpack2.0/./src/components/home/displayCharacters.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("139cb86de59385024759")
/******/ })();
/******/ 
/******/ }
);