var expect = require('chai').expect
var tools = require('/Users/kristoffernoga/WebstormProjects/TestDemoDelete/calculator/lib/calculator.js')
var directoryReader = require('/Users/kristoffernoga/WebstormProjects/TestDemoDelete/calculator/lib/DirectoryReader.js')
var request = require("request");
var nock = require('nock')

describe("Calculator", function () {
    describe("addNumber()", function () {
        it("should be able to calculate 2 numbers", function () {
            var result = tools.addNumber(1, 2)

            expect(result).to.equal(3)
        })
    })

    describe("subtract()", function () {
        it("should subtract n1 from n2", function () {
            var result = tools.subtract(4, 2)
            expect(result).to.equal(2)
        })
    })

    describe("multiply()", function () {
        it("should multiply n1 with n2", function () {
            var result = tools.multiply(10, 5)
            expect(result).to.equal(50)
        })
    })

    describe("divide()", function () {
        it("should multiply n1 with n2", function () {
            var result = tools.divide(10, 2)
            expect(result).to.equal(5)
        })
    })
})

describe("DirectoryReader", function () {
    beforeEach(function () {

    })
    describe("readDirectory()", function () {
        it("should return all files in a given directory", function (done) {
            var finalResult = []
            directoryReader.readDirectory("/Users/kristoffernoga/WebstormProjects/TestDemoDelete/calculator/test", "js", function (err, data) {
                expect(data[0]).to.equal("chaiTest.js")
            })
            done()
        })
    })
})

var n = nock('http://localhost:3000');
var testJoke = "A day without sunshine is like, night."

describe("REST API Tests", function () {
    
    after(function (done) {
        n.get('/api/joke1')
            .reply(200, testJoke)
        done()
    })

    describe("GET: /api/joke1", function () {

        it("should get joke number 1 from mock response", function (done) {
            request({
                method: "GET",
                url: "http://localhost:3000/api/joke1",
                json: true
            }, function (error, res, body) {
                expect(testJoke).to.equal(body.joke)
                 done()
            })

        })

    })

    describe("POST: /api/joke ", function () {
        var options = {
            url: "http://localhost:" + 3000 + "/api/joke",
            method: "POST",
            json: true,
            body: {newJoke: "Its better to be late than to arrive ugly"}
        }

        it("should get a random joke", function (done) {
            request(options, function (error, res, body) {
                var addedJoke = body.joke;
                expect(addedJoke).to.be.equal("Its better to be late than to arrive ugly"); //You should also check whether the joke actually was added to the Data-sto
                done();
            });
        })
    })




})


