const en=[
{small:"alt", shift:null, code: "AltLeft"},
{small:"`", shift:"~", code: "Backquote"},
{small:"1", shift:"!", code: "Digit1"},
{small:"2", shift:"@", code: "Digit2"},
{small:"3", shift:"#", code: "Digit3"},
{small:"4", shift:"$", code: "Digit4"},
{small:"5", shift:"%", code: "Digit5"},
{small:"6", shift:"^", code: "Digit6"},
{small:"7", shift:"&", code: "Digit7"},
{small:"8", shift:"*", code: "Digit8"},
{small:"9", shift:"(", code: "Digit9"},
{small:"0", shift:")", code: "Digit0"},
{small:"-", shift:"_", code: "Minus"},
{small:"=", shift:"+", code: "Equal"},
{small:"backspace", shift:null, code: "Backspace"},
{small:"tab", shift:null, code: "Tab"},
{small:"q", shift:"Q", code: "KeyQ"},
{small:"w", shift:"W", code: "KeyW"},
{small:"e", shift:"E", code: "KeyE"},
{small:"r", shift:"R", code: "KeyR"},
{small:"t", shift:"T", code: "KeyT"},
{small:"y", shift:"Y", code: "KeyY"},
{small:"u", shift:"U", code: "KeyU"},
{small:"i", shift:"I", code: "KeyI"},
{small:"o", shift:"O", code: "KeyO"},
{small:"p", shift:"P", code: "KeyP"},
{small:"[", shift:"{", code: "BracketLeft"},
{small:"]", shift:"}", code: "BracketRight"},
{small:"\\", shift:"|", code: "Backslash"},
{small:"capsLock", shift:null, code: "CapsLock"},
{small:"a", shift:"A", code: "KeyA"},
{small:"s", shift:"S", code: "KeyS"},
{small:"d", shift:"D", code: "KeyD"},
{small:"f", shift:"F", code: "KeyF"},
{small:"g", shift:"G", code: "KeyG"},
{small:"h", shift:"H", code: "KeyH"},
{small:"j", shift:"J", code: "KeyJ"},
{small:"k", shift:"K", code: "KeyK"},
{small:"l", shift:"L", code: "KeyL"},
{small:";", shift:":", code: "Semicolon"},
{small:"'", shift:"\"", code: "Quote"},
{small:"enter", shift:null, code: "Enter"},
{small:"shift", shift:null, code: "ShiftLeft"},
{small:"voice", shift:"voice", code: "Voice"},
{small:"sound", shift:"sound", code: "Sound"},
{small:"z", shift:"Z", code: "KeyZ"},
{small:"x", shift:"X", code: "KeyX"},
{small:"c", shift:"C", code: "KeyC"},
{small:"v", shift:"V", code: "KeyV"},
{small:"b", shift:"B", code: "KeyB"},
{small:"n", shift:"N", code: "KeyN"},
{small:"m", shift:"M", code: "KeyM"},
{small:",", shift:"<", code: "Comma"},
{small:".", shift:">", code: "Period"},
{small:"/", shift:"?", code: "Slash"},
{small:"up", shift:null, code: "ArrowUp"},
{small:"ctrl", shift:null, code: "ControlLeft"},
{small:"en", shift:null, code: "LangChange"},
{small:"space", shift:null, code: "Space"},
{small:"left", shift:null, code: "ArrowLeft"},
{small:"down", shift:null, code: "ArrowDown"},
{small:"right", shift:null, code: "ArrowRight"},
]

