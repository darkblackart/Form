var expect = require('chai').expect;
var app = require('../script');

describe('check sex', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.sex_f('')).to.eql(0);
        });
    });
    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.sex_f('Kobieta')).to.eql('Kobieta');
        });
    });
});

describe('check name', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.name_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.name_f('Kamil')).to.eql('Kamil');
        });
    });

    describe('when string have numbers', function ()
    {
        it('should return 2', function ()
        {
            expect(app.name_f('31')).to.eql(2);
        });
    });
});

describe('check last_name', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.last_name_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.last_name_f('Bachara')).to.eql('Bachara');
        });
    });

    describe('when string have numbers', function ()
    {
        it('should return 2', function ()
        {
            expect(app.name_f('31')).to.eql(2);
        });
    });
});

describe('check adress', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.adress_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.adress_f('Wojnicz 13')).to.eql('Wojnicz 13');
        });
    });

});

describe('check number_album', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.number_album_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.number_album_f('2500')).to.eql('2500');
        });
    });

    describe('when string have characters', function ()
    {
        it('should return 2', function ()
        {
            expect(app.number_album_f('dsada')).to.eql(2);
        });
    });

});

describe('check field', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.field_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.field_f('Informatyka')).to.eql('Informatyka');
        });
    });

    describe('when string have numbers', function ()
    {
        it('should return 2', function ()
        {
            expect(app.field_f('31')).to.eql(2);
        });
    });

});

describe('check email', function ()
{
    describe('when string is empty', function ()
    {
        it('should return 0', function ()
        {
            expect(app.email_f('')).to.eql(0);
        });
    });

    describe('when string is not empty', function ()
    {
        it('should return string', function ()
        {
            expect(app.email_f('kambach@gmail.com')).to.eql('kambach@gmail.com');
        });
    });

    describe('when string is not email adress', function ()
    {
        it('should return 2', function ()
        {
            expect(app.email_f('kambach')).to.eql(2);
        });
    });

});