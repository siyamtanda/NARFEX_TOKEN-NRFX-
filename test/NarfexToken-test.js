const NarfexToken = artifacts.require('NarfextToken');

contract('NarfexToken', accounts => {
     const _name = 'NarfexToken';
     const _symbol = 'NRFX';
     const _decimals = 18;

     beforeEach(async function(){
         this.token = await NarfexToken.new(_name, _symbol, _decimals);
     });

     describe('token attributes', function(){
         it('has the correct name', function(){

         });

         it ('has the correct symbol', function (){

         });

         it('has the correct decimals', function(){

         });
     })
})