const ru=[
{small:"alt", shift:null, code: "AltLeft"},
{small:"ё", shift:"Ё", code: "Backquote"},
{small:"1", shift:"!", code: "Digit1"},
{small:"2", shift:"№", code: "Digit2"},
{small:"3", shift:";", code: "Digit3"},
{small:"4", shift:"%", code: "Digit4"},
{small:"5", shift:"%", code: "Digit5"},
{small:"6", shift:":", code: "Digit6"},
{small:"7", shift:"?", code: "Digit7"},
{small:"8", shift:"*", code: "Digit8"},
{small:"9", shift:"(", code: "Digit9"},
{small:"0", shift:")", code: "Digit0"},
{small:"-", shift:"_", code: "Minus"},
{small:"=", shift:"+", code: "Equal"},
{small:"backspace", shift:null, code: "Backspace"},
{small:"tab", shift:null, code: "Tab"},
{small:"й", shift:"Й", code: "KeyQ"},
{small:"ц", shift:"Ц", code: "KeyW"},
{small:"у", shift:"У", code: "KeyE"},
{small:"к", shift:"К", code: "KeyR"},
{small:"е", shift:"Е", code: "KeyT"},
{small:"н", shift:"Н", code: "KeyY"},
{small:"г", shift:"Г", code: "KeyU"},
{small:"ш", shift:"Ш", code: "KeyI"},
{small:"щ", shift:"Щ", code: "KeyO"},
{small:"з", shift:"З", code: "KeyP"},
{small:"х", shift:"Х", code: "BracketLeft"},
{small:"ъ", shift:"Ъ", code: "BracketRight"},
{small:"\\", shift:"/", code: "Backslash"},
{small:"capsLock", shift:null, code: "CapsLock"},
{small:"ф", shift:"Ф", code: "KeyA"},
{small:"ы", shift:"Ы", code: "KeyS"},
{small:"в", shift:"В", code: "KeyD"},
{small:"а", shift:"А", code: "KeyF"},
{small:"п", shift:"П", code: "KeyG"},
{small:"р", shift:"Р", code: "KeyH"},
{small:"о", shift:"О", code: "KeyJ"},
{small:"л", shift:"Л", code: "KeyK"},
{small:"д", shift:"Д", code: "KeyL"},
{small:"ж", shift:"Ж", code: "Semicolon"},
{small:"э", shift:"Э", code: "Quote"},
{small:"enter", shift:null, code: "Enter"},
{small:"shift", shift:null, code: "ShiftLeft"},
{small:"голос", shift:"голос", code: "Voice"},
{small:"звук", shift:"звук", code: "Sound"},
{small:"я", shift:"Я", code: "KeyZ"},
{small:"ч", shift:"Ч", code: "KeyX"},
{small:"с", shift:"С", code: "KeyC"},
{small:"м", shift:"М", code: "KeyV"},
{small:"и", shift:"И", code: "KeyB"},
{small:"т", shift:"Т", code: "KeyN"},
{small:"ь", shift:"Ь", code: "KeyM"},
{small:"б", shift:"Б", code: "Comma"},
{small:"ю", shift:"Ю", code: "Period"},
{small:".", shift:",", code: "Slash"},
{small:"up", shift:null, code: "ArrowUp"},
{small:"ctrl", shift:null, code: "ControlLeft"},
{small:"рус", shift:null, code: "LangChange"},
{small:"space", shift:null, code: "Space"},
{small:"left", shift:null, code: "ArrowLeft"},
{small:"down", shift:null, code: "ArrowDown"},
{small:"right", shift:null, code: "ArrowRight"},
]
const language ={en, ru}


//local storage functions для выбора языка
function setStorage(name, value){
  window.localStorage.setItem(name, JSON.stringify(value))
}

function getStorage(name, subst =null){
  return JSON.parse(window.localStorage.getItem(name) || subst)
}

