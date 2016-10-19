var portfolio = angular.module('portfolio.filters', [])

portfolio.filter('addDecimal', function () {
  return function (input) {
    var decimals =input.toString().slice(-2);
    var beforeDec = input.toString().slice(0,-2);
    var combined = Number(beforeDec + '.' + decimals);
    return combined.toFixed(2);
  };
})
