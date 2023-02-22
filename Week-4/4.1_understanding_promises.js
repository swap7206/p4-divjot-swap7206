const promiseStates = {
    pending: "pending",
    fullfilled: "fullfilled",
    rejected: "rejected",
  };
  
  function CustomPromise(cb) {
    this.value = undefined;
    this.state = promiseStates.pending;
    let thenCbs = [];
    let catchCbs = [];

    let runCallBacks = function () {
      if (this.state === promiseStates.fullfilled) {
        thenCbs.forEach((callback) => {
          callback(this.value);
        });
        thenCbs = [];
      }
      if (this.state === promiseStates.rejected) {
        catchCbs.forEach((callback) => {
          callback(this.value);
        });
        catchCbs = [];
      }
    };

    let onSuccess = function (value) {
      if (this.state !== promiseStates.pending) return;
      this.value = value;
      this.state = promiseStates.fullfilled;
      runCallBacks.bind(this)();
    };

    let onFail = function (value) {
      if (this.state !== promiseStates.pending) return;
      if (catchCbs.length === 0) {
        throw new Error("Unhanled promise rejection error");
      }
      this.value = value;
      this.state = promiseStates.rejected;
      runCallBacks.bind(this)();
    };

    let bindedOnSuccess = onSuccess.bind(this);
    let bindedOnFail = onFail.bind(this);
  
    this.then = function (thenCb, catchCb) {
      return new CustomPromise(function (resolve, reject) {
        thenCbs.push((result) => {
          if (!thenCb) {
            resolve(result);
            return;
          }
          try {
            resolve(thenCb(result));
          } catch (error) {
            reject(error);
          }
        });
  
        catchCbs.push((result) => {
          if (!catchCb) {
            reject(result);
            return;
          }
          try {
            resolve(catchCb(result));
          } catch (error) {
            reject(error);
          }
        });
      });
    };
  
    this.catch = function (cb) {
      return this.then(undefined, cb);
    };
    cb(bindedOnSuccess, bindedOnFail);
  }
  
  const getNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`number is - ${randomNumber}`);
    const p = new CustomPromise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber % 2 === 0) {
          resolve("number is divisible by 2");
        } else {
          reject("number is not divisible by 2");
        }
      }, 1000);
    });
  
    p.then((value) => {
      console.log("first callback");
      console.log(value);
      return 2;
    })
      .then((value) => {
        console.log("second callback");
        console.log(value);
        return 3;
      })
      .then((value) => {
        console.log("third callback");
        console.log(value);
        return 4;
      })
      .catch((err) => {
        console.log(err);
        return 23;
      })
      .then((value) => {
        console.log("then after catch ");
        console.log(value);
      });
  };
  
  getNumber();