//создаем клавиатуру
//порядок букв
const rowsOrder =[
  [ "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
  ["Tab", "KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight", "Backslash"],
  [ "CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
  ["ShiftLeft","ControlLeft","AltLeft", "KeyZ","KeyX","KeyC","KeyV","KeyB", "KeyN","KeyM","Comma","Period","Slash"],
  [ "Sound","Voice", "LangChange","Space","ArrowLeft","ArrowRight"]
]
//выбор языка
const lang = getStorage('kbLang', '"ru"');

//создаем эл-ты для отображения на странице
const main = create('main', '',
  [create('h1', 'title', 'Virtual Keyboard'),
  create('p', 'hint', 'Чтобы сменить язык, нажмите <kbd>Ctrl</kbd> и <kbd>Alt</kbd> или кнопку смены языка на клавиатуре.</br> Последнее выбранное значение языка находится в localstorage. </br>Для того, чтобы показать клавиатуру, нажмите курсором мыши на поле ввода.</br>Для того, чтобы скрыть клавиатуру, нажмите курсором мыши на это сообщение. '),
]
)

function create(el, classNames, child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' ')); // "class1 class2 class3"

  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/backspace|tab|capsLock|enter|shift|up|ctrl|space|left|down|right|alt/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}


//made a Key
class Key {
  constructor({small, shift, code}){
    this.code = code;
    this.small = small;
    this.shift = shift;
    this.isFnKey = Boolean(small.match(/backspace|tab|capsLock|enter|shift|up|ctrl|space|left|down|right|alt|рус|en|голос|звук|voice|sound/))
    if(shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)){
      this.sub = create('div', 'sub', shift)
    }else{
      this.sub = create('div', 'sub', '')
    }
    this.letter = create('div', 'letter', small)
    this.div = create('div', 'keyboard__key', [this.sub, this.letter], null,['code',this.code],
    this.isFnKey ? ['fn', 'true'] : ['fn', 'false']
    )
  }
}


//класс для создания клавиатуры
class Keyboard{
  constructor(rowsOrder){
    this.rowsOrder = rowsOrder;
    this.keysPressed ={};
    this.isCaps = false;
    this.shiftKey = false;
    this.voiceKey = false;
    this.soundKey = false;
    this.recognition = null;
    this.transcript='';
  }
  init(langCode){//ru, eng
    this.keyBase = language[langCode]
    this.output = create('textarea','output',null,main,
    ['placeholder', 'start type something...'],
    ['rows', 5],
    ['cols', 50],
    ['spellcheck', false],
    ['autocorrect','off']
    )
    this.container = create('div', 'keyboard',null,main,['language', langCode]);
    //.prepend для того, чтобы код вставился выше script
    document.body.prepend(main);
    return this;
  }
  generateLayout(){
    this.keyButtons = [];
    this.rowsOrder.forEach((row, i)=>{
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i+1]);
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code);
        if (keyObj) {
          const keyButton = new Key(keyObj);
          this.keyButtons.push(keyButton);
          rowElement.appendChild(keyButton.div);
        }})
    })    
    //нажали физическую клавишу клавиатуры 
    document.addEventListener('keydown', this.handleEvent);
    //отпустили физическую клавишу клавиатуры кнопку
    document.addEventListener('keyup', this.handleEvent);
    //лисенеры на клики мыши. на контейнер - тк мы вызываем preHandleEvent, те нам пока не важно, что за клавиша
    this.container.onmousedown = this.preHandleEvent;
    this.container.onmouseup = this.preHandleEvent;

  }
