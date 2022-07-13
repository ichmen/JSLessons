function shmoment(date) {
  let newDate = new Date(date);
  const getFuncName = {
    years: ['setFullYear', 'getFullYear'],
    months: ['setMonth', 'getMonth'],
    days: ['setDate', 'getDate'],
    hours: ['setHours', 'getHours'],
    minutes: ['setMinutes', 'getMinutes'],
    seconds: ['setSeconds', 'getSeconds'],
    milliseconds: ['setMilliseconds', 'getMilliseconds'],
  };
  const dateChanger = {
    add(elem, value) {
      const [setter, getter] = getFuncName[elem];
      newDate[setter](newDate[getter]() + value);
      return dateChanger;
    },
    subtract(elem, value) {
      const [setter, getter] = getFuncName[elem];
      newDate[setter](newDate[getter]() - value);
      return dateChanger;
    },
    result() {
      return newDate;
    },
  };
  return dateChanger;
}

let a = shmoment(new Date());
