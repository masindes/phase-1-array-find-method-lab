function superbowlWin(record) {
    for (let i = 0; i < record.length; i++) {
      if (record[i].result === "W") {
        return record[i].year;
      }
    }
    return undefined;
  }

  describe('superbowlWin(record)', function () {
    const record = [
      { year: "2018", result: "N/A"},
      { year: "2017", result: "N/A"},
      { year: "2016", result: "N/A"},
      { year: "2015", result: "W"},
      // ...
    ]
  
    it('returns a year the Denver Broncos won the superbowl', function () {
      expect(superbowlWin(record)).to.equal('2015');
    });
  
    it('returns undefined if the record has no win objects', function() {
      const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
      expect(superbowlWin(sadReality)).to.equal(undefined)
    });
  });