//функция обработки кликов мыши. при клике мыши мы не получаем code, в отличии от нажатия клавиши
//в этом главное различие, мы кликаем по какому-то диву
  preHandleEvent = (e) => {
    //убираем "всплытие" события выше по дивам. чтобы оно применялось к тому диву, по которому кликнули
    e.stopPropagation();
    /*.closest работает так: что бы мы ни кликнули внутри div, мы ищем ближайший
    элемент с классом .keyboard__key */
    const keyDiv = e.target.closest('.keyboard__key');
    if (!keyDiv) return;
    //это опять деструктурицазия, можно было бы записать вот так:
    //const code = keyDiv.dataset.code
    //.dataset дaет доступ к дата-атрибутам
    const { dataset: { code } } = keyDiv;


   // if (!code.match(/Caps|Shift/)) keyObj.div.classList.remove('active')
    if(!keyDiv.dataset.code.match(/Caps|Shift|Sound|Voice/)){
      keyDiv.addEventListener('mouseleave', this.resetButtonState);}
/*
    if(keyDiv.dataset.code!="CapsLock"){
    keyDiv.addEventListener('mouseleave', this.resetButtonState);}*/
    //сокращенная запись this.handleEvent({ code:code, type: e.type });
    this.handleEvent({ code, type: e.type });

  };
  //функции, кот обрабатывают случай, когда мы кликнули на кнопку и отвели мышку

  //хендлер для обработки событий
  handleEvent = (e) => {
  //.stopPropagation - это для того, чтобы не поднималось событие выше до родительского элемента.
  /*пример:
  код
  <div id="demo">
    <a href="js4.it">Link</a>
  </div>
  обработчики:
  $('a').click(function(event){
	event.preventDefault();
	event.stopPropagation();
	console.log('You have clicked the link.');
  });

  $('#demo').click(function(){
	$(this).toggleClass('yellow');
	console.log('You have clicked the demo div.');
  });
  при клике не будет меняться цвет контейнера
  Делается это для того, чтобы был 1 обработчик на 4 лисенера. Нам надо чтобы хендлер срабаотывал на конкретый элемент.
  */
     //деструктуризация
     if (e.stopPropagation) e.stopPropagation();

     const {code, type}=e;
     const keyObj = this.keyButtons.find((key) => key.code === code)
  //это чтобы если нажимают на неописанную кнопку в вирт клавиатуре ничего не ломалось. подсвечивать нечего, идем дальше.
  if (!keyObj) return;

      //.focus() - это стандартное событие js. Используем для того, чтобы при нажатии с клавиатуры всегда возвращался фокус внутрь окошка вывода.
      this.output.focus()
      //keyObj.div.classList.remove('active')




 if(type.match(/keydown|mousedown/)){
  if (code.match(/Enter/)) {      this.playSound("enter")}
  if (code.match(/Backspace/)) {      this.playSound("backspace")}
        //удаляем все пердварительные события у кнопок. У кнопок могут быть события, о которых я не знаю, будем делать только свои личные.
        if(type.match(/key/)) e.preventDefault();
    //вызываем смену языка по сочетанию alt и ctrl
  //  if (code.match(/Shift/)){this.shiftKey = true;} 
    if (this.shiftKey) this.switchUpperCase(true);
    if (code.match(/ControlLeft|Alt|Caps/) && e.repeat) return;
        //вызываем смену языка по сочетанию alt и ctrl
    if (code.match(/ControlLeft/)){this.ctrKey = true;} 
    if (code.match(/Alt/)) this.altKey = true;
        //вызываем смену языка по сочетанию alt и ctrl
    if (code.match(/ControlLeft/) && this.altKey) this.switchLanguage();
    if (code.match(/Alt/) && this.ctrKey) this.switchLanguage();
    if (code.match(/LangChange/)) this.switchLanguage();
    keyObj.div.classList.add('active')
//добавим флаг для капс. флаг - .isCaps,
// для /Shift/ .shiftKey
// для /Voice/ .voiceKey
// /Sound/ this.soundKey
    if (code.match(/Caps/) && !this.isCaps) {
      this.isCaps = true;
      this.switchUpperCase(true);
      this.playSound("caps")
    } else if (code.match(/Caps/) && this.isCaps) {
      this.isCaps = false;
      this.switchUpperCase(false);
      keyObj.div.classList.remove('active');
      this.playSound("caps")
    }

    if (code.match(/Shift/) && !this.shiftKey) {
      this.shiftKey = true;
      this.switchUpperCase(true);
      this.playSound("shift")
    } else if (code.match(/Shift/) && this.shiftKey) {
      this.shiftKey = false;
      this.switchUpperCase(false);
      keyObj.div.classList.remove('active');
      this.playSound("shift")
    }
    if (code.match(/Voice/) && !this.voiceKey) {
      this.voiceKey = true;
      this._initRecognition();
      this.recognition.start();
    } else if (code.match(/Voice/) && this.voiceKey) {
      this.voiceKey = false;
      this.recognition.stop();
      keyObj.div.classList.remove('active');
    }
    if (code.match(/Sound/) && !this.soundKey) {
      this.soundKey = true;
      this._initSound()
    } else if (code.match(/Sound/) && this.soundKey) {
      this.soundKey = false;
      keyObj.div.classList.remove('active');
    }

    if(!this.isCaps){
      this.printToOutput(keyObj, this.shiftKey? keyObj.shift : keyObj.small);
      this.playSound("type")
    } else if(this.isCaps){
      if(this.shiftKey){
        this.printToOutput(keyObj, keyObj.sub.innerHTML? keyObj.shift : keyObj.small)
        this.playSound("type")
      }else{
        this.printToOutput(keyObj, !keyObj.sub.innerHTML? keyObj.shift : keyObj.small)
        this.playSound("type")
      }
    }
  } else if(type.match(/keyup|mouseup/)){
 
        /*if (!code.match(/Shift/)) keyObj.div.classList.remove('active');*/
    /*старый код, как было изначалоно написано для Shift
    if (code.match(/Shift/)) {
      this.shiftKey = false;
      this.switchUpperCase(false);
    }*/

    //при отжатии кнопок убираем "флаги" с ctrl и alt
    if (code.match(/ControlLeft/))this.ctrKey = false;
    if (code.match(/Alt/)) this.altKey = false;
    //if (code.match(/Caps/)) this.isCaps = false;
   if (!code.match(/Caps|Shift|Sound|Voice/)) keyObj.div.classList.remove('active')
  }
}/*
resetButtonState = ({ target: { dataset: { code } } }) => {
  if (code.match("Shift")) {
    this.shiftKey = false;
    this.switchUpperCase(false);
    this.keysPressed[code].div.classList.remove('active');
  }
  if (code.match(/Control/)) this.ctrKey = false;
  if (code.match(/Alt/)) this.altKey = false;
  const keyObj = this.keyButtons.find((key)=> key.code ===code)
  keyObj.div.classList.remove('active');
  this.resetPressedButtons(code);
  this.output.focus();
}

resetPressedButtons = (targetCode) => {
  if (!this.keysPressed[targetCode]) return;
  if (!this.isCaps) this.keysPressed[targetCode].div.classList.remove('active');
  this.keysPressed[targetCode].div.removeEventListener('mouseleave', this.resetButtonState);
  delete this.keysPressed[targetCode];
}*/

