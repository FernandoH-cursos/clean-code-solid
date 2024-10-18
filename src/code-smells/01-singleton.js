/* 
* Es un Singleton ya que está creado en el ambito global, es decir, fuera de una función o método o bloque
*/
const Singleton = (function () {

  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function main() {

  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('¿Misma instancia? ', (instance1 === instance2));
}

main();