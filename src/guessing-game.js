class GuessingGame {
    constructor(result, max) {
        this.result = result;
        this.min = 0;
        this.max = max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess(min, max) {
      let result = Math.round(this.min + (this.max - this.min) /2 );
      return result;
    }

    lower() {
      return this.max = this.guess();
    }

    greater() {
      return this.min = this.guess();
    }
}

module.exports = GuessingGame;

