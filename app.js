// Importamos los módulos necesarios
const mocha = require('mocha');
const chai = require('chai');
const supertest = require('supertest');

// Creamos una instancia de Mocha
const test = mocha();

// Definimos un test para el router de products
test('Products router', function(done) {
  // Hacemos una solicitud al router de products
  supertest('http://localhost:3000/products')
    .get()
    .expect(200);

  // Validamos que la respuesta sea exitosa
  chai.expect(response.status).to.equal(200);

  // Validamos que la respuesta contenga los campos esperados
  chai.expect(response.body).to.have.property('products');
  chai.expect(response.body.products).to.have.lengthOf(10);

  // Validamos que los productos tengan los campos esperados
  chai.expect(response.body.products[0]).to.have.property('id');
  chai.expect(response.body.products[0]).to.have.property('name');
  chai.expect(response.body.products[0]).to.have.property('price');
  chai.expect(response.body.products[0]).to.have.property('description');

  done();
});

// Definimos un test para el router de carts
test('Carts router', function(done) {
  // Hacemos una solicitud al router de carts
  supertest('http://localhost:3000/carts')
    .get()
    .expect(200);

  // Validamos que la respuesta sea exitosa
  chai.expect(response.status).to.equal(200);

  // Validamos que la respuesta contenga los campos esperados
  chai.expect(response.body).to.have.property('carts');
  chai.expect(response.body.carts).to.have.lengthOf(10);

  // Validamos que los carros contengan los campos esperados
  chai.expect(response.body.carts[0]).to.have.property('id');
  chai.expect(response.body.carts[0]).to.have.property('user_id');
  chai.expect(response.body.carts[0]).to.have.property('product_id');
  chai.expect(response.body.carts[0]).to.have.property('quantity');

  done();
});

// Definimos un test para el router de sessions
test('Sessions router', function(done) {
  // Hacemos una solicitud al router de sessions
  supertest('http://localhost:3000/sessions')
    .post({
      email: 'johndoe@example.com',
      password: 'password'
    })
    .expect(201);

  // Validamos que la respuesta sea exitosa
  chai.expect(response.status).to.equal(201);

  // Validamos que la respuesta contenga los campos esperados
  chai.expect(response.body).to.have.property('id');
  chai.expect(response.body).to.have.property('email');
  chai.expect(response.body).to.have.property('token');

  done();
});

// Corremos los tests
test.run(function(failures) {
  if (failures) {
    console.log('Hubo fallos en los tests');
  } else {
    console.log('Todos los tests pasaron');
  }
});
