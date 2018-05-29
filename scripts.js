function makeBuffer() {

  var buffer = '';

  function maker(smth) {
    if (smth) {
      buffer += smth;
    } else {
      return buffer;
    };
  };

  return maker;

}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
buffer(); // Замыкания Использовать Нужно!
buffer();