resetButtonState = ({ target: { dataset: { code } } }) => {
  if (code.match(/Shift/)) {
    this.shiftKey = false;
    this.switchUpperCase(false);
  }
  if (code.match(/ControlLeft/)) this.ctrKey = false;
  if (code.match(/Alt/)) this.altKey = false;
  const keyObj = this.keyButtons.find((key)=> key.code ===code)
  keyObj.div.classList.remove('active');
  keyObj.div.removeEventListener('mouseleave', this.resetButtonState);
  this.output.focus();
}


switchUpperCase(isTrue) {
  // isTrue - это флаг - чтобы понимать, мы поднимаем регистр или опускаем
  if (isTrue) {
    // Мы записывали наши кнопки в keyButtons, теперь можем легко итерироваться по ним
    this.keyButtons.forEach((button) => {
      // Если у кнопки есть спецсивол - мы должны переопределить стили
      if (button.sub) {
        // Если только это не капс, тогда поднимаем у спецсимволов
        if (this.shiftKey) {
          button.sub.classList.add('sub-active');
          button.letter.classList.add('sub-inactive');
        }
      }
      // Не трогаем функциональные кнопки
      // И если капс, и не шифт, и именно наша кнопка без спецсимвола
      if (!button.isFnKey && this.isCaps && !this.shiftKey && !button.sub.innerHTML) {
        // тогда поднимаем регистр основного символа letter
        button.letter.innerHTML = button.shift;
      // Если капс и зажат шифт
      } else if (!button.isFnKey && this.isCaps && this.shiftKey) {
        // тогда опускаем регистр для основного симовла letter
        button.letter.innerHTML = button.small;
      // а если это просто шифт - тогда поднимаем регистр у основного символа
      // только у кнопок, без спецсимвола --- там уже выше отработал код для них
      } else if (!button.isFnKey && !button.sub.innerHTML) {
        button.letter.innerHTML = button.shift;
      }
    });
  } else {
    // опускаем регистр в обратном порядке
    this.keyButtons.forEach((button) => {
      // Не трогаем функциональные кнопки
      // Если есть спецсимвол
      if (button.sub.innerHTML && !button.isFnKey) {
        // то возвращаем в исходное
        button.sub.classList.remove('sub-active');
        button.letter.classList.remove('sub-inactive');
        // если не зажат капс
        if (!this.isCaps) {
          // то просто возвращаем основным символам нижний регистр
          button.letter.innerHTML = button.small;
        } else if (!this.isCaps) {
          // если капс зажат - то возвращаем верхний регистр
          button.letter.innerHTML = button.shift;
        }
      // если это кнопка без спецсимвола (снова не трогаем функциональные)
      } else if (!button.isFnKey) {
        // то если зажат капс
        if (this.isCaps) {
          // возвращаем верхний регистр
          button.letter.innerHTML = button.shift;
        } else {
          // если отжат капс - возвращаем нижний регистр
          button.letter.innerHTML = button.small;
        }
      }
    });
  }
}
switchLanguage =()=>{
  const langAbbr = Object.keys(language);
  //определяем индекс языка в массиве языков. на тот случай, если из кол-во увеличится
  

  //хорошо бы переделать на cлучай с 2 языками, так сложно вроде не нужно
  let langIdx = langAbbr.indexOf(this.container.dataset.language);
  this.keyBase = langIdx + 1 < langAbbr.length ? language[langAbbr[langIdx += 1]]
    : language[langAbbr[langIdx -= langIdx]];
  this.container.dataset.language = langAbbr[langIdx];
  
  
  setStorage('kbLang', langAbbr[langIdx]);
  if (this.recognition!==null){
    if ( langAbbr[langIdx] == 'en' ) this.recognition.lang='en-US'
if ( langAbbr[langIdx] == 'ru' ) this.recognition.lang='ru-RU'
  }


  this.keyButtons.forEach((button) => {
    const keyObj = this.keyBase.find((key) => key.code === button.code);
    if (!keyObj) return;
    button.shift = keyObj.shift;
    button.small = keyObj.small;
    //[^a-zA-Zа-яА-ЯёЁ0-9] крышечка ^ в регексп значит отрицание
    if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
      button.sub.innerHTML = keyObj.shift;
    } else {
      button.sub.innerHTML = '';
    }
    button.letter.innerHTML = keyObj.small;
  });
  if (this.isCaps) this.switchUpperCase(true);
  }

  printToOutput(keyObj, symbol){
    //.selectionStart - свойство textarea, место начала выделения, это работает чисто для textarea
    let cursorPos = this.output.selectionStart;
    //value это стандартное у textarea, это то что внутри textarea
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
    const textHandlers = {
      // \t - это, видимо, регэксп для таба
      Tab: () => {
        this.output.value = `${left}\t${right}`;
        cursorPos += 1;
      },
      ArrowLeft: () => {
        cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
      },
      ArrowRight: () => {
        cursorPos += 1;
      },
      //
      ArrowUp: () => {
        // \n - это регэксп переноса строки
        //Если у регулярного выражения есть флаг g, то он возвращает массив всех совпадений, без скобочных групп и других деталей.
        /*У символов каретки ^ и доллара $ есть специальные значения в регулярных выражениях. Они называются «якоря» (anchors).
        Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.*/
        const positionFromLeft = this.output.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
        cursorPos -= positionFromLeft[0].length;
      },
      ArrowDown: () => {
        const positionFromLeft = this.output.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
        cursorPos += positionFromLeft[0].length;
      },
      //\n - это регэксп переноса строки
      Enter: () => {
        this.output.value = `${left}\n${right}`;
        cursorPos += 1;
      },
      Delete: () => {
        this.output.value = `${left}${right.slice(1)}`;
      },
      Backspace: () => {
        this.output.value = `${left.slice(0, -1)}${right}`;
        cursorPos -= 1;
      },
      Space: () => {
        this.output.value = `${left} ${right}`;
        cursorPos += 1;
      },
      LangChange:()=>{
        this.output.value = `${left}${right}`;
      },
      Voice:()=>{
        this.output.value = `${left}${right}`;
      },
      Sound:()=>{
        this.output.value = `${left}${right}`;
      }
      
    }
    if (textHandlers[keyObj.code]) textHandlers[keyObj.code]();
    else if (!keyObj.isFnKey) {
      cursorPos += symbol.length;
      this.output.value = `${left}${symbol || ''}${right}`;

    }
    this.output.setSelectionRange(cursorPos, cursorPos);
  }

  _initSound(){
    document.querySelector("body").appendChild(this._createSounds());
  };
  
