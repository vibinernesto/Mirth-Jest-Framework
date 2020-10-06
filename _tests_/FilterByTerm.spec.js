// Function that needs to be tested
function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }

describe("Filter Function",()=>{
    // It takes two arguments - 1, a function that describes the test suite,
    // Call back function for calling an actual function
    test("it should filter by a search term (link)",()=>{
        // Here goes the actual test of what needs to be done
        const input=[
            {"id":1,"url":"www.vibinchander.com"},
            {"id":2,"url":"www.vwithvmakeswe.com"},
            {"id":3,"url":"www.linkdata.com"}
        ];

        const output=[
            {"id":3,"url":"www.linkdata.com"}
        ];

        expect(filterByTerm(input,"link")).toEqual(output);
    });
});