_createSounds() {
    const fragment = document.createDocumentFragment();

    const soundPath = "sounds/";
    const sounds = [
      { file: "type-en.wav", name: "type-en" }, { file: "type-ru.wav", name: "type-ru" },
      { file: "enter.wav", name: "enter" }, { file: "backspace.wav", name: "backspace" },
      { file: "shift.wav", name: "shift" }, { file: "caps.wav", name: "caps" }]

    sounds.forEach((item) => {
      const audioElement = document.createElement("audio");
      audioElement.setAttribute("src", soundPath + item.file);
      audioElement.setAttribute("data-key", item.name);
      fragment.appendChild(audioElement);
    })

    return fragment;
  }

  playSound(name) {

    if (!this.soundKey) return;

    let lang='en'


    if( !localStorage.getItem("kbLang")){
      lang='ru'
    }else{
      lang = localStorage.getItem("kbLang")=='"en"'?  'en': 'ru';
    }

   if (name == "type") name += "-" + lang;

    const audio = document.querySelector(`audio[data-key="${name}"]`);
    audio.currentTime = 0;
    audio.play();
  }

 _initRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;


    if( !localStorage.getItem("kbLang")){this.recognition.lang = 'ru-RU';}else{
      localStorage.getItem("kbLang")=='en'?this.recognition.lang = 'en-US':this.recognition.lang = 'ru-RU';
    }

    this.recognition.addEventListener('result', e => {
      const transcript0 = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
       let transcript = transcript0.replace(/poop|poo|shit|dump/gi, '💩');
      if (e.results[0].isFinal) {
        this.transcript =transcript

       this.printToOutput({code:'Voice1'}, this.transcript)
      }
    });
    this.recognition.addEventListener('end', () => {
      if (this.voiceKey) {
        this.recognition.start();
      } else {
        this.recognition.stop();
      }
    });
  }
}
//создаем новую клваиатуру
new Keyboard(rowsOrder).init(lang).generateLayout();

document.querySelector(".output").addEventListener( "click" ,()=>{
  document.querySelector(".keyboard").classList.add("keyboard__unhidden") 
}) 
document.querySelector(".hint").addEventListener( "click" ,()=>{
  document.querySelector(".keyboard").classList.remove("keyboard__unhidden") 
}) 


